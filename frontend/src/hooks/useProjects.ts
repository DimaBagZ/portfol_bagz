import { useCallback, useMemo } from "react";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from "@/config/constants";
import { featuredProjectsIds } from "@/config/featuredProjects";
import { useTranslations } from "@/hooks/useTranslations";

// Хук для работы с проектами
export const useProjects = () => {
  const translations = useTranslations();

  const getTranslation = useCallback(
    (path: string) => {
      const keys = path.replace(/^\./, "").split(".");
      let current: any = translations;
      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          return path;
        }
      }
      return typeof current === "string" ? current : path;
    },
    [translations]
  );

  const featuredProjects = useMemo(() => {
    // Получаем проекты в указанном порядке по ID
    const orderedProjects = featuredProjectsIds
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean); // Убираем undefined

    return orderedProjects;
  }, []);

  const projectStats = useMemo(
    () => [
      {
        label: translations.projects.overviewStats.total,
        value: projects.length,
        color: "text-primary",
      },
      {
        label: translations.projects.overviewStats.featured,
        value: projects.filter((p) => p.featured).length,
        color: "text-success",
      },
      {
        label: translations.projects.overviewStats.demo,
        value: projects.filter((p) => p.liveUrl).length,
        color: "text-accent",
      },
      {
        label: translations.projects.overviewStats.technologies,
        value: new Set(projects.flatMap((p) => p.technologies)).size,
        color: "text-warning",
      },
    ],
    [translations]
  );

  const categories = useMemo(
    () =>
      PROJECT_CATEGORIES.map((category) => ({
        id: category.id,
        label: getTranslation(category.labelKey),
      })),
    [getTranslation]
  );

  const statuses = useMemo(
    () =>
      PROJECT_STATUSES.map((status) => ({
        id: status.id,
        label: getTranslation(status.labelKey),
      })),
    [getTranslation]
  );

  const getProjectsByCategory = (category: string) => {
    if (category === "all") return projects;
    return projects.filter((project) => {
      // Проверяем основную категорию
      if (project.category === category) return true;
      // Проверяем дополнительные категории
      if (project.categories && project.categories.includes(category)) return true;
      return false;
    });
  };

  const getProjectsByStatus = (status: string) => {
    if (status === "all") return projects;
    return projects.filter((project) => project.status === status);
  };

  const getProjectsByCategoryAndStatus = (category: string, status: string) => {
    let filteredProjects = projects;

    // Фильтр по категории
    if (category !== "all") {
      filteredProjects = filteredProjects.filter((project) => {
        // Проверяем основную категорию
        if (project.category === category) return true;
        // Проверяем дополнительные категории
        if (project.categories && project.categories.includes(category)) return true;
        return false;
      });
    }

    // Фильтр по статусу
    if (status !== "all") {
      filteredProjects = filteredProjects.filter((project) => project.status === status);
    }

    return filteredProjects;
  };

  return {
    projects,
    featuredProjects,
    projectStats,
    categories,
    statuses,
    getProjectsByCategory,
    getProjectsByStatus,
    getProjectsByCategoryAndStatus,
  };
};
