// Основные константы приложения
export const APP_CONFIG = {
  name: "Bagiskij",
  title: "Bagiskij - Fullstack Developer",
  description:
    "Портфолио fullstack разработчика. Создаю современные веб-приложения с использованием React, Next.js, Node.js и Nest.js.",
  keywords: [
    "разработчик",
    "fullstack",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "TypeScript",
  ],
  author: "Bagiskij",
} as const;

// Навигация
export const NAVIGATION = [
  { name: "Главная", href: "/" },
  { name: "О себе", href: "/about" },
  { name: "Проекты", href: "/projects" },
  { name: "Контакты", href: "/contact" },
] as const;

// Категории проектов
export const PROJECT_CATEGORIES = [
  { id: "all", label: "Все проекты" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "mobile", label: "Mobile" },
] as const;

// Статусы проектов
export const PROJECT_STATUSES = [
  { id: "all", label: "Все статусы" },
  { id: "completed", label: "Завершенные" },
  { id: "in-progress", label: "В разработке" },
  { id: "planned", label: "Планируемые" },
] as const;

// Социальные сети
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/DimaBagZ",
    icon: "Github",
    color: "hover:text-gray-900",
  },
  {
    name: "Telegram",
    href: "https://t.me/DimaBagz",
    icon: "Send",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    href: "mailto:DimaBagZ@yandex.ru",
    icon: "Mail",
    color: "hover:text-red-600",
  },
] as const;

// Контактная информация
export const CONTACT_INFO = [
  {
    title: "Email",
    value: "DimaBagZ@yandex.ru",
    href: "mailto:DimaBagZ@yandex.ru",
    icon: "Mail",
  },
  {
    title: "Телефон",
    value: "+7 (999) 700-84-70",
    href: "tel:+79997008470",
    icon: "Phone",
  },
  {
    title: "Местоположение",
    value: "Москва, Россия",
    href: "#",
    icon: "MapPin",
  },
] as const;

// Время ответа
export const RESPONSE_TIME = {
  text: "Обычно отвечаю в течение 24 часов",
  schedule: "Рабочие дни: Пн-Пт, 9:00-18:00 (МСК)",
} as const;
