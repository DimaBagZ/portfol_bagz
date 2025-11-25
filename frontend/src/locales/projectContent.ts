import type { Language } from "./translations";

export interface ProjectContent {
  title?: string;
  description?: string;
  longDescription?: string;
  features?: string[];
  technologies?: string[];
}

type ProjectContentMap = Record<Language, Record<string, ProjectContent>>;

export const projectContent: ProjectContentMap = {
  ru: {
    "1": {
      title: "Park-Pro",
      description:
        "Система управления парком аренды автомобилей с общей платформой с Driver-Pro",
      longDescription:
        "Park-Pro продолжает Driver-Pro и помогает небольшим автопаркам автоматизировать аренду. Веб и React Native клиенты подключены к NestJS + Prisma + PostgreSQL, есть модули бронирования, аналитики, мониторинга и интеграции с платежами.",
      features: [
        "Next.js 14 + React Native + NestJS + Prisma + PostgreSQL",
        "Общий backend с Driver-Pro и синхронизация автопарков",
        "Модуль бронирования, календарь, аналитика",
        "Push-уведомления, deep linking и offline-синхронизация",
        "Prometheus + Grafana, BullMQ, Cloudflare CDN",
        "Программы лояльности и интеграции платежей",
      ],
    },
    "2": {
      title: "Оно тебе надо — Аукцион",
      description: "Концептуальный аукционный сайт с pixel-perfect версткой",
      longDescription:
        "Одностраничный аукцион культовых объектов. Акцент на типографике, сетке и дизайне. Верстка на чистом HTML/CSS/JS, адаптивна и семантична.",
      features: [
        "Pixel-perfect верстка по макету",
        "Семантический HTML + BEM",
        "Кастомная типографика Raleway",
        "Разделы ‘Лоты’ и ‘Об аукционе’",
        "Оптимизация изображений/шрифтов",
        "Адаптивность и hover-анимации",
      ],
    },
    "3": {
      title: "SkillSwap-Frontend",
      description: "Фронтенд для платформы обмена навыками",
      longDescription:
        "Next.js 14 + Tailwind интерфейс с каталогом навыков, профилями, бронированиями и real-time уведомлениями. Интегрирован со SkillSwapAPI.",
      features: [
        "Next.js 14, React 18, TypeScript, Tailwind, shadcn/ui",
        "Zustand, React Hook Form, Zod, Storybook",
        "Каталог с поиском и фильтрами",
        "Профили, рейтинги, отзывы",
        "Бронирование, календарь, уведомления",
        "PWA и mobile-first дизайн",
      ],
    },
    "4": {
      title: "Портфолио-BAGZ",
      description: "Современное портфолио fullstack разработчика",
      longDescription:
        "Сайт на Next.js 15, React 19 и Tailwind. Темы, анимации, фильтры проектов, модальные окна, интеграция с GitHub и статический экспорт.",
      features: [
        "Next.js 15 + React 19 + TypeScript",
        "Tailwind и Framer Motion анимации",
        "Темная/светлая тема, адаптивный UI",
        "Каталог проектов с фильтрами/модалками",
        "GitHub API, SEO, оптимизация изображений",
        "Статический экспорт для GitHub Pages",
      ],
    },
    "5": {
      title: "EVE Corp Live Chat",
      description: "Корпоративный real-time чат для экосистемы EVE Corp Manager",
      longDescription:
        "Live Chat объединяет веб и React Native клиенты с real-time сообщениями, файлами и видеозвонками. Использует Next.js/React на фронте, NestJS + Socket.io, Prisma, Redis и Prometheus.",
      features: [
        "Next.js 14 + React Native + NestJS + Socket.io",
        "JWT авторизация и WebSocket guard",
        "PostgreSQL + Prisma + Redis",
        "Файлообмен через AWS S3",
        "WebRTC звонки и офлайн синхронизация",
        "Интеграция с EVE Corp Manager",
      ],
    },
    "6": {
      title: "Посмотри в окно",
      description: "Видео-портал с фильтрацией по городам и времени суток",
      longDescription:
        "Интерактивный лендинг, который подбирает видео-путешествия по городу, времени суток и погоде. Акцент на чистой верстке, кастомных контролах и продуманных состояниях интерфейса.",
      features: [
        "Поиск с фильтрацией города и времени суток",
        "Кастомные элементы форм и состояния загрузки",
        "Адаптивная сетка и аккуратные анимации",
        "Экран пустых результатов и обработки ошибок",
        "Типографика Fira Sans Condensed и Oswald",
        "Карточки видео с предпросмотром",
      ],
    },
    "7": {
      title: "Сложно сосредоточиться",
      description: "Лонгрид о концентрации с темами День, Авто и Неон",
      longDescription:
        "Образовательный лонгрид о внимании с тремя цветовыми темами, кастомной типографикой и интерактивными переключателями. Использует CSS-переменные, Grid и JavaScript, чтобы мгновенно менять настроение страницы.",
      features: [
        "Три темы: День, Авто, Неон",
        "CSS Variables для мгновенного переключения",
        "Grid + flex адаптив под любые устройства",
        "Поддержка prefers-color-scheme и ручных тумблеров",
        "Семантический HTML и доступные элементы",
        "Декоративные анимации и плавные переходы",
      ],
    },
    "8": {
      title: "Закрывающий тег",
      description: "Личный блог с анимациями, SVG и системой тем",
      longDescription:
        "Эмоциональный блог о пути в разработке. Проект наполнен кастомными анимациями, SVG-эффектами, темной/светлой палитрой и интерактивными карточками с модальными окнами.",
      features: [
        "SVG-анимации лайков и фильтров",
        "Три темы с динамическими фавиконами",
        "Модальные окна и кастомные диалоги",
        "Уникальные CSS-фильтры и карточки",
        "Полностью адаптивная сетка",
        "Hover- и scroll-анимации без библиотек",
      ],
    },
    "9": {
      title: "Mesto",
      description: "Социальная сеть для обмена фотографиями с CRUD API",
      longDescription:
        "SPA для обмена фотографиями: редактирование профиля, добавление карточек, лайки и просмотр изображений. Использует Webpack 5, модульные классы ES6 и публичный API с токен-авторизацией.",
      features: [
        "Webpack 5 + Babel + PostCSS сборка",
        "Модульная архитектура на ES6 классах",
        "Полный CRUD через публичный API",
        "Валидация форм в реальном времени",
        "Токен-авторизация и обработка ошибок",
        "Адаптивная верстка и плавные анимации",
      ],
    },
    "10": {
      title: "Веб-ларек",
      description: "Интернет-магазин на TypeScript с архитектурой MVC",
      longDescription:
        "Учебный интернет-магазин с разделением на модели, представления и контроллеры. Реализованы каталог, корзина, модальные окна, валидация форм и взаимодействие с API на чистом TypeScript.",
      features: [
        "Чистая архитектура MVC",
        "Строгая типизация на TypeScript",
        "Система событий и подписчиков",
        "Модальные окна для корзины и оформления",
        "Валидация форм и работа с API",
        "Адаптивный интерфейс и управление состоянием",
      ],
    },
    "11": {
      title: "Blog Customizer",
      description: "Интерактивный редактор блога с настройкой стилей в реальном времени",
      longDescription:
        "React 18 + TypeScript приложение для настройки темы блога. Реализованы компонентная архитектура, Storybook, CSS-переменные, кастомные хуки и система предварительного просмотра.",
      features: [
        "Редактор стилистики блога в реальном времени",
        "Современный стек: React 18, TypeScript, SCSS Modules",
        "Storybook и кастомные хуки",
        "CSS variables и интерактивная панель",
        "Адаптивный интерфейс и валидация",
        "ESLint, Prettier, Stylelint, Husky",
      ],
    },
    "12": {
      title: "Stellar Burgers",
      description: "React/Redux конструктор бургеров с real-time лентой",
      longDescription:
        "Веб-приложение для сборки бургеров: drag & drop конструктор, авторизация, история заказов и real-time лента через WebSocket. Стек React 18, TypeScript, Redux Toolkit и Storybook.",
      features: [
        "React 18 + TypeScript + Redux Toolkit",
        "Drag & Drop конструктор ингредиентов",
        "WebSocket лента заказов и статус трекинг",
        "JWT авторизация и защищенные роуты",
        "Модальные окна на базе роутинга",
        "Jest, Cypress и Storybook для качества",
      ],
    },
    "13": {
      title: "Список мероприятий",
      description: "SPA для планирования событий и напоминаний",
      longDescription:
        "Приложение на React 18 + TypeScript для ведения списка событий. Поддерживает создание, редактирование, темы, локальное сохранение и мгновенную валидацию дат.",
      features: [
        "Добавление, редактирование и удаление событий",
        "Кастомный календарь и маска даты",
        "Темная/светлая тема на CSS Variables",
        "Сохранение данных в localStorage",
        "Валидация и подсказки ошибок",
        "Адаптивный дизайн с плавными анимациями",
      ],
    },
    "14": {
      title: "WebLarek Fullstack",
      description: "Fullstack интернет-магазин с админ-панелью и REST API",
      longDescription:
        "WebLarek — учебный fullstack-проект. Backend на Node.js/TypeScript/MongoDB, frontend на React 18/Vite. Есть JWT авторизация, админка, загрузка изображений и деплой на Render + GitHub Pages.",
      features: [
        "Node.js, TypeScript, MongoDB, Express",
        "React 18, Vite, Redux Toolkit",
        "JWT + HttpOnly cookies",
        "Админ-панель, корзина, оформление заказа",
        "Загрузка изображений и валидация",
        "Деплой на Render + GitHub Pages",
      ],
    },
    "15": {
      title: "Film! - бронирование билетов",
      description: "Backend-сервис бронирования киносеансов на NestJS",
      longDescription:
        "Полноценный backend для кинотеатра: NestJS + TypeScript + PostgreSQL, Repository pattern, многоуровневое логирование, тесты и CI/CD на GitHub Actions с Docker multi-stage.",
      features: [
        "NestJS, TypeScript, PostgreSQL, Swagger",
        "Repository pattern с несколькими хранилищами",
        "Unit и E2E тесты на Jest",
        "CI/CD: GitHub Actions, Docker multi-stage, GHCR",
        "Логирование Dev/JSON/TSKV и мониторинг",
        "Глобальная валидация DTO и защита API",
      ],
    },
    "16": {
      title: "WebLarek. Плохой сервер",
      description: "Усиление безопасности Node.js backend-а WebLarek",
      longDescription:
        "Спринт по ликвидации уязвимостей: защита от XSS, CSRF, NoSQL-инъекций, ReDoS и DDoS, новые middleware, безопасные заголовки и обновленная админка с нагрузочным тестированием.",
      features: [
        "Защита от XSS, CSRF, NoSQL и Path Traversal",
        "Rate limiting и безопасные заголовки",
        "Обновленные JWT/cookie политики",
        "Аудит npm-зависимостей и фиксы",
        "Личный кабинет и расширенная админ-панель",
        "Нагрузочные тесты Artillery и AB",
      ],
    },
    "17": {
      title: "SkillSwapAPI",
      description:
        "Backend-платформа обмена навыками с JWT/OAuth авторизацией, WebSocket и CI/CD",
      longDescription:
        "SkillSwapAPI — API для сервиса ‘Я научу / Хочу научиться’. CRUD эндпоинты, JWT + refresh токены, WebSocket guard, Repository pattern и CI/CD на GitHub Actions.",
      features: [
        "Полный CRUD API",
        "JWT + refresh + Yandex OAuth 2.0",
        "WebSocket авторизация",
        "Repository pattern (InMemory/PostgreSQL/MongoDB)",
        "Unit/E2E тесты",
        "CI/CD: GitHub Actions, Docker, GHCR",
      ],
    },
    "18": {
      title: "ProCharity CRM",
      description:
        "Frontend разработка CRM-системы для благотворительной платформы ProCharity",
      longDescription:
        "Создан новый интерфейс на TypeScript, React, SCSS с Storybook/Chromatic. Сложные формы, интерактив, адаптивные макеты, Agile/Kanban и контроль качества.",
      features: [
        "TypeScript + React + SCSS",
        "Сложные формы с валидацией",
        "Адаптивные макеты",
        "Storybook + Chromatic",
        "Agile/Kanban процессы",
        "Jest, ESLint, Prettier, Husky",
      ],
    },
    "19": {
      title: "Driver-Pro",
      description: "Веб-приложение для учёта состояния и расходов автопарка",
      longDescription:
        "Next.js 14 + NestJS + Prisma + PostgreSQL, Python микросервисы для AI, Telegram/WhatsApp уведомления, мониторинг Prometheus + Grafana.",
      features: [
        "Учёт расходов и состояния автомобилей",
        "Next.js 14, React 18, NestJS, Tailwind",
        "Python микросервисы (FastAPI, LangChain, Qdrant)",
        "Telegram/WhatsApp уведомления",
        "Prometheus + Grafana",
        "Мобильная адаптация и bottom navigation",
      ],
    },
    "20": {
      title: "EVE Corp Manager",
      description: "Веб-платформа для управления корпорацией EVE Online",
      longDescription:
        "Next.js 14 + Tailwind + shadcn/ui фронтенд, NestJS + Prisma + Redis backend, Socket.io чаты, React Native приложение и AI-помощник на FastAPI + LangChain.",
      features: [
        "Админ-панель и личные кабинеты",
        "Socket.io real-time коммуникации",
        "AI-помощник с LangChain, LlamaIndex, OpenAI/Claude",
        "Интеграции: EVE SSO, AWS S3, Cloudflare",
        "Docker, Kubernetes, GitHub Actions",
        "Prometheus + Grafana + ELK",
      ],
    },
  },
  uk: {
    "1": {
      title: "Park-Pro",
      description: "Система керування автопарком оренди з інтеграцією Driver-Pro",
      longDescription:
        "Park-Pro продовжує Driver-Pro і допомагає невеликим автопаркам автоматизувати оренду. Next.js 14/React Native клієнти працюють із NestJS + Prisma + PostgreSQL. Є модулі бронювання, аналітики, моніторингу та інтеграції платежів.",
      features: [
        "Next.js 14, React Native, NestJS, Prisma, PostgreSQL",
        "Спільний backend із Driver-Pro",
        "Бронювання, календар, аналітика",
        "Push-сповіщення та offline sync",
        "Prometheus, Grafana, BullMQ, Cloudflare",
        "Програми лояльності та інтеграція оплат",
      ],
    },
    "2": {
      title: "Оно тобі треба — Аукціон",
      description: "Концептуальний сайт-аукціон із pixel-perfect версткою",
      longDescription:
        "Односторінковий сайт аукціону культових предметів. Показує типографіку, адаптивність і чистий HTML/CSS/JS.",
      features: [
        "Pixel-perfect макет",
        "BEM + семантичний HTML",
        "Типографіка Raleway",
        "Розділи ‘Лоти’ та ‘Про аукціон’",
        "Оптимізовані зображення/шрифти",
        "Адаптивні сітки та hover-ефекти",
      ],
    },
    "3": {
      title: "SkillSwap-Frontend",
      description: "Фронтенд платформи обміну навичками",
      longDescription:
        "Next.js 14 + Tailwind застосунок із каталогом, профілями, бронюванням і real-time сповіщеннями. Синхронізується зі SkillSwapAPI та підтримує PWA.",
      features: [
        "Next.js 14, React 18, TypeScript, Tailwind",
        "Zustand, React Hook Form, Zod, Storybook",
        "Каталог навичок, пошук, фільтри",
        "Профілі, рейтинги, відгуки",
        "Бронювання, календар, сповіщення",
        "PWA та mobile-first",
      ],
    },
    "4": {
      title: "Портфоліо-BAGZ",
      description: "Сучасне портфоліо fullstack-розробника",
      longDescription:
        "Сайт Next.js 15 + React 19 із анімаціями, темами, фільтрами проєктів, модальними вікнами та інтеграцією з GitHub.",
      features: [
        "Next.js 15, React 19, TypeScript",
        "Tailwind, Framer Motion, Lucide Icons",
        "Темна/світла тема, адаптивність",
        "Фільтри та модальні картки",
        "GitHub API, SEO, оптимізація зображень",
        "Статичний експорт на GitHub Pages",
      ],
    },
    "5": {
      title: "EVE Corp Live Chat",
      description: "Real-time чат для екосистеми EVE Corp Manager",
      longDescription:
        "Веб і React Native клієнти з повідомленнями, файлами та дзвінками. Next.js/React фронт, NestJS + Socket.io бек, Prisma, Redis і Prometheus.",
      features: [
        "Next.js 14, React Native, NestJS, Socket.io",
        "JWT, WebSocket guard та ролі",
        "PostgreSQL, Prisma, Redis",
        "Файлообмін через AWS S3",
        "WebRTC дзвінки та offline sync",
        "Адмін-панель + інтеграція з EVE Corp Manager",
      ],
    },
    "6": {
      title: "Поглянь у вікно",
      description: "Відео-портал із фільтрацією за містами та часом доби",
      longDescription:
        "Інтерактивний лендинг, що підбирає відео-подорожі за містом, часом доби й погодою. Акцент на чистій верстці, кастомних контролах і продуманих станах інтерфейсу.",
      features: [
        "Пошук з фільтрацією міста та часу доби",
        "Кастомні елементи форм і стани завантаження",
        "Адаптивна сітка та охайні анімації",
        "Екрани порожніх результатів і помилок",
        "Типографіка Fira Sans Condensed та Oswald",
        "Картки відео з попереднім переглядом",
      ],
    },
    "7": {
      title: "Складно зосередитися",
      description: "Лонгрід про концентрацію з темами День, Авто та Неон",
      longDescription:
        "Освітній лонгрід про увагу з трьома кольоровими темами, кастомною типографікою та інтерактивними перемикачами. Використовує CSS-перемінні, Grid і JavaScript для миттєвого перемикання настрою сторінки.",
      features: [
        "Три теми: День, Авто, Неон",
        "CSS Variables для миттєвого перемикання",
        "Grid + flex адаптив під будь-які пристрої",
        "Підтримка prefers-color-scheme і ручних тумблерів",
        "Семантичний HTML та доступні елементи",
        "Декоративні анімації та плавні переходи",
      ],
    },
    "8": {
      title: "Закриваючий тег",
      description: "Особистий блог з анімаціями, SVG і системою тем",
      longDescription:
        "Емоційний блог про шлях у розробці з кастомними анімаціями, SVG-ефектами, темною/світлою палітрою та інтерактивними картками з модальними вікнами.",
      features: [
        "SVG-анімації лайків і фільтрів",
        "Три теми з динамічними фавіконами",
        "Модальні вікна та кастомні діалоги",
        "Унікальні CSS-фільтри й картки",
        "Повністю адаптивна сітка",
        "Hover- та scroll-анімації без бібліотек",
      ],
    },
    "9": {
      title: "Mesto",
      description: "Соціальна мережа для фото з повним CRUD API",
      longDescription:
        "SPA для обміну фотографіями: редагування профілю, додавання карток, лайки та перегляд зображень. Використовує Webpack 5, модульні класи ES6 і публічний API з токен-авторизацією.",
      features: [
        "Webpack 5 + Babel + PostCSS збірка",
        "Модульна архітектура на ES6 класах",
        "Повний CRUD через публічний API",
        "Валідація форм у реальному часі",
        "Токен-авторизація та обробка помилок",
        "Адаптивна верстка й плавні анімації",
      ],
    },
    "10": {
      title: "Веб-ларек",
      description: "Інтернет-магазин на TypeScript з архітектурою MVC",
      longDescription:
        "Навчальний інтернет-магазин із поділом на моделі, подання та контролери. Реалізовано каталог, кошик, модальні вікна, валідацію форм і роботу з API на чистому TypeScript.",
      features: [
        "Чиста архітектура MVC",
        "Строга типізація на TypeScript",
        "Система подій і підписників",
        "Модальні вікна для кошика й оформлення",
        "Валідація форм і робота з API",
        "Адаптивний інтерфейс і управління станом",
      ],
    },
    "11": {
      title: "Blog Customizer",
      description: "Інтерактивний редактор блогу з налаштуванням стилів",
      longDescription:
        "React 18 + TypeScript застосунок із SCSS Modules, Storybook та кастомними хуками. Підтримує CSS-перемінні, адаптивність і контроль якості.",
      features: [
        "Налаштування теми блогу у реальному часі",
        "React 18, TypeScript, SCSS Modules",
        "Storybook і кастомні хуки",
        "CSS variables і панель параметрів",
        "Адаптивний дизайн і валідація",
        "ESLint, Prettier, Stylelint, Husky",
      ],
    },
    "12": {
      title: "Stellar Burgers",
      description: "React/Redux конструктор бургерів із real-time стрічкою",
      longDescription:
        "Веб-застосунок для збирання бургерів: drag & drop конструктор, авторизація, історія замовлень і real-time стрічка через WebSocket. Стек React 18, TypeScript, Redux Toolkit і Storybook.",
      features: [
        "React 18 + TypeScript + Redux Toolkit",
        "Drag & Drop конструктор інгредієнтів",
        "WebSocket стрічка замовлень та статусів",
        "JWT авторизація та захищені роуті",
        "Модальні вікна на базі роутингу",
        "Jest, Cypress і Storybook для якості",
      ],
    },
    "13": {
      title: "Список подій",
      description: "SPA для планування заходів і нагадувань",
      longDescription:
        "Застосунок на React 18 + TypeScript для ведення списку подій. Підтримує створення, редагування, теми, локальне збереження та миттєву валідацію дат.",
      features: [
        "Додавання, редагування та видалення подій",
        "Кастомний календар і маска дати",
        "Темна/світла тема на CSS Variables",
        "Збереження даних у localStorage",
        "Валідація та підказки помилок",
        "Адаптивний дизайн із плавними анімаціями",
      ],
    },
    "14": {
      title: "WebLarek Fullstack",
      description: "Fullstack інтернет-магазин з адмін-панеллю",
      longDescription:
        "Backend на Node.js/TypeScript/MongoDB, frontend на React/Vite/Redux Toolkit. Є JWT авторизація, HttpOnly cookies, захищені маршрути та деплой на Render + GitHub Pages.",
      features: [
        "Node.js, TypeScript, MongoDB, Express",
        "React 18, Vite, Redux Toolkit",
        "JWT + HttpOnly cookies",
        "Адмінка, корзина, оформлення",
        "Завантаження зображень і валідація",
        "Деплой на Render + GitHub Pages",
      ],
    },
    "15": {
      title: "Film! - сервіс бронювання квитків",
      description: "Backend-сервіс кінотеатру на NestJS + PostgreSQL",
      longDescription:
        "Повноцінний backend для бронювання: NestJS + TypeScript + PostgreSQL, Repository pattern, багаторівневе логування, тести та CI/CD на GitHub Actions з Docker multi-stage.",
      features: [
        "NestJS, TypeScript, PostgreSQL, Swagger",
        "Repository pattern з кількома сховищами",
        "Unit та E2E тести на Jest",
        "CI/CD: GitHub Actions, Docker multi-stage, GHCR",
        "Логування Dev/JSON/TSKV та моніторинг",
        "Глобальна валідація DTO й захист API",
      ],
    },
    "16": {
      title: "WebLarek. Поганий сервер",
      description: "Підсилення безпеки Node.js backend-у WebLarek",
      longDescription:
        "Спринт із ліквідації вразливостей: захист від XSS, CSRF, NoSQL-інʼєкцій, ReDoS і DDoS, нові middleware, безпечні заголовки та оновлена адмінка з навантажувальним тестуванням.",
      features: [
        "Захист від XSS, CSRF, NoSQL та Path Traversal",
        "Rate limiting і безпечні заголовки",
        "Оновлені JWT/cookie політики",
        "Аудит npm-залежностей та виправлення",
        "Кабінет користувача й розширена адмінка",
        "Навантажувальні тести Artillery та AB",
      ],
    },
    "17": {
      title: "SkillSwapAPI",
      description: "Платформа обміну навичками з JWT/OAuth та WebSocket",
      longDescription:
        "CRUD API для заявок, JWT + refresh токени, інтеграція з Yandex OAuth 2.0, WebSocket guard, Repository pattern, Unit/E2E тести та CI/CD.",
      features: [
        "CRUD API",
        "JWT + Refresh + OAuth 2.0",
        "WebSocket авторизація",
        "Repository pattern",
        "Unit/E2E тести",
        "CI/CD: GitHub Actions, Docker, GHCR",
      ],
    },
    "18": {
      title: "ProCharity CRM",
      description: "Frontend нової CRM для ProCharity",
      longDescription:
        "TypeScript + React + SCSS інтерфейс із Storybook/Chromatic, складними формами, адаптивом, Agile/Kanban процесами та контролем якості.",
      features: [
        "TypeScript + React + SCSS",
        "Складні форми",
        "Адаптивні макети",
        "Storybook + Chromatic",
        "Agile/Kanban",
        "Jest, ESLint, Prettier, Husky",
      ],
    },
    "19": {
      title: "Driver-Pro",
      description: "Веб-застосунок для контролю стану автопарку",
      longDescription:
        "Next.js 14 + NestJS + Prisma + PostgreSQL, Python мікросервіси для AI, Telegram/WhatsApp сповіщення, Prometheus + Grafana.",
      features: [
        "Контроль стану та витрат",
        "Next.js 14, React 18, NestJS",
        "Python мікросервіси (FastAPI, LangChain, Qdrant)",
        "Telegram/WhatsApp інтеграції",
        "Prometheus + Grafana",
        "Мобільна адаптація",
      ],
    },
    "20": {
      title: "EVE Corp Manager",
      description: "Веб-платформа для керування корпорацією EVE Online",
      longDescription:
        "Next.js 14 + Tailwind + shadcn/ui фронтенд, NestJS + Prisma + Redis backend, Socket.io чати, React Native застосунок та AI-помічник.",
      features: [
        "Адмін-панель та особисті кабінети",
        "Real-time чати та аналітика",
        "AI-помічник (LangChain, LlamaIndex, OpenAI/Claude)",
        "Інтеграції EVE SSO, AWS S3, Cloudflare",
        "Docker, Kubernetes, GitHub Actions",
        "Prometheus + Grafana + ELK",
      ],
    },
  },
  en: {
    "1": {
      title: "Park-Pro",
      description: "Rental fleet management platform connected to Driver-Pro",
      longDescription:
        "Extends Driver-Pro for small fleets. Next.js 14 + React Native clients connect to NestJS + Prisma + PostgreSQL; modules cover bookings, analytics, monitoring, and payments.",
      features: [
        "Next.js 14, React Native, NestJS, Prisma, PostgreSQL",
        "Shared backend with Driver-Pro",
        "Booking calendar and analytics",
        "Push notifications and offline sync",
        "Prometheus, Grafana, BullMQ, Cloudflare",
        "Loyalty engine and payment integrations",
      ],
    },
    "2": {
      title: "You Need It — Auction",
      description: "Conceptual auction landing with pixel-perfect execution",
      longDescription:
        "Single-page auction for cult objects. Showcases typography, semantic HTML, responsive grids, and hover animations without heavy frameworks.",
      features: [
        "Pixel-perfect layout",
        "Semantic HTML + BEM",
        "Raleway typography",
        "Lots and story sections",
        "Optimized assets and fonts",
        "Responsive hover-friendly UI",
      ],
    },
    "3": {
      title: "SkillSwap Frontend",
      description: "Client for the SkillSwap marketplace",
      longDescription:
        "Next.js 14 + Tailwind UI with skill catalog, profiles, bookings, and real-time notifications. Integrates directly with SkillSwapAPI and supports PWA patterns.",
      features: [
        "Next.js 14, React 18, TypeScript, Tailwind, shadcn/ui",
        "Zustand, React Hook Form, Zod, Storybook",
        "Skill catalog with filters/search",
        "Profiles, ratings, reviews",
        "Booking calendar and notifications",
        "PWA/mobile-first experience",
      ],
    },
    "4": {
      title: "DB.dev Portfolio",
      description: "Modern fullstack portfolio with animations and filters",
      longDescription:
        "Next.js 15 + React 19 site with Tailwind, Framer Motion, dark/light themes, project filters, modals, GitHub integration, and static export for GitHub Pages.",
      features: [
        "Next.js 15, React 19, TypeScript",
        "Tailwind + Framer Motion",
        "Dark/light themes, responsive UI",
        "Project filters and modal details",
        "GitHub API, SEO, image optimization",
        "Static export to GitHub Pages",
      ],
    },
    "5": {
      title: "EVE Corp Live Chat",
      description: "Corporate real-time chat inside EVE Corp Manager",
      longDescription:
        "Web and React Native chat with messaging, channels, files, and video calls. Powered by Next.js/React frontends and NestJS + Socket.io backend with Prisma, Redis, Prometheus.",
      features: [
        "Next.js 14, React Native, NestJS, Socket.io",
        "JWT auth, WebSocket guards, role-based access",
        "PostgreSQL, Prisma, Redis",
        "File sharing via AWS S3",
        "WebRTC voice/video, offline sync",
        "Admin console + EVE Corp integration",
      ],
    },
    "6": {
      title: "Look Out the Window",
      description: "Video portal that filters cities and time of day",
      longDescription:
        "Interactive landing that curates ambient travel videos by city, time of day, and weather. Highlights clean layout, custom controls, and polished UI states.",
      features: [
        "City and time-of-day filtering",
        "Custom form controls with loading states",
        "Responsive grid with subtle animations",
        "Empty/error states with helpful copy",
        "Fira Sans Condensed + Oswald typography",
        "Video cards with previews",
      ],
    },
    "7": {
      title: "Hard to Focus",
      description: "Longform story with Day/Auto/Neon themes",
      longDescription:
        "Educational longread about attention featuring three color themes, custom typography, and interactive toggles. Uses CSS variables, Grid, and JavaScript to switch moods instantly.",
      features: [
        "Three themes: Day, Auto, Neon",
        "CSS Variables for instant theme swaps",
        "Responsive Grid + flex layout",
        "Prefers-color-scheme plus manual toggles",
        "Semantic HTML and accessible controls",
        "Decorative animations and smooth transitions",
      ],
    },
    "8": {
      title: "Closing Tag Blog",
      description: "Personal blog with SVG animations and multi-theme UI",
      longDescription:
        "Emotional blog about the learning journey. Packed with custom animations, SVG effects, dark/light palettes, and interactive cards with modal dialogs.",
      features: [
        "SVG like animations and filters",
        "Three themes with dynamic favicons",
        "Modal dialogs with custom transitions",
        "Unique CSS filters and card layouts",
        "Fully responsive grid",
        "Hover/scroll animations without libraries",
      ],
    },
    "9": {
      title: "Mesto",
      description: "Photo sharing social app with full CRUD API",
      longDescription:
        "Single-page app for sharing photos: profile editing, card creation, likes, and image viewer. Built with Webpack 5, modular ES6 classes, and a public API secured with tokens.",
      features: [
        "Webpack 5 + Babel + PostCSS toolchain",
        "Modular ES6 class architecture",
        "Complete CRUD via public API",
        "Real-time form validation",
        "Token auth with robust error handling",
        "Responsive layout with smooth animations",
      ],
    },
    "10": {
      title: "Web Larek Storefront",
      description: "TypeScript MVC storefront with catalog and cart",
      longDescription:
        "Educational storefront that separates models, views, and controllers. Ships catalog, cart, modal dialogs, form validation, and API integration written entirely in TypeScript.",
      features: [
        "Clean MVC separation",
        "Strict TypeScript typing",
        "Event bus and subscription system",
        "Modals for cart and checkout flows",
        "Form validation plus API layer",
        "Responsive UI with state management",
      ],
    },
    "11": {
      title: "Blog Customizer",
      description: "Live blog theme editor with real-time preview",
      longDescription:
        "React 18 + TypeScript app with SCSS Modules, Storybook, and custom hooks. Supports CSS variables, responsive layouts, validation, and code quality tooling.",
      features: [
        "Real-time styling panel",
        "React 18, TypeScript, SCSS Modules",
        "Storybook-driven components",
        "CSS variables and control sidebar",
        "Responsive layouts with validation",
        "ESLint, Prettier, Stylelint, Husky",
      ],
    },
    "12": {
      title: "Stellar Burgers",
      description: "React/Redux burger builder with real-time feed",
      longDescription:
        "Burger constructor with drag & drop UI, authentication, order history, and a WebSocket-powered feed. Built on React 18, TypeScript, Redux Toolkit, and Storybook.",
      features: [
        "React 18 + TypeScript + Redux Toolkit",
        "Drag & drop ingredient builder",
        "WebSocket order feed and statuses",
        "JWT auth with protected routes",
        "Modal routing for details",
        "Jest, Cypress, Storybook quality gates",
      ],
    },
    "13": {
      title: "Event List",
      description: "SPA for planning events and reminders",
      longDescription:
        "React 18 + TypeScript app for managing events. Supports create/edit/delete, theming, local persistence, and instant date validation.",
      features: [
        "Create, edit, and delete events",
        "Custom calendar with date mask",
        "Dark/light theme via CSS variables",
        "localStorage persistence",
        "Validation with inline hints",
        "Responsive layout with subtle animations",
      ],
    },
    "14": {
      title: "WebLarek Fullstack",
      description: "Full-stack e-commerce app with admin panel and REST API",
      longDescription:
        "Node.js/TypeScript/MongoDB backend + React/Vite/Redux Toolkit frontend. Features JWT auth with HttpOnly cookies, protected routes, image uploads, and deployment to Render + GitHub Pages.",
      features: [
        "Node.js, TypeScript, MongoDB, Express",
        "React 18, Vite, Redux Toolkit",
        "JWT + HttpOnly cookies",
        "Cart management and admin dashboard",
        "Image uploads and validation",
        "Render + GitHub Pages deployment",
      ],
    },
    "15": {
      title: "Film! Ticket Service",
      description: "NestJS cinema booking backend with CI/CD",
      longDescription:
        "Production-ready backend for cinema bookings: NestJS + TypeScript + PostgreSQL, Repository pattern, layered logging, automated tests, and GitHub Actions CI/CD with Docker multi-stage builds.",
      features: [
        "NestJS, TypeScript, PostgreSQL, Swagger",
        "Repository pattern with multiple stores",
        "Unit and E2E tests on Jest",
        "CI/CD via GitHub Actions, Docker multi-stage, GHCR",
        "Dev/JSON/TSKV logging profiles",
        "Global DTO validation and API hardening",
      ],
    },
    "16": {
      title: "WebLarek. Bad Server",
      description: "Security hardening sprint for the WebLarek backend",
      longDescription:
        "Sprint focused on eliminating vulnerabilities: protection against XSS, CSRF, NoSQL injections, ReDoS/DDoS, new middleware, secure headers, and an updated admin panel with load testing.",
      features: [
        "Guards against XSS, CSRF, NoSQL, Path Traversal",
        "Rate limiting and hardened headers",
        "Updated JWT/cookie policies",
        "npm dependency audit and fixes",
        "User cabinet plus expanded admin tools",
        "Load testing with Artillery and AB",
      ],
    },
    "17": {
      title: "SkillSwapAPI",
      description: "Skill exchange backend with JWT/OAuth and WebSocket guards",
      longDescription:
        "CRUD endpoints, JWT + refresh tokens, Yandex OAuth 2.0, WebSocket guards, Repository pattern, comprehensive testing, and GitHub Actions CI/CD with Docker + GHCR + Yandex Cloud.",
      features: [
        "Complete CRUD API",
        "JWT + refresh + OAuth 2.0",
        "WebSocket authorization",
        "Repository pattern",
        "Unit/E2E coverage",
        "GitHub Actions, Docker, GHCR",
      ],
    },
    "18": {
      title: "ProCharity CRM",
      description: "Frontend rebuild of the ProCharity CRM platform",
      longDescription:
        "TypeScript + React + SCSS UI with Storybook/Chromatic, complex forms, adaptive layouts, Agile/Kanban collaboration, and quality gates (Jest, ESLint, Prettier, Husky).",
      features: [
        "TypeScript + React + SCSS",
        "Complex forms with validation",
        "Responsive layouts",
        "Storybook + Chromatic",
        "Agile/Kanban collaboration",
        "Jest, ESLint, Prettier, Husky",
      ],
    },
    "19": {
      title: "Driver-Pro",
      description: "Fleet maintenance dashboard",
      longDescription:
        "Next.js 14 + NestJS + Prisma + PostgreSQL, Python AI microservices (FastAPI, LangChain, Qdrant), Telegram/WhatsApp notifications, Prometheus + Grafana monitoring.",
      features: [
        "Fleet maintenance and expense tracking",
        "Next.js 14, React 18, NestJS",
        "Python AI microservices",
        "Telegram/WhatsApp integrations",
        "Prometheus + Grafana",
        "Mobile-friendly UI",
      ],
    },
    "20": {
      title: "EVE Corp Manager",
      description: "Control center for EVE Online corporations",
      longDescription:
        "Next.js 14 + Tailwind + shadcn/ui frontend, NestJS + Prisma + Redis backend, Socket.io chats, React Native companion app, AI automation via FastAPI + LangChain + OpenAI/Claude.",
      features: [
        "Admin console and personal dashboards",
        "Real-time chats and analytics",
        "AI assistant with LangChain/LlamaIndex",
        "Integrations: EVE SSO, AWS S3, Cloudflare",
        "Docker, Kubernetes, GitHub Actions",
        "Prometheus, Grafana, ELK",
      ],
    },
  },
};
