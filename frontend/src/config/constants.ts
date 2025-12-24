import type { Language } from "@/locales/translations";

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
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

// Категории проектов
export const PROJECT_CATEGORIES = [
  { id: "all", labelKey: "projects.filters.categories.all" },
  { id: "frontend", labelKey: "projects.filters.categories.frontend" },
  { id: "backend", labelKey: "projects.filters.categories.backend" },
  { id: "fullstack", labelKey: "projects.filters.categories.fullstack" },
  { id: "mobile", labelKey: "projects.filters.categories.mobile" },
] as const;

// Статусы проектов
export const PROJECT_STATUSES = [
  { id: "all", labelKey: "projects.filters.statuses.all" },
  { id: "completed", labelKey: "projects.filters.statuses.completed" },
  { id: "in-progress", labelKey: "projects.filters.statuses.in-progress" },
  { id: "planned", labelKey: "projects.filters.statuses.planned" },
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
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/дмитрий-багинский-39a63738b",
    icon: "Linkedin",
    color: "hover:text-blue-700",
  },
  {
    name: "Email",
    href: "mailto:DimaBagZ@yandex.ru",
    icon: "Mail",
    color: "hover:text-red-600",
  },
] as const;

// Контактная информация
type ContactValue = string | Record<Language, string>;

export const CONTACT_INFO: Array<{
  id: "email" | "phone" | "location";
  value: ContactValue;
  href: string;
  icon: "Mail" | "Phone" | "MapPin";
}> = [
  {
    id: "email",
    value: "DimaBagZ@yandex.ru",
    href: "mailto:DimaBagZ@yandex.ru",
    icon: "Mail",
  },
  {
    id: "phone",
    value: "+7 (999) 700-84-70",
    href: "tel:+79997008470",
    icon: "Phone",
  },
  {
    id: "location",
    value: {
      ru: "Москва, Россия",
      uk: "Москва, Росія",
      en: "Moscow, Russia",
    },
    href: "#",
    icon: "MapPin",
  },
];

