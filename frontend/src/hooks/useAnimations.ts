import { useMemo } from "react";
import { getStaggerDelay } from "@/config/animations";

// Хук для создания последовательных анимаций
export const useStaggeredAnimation = (count: number, baseDelay: number = 0.1) => {
  return useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: getStaggerDelay(index, baseDelay) },
    }));
  }, [count, baseDelay]);
};

// Хук для создания анимаций с задержкой
export const useDelayedAnimation = (delay: number = 0) => {
  return useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay },
    }),
    [delay]
  );
};
