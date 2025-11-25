"use client";

import { translations, type Language, type TranslationMap } from "@/locales/translations";
import { useLanguage } from "./useLanguage";

export const useTranslations = (): TranslationMap => {
  const { language } = useLanguage();
  return translations[language];
};

export const useTranslationValue = (path: string): string => {
  const { language } = useLanguage();
  const keys = path.split(".");
  let current: unknown = translations[language];

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof current === "string" ? current : path;
};

export const useLanguageOptions = () => {
  const { language, setLanguage } = useLanguage();
  return {
    currentLanguage: language as Language,
    setLanguage,
  };
};
