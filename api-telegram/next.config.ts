import type { NextConfig } from "next";

/**
 * Конфигурация Next.js для отдельного API проекта
 * Используется только для API роутов, без статического экспорта
 */
const nextConfig: NextConfig = {
  // НЕ используем output: "export" - нужны API роуты
  trailingSlash: true,
};

export default nextConfig;
