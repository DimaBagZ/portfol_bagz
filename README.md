# Портфолио-BAGZ 🚀

Современное портфолио Дмитрия Багинского - Fullstack разработчика с опытом создания веб-приложений на React, Next.js, Node.js, NestJS и React Native.

## ✨ Особенности

- **Современный дизайн** с темной/светлой темой
- **Полная адаптивность** для всех устройств
- **Высокая производительность** с Next.js 15
- **Real-time статистика** (возраст, опыт, проекты)
- **Интерактивные модальные окна** для проектов и опыта
- **Telegram Bot интеграция** для контактов
- **SEO оптимизация** и мета-теги
- **Блоки особенностей** для проектов

## 🛠 Технологии

### Frontend

- **React 19** - современная библиотека UI
- **Next.js 15** - фреймворк с App Router
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - utility-first CSS фреймворк
- **Framer Motion** - анимации и переходы
- **shadcn/ui** - компоненты интерфейса

### Backend & Mobile

- **Node.js** - серверная платформа
- **NestJS** - прогрессивный Node.js фреймворк
- **React Native** - мобильная разработка
- **PostgreSQL** - реляционная база данных
- **MongoDB** - NoSQL база данных
- **Socket.io** - real-time коммуникация

### DevOps & Tools

- **Docker** - контейнеризация
- **GitHub Actions** - CI/CD
- **AWS** - облачная инфраструктура
- **Vercel** - деплой и хостинг

## Быстрый старт

### Установка зависимостей

```bash
cd frontend
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка для продакшена

```bash
npm run build
npm start
```

## Проекты в портфолио

### Коммерческие проекты

- **EVE Corp Manager** - система управления корпорацией для EVE Online
- **Driver-Pro** - приложение для управления водителями и автопарком
- **Park-Pro** - система для управления парками аренды автомобилей
- **EVE Corp Live Chat** - корпоративный чат с real-time сообщениями
- **Портфолио-BAGZ** - текущий проект портфолио

### Учебные проекты

- **Stellar Burgers** - приложение для заказа бургеров
- **WebLarek Fullstack** - интернет-магазин с админ-панелью
- **Film!** - онлайн-сервис бронирования билетов
- **Mesto** - социальная сеть для обмена фотографиями
- И другие проекты...

## Опыт работы

- **Fullstack-разработчик** (Freelance) - 2024-настоящее время
- **Frontend Developer** (Яндекс.Практикум) - 2025
- **Backend Developer** (SkillSwapAPI) - 2025
- **Fullstack Developer** (Яндекс.Практикум) - 2023-настоящее время

## Настройка окружения

### Переменные окружения

Создайте файл `.env.local` в папке `frontend/`:

```env
# Telegram Bot (опционально)
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id

# Analytics (опционально)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_YANDEX_METRICA_ID=your_yandex_metrica_id
```

### Telegram Bot настройка

Подробная инструкция в [docs/TELEGRAM_BOT_SETUP.md](frontend/docs/TELEGRAM_BOT_SETUP.md)

## 📱 Деплой

### GitHub Pages

1. Перейдите в Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, folder: /frontend
4. Сохраните настройки
