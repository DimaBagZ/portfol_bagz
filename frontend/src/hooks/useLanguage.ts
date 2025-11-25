"use client";

import { useLanguageContext } from "@/contexts/LanguageContext";

export const useLanguage = () => {
  const context = useLanguageContext();
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
