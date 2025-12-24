/**
 * Класс для форматирования сообщений для Telegram
 * Отвечает за форматирование сообщений из формы связи
 */

import type { TelegramMessageData } from "./types";

/**
 * Класс для форматирования сообщений
 * Соблюдает принцип Single Responsibility - только форматирование
 */
export class MessageFormatter {
  /**
   * Форматирует сообщение из формы связи для отправки в Telegram
   * @param data - данные сообщения из формы
   * @returns Отформатированное сообщение в Markdown
   */
  formatContactMessage(data: TelegramMessageData): string {
    const { name, email, subject, message } = data;
    const timestamp = this.formatDate(new Date());

    const formattedMessage = `
📧 *Новое сообщение с сайта портфолио*

👤 *Имя:* ${this.escapeMarkdown(name)}
📧 *Email:* ${this.escapeMarkdown(email)}
📝 *Тема:* ${this.escapeMarkdown(subject)}

💬 *Сообщение:*
${this.escapeMarkdown(message)}

⏰ *Время:* ${timestamp}
    `.trim();

    return formattedMessage;
  }

  /**
   * Экранирует специальные символы Markdown
   * @param text - текст для экранирования
   * @returns Экранированный текст
   */
  escapeMarkdown(text: string): string {
    // Экранируем только действительно специальные символы Markdown
    // Не экранируем точку (.) и восклицательный знак (!), так как они
    // используются в email адресах, URL и обычном тексте
    const specialChars = [
      "*", // жирный/курсив
      "_", // подчеркивание/курсив
      "[", // ссылки
      "]", // ссылки
      "(", // ссылки
      ")", // ссылки
      "~", // зачеркивание
      "`", // код
      ">", // цитаты
      "#", // заголовки
      "+", // списки
      "-", // списки
      "=", // заголовки
      "|", // таблицы
      "{", // расширения
      "}", // расширения
    ];

    let escaped = text;
    for (const char of specialChars) {
      escaped = escaped.replace(new RegExp(`\\${char}`, "g"), `\\${char}`);
    }

    return escaped;
  }

  /**
   * Форматирует дату для отображения
   * @param date - дата для форматирования
   * @returns Отформатированная дата в формате "DD.MM.YYYY, HH:MM"
   */
  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }

  /**
   * Разбивает длинное сообщение на части (если превышает лимит Telegram)
   * @param message - сообщение для разбиения
   * @param maxLength - максимальная длина части (по умолчанию 4096)
   * @returns Массив частей сообщения
   */
  splitLongMessage(message: string, maxLength: number = 4096): string[] {
    if (message.length <= maxLength) {
      return [message];
    }

    const parts: string[] = [];
    let currentPart = "";

    // Разбиваем по строкам, чтобы не разрывать слова
    const lines = message.split("\n");

    for (const line of lines) {
      if (currentPart.length + line.length + 1 <= maxLength) {
        currentPart += (currentPart ? "\n" : "") + line;
      } else {
        if (currentPart) {
          parts.push(currentPart);
        }
        currentPart = line;
      }
    }

    if (currentPart) {
      parts.push(currentPart);
    }

    return parts;
  }
}
