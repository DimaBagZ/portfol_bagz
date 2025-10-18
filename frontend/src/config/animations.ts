import { Variants } from "framer-motion";

// Базовые анимации
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

// Настройки переходов
export const transition = {
  duration: 0.6,
  ease: "easeInOut",
} as const;

export const fastTransition = {
  duration: 0.3,
  ease: "easeInOut",
} as const;

export const slowTransition = {
  duration: 0.8,
  ease: "easeInOut",
} as const;

// Задержки для последовательных анимаций
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) =>
  baseDelay * index;
