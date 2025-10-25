// Google Analytics конфигурация
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Расширяем интерфейс Window для TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    ym: (id: string, action: string, config?: unknown) => void;
  }
}

// Функция для инициализации Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    // Загружаем Google Analytics скрипт
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Инициализируем gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Делаем gtag доступным глобально
    window.gtag = gtag;
  }
};

// Функция для отправки событий
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Функция для отслеживания просмотров страниц
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Yandex Metrica конфигурация
export const YANDEX_METRICA_ID = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || "";

// Функция для инициализации Yandex Metrica
export const initYandexMetrica = () => {
  if (typeof window !== "undefined" && YANDEX_METRICA_ID) {
    (function (
      m: unknown,
      e: Document,
      t: string,
      r: string,
      i: string,
      k?: HTMLElement,
      a?: HTMLElement
    ) {
      m[i] =
        m[i] ||
        function (...args: unknown[]) {
          (m[i].a = m[i].a || []).push(args);
        };
      m[i].l = 1 * new Date().getTime();
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t) as HTMLElement;
      a = e.getElementsByTagName(t)[0] as HTMLElement;
      (k as HTMLScriptElement).async = true;
      (k as HTMLScriptElement).src = r;
      a.parentNode?.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(YANDEX_METRICA_ID, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });
  }
};
