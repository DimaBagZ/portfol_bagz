/**
 * Утилиты для расчета возраста и опыта работы
 */

/**
 * Склоняет слово "год" в зависимости от числа
 * @param age - возраст
 * @returns склоненное слово
 */
export const getAgeWord = (age: number): string => {
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "лет";
  }

  if (lastDigit === 1) {
    return "год";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "года";
  }

  return "лет";
};

/**
 * Склоняет слово "год" для опыта работы
 * @param years - количество лет
 * @returns склоненное слово
 */
export const getExperienceWord = (years: number): string => {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "лет";
  }

  if (lastDigit === 1) {
    return "год";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "года";
  }

  return "лет";
};

/**
 * Рассчитывает возраст на основе даты рождения
 * @param birthDate - дата рождения в формате "DD.MM.YYYY"
 * @returns возраст в годах
 */
export const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split(".").map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

/**
 * Рассчитывает опыт работы в годах на основе самой ранней даты работы
 * @param experienceData - массив опыта работы
 * @returns опыт в годах
 */
export const calculateWorkExperience = (
  experienceData: Array<{ period: string }>
): number => {
  const currentYear = new Date().getFullYear();
  let earliestYear = currentYear;

  experienceData.forEach((exp) => {
    // Извлекаем год начала работы из периода
    let startYear: number;

    if (exp.period.includes(" - ")) {
      // Формат "2020 - 2021" или "Август 2023 - настоящее время"
      const startPart = exp.period.split(" - ")[0];
      const yearMatch = startPart.match(/\d{4}/);
      if (yearMatch) {
        startYear = parseInt(yearMatch[0]);
      } else {
        // Если не найден год, пропускаем
        return;
      }
    } else {
      // Если нет разделителя, ищем год в строке
      const yearMatch = exp.period.match(/\d{4}/);
      if (yearMatch) {
        startYear = parseInt(yearMatch[0]);
      } else {
        // Если не найден год, пропускаем
        return;
      }
    }

    if (startYear < earliestYear) {
      earliestYear = startYear;
    }
  });

  return currentYear - earliestYear;
};

/**
 * Рассчитывает статистику проектов
 * @param projects - массив проектов
 * @returns объект со статистикой
 */
export const calculateProjectStats = (
  projects: Array<{
    status: string;
    technologies: string[];
    category: string;
    categories?: string[];
  }>
): {
  total: number;
  completed: number;
  inProgress: number;
  planned: number;
  totalTechnologies: number;
  uniqueTechnologies: string[];
  categories: string[];
} => {
  const total = projects.length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const inProgress = projects.filter((p) => p.status === "in-progress").length;
  const planned = projects.filter((p) => p.status === "planned").length;

  // Собираем все технологии
  const allTechnologies = projects.flatMap((p) => p.technologies);
  const uniqueTechnologies = [...new Set(allTechnologies)];

  // Собираем все категории
  const allCategories = projects.flatMap((p) => {
    if (p.categories && p.categories.length > 0) {
      return p.categories;
    }
    return [p.category];
  });
  const uniqueCategories = [...new Set(allCategories)];

  return {
    total,
    completed,
    inProgress,
    planned,
    totalTechnologies: allTechnologies.length,
    uniqueTechnologies,
    categories: uniqueCategories,
  };
};
