# Портфолио-BAGZ

Современное портфолио Дмитрия Багинского - Fullstack разработчика с опытом создания веб-приложений на React, Next.js, Node.js, NestJS и React Native.

## Особенности

- **Современный дизайн** с темной/светлой темой
- **Полная адаптивность** для всех устройств
- **Высокая производительность** с Next.js 15
- **Real-time статистика** (возраст, опыт, проекты)
- **Интерактивные модальные окна** для проектов и опыта
- **Telegram Bot интеграция** для контактов
- **SEO оптимизация** и мета-теги
- **Блоки особенностей** для проектов

## Технологии

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

## Деплой

### Vercel

Проект поддерживает **два варианта** деплоя:

#### Вариант 1: Полный деплой (фронтенд + API)

1. Импортируйте проект на https://vercel.com
2. Root Directory: `frontend`
3. Добавьте переменные окружения в Vercel:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Деплой автоматический

#### Вариант 2: Гибридный деплой (GitHub Pages + Vercel API)

1. Деплойте API из папки `api-telegram` на Vercel
2. Установите `NEXT_PUBLIC_API_URL` в переменных окружения
3. Фронтенд на GitHub Pages будет использовать внешний API

## Настройка окружения

### Переменные окружения

Создайте файл `.env.local` в папке `frontend/`:

```env
# Telegram Bot (обязательно для работы формы связи)

TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```
