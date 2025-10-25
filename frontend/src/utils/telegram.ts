/**
 * Утилиты для отправки сообщений через Telegram Bot API
 */

interface TelegramMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Отправляет сообщение в Telegram через Bot API
 * @param messageData - данные сообщения
 * @returns Promise<boolean> - успешность отправки
 */
export const sendToTelegram = async (messageData: TelegramMessage): Promise<boolean> => {
  try {
    // Сначала пробуем обычный API
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "send",
        data: messageData,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        return true;
      }
    }

    // Если не получилось, пробуем прокси
    console.log("Пробуем прокси-сервер...");
    const proxyResponse = await fetch("/api/telegram-proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "send",
        data: messageData,
      }),
    });

    if (proxyResponse.ok) {
      const result = await proxyResponse.json();
      return result.success;
    }

    return false;
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    return false;
  }
};

/**
 * Проверяет доступность Telegram API
 * @returns Promise<boolean>
 */
export const checkTelegramConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "check",
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result.success;
    }

    return false;
  } catch (error) {
    console.error("Ошибка проверки Telegram:", error);
    return false;
  }
};
