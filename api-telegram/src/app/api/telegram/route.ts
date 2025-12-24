/**
 * API роут для работы с Telegram Bot API
 * Отдельный проект для гибридного деплоя (GitHub Pages + Vercel API)
 * Использует сервисный слой для отправки сообщений и проверки соединения
 */

import { NextRequest, NextResponse } from "next/server";
import {
  TelegramConfig,
  MessageFormatter,
  TelegramService,
  RateLimiter,
} from "@/services/telegram";
import type {
  TelegramApiAction,
  TelegramMessageData,
  TelegramApiRouteResponse,
} from "@/services/telegram/types";

// Создаем глобальный экземпляр rate limiter
// В serverless окружении каждый инстанс имеет свой счетчик
const rateLimiter = new RateLimiter(10, 60000); // 10 запросов в минуту

/**
 * Валидирует данные сообщения из формы
 * @param data - данные для валидации
 * @returns true если данные валидны
 */
function validateMessageData(data: unknown): data is TelegramMessageData {
  if (!data || typeof data !== "object") {
    return false;
  }

  const messageData = data as Record<string, unknown>;

  return (
    typeof messageData.name === "string" &&
    messageData.name.trim().length >= 2 &&
    typeof messageData.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(messageData.email) &&
    typeof messageData.subject === "string" &&
    messageData.subject.trim().length >= 3 &&
    typeof messageData.message === "string" &&
    messageData.message.trim().length >= 10 &&
    messageData.message.trim().length <= 1000
  );
}

/**
 * Валидирует действие API
 * @param action - действие для валидации
 * @returns true если действие валидно
 */
function isValidAction(action: unknown): action is TelegramApiAction {
  return action === "check" || action === "send";
}

/**
 * Создает ответ об ошибке
 * @param error - сообщение об ошибке
 * @param details - детали ошибки
 * @param status - HTTP статус код
 * @returns Ответ NextResponse
 */
function createErrorResponse(
  error: string,
  details?: string,
  status: number = 500
): NextResponse<TelegramApiRouteResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
      ...(details && { details }),
    },
    { status }
  );
}

/**
 * Создает успешный ответ
 * @param data - данные для ответа
 * @returns Ответ NextResponse
 */
function createSuccessResponse(data: unknown): NextResponse<TelegramApiRouteResponse> {
  return NextResponse.json({
    success: true,
    data,
  });
}

/**
 * Обрабатывает действие "check" - проверка соединения
 * @param service - сервис Telegram
 * @returns Ответ NextResponse
 */
async function handleCheck(
  service: TelegramService
): Promise<NextResponse<TelegramApiRouteResponse>> {
  // Оптимизация: делаем только один запрос getMe() вместо двух
  const botInfo = await service.getMe();

  if (botInfo.success) {
    return createSuccessResponse({
      connected: true,
      bot: botInfo.data,
    });
  }

  return createErrorResponse(
    "Не удалось подключиться к Telegram API",
    botInfo.error.message ||
      "Проверьте правильность токена и chat ID, а также интернет-соединение"
  );
}

/**
 * Обрабатывает действие "send" - отправка сообщения
 * @param service - сервис Telegram
 * @param data - данные сообщения
 * @returns Ответ NextResponse
 */
async function handleSend(
  service: TelegramService,
  data: TelegramMessageData
): Promise<NextResponse<TelegramApiRouteResponse>> {
  const result = await service.sendMessage(data);

  if (result.success) {
    return createSuccessResponse({
      messageId: result.data.message_id,
      sentAt: new Date(result.data.date * 1000).toISOString(),
    });
  }

  return createErrorResponse(result.error.message, `Код ошибки: ${result.error.code}`);
}

/**
 * Получает идентификатор клиента из запроса (IP адрес)
 * @param request - HTTP запрос
 * @returns Идентификатор клиента
 */
function getClientIdentifier(request: NextRequest): string {
  // Пытаемся получить IP из заголовков
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0] || realIp || "unknown";

  return ip.trim();
}

/**
 * POST обработчик для API роута Telegram
 * @param request - HTTP запрос
 * @returns HTTP ответ
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<TelegramApiRouteResponse>> {
  try {
    // 1. Проверка rate limit
    const clientId = getClientIdentifier(request);
    if (!rateLimiter.isAllowed(clientId)) {
      const resetTime = rateLimiter.getResetTime(clientId);

      return createErrorResponse(
        "Превышен лимит запросов",
        `Пожалуйста, подождите ${Math.ceil(
          resetTime / 1000
        )} секунд перед следующим запросом. Лимит: 10 запросов в минуту.`,
        429
      );
    }

    // 2. Парсинг тела запроса
    let body: { action?: unknown; data?: unknown };
    try {
      body = await request.json();
    } catch {
      return createErrorResponse("Неверный формат JSON в теле запроса", undefined, 400);
    }

    const { action, data } = body;

    // 3. Валидация действия
    if (!isValidAction(action)) {
      return createErrorResponse(
        "Неизвестное или отсутствующее действие",
        'Действие должно быть "check" или "send"',
        400
      );
    }

    // 4. Валидация и создание конфигурации
    const config = TelegramConfig.create();
    if (!config) {
      return createErrorResponse(
        "Конфигурация Telegram не настроена",
        "Установите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в переменных окружения",
        500
      );
    }

    // 5. Создание сервисов
    const formatter = new MessageFormatter();
    const service = new TelegramService(config, formatter);

    // 6. Обработка действий
    switch (action) {
      case "check": {
        return await handleCheck(service);
      }

      case "send": {
        // Валидация данных сообщения
        if (!validateMessageData(data)) {
          return createErrorResponse(
            "Неверные данные сообщения",
            "Проверьте, что все поля заполнены корректно: имя (мин. 2 символа), email (валидный формат), тема (мин. 3 символа), сообщение (10-1000 символов)",
            400
          );
        }

        return await handleSend(service, data);
      }

      default: {
        // Этот случай не должен произойти из-за валидации выше
        return createErrorResponse("Неизвестное действие", undefined, 400);
      }
    }
  } catch (error) {
    console.error("Ошибка API Telegram:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Внутренняя ошибка сервера";

    return createErrorResponse(errorMessage, undefined, 500);
  }
}
