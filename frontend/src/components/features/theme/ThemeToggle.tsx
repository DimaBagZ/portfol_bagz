"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, isHydrated, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === "dark";

  if (!isHydrated) {
    return <div className="theme-toggle theme-toggle--skeleton" aria-hidden="true" />;
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Переключить на ${isDark ? "светлую" : "тёмную"} тему`}
      aria-pressed={isDark}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__grid" />
        <span className="theme-toggle__glow" />

        <motion.span
          className="theme-toggle__thumb"
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 380, damping: 28, mass: 0.7 }
          }
          animate={{ x: isDark ? 22 : 0 }}
        >
          <motion.span
            className="theme-toggle__icon"
            key={theme}
            initial={reduceMotion ? false : { opacity: 0, rotate: -40, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 420, damping: 22 }
            }
          >
            {isDark ? <Moon size={14} strokeWidth={2.25} /> : <Sun size={14} strokeWidth={2.25} />}
          </motion.span>
        </motion.span>

        <span className="theme-toggle__hint theme-toggle__hint--sun">
          <Sun size={12} strokeWidth={2} />
        </span>
        <span className="theme-toggle__hint theme-toggle__hint--moon">
          <Moon size={12} strokeWidth={2} />
        </span>
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
