"use client";

import { ReactNode, ElementType } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface TranslatedTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}

/**
 * Компонент для отображения переведенного текста с правильной обработкой гидратации
 * Автоматически скрывает контент до гидратации, чтобы избежать ошибок гидратации
 */
const TranslatedText = ({
  children,
  as: Component = "span",
  className = "",
  ...props
}: TranslatedTextProps) => {
  const { isHydrated } = useLanguage();

  if (!isHydrated) {
    return (
      <Component className={className} suppressHydrationWarning {...props}>
        {""}
      </Component>
    );
  }

  return (
    <Component className={className} suppressHydrationWarning {...props}>
      {children}
    </Component>
  );
};

export default TranslatedText;
