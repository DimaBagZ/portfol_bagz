"use client";

import { useMemo } from "react";
import { Project } from "@/types";
import { useLanguage } from "./useLanguage";
import { projectContent } from "@/locales/projectContent";

export const useProjectContent = (project: Project) => {
  const { language } = useLanguage();

  return useMemo(() => {
    const localized = projectContent[language]?.[project.id] ?? {};
    return {
      title: localized.title ?? project.title,
      description: localized.description ?? project.description,
      longDescription: localized.longDescription ?? project.longDescription,
      features: localized.features ?? project.features,
      technologies: localized.technologies ?? project.technologies,
    };
  }, [language, project]);
};

