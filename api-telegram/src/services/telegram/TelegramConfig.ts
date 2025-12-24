/**
 * Класс для работы с конфигурацией Telegram бота
 * Отвечает за получение и валидацию переменных окружения
 */

import type { TelegramConfigData } from "./types";

/**
 * Класс для управления конфигурацией Telegram бота
 * Соблюдает принцип Single Responsibility - только конфигурация
 */
export class TelegramConfig {
  private readonly botToken: string;
  private readonly chatId: string;

  /**
   * Создает экземпляр конфигурации
   * @throws {Error} если обязательные переменные окружения не установлены
   */
  constructor() {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error(
        "Telegram конфигурация не настроена. Установите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в переменных окружения."
      );
    }

    this.botToken = botToken;
    this.chatId = chatId;
  }

  /**
   * Получает токен бота
   * @returns Токен бота
   */
  getBotToken(): string {
    return this.botToken;
  }

  /**
   * Получает ID чата
   * @returns ID чата
   */
  getChatId(): string {
    return this.chatId;
  }

  /**
   * Проверяет валидность конфигурации
   * @returns true если конфигурация валидна
   */
  validate(): boolean {
    return Boolean(this.botToken && this.chatId);
  }

  /**
   * Создает экземпляр конфигурации или возвращает null при ошибке
   * @returns Экземпляр конфигурации или null
   */
  static create(): TelegramConfig | null {
    try {
      return new TelegramConfig();
    } catch {
      return null;
    }
  }
}
