import { writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, "../public");
const outDir = join(__dirname, "../out");

// Убеждаемся, что директории существуют
mkdirSync(publicDir, { recursive: true });
mkdirSync(outDir, { recursive: true });

console.log("Проверка сгенерированных иконок Next.js...");

// Next.js должен генерировать иконки в out при сборке
// Проверяем различные возможные пути
const possibleIconPaths = [
  join(outDir, "icon.png"),
  join(outDir, "icon"),
  join(outDir, "_next", "static", "media", "icon"),
];

const possibleAppleIconPaths = [
  join(outDir, "apple-icon.png"),
  join(outDir, "apple-icon"),
  join(outDir, "_next", "static", "media", "apple-icon"),
];

let iconFound = false;
let appleIconFound = false;

// Ищем icon
for (const iconPath of possibleIconPaths) {
  if (existsSync(iconPath)) {
    console.log(`✓ Найден icon по пути: ${iconPath}`);
    // Копируем в public если его там нет
    const publicIconPath = join(publicDir, "icon.png");
    if (!existsSync(publicIconPath)) {
      copyFileSync(iconPath, publicIconPath);
      console.log("✓ icon.png скопирован в public/");
    }
    // Также копируем в out/icon.png если его там нет
    const outIconPath = join(outDir, "icon.png");
    if (!existsSync(outIconPath) && iconPath !== outIconPath) {
      copyFileSync(iconPath, outIconPath);
      console.log("✓ icon.png скопирован в out/");
    }
    iconFound = true;
    break;
  }
}

// Ищем apple-icon
for (const appleIconPath of possibleAppleIconPaths) {
  if (existsSync(appleIconPath)) {
    console.log(`✓ Найден apple-icon по пути: ${appleIconPath}`);
    // Копируем в public если его там нет
    const publicAppleIconPath = join(publicDir, "apple-icon.png");
    if (!existsSync(publicAppleIconPath)) {
      copyFileSync(appleIconPath, publicAppleIconPath);
      console.log("✓ apple-icon.png скопирован в public/");
    }
    // Также копируем в out/apple-icon.png если его там нет
    const outAppleIconPath = join(outDir, "apple-icon.png");
    if (!existsSync(outAppleIconPath) && appleIconPath !== outAppleIconPath) {
      copyFileSync(appleIconPath, outAppleIconPath);
      console.log("✓ apple-icon.png скопирован в out/");
    }
    appleIconFound = true;
    break;
  }
}

if (!iconFound) {
  console.warn("⚠ icon не найден в out/. Next.js должен генерировать его при сборке.");
  console.warn("   Проверьте, что icon.tsx находится в src/app/");
}

if (!appleIconFound) {
  console.warn(
    "⚠ apple-icon не найден в out/. Next.js должен генерировать его при сборке."
  );
  console.warn("   Проверьте, что apple-icon.tsx находится в src/app/");
}

if (iconFound && appleIconFound) {
  console.log("✓ Все иконки найдены и готовы к использованию!");
}
