/**
 * Основной сервис для работы с Telegram Bot API
 * Отвечает за отправку сообщений и проверку соединения
 */

import type {
  SendMessageRequest,
  SendMessageResponse,
  SendMessageResult,
  GetMeResponse,
  CheckConnectionResult,
  TelegramMessageData,
  TelegramApiError,
} from "./types";
import { TelegramErrorCode } from "./types";
import { TelegramConfig } from "./TelegramConfig";
import { MessageFormatter } from "./MessageFormatter";
import { RetryHandler } from "./RetryHandler";

/**
 * Основной сервис для работы с Telegram Bot API
 * Соблюдает принципы SOLID:
 * - Single Responsibility: только работа с API
 * - Dependency Inversion: зависит от абстракций (TelegramConfig, MessageFormatter)
 */
export class TelegramService {
  private readonly config: TelegramConfig;
  private readonly formatter: MessageFormatter;
  private readonly retryHandler: RetryHandler;
  private readonly apiBaseUrl = "https://api.telegram.org";

  /**
   * Создает экземпляр сервиса
   * @param config - конфигурация бота
   * @param formatter - форматтер сообщений
   * @param retryHandler - обработчик повторных попыток (опционально)
   */
  constructor(
    config: TelegramConfig,
    formatter: MessageFormatter,
    retryHandler?: RetryHandler
  ) {
    this.config = config;
    this.formatter = formatter;
    this.retryHandler = retryHandler || new RetryHandler();
  }

  /**
   * Отправляет сообщение в Telegram
   * @param data - данные сообщения из формы связи
   * @returns Результат отправки сообщения
   */
  async sendMessage(data: TelegramMessageData): Promise<SendMessageResult> {
    try {
      const formattedText = this.formatter.formatContactMessage(data);
      const chatId = this.config.getChatId();

      const request: SendMessageRequest = {
        chat_id: chatId,
        text: formattedText,
        parse_mode: "Markdown",
      };

      const response = await this.makeRequest<SendMessageResponse>(
        "sendMessage",
        request as unknown as Record<string, unknown>
      );

      if (response.ok && response.result) {
        return {
          success: true,
          data: response.result,
        };
      }

      return this.createSendErrorResult({
        code: response.error_code ?? TelegramErrorCode.INTERNAL_SERVER_ERROR,
        message: response.description ?? "Неизвестная ошибка при отправке сообщения",
      });
    } catch (error) {
      return this.handleSendError(error);
    }
  }

  /**
   * Получает информацию о боте
   * @returns Информация о боте
   */
  async getMe(): Promise<CheckConnectionResult> {
    try {
      const response = await this.makeRequest<GetMeResponse>("getMe", {});

      if (response.ok && response.result) {
        return {
          success: true,
          data: response.result,
        };
      }

      return this.createCheckErrorResult({
        code: response.error_code ?? TelegramErrorCode.INTERNAL_SERVER_ERROR,
        message: response.description ?? "Не удалось получить информацию о боте",
      });
    } catch (error) {
      return this.handleCheckError(error);
    }
  }

  /**
   * Проверяет соединение с Telegram API
   * @returns true если соединение успешно
   */
  async checkConnection(): Promise<boolean> {
    const result = await this.getMe();
    return result.success;
  }

  /**
   * Выполняет запрос к Telegram Bot API
   * @param method - метод API
   * @param params - параметры запроса
   * @returns Ответ от API
   */
  private async makeRequest<T>(
    method: string,
    params: Record<string, unknown>
  ): Promise<{
    ok: boolean;
    result?: T;
    error_code?: number;
    description?: string;
  }> {
    const botToken = this.config.getBotToken();
    const url = `${this.apiBaseUrl}/bot${botToken}/${method}`;

    // Используем retry handler для автоматических повторов при сетевых ошибках
    const retryResult = await this.retryHandler.execute(async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 20000); // 20 секунд таймаут

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const error = new Error(
            errorData.description || response.statusText || `HTTP ${response.status}`
          );
          (error as Error & { status?: number }).status = response.status;
          throw error;
        }

        const data = await response.json();
        return data;
      } catch (error) {
        clearTimeout(timeoutId);

        if (error instanceof Error && error.name === "AbortError") {
          throw new Error("Таймаут запроса к Telegram API");
        }

        throw error;
      }
    });

    return retryResult.result;
  }

  /**
   * Обрабатывает ошибку и возвращает результат с ошибкой для отправки сообщения
   * @param error - ошибка для обработки
   * @returns Результат с ошибкой
   */
  private handleSendError(error: unknown): SendMessageResult {
    return this.createSendErrorResult(error);
  }

  /**
   * Обрабатывает ошибку и возвращает результат с ошибкой для проверки соединения
   * @param error - ошибка для обработки
   * @returns Результат с ошибкой
   */
  private handleCheckError(error: unknown): CheckConnectionResult {
    return this.createCheckErrorResult(error);
  }

  /**
   * Создает результат с ошибкой для отправки сообщения
   * @param errorInfo - информация об ошибке (либо error, либо {code, message})
   * @returns Результат с ошибкой
   */
  private createSendErrorResult(
    errorInfo: unknown | { code: number; message: string }
  ): SendMessageResult {
    const { code, message } =
      typeof errorInfo === "object" &&
      errorInfo !== null &&
      "code" in errorInfo &&
      "message" in errorInfo
        ? (errorInfo as { code: number; message: string })
        : this.extractErrorInfo(errorInfo);

    const errorObj: TelegramApiError = {
      code,
      message,
    };

    return {
      success: false,
      error: errorObj,
    };
  }

  /**
   * Создает результат с ошибкой для проверки соединения
   * @param errorInfo - информация об ошибке (либо error, либо {code, message})
   * @returns Результат с ошибкой
   */
  private createCheckErrorResult(
    errorInfo: unknown | { code: number; message: string }
  ): CheckConnectionResult {
    const { code, message } =
      typeof errorInfo === "object" &&
      errorInfo !== null &&
      "code" in errorInfo &&
      "message" in errorInfo
        ? (errorInfo as { code: number; message: string })
        : this.extractErrorInfo(errorInfo);

    const errorObj: TelegramApiError = {
      code,
      message,
    };

    return {
      success: false,
      error: errorObj,
    };
  }

  /**
   * Извлекает информацию об ошибке
   * @param error - ошибка
   * @returns Код и сообщение ошибки
   */
  private extractErrorInfo(error: unknown): { code: number; message: string } {
    if (error instanceof Error) {
      // Определяем тип ошибки по сообщению
      if (error.message.includes("Таймаут")) {
        return {
          code: TelegramErrorCode.SERVICE_UNAVAILABLE,
          message: "Таймаут запроса к Telegram API. Проверьте интернет-соединение.",
        };
      }

      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        return {
          code: TelegramErrorCode.SERVICE_UNAVAILABLE,
          message:
            "Не удалось подключиться к Telegram API. Проверьте интернет-соединение.",
        };
      }

      return {
        code: TelegramErrorCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }

    return {
      code: TelegramErrorCode.INTERNAL_SERVER_ERROR,
      message: "Неизвестная ошибка",
    };
  }
}
