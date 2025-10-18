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

// Социальные сети
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/username",
    icon: "Github",
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/username",
    icon: "Linkedin",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    href: "mailto:email@example.com",
    icon: "Mail",
    color: "hover:text-red-600",
  },
] as const;

// Контактная информация
export const CONTACT_INFO = [
  {
    title: "Email",
    value: "bagiskij@example.com",
    href: "mailto:bagiskij@example.com",
    icon: "Mail",
  },
  {
    title: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
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
