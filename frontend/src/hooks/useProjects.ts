import { useMemo } from "react";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from "@/config/constants";
import { featuredProjectsIds } from "@/config/featuredProjects";

// Хук для работы с проектами
export const useProjects = () => {
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
        label: "Всего проектов",
        value: projects.length,
        color: "text-primary",
      },
      {
        label: "Избранных",
        value: projects.filter((p) => p.featured).length,
        color: "text-success",
      },
      {
        label: "С демо",
        value: projects.filter((p) => p.liveUrl).length,
        color: "text-accent",
      },
      {
        label: "Технологий",
        value: new Set(projects.flatMap((p) => p.technologies)).size,
        color: "text-warning",
      },
    ],
    []
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
    categories: PROJECT_CATEGORIES,
    statuses: PROJECT_STATUSES,
    getProjectsByCategory,
    getProjectsByStatus,
    getProjectsByCategoryAndStatus,
  };
};
