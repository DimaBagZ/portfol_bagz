export type Language = "ru" | "uk" | "en";

export interface TranslationMap {
  languageName: string;
  languageShort: string;
  header: {
    logo: string;
    nav: {
      home: string;
      about: string;
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
      copyright: string;
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
      ai: {
        label: string;
        details: string[];
      };
      bots: {
        label: string;
        details: string[];
      };
      backendShare: {
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
      };
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
        role: "Fullstack разработчик",
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
        copyright: "© 2025 Дмитрий Багинский",
      },
    },
    home: {
      hero: {
        position: "Fullstack Developer",
        name: "Дмитрий",
        subtitle:
          "Создаю современные веб-приложения с использованием React, Next.js, Node.js, Nest.js и React Native",
        primaryCta: "Посмотреть проекты",
        secondaryCta: "Связаться со мной",
        tags: ["Frontend", "Backend", "Fullstack", "Mobile"],
      },
      stats: {
        title: "В цифрах",
        description: "Результаты моей работы в области веб-разработки",
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
          "Специализируюсь на создании современных веб-приложений с использованием передовых технологий. Опыт работы с полным стеком разработки позволяет создавать масштабируемые и производительные решения.",
        cards: {
          frontend: {
            title: "Frontend",
            description:
              "Создаю интуитивные пользовательские интерфейсы с современными фреймворками",
          },
          backend: {
            title: "Backend",
            description:
              "Разрабатываю надежные API и серверную логику для высоконагруженных систем",
          },
          devops: {
            title: "DevOps",
            description:
              "Настраиваю инфраструктуру и процессы развертывания для стабильной работы",
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
        "Fullstack разработчик с опытом создания современных веб-приложений. Специализируюсь на React, Next.js, Node.js, NestJS, Python, AI интеграциях и React Native.",
      storyTitle: "Моя история",
      storyParagraphs: [
        "Мой путь в программировании начался в октябре 2022 года с самостоятельного изучения фронтенда и бэкенда. Это был период глубокого погружения в веб-разработку, когда я осваивал основы HTML, CSS, JavaScript, а затем переходил к более сложным технологиям. С самого начала меня привлекала возможность создавать полноценные приложения от идеи до развертывания.",
        "В 2023 году продолжил обучение fullstack разработке в Яндекс.Практикум, где систематизировал знания и получил опыт командной работы. Специализируюсь на React, Next.js, Node.js, NestJS, Python, FastAPI и React Native.",
        "Активно развиваюсь в области AI и машинного обучения, интегрируя языковые модели (OpenAI API, Claude API) в свои проекты. Работаю с LangChain, LlamaIndex, Qdrant для векторных баз данных, а также использую spaCy и NLTK для обработки естественного языка.",
        "Участвовал в командной разработке для Яндекса, работая над проектами ProCharity и SkillSwapAPI. Получил опыт работы в Agile/Scrum методологии с тим-лидами и фич-лидами. Настроил мониторинг систем с помощью Prometheus + Grafana и интегрировал API Telegram и WhatsApp для коммуникации.",
        "Считаю, что хороший код — это не только функциональность, но и читаемость, масштабируемость и производительность. Люблю изучать новые технологии и применять их в реальных проектах, особенно в области AI и автоматизации.",
      ],
      achievementsTitle: "Достижения",
      experienceTitle: "Опыт работы",
      experienceSubtitle: "Мой профессиональный путь в разработке",
    },
    achievements: {
      interactiveHint: "Наведите или нажмите, чтобы узнать подробнее",
      cards: {
        portfolio: {
          label: "Проектов в портфолио",
          details: [
            "20+ pet и коммерческих приложений",
            "Fullstack стек: React, Next.js, NestJS",
          ],
        },
        commercial: {
          label: "Коммерческих проектов",
          details: [
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM для Яндекса",
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
            "Frontend, backend, mobile и DevOps",
            "AI стек: LangChain, Qdrant, Prometheus",
          ],
        },
        languages: {
          label: "Языков программирования",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 для интерфейсов"],
        },
        ai: {
          label: "AI интеграций",
          details: [
            "OpenAI и Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
        bots: {
          label: "Работа с ботами",
          details: [
            "Telegram Bot + вебхуки",
            "WhatsApp Business API",
            "Уведомления в Driver-Pro и EVE Corp",
          ],
        },
        backendShare: {
          label: "Backend кода в команде",
          details: ["SkillSwapAPI: CRUD, Auth, Tests", "NestJS + PostgreSQL + Prisma"],
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
        },
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
      brandDescription: "Fullstack разработчик, создающий современные веб-приложения",
      quickLinksTitle: "Быстрые ссылки",
      quickLinks: {
        home: "Главная",
        about: "О себе",
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
        role: "Fullstack розробник",
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
        copyright: "© 2025 Дмитро Багінський",
      },
    },
    home: {
      hero: {
        position: "Fullstack Developer",
        name: "Дмитро",
        subtitle:
          "Створюю сучасні веб-застосунки на React, Next.js, Node.js, Nest.js та React Native",
        primaryCta: "Переглянути проєкти",
        secondaryCta: "Зв'язатися зі мною",
        tags: ["Frontend", "Backend", "Fullstack", "Mobile"],
      },
      stats: {
        title: "У цифрах",
        description: "Результати моєї роботи у сфері веб-розробки",
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
          "Спеціалізуюся на створенні сучасних веб-застосунків із використанням передових технологій. Досвід повного стеку дозволяє будувати масштабовані та продуктивні рішення.",
        cards: {
          frontend: {
            title: "Frontend",
            description: "Створюю інтуїтивні інтерфейси на сучасних фреймворках",
          },
          backend: {
            title: "Backend",
            description:
              "Розробляю надійні API та серверну логіку для навантажених систем",
          },
          devops: {
            title: "DevOps",
            description:
              "Налаштовую інфраструктуру та процеси деплою для стабільної роботи",
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
        "Fullstack розробник із досвідом створення сучасних веб-застосунків. Працюю з React, Next.js, Node.js, NestJS, Python, AI інтеграціями та React Native.",
      storyTitle: "Моя історія",
      storyParagraphs: [
        "Мій шлях у програмуванні почався в жовтні 2022 року з самостійного вивчення фронтенду та бекенду. Це був період глибокого занурення у веб-розробку: від HTML, CSS, JavaScript до сучасних технологій. Мене одразу захопила ідея створювати повноцінні застосунки від задуму до запуску.",
        "У 2023 році продовжив навчання у Яндекс.Практикум, де систематизував знання та отримав командний досвід. Спеціалізуюся на React, Next.js, Node.js, NestJS, Python, FastAPI та React Native.",
        "Активно розвиваюся у сфері AI та машинного навчання, інтегруючи мовні моделі (OpenAI API, Claude API) у свої проєкти. Працюю з LangChain, LlamaIndex, Qdrant та використовую spaCy і NLTK для обробки природної мови.",
        "Брав участь у командних проєктах для Яндекса (ProCharity, SkillSwapAPI), працював за Agile/Scrum, налаштовував моніторинг Prometheus + Grafana та інтегрував API Telegram і WhatsApp.",
        "Вважаю, що хороший код — це не лише функціональність, а й читабельність, масштабованість та продуктивність. Люблю вивчати нові технології й застосовувати їх у реальних проєктах, особливо в галузі AI.",
      ],
      achievementsTitle: "Досягнення",
      experienceTitle: "Досвід роботи",
      experienceSubtitle: "Мій професійний шлях у розробці",
    },
    achievements: {
      interactiveHint: "Наведіть або торкніться, щоб дізнатися більше",
      cards: {
        portfolio: {
          label: "Проєктів у портфоліо",
          details: [
            "20+ pet та комерційних застосунків",
            "Fullstack стек: React, Next.js, NestJS",
          ],
        },
        commercial: {
          label: "Комерційних проєктів",
          details: [
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM для Яндекса",
          ],
        },
        experience: {
          label: "Років досвіду",
          details: ["Самостійне навчання з 2022 року", "Комерційні задачі з 2024 року"],
        },
        technologies: {
          label: "Опрацьованих технологій",
          details: [
            "Frontend, backend, mobile та DevOps",
            "AI стек: LangChain, Qdrant, Prometheus",
          ],
        },
        languages: {
          label: "Мов програмування",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 для інтерфейсів"],
        },
        ai: {
          label: "AI інтеграцій",
          details: [
            "OpenAI та Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
        bots: {
          label: "Робота з ботами",
          details: [
            "Telegram Bot + вебхуки",
            "WhatsApp Business API",
            "Сповіщення в Driver-Pro та EVE Corp",
          ],
        },
        backendShare: {
          label: "Backend-коду в команді",
          details: ["SkillSwapAPI: CRUD, Auth, Tests", "NestJS + PostgreSQL + Prisma"],
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
        },
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
      brandDescription: "Fullstack розробник, що створює сучасні веб-застосунки",
      quickLinksTitle: "Швидкі посилання",
      quickLinks: {
        home: "Головна",
        about: "Про мене",
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
        role: "Fullstack Developer",
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
        copyright: "© 2025 Dmitry Baginskij",
      },
    },
    home: {
      hero: {
        position: "Fullstack Developer",
        name: "Dmitry",
        subtitle:
          "I build modern web applications with React, Next.js, Node.js, Nest.js, and React Native",
        primaryCta: "View projects",
        secondaryCta: "Contact me",
        tags: ["Frontend", "Backend", "Fullstack", "Mobile"],
      },
      stats: {
        title: "By the numbers",
        description: "Highlights of my work in web development",
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
          "I specialize in building modern web applications with cutting-edge technologies. Full-stack experience helps me deliver scalable and performant solutions.",
        cards: {
          frontend: {
            title: "Frontend",
            description: "Craft intuitive user interfaces with modern frameworks",
          },
          backend: {
            title: "Backend",
            description: "Build robust APIs and server logic for high-load systems",
          },
          devops: {
            title: "DevOps",
            description: "Configure infrastructure and CI/CD for reliable deployments",
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
        "Fullstack developer with experience building modern web applications. I focus on React, Next.js, Node.js, NestJS, Python, AI integrations, and React Native.",
      storyTitle: "My story",
      storyParagraphs: [
        "I started coding in October 2022 by teaching myself frontend and backend development. It was a deep dive into web technologies, from HTML/CSS/JavaScript to modern frameworks. From day one I was fascinated by building full products—from idea to deployment.",
        "In 2023 I joined Yandex Practicum to structure my knowledge and gain teamwork experience. I now specialize in React, Next.js, Node.js, NestJS, Python, FastAPI, and React Native.",
        "I'm actively growing in AI and machine learning, integrating language models (OpenAI API, Claude API) into products. I work with LangChain, LlamaIndex, Qdrant, and use spaCy/NLTK for natural language processing.",
        "Participated in Yandex team projects (ProCharity, SkillSwapAPI), worked in Agile/Scrum, implemented Prometheus + Grafana monitoring, and integrated Telegram/WhatsApp APIs.",
        "I believe good code means readability, scalability, and performance. I enjoy learning new technologies and applying them to real products, especially in AI and automation.",
      ],
      achievementsTitle: "Achievements",
      experienceTitle: "Work experience",
      experienceSubtitle: "My professional path in development",
    },
    achievements: {
      interactiveHint: "Hover or tap to learn more",
      cards: {
        portfolio: {
          label: "Portfolio projects",
          details: [
            "20+ pet and commercial apps",
            "Full-stack stack: React, Next.js, NestJS",
          ],
        },
        commercial: {
          label: "Commercial projects",
          details: [
            "Driver-Pro, Park-Pro, EVE Corp Manager",
            "ProCharity CRM for Yandex",
          ],
        },
        experience: {
          label: "Years of experience",
          details: ["Self-taught since 2022", "Commercial work since 2024"],
        },
        technologies: {
          label: "Technologies mastered",
          details: [
            "Frontend, backend, mobile & DevOps",
            "AI stack: LangChain, Qdrant, Prometheus",
          ],
        },
        languages: {
          label: "Programming languages",
          details: ["JavaScript / TypeScript / Python", "HTML5 + CSS3 for interfaces"],
        },
        ai: {
          label: "AI integrations",
          details: [
            "OpenAI and Claude API",
            "LangChain + LlamaIndex",
            "Qdrant + spaCy/NLTK",
          ],
        },
        bots: {
          label: "Bot experience",
          details: [
            "Telegram Bot + webhooks",
            "WhatsApp Business API",
            "Driver-Pro & EVE Corp notifications",
          ],
        },
        backendShare: {
          label: "Backend contribution",
          details: ["SkillSwapAPI: CRUD, Auth, Tests", "NestJS + PostgreSQL + Prisma"],
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
        },
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
      brandDescription: "Fullstack developer building modern web products",
      quickLinksTitle: "Quick links",
      quickLinks: {
        home: "Home",
        about: "About",
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
