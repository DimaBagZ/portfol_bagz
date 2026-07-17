"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { languagesMeta } from "@/locales/translations";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { language, setLanguage, isHydrated } = useLanguage();
  const reduceMotion = useReducedMotion();

  if (!isHydrated) {
    return <div className="lang-switch lang-switch--skeleton" aria-hidden="true" />;
  }

  return (
    <div className="lang-switch" role="group" aria-label="Language switcher">
      <span className="lang-switch__track">
        <span className="lang-switch__grid" aria-hidden="true" />
        <span className="lang-switch__glow" aria-hidden="true" />

        {languagesMeta.map((lang) => {
          const isActive = lang.code === language;

          return (
            <motion.button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`lang-switch__btn${isActive ? " is-active" : ""}`}
              aria-pressed={isActive}
              aria-label={lang.name}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              {isActive && (
                <motion.span
                  layoutId="lang-switch-thumb"
                  className="lang-switch__thumb"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 30, mass: 0.65 }
                  }
                />
              )}
              <span className="lang-switch__label">{lang.label}</span>
            </motion.button>
          );
        })}
      </span>
    </div>
  );
};

export default memo(LanguageSwitcher);
