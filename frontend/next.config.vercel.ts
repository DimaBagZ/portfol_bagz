/**
 * Конфигурация Next.js для Vercel
 * Используйте эту конфигурацию, если деплоите на Vercel
 * 
 * Для использования:
 * 1. Переименуйте next.config.ts в next.config.pages.ts (для GitHub Pages)
 * 2. Переименуйте этот файл в next.config.ts
 * 3. Или используйте условную логику в next.config.ts
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // НЕ используем output: "export" для Vercel, чтобы работали API роуты
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath и assetPrefix не нужны для Vercel
};

export default nextConfig;

