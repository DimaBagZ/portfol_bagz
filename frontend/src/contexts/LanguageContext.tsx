"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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
  initialLanguage?: Language;
}

export const LanguageProvider = ({
  children,
  initialLanguage,
}: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(
    initialLanguage ?? DEFAULT_LANGUAGE
  );
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
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
