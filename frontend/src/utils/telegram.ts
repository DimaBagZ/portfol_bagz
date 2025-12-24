/**
 * Утилиты для отправки сообщений через Telegram Bot API
 * Использует единый API роут /api/telegram
 * 
 * Для гибридного деплоя (GitHub Pages + Vercel API):
 * Установите NEXT_PUBLIC_API_URL в переменных окружения
 */

import type {
  TelegramMessageData,
  TelegramApiRouteResponse,
} from "@/services/telegram/types";

/**
 * Базовый URL для API
 * Если NEXT_PUBLIC_API_URL установлен, использует его (для внешнего API)
 * Иначе использует относительный путь (для того же домена)
 */
const getApiUrl = (): string => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  return "/api";
};

/**
 * Результат отправки сообщения
 */
export interface TelegramSendResult {
  success: boolean;
  messageId?: number;
  error?: string;
  details?: string;
}

/**
 * Отправляет сообщение в Telegram через Bot API
 * @param messageData - данные сообщения из формы связи
 * @returns Promise с результатом отправки
 */
export const sendToTelegram = async (
  messageData: TelegramMessageData
): Promise<TelegramSendResult> => {
  try {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/telegram`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "send",
        data: messageData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || "Ошибка при отправке сообщения",
        details: errorData.details,
      };
    }

    const result = (await response.json()) as TelegramApiRouteResponse;

    if (result.success && result.data) {
      const data = result.data as { messageId?: number; sentAt?: string };
      return {
        success: true,
        messageId: data.messageId,
      };
    }

    return {
      success: false,
      error: result.error || "Неизвестная ошибка",
      details: result.details,
    };
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);

    const errorMessage = error instanceof Error ? error.message : "Неизвестная ошибка";

    return {
      success: false,
      error: "Ошибка сети при отправке сообщения",
      details: errorMessage,
    };
  }
};

/**
 * Проверяет доступность Telegram API
 * @returns Promise<boolean> - true если API доступен
 */
export const checkTelegramConnection = async (): Promise<boolean> => {
  try {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/telegram`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "check",
      }),
    });

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as TelegramApiRouteResponse;
    return result.success === true;
  } catch (error) {
    console.error("Ошибка проверки Telegram:", error);
    return false;
  }
};
