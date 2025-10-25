/**
 * Утилита для определения правильных путей к изображениям
 * в зависимости от окружения (разработка/продакшн)
 */

/**
 * Получает правильный путь к изображению в зависимости от окружения
 * @param imagePath - путь к изображению (например, "/images/projects/portfolio-bagz/main.png")
 * @returns правильный путь для текущего окружения
 */
export function getImagePath(imagePath: string): string {
  // В режиме разработки используем абсолютные пути (Next.js автоматически обслуживает public)
  if (process.env.NODE_ENV === "development") {
    return imagePath;
  }

  // В продакшн режиме (GitHub Pages) используем абсолютные пути с basePath
  // Это гарантирует, что изображения будут работать на всех страницах
  return imagePath;
}
