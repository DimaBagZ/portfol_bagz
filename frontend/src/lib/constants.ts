// Глобальные константы приложения
export const APP_CONFIG = {
  name: 'Portfolio Bagiskij',
  version: '1.0.0',
  description: 'Портфолио fullstack разработчика',
  author: 'Bagiskij Developer',
  url: 'https://your-domain.com',
  email: 'your-email@example.com',
  phone: '+7 (XXX) XXX-XX-XX',
  location: 'Москва, Россия',
};

// Константы для анимаций
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
};

// Константы для breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Константы для z-index
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
};

// Константы для API
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  timeout: 10000,
  retries: 3,
};

// Константы для localStorage
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  sidebarCollapsed: 'portfolio-sidebar-collapsed',
  language: 'portfolio-language',
  userPreferences: 'portfolio-user-preferences',
};

// Константы для валидации
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Введите корректный email адрес',
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Введите корректный номер телефона',
  },
  name: {
    minLength: 2,
    maxLength: 50,
    message: 'Имя должно содержать от 2 до 50 символов',
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Сообщение должно содержать от 10 до 1000 символов',
  },
};

// Константы для социальных сетей
export const SOCIAL_LINKS = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-username',
  telegram: 'https://t.me/DimaBagz',
  email: 'mailto:your-email@example.com',
  phone: 'tel:+7XXXXXXXXXX',
};

// Константы для контактов
export const CONTACT_INFO = {
  email: 'your-email@example.com',
  phone: '+7 (XXX) XXX-XX-XX',
  location: 'Москва, Россия',
  workingHours: 'Пн-Пт: 9:00 - 18:00',
  responseTime: 'В течение 24 часов',
};
