"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Language } from "@/locales/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  isHydrated: boolean;
}

const DEFAULT_LANGUAGE: Language = "ru";

const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  isHydrated: false,
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

// Функция для чтения языка из cookies
const getLanguageFromCookie = (): Language | null => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "language" && (value === "ru" || value === "uk" || value === "en")) {
      return value as Language;
    }
  }
  return null;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Функция для безопасного чтения языка из localStorage или cookies
  const getInitialLanguage = (): Language => {
    // Пытаемся прочитать из cookies (приоритет) или localStorage (только на клиенте)
    if (typeof window !== "undefined") {
      // Сначала проверяем cookies
      const cookieLanguage = getLanguageFromCookie();
      if (cookieLanguage) {
        return cookieLanguage;
      }

      // Затем проверяем localStorage
      const storedLanguage = localStorage.getItem("language");
      if (
        storedLanguage &&
        (storedLanguage === "ru" || storedLanguage === "uk" || storedLanguage === "en")
      ) {
        return storedLanguage as Language;
      }
    }

    // Возвращаем язык по умолчанию
    return DEFAULT_LANGUAGE;
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [isHydrated, setIsHydrated] = useState(false);
  const hasSyncedRef = useRef(false);

  useEffect(() => {
    setIsHydrated(true);

    // Синхронизируем язык из cookies/localStorage при первой гидратации
    if (!hasSyncedRef.current && typeof window !== "undefined") {
      hasSyncedRef.current = true;

      // Проверяем cookies (приоритет)
      const cookieLanguage = getLanguageFromCookie();
      if (cookieLanguage) {
        setLanguageState((currentLang) => {
          if (cookieLanguage !== currentLang) {
            return cookieLanguage;
          }
          return currentLang;
        });
        return;
      }

      // Проверяем localStorage
      const storedLanguage = localStorage.getItem("language");
      if (
        storedLanguage &&
        (storedLanguage === "ru" || storedLanguage === "uk" || storedLanguage === "en")
      ) {
        const storedLang = storedLanguage as Language;
        setLanguageState((currentLang) => {
          if (storedLang !== currentLang) {
            return storedLang;
          }
          return currentLang;
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
      document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [language]);

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isHydrated,
    }),
    [language, setLanguage, isHydrated]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => useContext(LanguageContext);
