"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isHydrated: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Устанавливаем флаг гидратации
    setIsHydrated(true);

    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Проверяем системную тему
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setThemeState(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  useEffect(() => {
    // Применяем тему к документу только после гидратации
    if (isHydrated) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isHydrated]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isHydrated,
      toggleTheme,
      setTheme,
    }),
    [theme, isHydrated, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
