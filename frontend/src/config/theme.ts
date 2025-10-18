// Цветовая схема
export const COLORS = {
  primary: "#fbbf24", // Желтый
  primaryForeground: "#1a1a1a",
  secondary: "#1a1a1a", // Черный
  secondaryForeground: "#ffffff",
  accent: "#f59e0b", // Темно-желтый
  accentForeground: "#1a1a1a",
  muted: "#f3f4f6",
  mutedForeground: "#6b7280",
  border: "#e5e7eb",
  input: "#f9fafb",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

// Темная тема
export const DARK_COLORS = {
  primary: "#fbbf24", // Желтый остается ярким
  primaryForeground: "#0a0a0a",
  secondary: "#fafafa", // Белый в темной теме
  secondaryForeground: "#0a0a0a",
  accent: "#f59e0b", // Темно-желтый
  accentForeground: "#0a0a0a",
  muted: "#262626",
  mutedForeground: "#a3a3a3",
  border: "#404040",
  input: "#262626",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

// Размеры и отступы
export const SPACING = {
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "3rem", // 48px
  "2xl": "4rem", // 64px
  "3xl": "6rem", // 96px
} as const;

// Радиусы скругления
export const BORDER_RADIUS = {
  sm: "0.25rem", // 4px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  xl: "1rem", // 16px
  full: "9999px",
} as const;

// Тени
export const SHADOWS = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const;
