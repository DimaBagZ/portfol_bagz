/**
 * Класс для обработки повторных попыток запросов
 * Соблюдает принцип Single Responsibility - только retry логика
 */

/**
 * Конфигурация retry handler
 */
export interface RetryHandlerConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
}

/**
 * Результат выполнения с информацией о попытках
 */
export interface RetryResult<T> {
  result: T;
  attempts: number;
  totalDelay: number;
}

/**
 * Класс для обработки повторных попыток запросов
 * Использует экспоненциальную задержку между попытками
 */
export class RetryHandler {
  private readonly maxRetries: number;
  private readonly baseDelay: number;
  private readonly maxDelay: number;
  private readonly backoffMultiplier: number;

  /**
   * Создает экземпляр RetryHandler
   * @param config - конфигурация retry handler
   */
  constructor(config?: Partial<RetryHandlerConfig>) {
    this.maxRetries = config?.maxRetries ?? 3;
    this.baseDelay = config?.baseDelay ?? 1000;
    this.maxDelay = config?.maxDelay ?? 10000;
    this.backoffMultiplier = config?.backoffMultiplier ?? 2;
  }

  /**
   * Выполняет функцию с повторными попытками при ошибках
   * @param fn - функция для выполнения
   * @returns Результат выполнения функции
   * @throws Последняя ошибка, если все попытки исчерпаны
   */
  async execute<T>(fn: () => Promise<T>): Promise<RetryResult<T>> {
    let lastError: unknown;
    let totalDelay = 0;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const result = await fn();
        return {
          result,
          attempts: attempt + 1,
          totalDelay,
        };
      } catch (error) {
        lastError = error;

        // Не повторяем при ошибках валидации или авторизации
        if (!this.shouldRetry(error)) {
          throw error;
        }

        // Если это не последняя попытка, ждем перед повтором
        if (attempt < this.maxRetries) {
          const delay = this.calculateDelay(attempt);
          totalDelay += delay;
          await this.delay(delay);
        }
      }
    }

    // Все попытки исчерпаны
    throw lastError;
  }

  /**
   * Определяет, следует ли повторять запрос при данной ошибке
   * @param error - ошибка для проверки
   * @returns true если следует повторить, false если нет
   */
  private shouldRetry(error: unknown): boolean {
    if (error instanceof Error) {
      const message = error.message.toLowerCase();

      // Повторяем при сетевых ошибках и таймаутах
      if (
        message.includes("timeout") ||
        message.includes("network") ||
        message.includes("fetch failed") ||
        message.includes("econnrefused") ||
        message.includes("enotfound")
      ) {
        return true;
      }

      // Не повторяем при ошибках валидации, авторизации и клиентских ошибках
      if (
        message.includes("validation") ||
        message.includes("unauthorized") ||
        message.includes("forbidden") ||
        message.includes("bad request") ||
        message.includes("not found")
      ) {
        return false;
      }
    }

    // По умолчанию повторяем при неизвестных ошибках (сетевые проблемы)
    return true;
  }

  /**
   * Вычисляет задержку для следующей попытки
   * @param attempt - номер попытки (начиная с 0)
   * @returns Задержка в миллисекундах
   */
  private calculateDelay(attempt: number): number {
    const delay = this.baseDelay * Math.pow(this.backoffMultiplier, attempt);
    return Math.min(delay, this.maxDelay);
  }

  /**
   * Создает задержку на указанное время
   * @param ms - время задержки в миллисекундах
   * @returns Promise, который разрешается после задержки
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

