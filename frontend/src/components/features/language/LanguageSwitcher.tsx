"use client";

import { memo } from "react";
import { languagesMeta } from "@/locales/translations";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { language, setLanguage, isHydrated } = useLanguage();

  if (!isHydrated) {
    return (
      <div
        className="inline-flex items-center gap-1 text-xs text-muted uppercase"
        aria-hidden="true"
      >
        {languagesMeta.map((lang) => (
          <span key={lang.code} className="px-2 py-1 rounded-md bg-muted/50">
            {lang.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full bg-card border border-theme/60 p-1"
      role="group"
      aria-label="Language switcher"
    >
      {languagesMeta.map((lang) => {
        const isActive = lang.code === language;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted hover:text-primary"
            }`}
            type="button"
            aria-pressed={isActive}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default memo(LanguageSwitcher);
