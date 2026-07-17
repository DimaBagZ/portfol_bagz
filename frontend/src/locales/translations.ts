export type Language = "ru" | "uk" | "en";

export interface TranslationMap {
  languageName: string;
  languageShort: string;
  header: {
    logo: string;
    nav: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    buttons: {
      openProfile: string;
      collapseSidebar: string;
      expandSidebar: string;
    };
  };
  sidebar: {
    profile: {
      firstName: string;
      fullName: string;
      role: string;
      ageLabel: string;
      location: string;
      compactAvatarTooltip: string;
      expandedAvatarTooltip: string;
    };
    skills: {
      title: string;
      tooltip: string;
      categories: {
        frontend: string;
        backend: string;
        mobile: string;
        tools: string;
        languages: string;
      };
    };
    statsCard: {
      title: string;
      total: string;
      completed: string;
      inProgress: string;
      technologies: string;
    };
    footer: {
      experience: string;
      projects: string;
      copyrightName: string;
    };
  };
  home: {
    hero: {
      position: string;
      name: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      tags: string[];
    };
    stats: {
      title: string;
      description: string;
      items: {
        experience: string;
        projects: string;
        technologies: string;
        completed: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      cards: {
        frontend: {
          title: string;
          description: string;
        };
        backend: {
          title: string;
          description: string;
        };
        mobile: {
          title: string;
          description: string;
        };
        devops: {
          title: string;
          description: string;
        };
      };
    };
    featured: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
  };
  about: {
    heroSubtitle: string;
    storyTitle: string;
    storyParagraphs: string[];
    achievementsTitle: string;
    experienceTitle: string;
    experienceSubtitle: string;
  };
  skillsPage: {
    pageTitle: string;
    pageSubtitle: string;
    sidebarNote: string;
    ctaProjects: string;
    ctaContact: string;
    groups: Record<
      "product" | "web" | "backend" | "mobile" | "devops" | "ai",
      {
        title: string;
        description: string;
        highlights: string[];
      }
    >;
  };
  achievements: {
    interactiveHint: string;
    cards: {
      portfolio: {
        label: string;
        details: string[];
      };
      commercial: {
        label: string;
        details: string[];
      };
      experience: {
        label: string;
        details: string[];
      };
      technologies: {
        label: string;
        details: string[];
      };
      languages: {
        label: string;
        details: string[];
      };
      mobile: {
        label: string;
        details: string[];
      };
      integrations: {
        label: string;
        details: string[];
      };
      ai: {
        label: string;
        details: string[];
      };
    };
  };
  experience: {
    modal: {
      description: string;
      responsibilities: string;
      achievements: string;
      technologies: string;
      relatedProjects: string;
      viewProject: string;
      companyButton: string;
      diplomaButton: string;
      stats: {
        start: string;
        technologies: string;
        achievements: string;
        responsibilities: string;
      };
    };
    card: {
      technologies: string;
      more: string;
      viewDetails: string;
      companyTooltip: string;
    };
  };
  projects: {
    pageTitle: string;
    pageSubtitle: string;
    filters: {
      categoriesTitle: string;
      statusesTitle: string;
      categories: Record<string, string>;
      statuses: Record<string, string>;
    };
    results: string;
    empty: {
      title: string;
      description: string;
    };
    statsTitle: string;
    overviewStats: {
      total: string;
      featured: string;
      demo: string;
      technologies: string;
    };
    card: {
      featured: string;
      viewDetails: string;
      code: string;
      demo: string;
      site: string;
      storybook: string;
      server: string;
      kanban: string;
      nda: string;
      onRequest: string;
      status: {
        completed: string;
        progress: string;
        planned: string;
      };
      serverTooltip: string;
      launchServer: string;
    };
    modal: {
      description: string;
      longDescription: string;
      advancedFeaturesTitle: string;
      featuresTitle: string;
      status: string;
      category: string;
      technologies: string;
      stats: {
        year: string;
        duration: {
          label: string;
          singular: string;
          few?: string;
          many: string;
        };
        team: string;
        technologies: string;
      };
      buttons: {
        viewCode: string;
        openProject: string;
        openSite: string;
        launchServer: string;
        requestAccess: string;
      };
      ndaNote: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    infoTitle: string;
    socialTitle: string;
    responseTitle: string;
    responseText: string;
    responseSchedule: string;
    notifications: {
      success: string;
      fallbackPrompt: string;
      error: string;
    };
    contactInfo: {
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    brandDescription: string;
    quickLinksTitle: string;
    quickLinks: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    contactTitle: string;
    location: string;
    rights: string;
  };
  greetings: string[];
}

export const languagesMeta: Array<{ code: Language; label: string; name: string }> = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "uk", label: "UK", name: "Українська" },
  { code: "en", label: "EN", name: "English" },
];

export const translations: Record<Language, TranslationMap> = {
  ru: {
    languageName: "Русский",
    languageShort: "RU",
    header: {
      logo: "DB.dev",
      nav: {
        home: "Главная",
        about: "О себе",
        skills: "Стек",
        projects: "Проекты",
        contact: "Контакты",
      },
      buttons: {
        openProfile: "Открыть профиль",
        collapseSidebar: "Свернуть сайдбар",
        expandSidebar: "Развернуть сайдбар",
      },
    },
    sidebar: {
      profile: {
        firstName: "Дмитрий",
        fullName: "Дмитрий Багинский",
        role: "Fullstack Software Engineer",
        ageLabel: "{years} лет",
        location: "Москва, Россия",
        compactAvatarTooltip: "Нажмите, чтобы открыть профиль",
        expandedAvatarTooltip: "Нажмите, чтобы увеличить фото",
      },
      skills: {
        title: "Навыки",
        tooltip: "{category}: {count} навыков, средний уровень {avg}/5",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          tools: "DevOps и инструменты",
          languages: "Языки программирования",
        },
      },
      statsCard: {
        title: "Статистика",
        total: "Всего проектов",
        completed: "Завершено",
        inProgress: "В разработке",
        technologies: "Технологий",
      },
      footer: {
        experience: "Опыт: {years}+ лет",
        projects: "Проектов: {count}",
        copyrightName: "Дмитрий Багинский",
      },
    },
    home: {
      hero: {
        position: "Fullstack Software Engineer",
        name: "Дмитрий",
        subtitle:
          "Проектирую и собираю современные продукты end-to-end: React, Next.js, Node.js, NestJS, Python, AI и React Native",
        primaryCta: "Посмотреть проекты",
        secondaryCta: "Связаться со мной",
        tags: ["Frontend", "Backend", "Mobile", "AI/LLM", "DevOps", "Architecture"],
      },
      stats: {
        title: "В цифрах",
        description: "Результаты работы fullstack software engineer",
        items: {
          experience: "Года опыта",
          projects: "Проектов",
          technologies: "Технологий",
          completed: "Завершено",
        },
      },
      services: {
        title: "О моей работе",
        subtitle:
          "Веду продукт как fullstack software engineer: от архитектуры и API до UI, мобильных клиентов на React Native/Expo, AI-интеграций и стабильного деплоя.",
        cards: {
          frontend: {
            title: "Frontend & UX",
            description:
              "Собираю быстрые интерфейсы на React/Next.js: дизайн-система, анимации, доступность и адаптив под реальные сценарии пользователей.",
          },
          backend: {
            title: "Backend & Data",
            description:
              "Проектирую API и доменную логику на NestJS/Node/Python: БД, очереди, auth, интеграции и устойчивость под нагрузкой.",
          },
          mobile: {
            title: "Mobile · React Native",
            description:
              "Делаю кроссплатформенные приложения на React Native, в основном через Expo — один кодбаз под iOS и Android, с нативной ощупью и удобным релизным циклом.",
          },
          devops: {
            title: "DevOps & Delivery",
            description:
              "Настраиваю CI/CD, контейнеры и мониторинг, чтобы релизы были предсказуемыми, а системы — наблюдаемыми в проде.",
          },
        },
      },
      featured: {
        title: "Избранные проекты",
        subtitle: "Примеры моих работ и достижений",
        viewAll: "Посмотреть все проекты",
      },
    },
    about: {
      heroSubtitle:
        "Fullstack Software Engineer с опытом создания современных продуктов. Специализируюсь на React, Next.js, Node.js, NestJS, Python, AI-интеграциях и React Native.",
      storyTitle: "Моя история",
      storyParagraphs: [
        "Мой путь в программировании начался в октябре 2022 года с самостоятельного изучения фронтенда и бэкенда. Это был период глубокого погружения в веб-разработку, когда я осваивал основы HTML, CSS, JavaScript, а затем переходил к более сложным технологиям. С самого начала меня привлекала возможность создавать полноценные приложения от идеи до развертывания.",
        "В 2023 году продолжил обучение fullstack разработке в Яндекс.Практикум, где систематизировал знания и получил опыт командной работы. Специализируюсь на React, Next.js, Node.js, NestJS, Python, FastAPI и React Native.",
        "Активно развиваюсь в области AI и машинного обучения, интегрируя языковые модели (OpenAI API, Claude API) в свои проекты. Работаю с LangChain, LlamaIndex, Qdrant для векторных баз данных, а также использую spaCy и NLTK для обработки естественного языка.",
        "Участвовал в командной разработке для Яндекса, работая над проектами ProCharity и SkillSwapAPI. Получил опыт работы в Agile/Scrum методологии с тим-лидами и фич-лидами. Настроил мониторинг систем с помощью Prometheus + Grafana и интегрировал API Telegram и WhatsApp для коммуникации.",
        "Как Fullstack Software Engineer работаю над коммерческими продуктами компаний: от ТЗ и согласований с бизнесом, дизайном и копирайтерами до архитектуры, web и мобильных клиентов iOS/Android, WordPress, интеграций ERP/CRM и платежей (в том числе с белорусской компанией — их платежи, 1С и адаптация под законодательство РБ), деплоя в прод и поддержки после релиза. Активно участвую в митингах с клиентами и владельцами бизнеса — расширяю функционал под их запросы, делаю кастомные интеграции и настраиваю внешние сервисы и разные AI-модели. UI — строго по Figma и брендбуку.",
        "Считаю, что хороший код — это не только функциональность, но и читаемость, масштабируемость и производительность. Люблю изучать новые технологии и применять их в реальных проектах, особенно в области AI и автоматизации.",
      ],
      achievementsTitle: "Достижения",
      experienceTitle: "Опыт работы",
      experienceSubtitle: "Мой профессиональный путь в разработке",
    },
    skillsPage: {
      pageTitle: "Skills & Stack",
      pageSubtitle:
        "Краткое саммари навыков, важных для бизнеса: от ТЗ и архитектуры до web, mobile, интеграций и стабильного продакшена.",
      sidebarNote:
        "Здесь — витрина для бизнеса. Полный список технологий и уровней смотрите в сайдбаре слева.",
      ctaProjects: "Смотреть проекты",
      ctaContact: "Обсудить задачу",
      groups: {
        product: {
          title: "Продукт и архитектура",
          description: "Веду продукт end-to-end: от гипотезы и ТЗ до релиза и поддержки.",
          highlights: [
            "Участие в ТЗ и корректировках с бизнесом, дизайном и копирайтерами",
            "Митинги с клиентами и владельцами бизнеса: запросы → доработки и кастомные интеграции",
            "Архитектура monorepo: shared-пакеты, API, web и mobile клиенты",
            "Работа строго по Figma / брендбуку без «самодеятельности» в UI",
            "Поддержка после релиза: инциденты, улучшения, стабильность",
          ],
        },
        web: {
          title: "Web-платформы",
          description: "Клиентские кабинеты, админки и адаптивные продуктовые интерфейсы.",
          highlights: [
            "Next.js App Router + React + TypeScript",
            "Fabric.js: модальный графический редактор креативов / маркировки",
            "Multi-tenant кабинеты, маппинг SKU и настройки интеграций",
            "Сложные формы, роли, личные кабинеты и admin-панели",
            "UX под desktop / tablet / mobile в одном продукте",
          ],
        },
        backend: {
          title: "Backend и интеграции",
          description: "API, данные, очереди и связка с ERP/CRM/платежами.",
          highlights: [
            "NestJS + PostgreSQL + Prisma, Redis, NATS и фоновые очереди",
            "Интеграции с 1С, CRM, платёжными провайдерами (в т.ч. РБ) и внешними API",
            "Коннекторы Shopify / WooCommerce / PrestaShop и маркетплейсов",
            "Grammy / Telegram sync, Sharp, event-driven потоки (RxJS)",
            "WordPress / WooCommerce: сайт продукта, плагины и синхронизация с платформой",
            "Адаптация продуктов под законодательство РБ",
          ],
        },
        mobile: {
          title: "Mobile delivery",
          description: "Нативные клиенты iOS/Android и путь до сторов.",
          highlights: [
            "React Native + Expo: один код для iOS и Android",
            "EAS Build / Submit, push-уведомления, secure storage",
            "Паритет ключевых сценариев с web-версией продукта",
          ],
        },
        devops: {
          title: "Инфраструктура и поставка",
          description: "Чтобы продукт жил в проде, а не только на демо.",
          highlights: [
            "Docker, CI/CD (GitHub Actions / SourceCraft), окружения и миграции",
            "Stage/preprod (Dokku) и prod (Yandex Cloud Kubernetes)",
            "Terraform / Helm, Cloudflare, мониторинг ошибок, health-checks",
          ],
        },
        ai: {
          title: "AI и автоматизация",
          description: "Практичные LLM-интеграции там, где они дают бизнес-эффект.",
          highlights: [
            "OpenAI / Claude, LangChain, векторный поиск",
            "Настройка разных AI-моделей и внешних сервисов под задачи продукта",
            "Боты и автоматизация коммуникаций",
            "Python-микросервисы рядом с основным стеком",
          ],
        },
      },
    },
    achievements: {
      interactiveHint: "Наведите или нажмите, чтобы узнать подробнее",
      cards: {
        portfolio: {
          label: "Проектов в портфолио",
          details: [
            "Pet, учебные и коммерческие продукты",
            "Fullstack: React, Next.js, NestJS, Expo",
          ],
        },
        commercial: {
          label: "Коммерческих проектов",
          details: [
            "Dropshipping Hub, Synapex Creative Editor",
            "Service Platform, Ad Ops SaaS",
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM и SkillSwapAPI",
          ],
        },
        experience: {
          label: "Лет опыта",
          details: [
            "Самостоятельное обучение с 2022 года",
            "Коммерческие задачи с 2024 года",
          ],
        },
        technologies: {
          label: "Технологий освоено",
          details: [
            "Web, backend, mobile, DevOps и AI",
            "Fabric.js, NATS, Shopify, Stripe, Terraform, WordPress",
            "Платежи РБ, WooCommerce, Expo/EAS, K8s",
          ],
        },
        languages: {
          label: "Языков программирования",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 для интерфейсов"],
        },
        mobile: {
          label: "Mobile-проектов",
          details: [
            "React Native + Expo: iOS и Android",
            "EAS Build / Submit, push, secure storage",
            "Прод-продукты с нативными клиентами",
          ],
        },
        integrations: {
          label: "Интеграционных кейсов",
          details: [
            "ERP 1С (CommerceML / HTTP API), в т.ч. РБ",
            "CRM Bitrix24, платежи РБ, WordPress / WooCommerce",
            "NATS → Telegram (Grammy), Ads API, webhooks",
          ],
        },
        ai: {
          label: "AI интеграций",
          details: [
            "OpenAI и Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
      },
    },
    experience: {
      modal: {
        description: "Описание работы",
        responsibilities: "Обязанности",
        achievements: "Достижения",
        technologies: "Используемые технологии",
        relatedProjects: "Связанные проекты",
        viewProject: "Посмотреть проект",
        companyButton: "Сайт компании",
        diplomaButton: "Диплом",
        stats: {
          start: "Начало работы",
          technologies: "технологий",
          achievements: "достижений",
          responsibilities: "обязанностей",
        },
      },
      card: {
        technologies: "Технологии",
        more: "еще",
        viewDetails: "Подробнее о работе",
        companyTooltip: "Сайт компании",
      },
    },
    projects: {
      pageTitle: "Мои проекты",
      pageSubtitle:
        "Коллекция проектов, которые я создал за время своей работы. Каждый проект представляет собой уникальное решение с использованием современных технологий.",
      filters: {
        categoriesTitle: "Категории",
        statusesTitle: "Статус",
        categories: {
          all: "Все проекты",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Fullstack",
          mobile: "Mobile",
        },
        statuses: {
          all: "Все статусы",
          completed: "Завершенные",
          "in-progress": "В разработке",
          planned: "Планируемые",
        },
      },
      results: "Показано {{shown}} из {{total}} проектов",
      empty: {
        title: "Проекты не найдены",
        description: "В выбранной категории пока нет проектов",
      },
      statsTitle: "Статистика проектов",
      overviewStats: {
        total: "Всего проектов",
        featured: "Избранных",
        demo: "С демо",
        technologies: "Технологий",
      },
      card: {
        featured: "Избранный",
        viewDetails: "Подробнее",
        code: "Код",
        demo: "Демо",
        site: "Сайт",
        storybook: "Storybook",
        server: "Сервер",
        kanban: "Канбан",
        nda: "NDA",
        onRequest: "По запросу",
        status: {
          completed: "Завершен",
          progress: "В разработке",
          planned: "Планируется",
        },
        serverTooltip: "Перед запуском демо необходимо запустить сервер",
        launchServer: "Запустить сервер",
      },
      modal: {
        description: "Описание",
        longDescription: "Детали проекта",
        advancedFeaturesTitle: "Особенности проекта",
        featuresTitle: "Особенности",
        status: "Статус",
        category: "Категория",
        technologies: "Технологии",
        stats: {
          year: "Год создания",
          duration: {
            label: "Длительность",
            singular: "месяц",
            few: "месяца",
            many: "месяцев",
          },
          team: "Участников",
          technologies: "технологий",
        },
        buttons: {
          viewCode: "Посмотреть код",
          openProject: "Открыть проект",
          openSite: "Открыть сайт",
          launchServer: "⚠️ Запустить сервер",
          requestAccess: "Запросить демо",
        },
        ndaNote:
          "Исходный код закрыт по NDA. Публичный сайт и видео доступны; детали редактора — по запросу.",
      },
    },
    contact: {
      title: "Свяжитесь со мной",
      subtitle:
        "Готов обсудить ваш проект или ответить на любые вопросы. Свяжитесь со мной любым удобным способом.",
      form: {
        title: "Отправить сообщение",
        name: "Имя",
        email: "Email",
        subject: "Тема",
        message: "Сообщение",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Тема сообщения",
        messagePlaceholder: "Ваше сообщение...",
        submit: "Отправить сообщение",
        submitting: "Отправка...",
      },
      infoTitle: "Контактная информация",
      socialTitle: "Социальные сети",
      responseTitle: "Время ответа",
      responseText: "Обычно отвечаю в течение 24 часов",
      responseSchedule: "Рабочие дни: Пн-Пт, 9:00-18:00 (МСК)",
      notifications: {
        success: "✅ Сообщение успешно отправлено в Telegram! Спасибо за обращение.",
        fallbackPrompt:
          "❌ Telegram недоступен. Открыть почтовый клиент для отправки email?",
        error:
          "❌ Ошибка отправки. Свяжитесь со мной напрямую: @DimaBagz или DimaBagZ@yandex.ru",
      },
      contactInfo: {
        email: "Email",
        phone: "Телефон",
        location: "Местоположение",
      },
    },
    footer: {
      brandDescription: "Fullstack Software Engineer — современные продукты end-to-end",
      quickLinksTitle: "Быстрые ссылки",
      quickLinks: {
        home: "Главная",
        about: "О себе",
        skills: "Стек",
        projects: "Проекты",
        contact: "Контакты",
      },
      contactTitle: "Контакты",
      location: "Москва, Россия",
      rights: "Все права защищены",
    },
    greetings: [
      "Привет! Меня зовут",
      "Добро пожаловать! Я",
      "Рад видеть вас! Это",
      "Отлично! Меня зовут",
      "Приветствую! Я",
      "Здравствуйте! Меня зовут",
      "Добро пожаловать на мой сайт! Я",
      "Приветствую вас! Это",
      "Отлично, что вы здесь! Я",
      "Добро пожаловать в мое портфолио! Я",
      "Привет! Добро пожаловать! Я",
      "Здравствуйте! Добро пожаловать! Я",
      "Приветствую! Добро пожаловать! Я",
      "Отлично! Добро пожаловать! Я",
      "Привет! Рад видеть вас! Я",
    ],
  },
  uk: {
    languageName: "Українська",
    languageShort: "UK",
    header: {
      logo: "DB.dev",
      nav: {
        home: "Головна",
        about: "Про мене",
        skills: "Стек",
        projects: "Проєкти",
        contact: "Контакти",
      },
      buttons: {
        openProfile: "Відкрити профіль",
        collapseSidebar: "Згорнути сайдбар",
        expandSidebar: "Розгорнути сайдбар",
      },
    },
    sidebar: {
      profile: {
        firstName: "Дмитро",
        fullName: "Дмитро Багінський",
        role: "Fullstack Software Engineer",
        ageLabel: "{years} років",
        location: "Москва, Росія",
        compactAvatarTooltip: "Натисніть, щоб відкрити профіль",
        expandedAvatarTooltip: "Натисніть, щоб збільшити фото",
      },
      skills: {
        title: "Навички",
        tooltip: "{category}: {count} навичок, середній рівень {avg}/5",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          tools: "DevOps та інструменти",
          languages: "Мови програмування",
        },
      },
      statsCard: {
        title: "Статистика",
        total: "Усього проєктів",
        completed: "Завершено",
        inProgress: "У розробці",
        technologies: "Технологій",
      },
      footer: {
        experience: "Досвід: {years}+ років",
        projects: "Проєктів: {count}",
        copyrightName: "Дмитро Багінський",
      },
    },
    home: {
      hero: {
        position: "Fullstack Software Engineer",
        name: "Дмитро",
        subtitle:
          "Проєктую й збираю сучасні продукти end-to-end: React, Next.js, Node.js, NestJS, Python, AI та React Native",
        primaryCta: "Переглянути проєкти",
        secondaryCta: "Зв'язатися зі мною",
        tags: ["Frontend", "Backend", "Mobile", "AI/LLM", "DevOps", "Architecture"],
      },
      stats: {
        title: "У цифрах",
        description: "Результати роботи fullstack software engineer",
        items: {
          experience: "Роки досвіду",
          projects: "Проєктів",
          technologies: "Технологій",
          completed: "Завершено",
        },
      },
      services: {
        title: "Про мою роботу",
        subtitle:
          "Веду продукт як fullstack software engineer: від архітектури й API до UI, мобільних клієнтів на React Native/Expo, AI-інтеграцій і стабільного деплою.",
        cards: {
          frontend: {
            title: "Frontend & UX",
            description:
              "Збираю швидкі інтерфейси на React/Next.js: дизайн-система, анімації, доступність і адаптив під реальні сценарії користувачів.",
          },
          backend: {
            title: "Backend & Data",
            description:
              "Проєктую API та доменну логіку на NestJS/Node/Python: БД, черги, auth, інтеграції й стійкість під навантаженням.",
          },
          mobile: {
            title: "Mobile · React Native",
            description:
              "Роблю кросплатформені застосунки на React Native, переважно через Expo — один кодбаз під iOS і Android, з нативним відчуттям і зручним релізним циклом.",
          },
          devops: {
            title: "DevOps & Delivery",
            description:
              "Налаштовую CI/CD, контейнери й моніторинг, щоб релізи були передбачуваними, а системи — спостережуваними в проді.",
          },
        },
      },
      featured: {
        title: "Обрані проєкти",
        subtitle: "Приклади моїх робіт і досягнень",
        viewAll: "Переглянути всі проєкти",
      },
    },
    about: {
      heroSubtitle:
        "Fullstack Software Engineer із досвідом створення сучасних продуктів. Працюю з React, Next.js, Node.js, NestJS, Python, AI-інтеграціями та React Native.",
      storyTitle: "Моя історія",
      storyParagraphs: [
        "Мій шлях у програмуванні почався в жовтні 2022 року з самостійного вивчення фронтенду та бекенду. Це був період глибокого занурення у веб-розробку: від HTML, CSS, JavaScript до сучасних технологій. Мене одразу захопила ідея створювати повноцінні застосунки від задуму до запуску.",
        "У 2023 році продовжив навчання у Яндекс.Практикум, де систематизував знання та отримав командний досвід. Спеціалізуюся на React, Next.js, Node.js, NestJS, Python, FastAPI та React Native.",
        "Активно розвиваюся у сфері AI та машинного навчання, інтегруючи мовні моделі (OpenAI API, Claude API) у свої проєкти. Працюю з LangChain, LlamaIndex, Qdrant та використовую spaCy і NLTK для обробки природної мови.",
        "Брав участь у командних проєктах для Яндекса (ProCharity, SkillSwapAPI), працював за Agile/Scrum, налаштовував моніторинг Prometheus + Grafana та інтегрував API Telegram і WhatsApp.",
        "Як Fullstack Software Engineer працюю над комерційними продуктами компаній: від ТЗ і узгоджень із бізнесом, дизайном і копірайтерами до архітектури, web та мобільних клієнтів iOS/Android, WordPress, інтеграцій ERP/CRM і платежів (зокрема з білоруською компанією — їхні платежі, 1С та адаптація під законодавство РБ), деплою в прод і підтримки після релізу. Активно беру участь у мітингах із клієнтами та власниками бізнесу — розширюю функціонал під їхні запити, роблю кастомні інтеграції та налаштовую зовнішні сервіси й різні AI-моделі. UI — строго за Figma та брендбуком.",
        "Вважаю, що хороший код — це не лише функціональність, а й читабельність, масштабованість та продуктивність. Люблю вивчати нові технології й застосовувати їх у реальних проєктах, особливо в галузі AI.",
      ],
      achievementsTitle: "Досягнення",
      experienceTitle: "Досвід роботи",
      experienceSubtitle: "Мій професійний шлях у розробці",
    },
    skillsPage: {
      pageTitle: "Skills & Stack",
      pageSubtitle:
        "Коротке саммарі навичок, важливих для бізнесу: від ТЗ і архітектури до web, mobile, інтеграцій і стабільного продакшену.",
      sidebarNote:
        "Тут — вітрина для бізнесу. Повний список технологій і рівнів дивіться в сайдбарі зліва.",
      ctaProjects: "Дивитися проєкти",
      ctaContact: "Обговорити задачу",
      groups: {
        product: {
          title: "Продукт і архітектура",
          description: "Веду продукт end-to-end: від гіпотези й ТЗ до релізу та підтримки.",
          highlights: [
            "Участь у ТЗ і коригуваннях із бізнесом, дизайном і копірайтерами",
            "Мітинги з клієнтами та власниками бізнесу: запити → доробки й кастомні інтеграції",
            "Архітектура monorepo: shared-пакети, API, web і mobile клієнти",
            "Робота строго за Figma / брендбуком",
            "Підтримка після релізу: інциденти, покращення, стабільність",
          ],
        },
        web: {
          title: "Web-платформи",
          description: "Клієнтські кабінети, адмінки та адаптивні продуктові інтерфейси.",
          highlights: [
            "Next.js App Router + React + TypeScript",
            "Fabric.js: модальний графічний редактор креативів / маркування",
            "Multi-tenant кабінети, мапінг SKU і налаштування інтеграцій",
            "Складні форми, ролі, особисті кабінети та admin-панелі",
            "UX для desktop / tablet / mobile в одному продукті",
          ],
        },
        backend: {
          title: "Backend і інтеграції",
          description: "API, дані, черги та зв’язка з ERP/CRM/платежами.",
          highlights: [
            "NestJS + PostgreSQL + Prisma, Redis, NATS і фонові черги",
            "Інтеграції з 1С, CRM, платіжними провайдерами (зокрема РБ) та зовнішніми API",
            "Конектори Shopify / WooCommerce / PrestaShop і маркетплейсів",
            "Grammy / Telegram sync, Sharp, event-driven потоки (RxJS)",
            "WordPress / WooCommerce: сайт продукту, плагіни та синхронізація з платформою",
            "Адаптація продуктів під законодавство РБ",
          ],
        },
        mobile: {
          title: "Mobile delivery",
          description: "Нативні клієнти iOS/Android і шлях до сторів.",
          highlights: [
            "React Native + Expo: один код для iOS та Android",
            "EAS Build / Submit, push-сповіщення, secure storage",
            "Паритет ключових сценаріїв із web-версією продукту",
          ],
        },
        devops: {
          title: "Інфраструктура і поставка",
          description: "Щоб продукт жив у проді, а не лише на демо.",
          highlights: [
            "Docker, CI/CD (GitHub Actions / SourceCraft), середовища й міграції",
            "Stage/preprod (Dokku) і prod (Yandex Cloud Kubernetes)",
            "Terraform / Helm, Cloudflare, моніторинг помилок, health-checks",
          ],
        },
        ai: {
          title: "AI і автоматизація",
          description: "Практичні LLM-інтеграції там, де вони дають бізнес-ефект.",
          highlights: [
            "OpenAI / Claude, LangChain, векторний пошук",
            "Налаштування різних AI-моделей і зовнішніх сервісів під задачі продукту",
            "Боти та автоматизація комунікацій",
            "Python-мікросервіси поруч з основним стеком",
          ],
        },
      },
    },
    achievements: {
      interactiveHint: "Наведіть або торкніться, щоб дізнатися більше",
      cards: {
        portfolio: {
          label: "Проєктів у портфоліо",
          details: [
            "Pet, навчальні та комерційні продукти",
            "Fullstack: React, Next.js, NestJS, Expo",
          ],
        },
        commercial: {
          label: "Комерційних проєктів",
          details: [
            "Dropshipping Hub, Synapex Creative Editor",
            "Service Platform, Ad Ops SaaS",
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM і SkillSwapAPI",
          ],
        },
        experience: {
          label: "Років досвіду",
          details: [
            "Самостійне навчання з 2022 року",
            "Комерційні задачі з 2024 року",
          ],
        },
        technologies: {
          label: "Опрацьованих технологій",
          details: [
            "Web, backend, mobile, DevOps та AI",
            "Fabric.js, NATS, Shopify, Stripe, Terraform, WordPress",
            "Платежі РБ, WooCommerce, Expo/EAS, K8s",
          ],
        },
        languages: {
          label: "Мов програмування",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 для інтерфейсів"],
        },
        mobile: {
          label: "Mobile-проєктів",
          details: [
            "React Native + Expo: iOS та Android",
            "EAS Build / Submit, push, secure storage",
            "Прод-продукти з нативними клієнтами",
          ],
        },
        integrations: {
          label: "Інтеграційних кейсів",
          details: [
            "ERP 1С (CommerceML / HTTP API), зокрема РБ",
            "CRM Bitrix24, платежі РБ, WordPress / WooCommerce",
            "NATS → Telegram (Grammy), Ads API, webhooks",
          ],
        },
        ai: {
          label: "AI інтеграцій",
          details: [
            "OpenAI та Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
      },
    },
    experience: {
      modal: {
        description: "Опис роботи",
        responsibilities: "Обов'язки",
        achievements: "Досягнення",
        technologies: "Використані технології",
        relatedProjects: "Пов'язані проєкти",
        viewProject: "Переглянути проєкт",
        companyButton: "Сайт компанії",
        diplomaButton: "Диплом",
        stats: {
          start: "Початок роботи",
          technologies: "технологій",
          achievements: "досягнень",
          responsibilities: "обов'язків",
        },
      },
      card: {
        technologies: "Технології",
        more: "ще",
        viewDetails: "Детальніше про роботу",
        companyTooltip: "Сайт компанії",
      },
    },
    projects: {
      pageTitle: "Мої проєкти",
      pageSubtitle:
        "Колекція проєктів, створених мною. Кожен з них — унікальне рішення на сучасних технологіях.",
      filters: {
        categoriesTitle: "Категорії",
        statusesTitle: "Статус",
        categories: {
          all: "Усі проєкти",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Fullstack",
          mobile: "Mobile",
        },
        statuses: {
          all: "Усі статуси",
          completed: "Завершені",
          "in-progress": "У розробці",
          planned: "Плануються",
        },
      },
      results: "Показано {{shown}} з {{total}} проєктів",
      empty: {
        title: "Проєкти не знайдено",
        description: "У вибраній категорії поки немає проєктів",
      },
      statsTitle: "Статистика проєктів",
      overviewStats: {
        total: "Всього проєктів",
        featured: "Обраних",
        demo: "З демо",
        technologies: "Технологій",
      },
      card: {
        featured: "Обраний",
        viewDetails: "Докладніше",
        code: "Код",
        demo: "Демо",
        site: "Сайт",
        storybook: "Storybook",
        server: "Сервер",
        kanban: "Канбан",
        nda: "NDA",
        onRequest: "За запитом",
        status: {
          completed: "Завершено",
          progress: "У розробці",
          planned: "Планується",
        },
        serverTooltip: "Перед запуском демо потрібно запустити сервер",
        launchServer: "Запустити сервер",
      },
      modal: {
        description: "Опис",
        longDescription: "Деталі проєкту",
        advancedFeaturesTitle: "Особливості проєкту",
        featuresTitle: "Особливості",
        status: "Статус",
        category: "Категорія",
        technologies: "Технології",
        stats: {
          year: "Рік створення",
          duration: {
            label: "Тривалість",
            singular: "місяць",
            few: "місяці",
            many: "місяців",
          },
          team: "Учасників",
          technologies: "технологій",
        },
        buttons: {
          viewCode: "Переглянути код",
          openProject: "Відкрити проєкт",
          openSite: "Відкрити сайт",
          launchServer: "⚠️ Запустити сервер",
          requestAccess: "Запросити демо",
        },
        ndaNote:
          "Вихідний код закритий за NDA. Публічний сайт і відео доступні; деталі редактора — за запитом.",
      },
    },
    contact: {
      title: "Зв'яжіться зі мною",
      subtitle:
        "Готовий обговорити ваш проєкт або відповісти на будь-які питання. Оберіть зручний спосіб зв'язку.",
      form: {
        title: "Надіслати повідомлення",
        name: "Ім'я",
        email: "Email",
        subject: "Тема",
        message: "Повідомлення",
        namePlaceholder: "Ваше ім'я",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Тема повідомлення",
        messagePlaceholder: "Ваше повідомлення...",
        submit: "Надіслати повідомлення",
        submitting: "Відправлення...",
      },
      infoTitle: "Контактна інформація",
      socialTitle: "Соціальні мережі",
      responseTitle: "Час відповіді",
      responseText: "Зазвичай відповідаю протягом 24 годин",
      responseSchedule: "Робочі дні: Пн-Пт, 9:00-18:00 (UTC+3)",
      notifications: {
        success: "✅ Повідомлення успішно надіслано в Telegram! Дякую за звернення.",
        fallbackPrompt:
          "❌ Telegram недоступний. Відкрити поштовий клієнт для відправки email?",
        error: "❌ Помилка відправки. Напишіть напряму: @DimaBagz або DimaBagZ@yandex.ru",
      },
      contactInfo: {
        email: "Email",
        phone: "Телефон",
        location: "Місцезнаходження",
      },
    },
    footer: {
      brandDescription: "Fullstack Software Engineer — сучасні продукти end-to-end",
      quickLinksTitle: "Швидкі посилання",
      quickLinks: {
        home: "Головна",
        about: "Про мене",
        skills: "Стек",
        projects: "Проєкти",
        contact: "Контакти",
      },
      contactTitle: "Контакти",
      location: "Москва, Росія",
      rights: "Усі права захищено",
    },
    greetings: [
      "Привіт! Мене звати",
      "Ласкаво просимо! Я",
      "Радий вас бачити! Це",
      "Чудово! Мене звати",
      "Вітаю! Я",
      "Добрий день! Мене звати",
      "Ласкаво просимо на мій сайт! Я",
      "Вітаю вас! Це",
      "Радий, що ви тут! Я",
      "Ласкаво просимо до мого портфоліо! Я",
      "Привіт! Ласкаво просимо! Я",
      "Добрий день! Ласкаво просимо! Я",
      "Вітаю! Ласкаво просимо! Я",
      "Чудово! Ласкаво просимо! Я",
      "Привіт! Радий вас бачити! Я",
    ],
  },
  en: {
    languageName: "English",
    languageShort: "EN",
    header: {
      logo: "DB.dev",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      buttons: {
        openProfile: "Open profile",
        collapseSidebar: "Collapse sidebar",
        expandSidebar: "Expand sidebar",
      },
    },
    sidebar: {
      profile: {
        firstName: "Dmitry",
        fullName: "Dmitry Baginskij",
        role: "Fullstack Software Engineer",
        ageLabel: "{years} y.o.",
        location: "Moscow, Russia",
        compactAvatarTooltip: "Tap to open profile",
        expandedAvatarTooltip: "Click to enlarge photo",
      },
      skills: {
        title: "Skills",
        tooltip: "{category}: {count} skills, avg {avg}/5",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          tools: "DevOps & Tools",
          languages: "Programming languages",
        },
      },
      statsCard: {
        title: "Stats",
        total: "Total projects",
        completed: "Completed",
        inProgress: "In progress",
        technologies: "Technologies",
      },
      footer: {
        experience: "Experience: {years}+ yrs",
        projects: "Projects: {count}",
        copyrightName: "Dmitry Baginskij",
      },
    },
    home: {
      hero: {
        position: "Fullstack Software Engineer",
        name: "Dmitry",
        subtitle:
          "I design and ship modern products end-to-end with React, Next.js, Node.js, NestJS, Python, AI, and React Native",
        primaryCta: "View projects",
        secondaryCta: "Contact me",
        tags: ["Frontend", "Backend", "Mobile", "AI/LLM", "DevOps", "Architecture"],
      },
      stats: {
        title: "By the numbers",
        description: "Highlights from my work as a fullstack software engineer",
        items: {
          experience: "Years of experience",
          projects: "Projects",
          technologies: "Technologies",
          completed: "Completed",
        },
      },
      services: {
        title: "What I do",
        subtitle:
          "I operate as a fullstack software engineer: from architecture and APIs to UI, React Native/Expo mobile clients, AI integrations, and reliable delivery.",
        cards: {
          frontend: {
            title: "Frontend & UX",
            description:
              "I build fast React/Next.js interfaces with design systems, motion, accessibility, and real-world responsive flows.",
          },
          backend: {
            title: "Backend & Data",
            description:
              "I design NestJS/Node/Python APIs and domain logic: databases, queues, auth, integrations, and resilience under load.",
          },
          mobile: {
            title: "Mobile · React Native",
            description:
              "I build cross-platform apps with React Native, mostly via Expo — one codebase for iOS and Android, with a native feel and a practical release workflow.",
          },
          devops: {
            title: "DevOps & Delivery",
            description:
              "I set up CI/CD, containers, and monitoring so releases stay predictable and production systems stay observable.",
          },
        },
      },
      featured: {
        title: "Featured projects",
        subtitle: "Selected work and accomplishments",
        viewAll: "View all projects",
      },
    },
    about: {
      heroSubtitle:
        "Fullstack Software Engineer with experience shipping modern products. I focus on React, Next.js, Node.js, NestJS, Python, AI integrations, and React Native.",
      storyTitle: "My story",
      storyParagraphs: [
        "I started coding in October 2022 by teaching myself frontend and backend development. It was a deep dive into web technologies, from HTML/CSS/JavaScript to modern frameworks. From day one I was fascinated by building full products—from idea to deployment.",
        "In 2023 I joined Yandex Practicum to structure my knowledge and gain teamwork experience. I now specialize in React, Next.js, Node.js, NestJS, Python, FastAPI, and React Native.",
        "I'm actively growing in AI and machine learning, integrating language models (OpenAI API, Claude API) into products. I work with LangChain, LlamaIndex, Qdrant, and use spaCy/NLTK for natural language processing.",
        "Participated in Yandex team projects (ProCharity, SkillSwapAPI), worked in Agile/Scrum, implemented Prometheus + Grafana monitoring, and integrated Telegram/WhatsApp APIs.",
        "As a Fullstack Software Engineer I work on commercial products for companies: from requirements with business, design, and copywriters to architecture, web and iOS/Android clients, WordPress, ERP/CRM and payment integrations (including a Belarusian company — their payments, 1C, and adaptation to Belarus legislation), production deploy, and post-release support. I actively join meetings with clients and business owners — expand features from their requests, ship custom integrations, and configure external services and different AI models. UI follows Figma and the brand book.",
        "I believe good code means readability, scalability, and performance. I enjoy learning new technologies and applying them to real products, especially in AI and automation.",
      ],
      achievementsTitle: "Achievements",
      experienceTitle: "Work experience",
      experienceSubtitle: "My professional path in development",
    },
    skillsPage: {
      pageTitle: "Skills & Stack",
      pageSubtitle:
        "A concise business-facing summary: from requirements and architecture to web, mobile, integrations, and reliable production delivery.",
      sidebarNote:
        "This page is a business showcase. The full technology list with levels is in the left sidebar.",
      ctaProjects: "View projects",
      ctaContact: "Discuss a project",
      groups: {
        product: {
          title: "Product & architecture",
          description: "I own products end-to-end: from discovery and specs to release and support.",
          highlights: [
            "Requirements work with business, design, and copywriters",
            "Meetings with clients and business owners: requests → features and custom integrations",
            "Monorepo architecture: shared packages, API, web and mobile clients",
            "UI delivery strictly from Figma / brand guidelines",
            "Post-release support: incidents, improvements, stability",
          ],
        },
        web: {
          title: "Web platforms",
          description: "Client portals, admin tools, and responsive product UI.",
          highlights: [
            "Next.js App Router + React + TypeScript",
            "Fabric.js: modal graphic creatives / marking editor",
            "Multi-tenant dashboards, SKU mapping, and integration settings",
            "Complex forms, roles, account areas, and admin panels",
            "Desktop / tablet / mobile UX in one product",
          ],
        },
        backend: {
          title: "Backend & integrations",
          description: "APIs, data, queues, and ERP/CRM/payment wiring.",
          highlights: [
            "NestJS + PostgreSQL + Prisma, Redis, NATS, and background jobs",
            "1C, CRM, payment providers (incl. Belarus), and external APIs",
            "Shopify / WooCommerce / PrestaShop and marketplace connectors",
            "Grammy / Telegram sync, Sharp, event-driven flows (RxJS)",
            "WordPress / WooCommerce: product site, plugins, and platform sync",
            "Adapting products to Belarus (RB) legislation",
          ],
        },
        mobile: {
          title: "Mobile delivery",
          description: "Native iOS/Android clients and store release pipelines.",
          highlights: [
            "React Native + Expo for shared iOS and Android codebases",
            "EAS Build / Submit, push notifications, secure storage",
            "Key user flows aligned with the web product",
          ],
        },
        devops: {
          title: "Infrastructure & delivery",
          description: "So the product runs in production, not only as a demo.",
          highlights: [
            "Docker, CI/CD (GitHub Actions / SourceCraft), environments, migrations",
            "Stage/preprod (Dokku) and prod (Yandex Cloud Kubernetes)",
            "Terraform / Helm, Cloudflare, error monitoring, health checks",
          ],
        },
        ai: {
          title: "AI & automation",
          description: "Practical LLM integrations where they create business value.",
          highlights: [
            "OpenAI / Claude, LangChain, vector search",
            "Configure different AI models and external services for product needs",
            "Bots and communication automation",
            "Python microservices alongside the core stack",
          ],
        },
      },
    },
    achievements: {
      interactiveHint: "Hover or tap to learn more",
      cards: {
        portfolio: {
          label: "Portfolio projects",
          details: [
            "Pet, learning, and commercial products",
            "Fullstack: React, Next.js, NestJS, Expo",
          ],
        },
        commercial: {
          label: "Commercial projects",
          details: [
            "Dropshipping Hub, Synapex Creative Editor",
            "Service Platform, Ad Ops SaaS",
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM and SkillSwapAPI",
          ],
        },
        experience: {
          label: "Years of experience",
          details: [
            "Self-taught since 2022",
            "Commercial work since 2024",
          ],
        },
        technologies: {
          label: "Technologies mastered",
          details: [
            "Web, backend, mobile, DevOps, and AI",
            "Fabric.js, NATS, Shopify, Stripe, Terraform, WordPress",
            "Belarus payments, WooCommerce, Expo/EAS, K8s",
          ],
        },
        languages: {
          label: "Programming languages",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 for interfaces"],
        },
        mobile: {
          label: "Mobile projects",
          details: [
            "React Native + Expo for iOS and Android",
            "EAS Build / Submit, push, secure storage",
            "Production products with native clients",
          ],
        },
        integrations: {
          label: "Integration cases",
          details: [
            "ERP 1C (CommerceML / HTTP API), incl. Belarus",
            "CRM Bitrix24, Belarus payments, WordPress / WooCommerce",
            "NATS → Telegram (Grammy), Ads API, webhooks",
          ],
        },
        ai: {
          label: "AI integrations",
          details: [
            "OpenAI and Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
      },
    },
    experience: {
      modal: {
        description: "Role overview",
        responsibilities: "Responsibilities",
        achievements: "Key achievements",
        technologies: "Technologies used",
        relatedProjects: "Related projects",
        viewProject: "View project",
        companyButton: "Company site",
        diplomaButton: "Diploma",
        stats: {
          start: "Start date",
          technologies: "technologies",
          achievements: "achievements",
          responsibilities: "responsibilities",
        },
      },
      card: {
        technologies: "Technologies",
        more: "more",
        viewDetails: "More about this role",
        companyTooltip: "Company site",
      },
    },
    projects: {
      pageTitle: "My projects",
      pageSubtitle:
        "A collection of projects I've built. Each one is a tailored solution powered by modern technologies.",
      filters: {
        categoriesTitle: "Categories",
        statusesTitle: "Status",
        categories: {
          all: "All projects",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Fullstack",
          mobile: "Mobile",
        },
        statuses: {
          all: "All statuses",
          completed: "Completed",
          "in-progress": "In progress",
          planned: "Planned",
        },
      },
      results: "Showing {{shown}} of {{total}} projects",
      empty: {
        title: "No projects found",
        description: "There are no projects in the selected category yet",
      },
      statsTitle: "Project statistics",
      overviewStats: {
        total: "Total projects",
        featured: "Featured",
        demo: "With demo",
        technologies: "Technologies",
      },
      card: {
        featured: "Featured",
        viewDetails: "View details",
        code: "Code",
        demo: "Demo",
        site: "Website",
        storybook: "Storybook",
        server: "Server",
        kanban: "Kanban",
        nda: "NDA",
        onRequest: "On request",
        status: {
          completed: "Completed",
          progress: "In progress",
          planned: "Planned",
        },
        serverTooltip: "Start the server before launching the demo",
        launchServer: "Launch server",
      },
      modal: {
        description: "Overview",
        longDescription: "Project details",
        advancedFeaturesTitle: "Key capabilities",
        featuresTitle: "Highlights",
        status: "Status",
        category: "Category",
        technologies: "Technologies",
        stats: {
          year: "Year",
          duration: {
            label: "Duration",
            singular: "month",
            many: "months",
          },
          team: "Team",
          technologies: "technologies",
        },
        buttons: {
          viewCode: "View code",
          openProject: "Open project",
          openSite: "Open site",
          launchServer: "⚠️ Launch server",
          requestAccess: "Request a demo",
        },
        ndaNote:
          "Source code is under NDA. Public site and video are available; editor details on request.",
      },
    },
    contact: {
      title: "Get in touch",
      subtitle:
        "Happy to discuss your project or answer any questions. Choose the channel you prefer.",
      form: {
        title: "Send a message",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Message topic",
        messagePlaceholder: "Your message...",
        submit: "Send message",
        submitting: "Sending...",
      },
      infoTitle: "Contact information",
      socialTitle: "Social links",
      responseTitle: "Response time",
      responseText: "Typically respond within 24 hours",
      responseSchedule: "Business hours: Mon-Fri, 9:00-18:00 (UTC+3)",
      notifications: {
        success: "✅ Message sent to Telegram! Thanks for reaching out.",
        fallbackPrompt:
          "❌ Telegram is unavailable. Open your mail client to send an email?",
        error: "❌ Sending failed. Contact me directly: @DimaBagz or DimaBagZ@yandex.ru",
      },
      contactInfo: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    footer: {
      brandDescription: "Fullstack Software Engineer building modern products end-to-end",
      quickLinksTitle: "Quick links",
      quickLinks: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      contactTitle: "Contacts",
      location: "Moscow, Russia",
      rights: "All rights reserved",
    },
    greetings: [
      "Hi! My name is",
      "Welcome! I'm",
      "Glad to see you! This is",
      "Great! I'm",
      "Greetings! I'm",
      "Hello there! My name is",
      "Welcome to my site! I'm",
      "Nice to meet you! This is",
      "Happy you're here! I'm",
      "Welcome to my portfolio! I'm",
      "Hello! Welcome! I'm",
      "Hi there! Welcome! I'm",
      "Greetings! Welcome! I'm",
      "Great to have you here! I'm",
      "Hey! Happy to see you! I'm",
    ],
  },
};

export const getTranslationValue = (
  language: Language,
  path: string
): string | undefined => {
  const keys = path.split(".");
  let current: unknown = translations[language];
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  if (typeof current === "string") {
    return current;
  }
  return undefined;
};
