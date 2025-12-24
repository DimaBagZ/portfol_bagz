/**
 * Класс для ограничения частоты запросов (Rate Limiting)
 * Соблюдает принцип Single Responsibility - только rate limiting
 */

/**
 * Конфигурация rate limiter
 */
export interface RateLimiterConfig {
  maxRequests: number;
  windowMs: number;
}

/**
 * Класс для ограничения частоты запросов
 * Использует in-memory хранилище для отслеживания запросов
 */
export class RateLimiter {
  private readonly requests: Map<string, number[]>;
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private cleanupInterval: NodeJS.Timeout | null = null;

  /**
   * Создает экземпляр RateLimiter
   * @param maxRequests - максимальное количество запросов
   * @param windowMs - временное окно в миллисекундах
   */
  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.requests = new Map();
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;

    // Периодическая очистка старых записей (каждые 5 минут)
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 300000);
  }

  /**
   * Проверяет, разрешен ли запрос для указанного идентификатора
   * @param identifier - идентификатор (например, IP адрес)
   * @returns true если запрос разрешен, false если превышен лимит
   */
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];

    // Удаляем запросы, которые вышли за временное окно
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    // Проверяем лимит
    if (validRequests.length >= this.maxRequests) {
      return false;
    }

    // Добавляем текущий запрос
    validRequests.push(now);
    this.requests.set(identifier, validRequests);

    return true;
  }

  /**
   * Получает количество оставшихся запросов для идентификатора
   * @param identifier - идентификатор
   * @returns Количество оставшихся запросов
   */
  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    return Math.max(0, this.maxRequests - validRequests.length);
  }

  /**
   * Получает время до сброса лимита в миллисекундах
   * @param identifier - идентификатор
   * @returns Время до сброса лимита или 0 если лимит не превышен
   */
  getResetTime(identifier: string): number {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    if (validRequests.length === 0) {
      return 0;
    }

    const oldestRequest = Math.min(...validRequests);
    return oldestRequest + this.windowMs - now;
  }

  /**
   * Очищает старые записи из хранилища
   */
  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [identifier, timestamps] of this.requests.entries()) {
      const validRequests = timestamps.filter(
        (timestamp) => now - timestamp < this.windowMs
      );

      if (validRequests.length === 0) {
        keysToDelete.push(identifier);
      } else {
        this.requests.set(identifier, validRequests);
      }
    }

    keysToDelete.forEach((key) => this.requests.delete(key));
  }

  /**
   * Очищает все записи для указанного идентификатора
   * @param identifier - идентификатор
   */
  reset(identifier: string): void {
    this.requests.delete(identifier);
  }

  /**
   * Очищает все записи
   */
  clear(): void {
    this.requests.clear();
  }

  /**
   * Уничтожает экземпляр и очищает интервалы
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.clear();
  }
}

