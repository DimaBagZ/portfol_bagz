import type { NextConfig } from "next";

/**
 * Конфигурация Next.js
 * 
 * Автоматически определяет окружение:
 * - Vercel: API роуты работают, статический экспорт отключен
 * - GitHub Pages: статический экспорт включен, basePath настроен
 * 
 * Для принудительного статического экспорта установите:
 * STATIC_EXPORT=true
 */
const isVercel = process.env.VERCEL === "1";
const isStaticExport = process.env.STATIC_EXPORT === "true" || (!isVercel && process.env.NODE_ENV === "production");

const nextConfig: NextConfig = {
  // Статический экспорт только для GitHub Pages
  // На Vercel автоматически отключается для работы API роутов
  ...(isStaticExport && { output: "export" }),
  
  trailingSlash: true,
  
  images: {
    unoptimized: true,
  },
  
  // basePath только для GitHub Pages (для правильных путей)
  // На Vercel не нужен, так как проект деплоится в корень
  ...(isStaticExport &&
    process.env.NODE_ENV === "production" && {
      basePath: "/portfol_bagz",
      assetPrefix: "/portfol_bagz/",
    }),
};

export default nextConfig;
