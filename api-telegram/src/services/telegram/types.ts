/**
 * Типы и интерфейсы для работы с Telegram Bot API
 * Основано на официальной документации: https://core.telegram.org/bots/api
 */

// ============================================================================
// Базовые типы Telegram API
// ============================================================================

/**
 * Пользователь Telegram
 */
export interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
}

/**
 * Чат Telegram
 */
export interface TelegramChat {
  id: number;
  type: "private" | "group" | "supergroup" | "channel";
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

/**
 * Сообщение Telegram
 */
export interface TelegramMessage {
  message_id: number;
  from?: TelegramUser;
  date: number;
  chat: TelegramChat;
  text?: string;
  caption?: string;
}

// ============================================================================
// Запросы к Telegram API
// ============================================================================

/**
 * Запрос на отправку сообщения
 */
export interface SendMessageRequest {
  chat_id: string | number;
  text: string;
  parse_mode?: "Markdown" | "MarkdownV2" | "HTML";
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
}

/**
 * Запрос на получение информации о боте
 */
export interface GetMeRequest {
  // Пустой интерфейс, так как getMe не требует параметров
}

// ============================================================================
// Ответы от Telegram API
// ============================================================================

/**
 * Базовый тип ответа от Telegram API
 */
export interface TelegramApiResponse<T> {
  ok: boolean;
  result?: T;
  error_code?: number;
  description?: string;
  parameters?: TelegramResponseParameters;
}

/**
 * Параметры ответа при ошибке
 */
export interface TelegramResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

/**
 * Ответ на отправку сообщения
 */
export interface SendMessageResponse {
  message_id: number;
  from: TelegramUser;
  chat: TelegramChat;
  date: number;
  text: string;
}

/**
 * Ответ на запрос getMe
 */
export type GetMeResponse = TelegramUser;

// ============================================================================
// Ошибки
// ============================================================================

/**
 * Коды ошибок Telegram API
 */
export enum TelegramErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

/**
 * Ошибка API Telegram
 */
export interface TelegramApiError {
  code: TelegramErrorCode | number;
  message: string;
  description?: string;
  retry_after?: number;
}

/**
 * Ответ с ошибкой от Telegram API
 */
export interface TelegramErrorResponse {
  ok: false;
  error_code: number;
  description: string;
  parameters?: TelegramResponseParameters;
}

// ============================================================================
// Конфигурация
// ============================================================================

/**
 * Конфигурация Telegram бота (только для типизации данных)
 */
export interface TelegramConfigData {
  botToken: string;
  chatId: string;
}

// ============================================================================
// Результаты операций
// ============================================================================

/**
 * Успешный результат операции
 */
export interface Success<T> {
  success: true;
  data: T;
}

/**
 * Результат с ошибкой
 */
export interface Error {
  success: false;
  error: TelegramApiError;
}

/**
 * Результат операции (Success или Error)
 */
export type TelegramResult<T> = Success<T> | Error;

/**
 * Результат отправки сообщения
 */
export type SendMessageResult = TelegramResult<SendMessageResponse>;

/**
 * Результат проверки соединения
 */
export type CheckConnectionResult = TelegramResult<GetMeResponse>;

// ============================================================================
// Данные формы связи
// ============================================================================

/**
 * Данные сообщения из формы связи
 */
export interface TelegramMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Данные для валидации перед отправкой
 */
export interface TelegramMessageDataValidation {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ============================================================================
// Вспомогательные типы
// ============================================================================

/**
 * Действия API роута
 */
export type TelegramApiAction = "check" | "send";

/**
 * Запрос к API роуту
 */
export interface TelegramApiRouteRequest {
  action: TelegramApiAction;
  data?: TelegramMessageData;
}

/**
 * Ответ API роута
 */
export interface TelegramApiRouteResponse {
  success: boolean;
  data?: unknown;
  error?: string;
  details?: string;
}

// ============================================================================
// Rate Limiting
// ============================================================================

/**
 * Информация о rate limit
 */
export interface RateLimitInfo {
  remaining: number;
  resetTime: number;
  limit: number;
}

// ============================================================================
// Retry
// ============================================================================

/**
 * Тип ошибки для определения необходимости retry
 */
export type RetryableError = "network" | "timeout" | "server" | "unknown";

/**
 * Информация о попытке retry
 */
export interface RetryAttemptInfo {
  attempt: number;
  maxAttempts: number;
  delay: number;
}
