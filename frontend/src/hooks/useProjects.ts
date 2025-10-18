import { useMemo } from "react";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/config/constants";

// Хук для работы с проектами
export const useProjects = () => {
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

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
    return projects.filter((project) => project.category === category);
  };

  return {
    projects,
    featuredProjects,
    projectStats,
    categories: PROJECT_CATEGORIES,
    getProjectsByCategory,
  };
};
