// Простая утилита для объединения классов без внешних зависимостей

// Утилита для объединения классов Tailwind
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

// Утилита для создания условных классов
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

// Утилита для создания классов с префиксом
export function withPrefix(prefix: string, ...classes: string[]): string {
  return classes.map((cls) => `${prefix}-${cls}`).join(" ");
}
