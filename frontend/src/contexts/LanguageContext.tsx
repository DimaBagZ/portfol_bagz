"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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
  // Функция для синхронного чтения языка на клиенте
  const getInitialLanguageSync = (): Language => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    // Проверяем cookies (приоритет)
    const cookieLanguage = getLanguageFromCookie();
    if (cookieLanguage) {
      return cookieLanguage;
    }

    // Проверяем localStorage
    try {
      const storedLanguage = localStorage.getItem("language");
      if (
        storedLanguage &&
        (storedLanguage === "ru" || storedLanguage === "uk" || storedLanguage === "en")
      ) {
        return storedLanguage as Language;
      }
    } catch (e) {
      // localStorage может быть недоступен в некоторых случаях
      console.warn("Failed to read from localStorage:", e);
    }

    return DEFAULT_LANGUAGE;
  };

  // Инициализируем с языком, прочитанным синхронно на клиенте
  const [language, setLanguageState] = useState<Language>(getInitialLanguageSync);
  const [isHydrated, setIsHydrated] = useState(false);
  const hasSyncedRef = useRef(false);

  // Используем useLayoutEffect для финальной синхронизации и установки isHydrated
  useLayoutEffect(() => {
    if (!hasSyncedRef.current && typeof window !== "undefined") {
      hasSyncedRef.current = true;

      // Функция для чтения языка
      const readLanguage = (): Language => {
        // Проверяем cookies (приоритет)
        const cookieLanguage = getLanguageFromCookie();
        if (cookieLanguage) {
          return cookieLanguage;
        }

        // Проверяем localStorage
        try {
          const storedLanguage = localStorage.getItem("language");
          if (
            storedLanguage &&
            (storedLanguage === "ru" ||
              storedLanguage === "uk" ||
              storedLanguage === "en")
          ) {
            return storedLanguage as Language;
          }
        } catch (e) {
          console.warn("Failed to read from localStorage:", e);
        }

        return DEFAULT_LANGUAGE;
      };

      const storedLang = readLanguage();
      // Обновляем язык только если он отличается от текущего
      setLanguageState((currentLang) => {
        if (storedLang !== currentLang) {
          return storedLang;
        }
        return currentLang;
      });
      setIsHydrated(true);
    }
  }, []);

  // Fallback для случаев, когда useLayoutEffect не сработал
  useEffect(() => {
    if (!isHydrated && typeof window !== "undefined" && !hasSyncedRef.current) {
      const cookieLanguage = getLanguageFromCookie();
      if (cookieLanguage) {
        setLanguageState(cookieLanguage);
      } else {
        try {
          const storedLanguage = localStorage.getItem("language");
          if (
            storedLanguage &&
            (storedLanguage === "ru" ||
              storedLanguage === "uk" ||
              storedLanguage === "en")
          ) {
            setLanguageState(storedLanguage as Language);
          }
        } catch (e) {
          console.warn("Failed to read from localStorage:", e);
        }
      }
      setIsHydrated(true);
    }
  }, [isHydrated]);

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
