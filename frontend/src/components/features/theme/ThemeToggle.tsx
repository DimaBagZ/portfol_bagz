"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, isHydrated, toggleTheme } = useTheme();

  // Показываем кнопку только после гидратации
  if (!isHydrated) {
    return (
      <div className="relative p-2 rounded-lg bg-muted">
        <div className="w-6 h-6" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 group"
      aria-label={`Переключить на ${theme === "light" ? "темную" : "светлую"} тему`}
    >
      <div className="relative w-6 h-6">
        <Sun
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          } text-primary`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-75"
          } text-primary`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
