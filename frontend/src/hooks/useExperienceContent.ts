"use client";

import { useMemo } from "react";
import { WorkExperience } from "@/types";
import { useLanguage } from "./useLanguage";
import { experienceContent } from "@/locales/experienceContent";

export const useExperienceContent = (experience: WorkExperience) => {
  const { language } = useLanguage();

  return useMemo(() => {
    const localized = experienceContent[language]?.[experience.id];

    return {
      company: localized?.company ?? experience.company,
      position: localized?.position ?? experience.position,
      period: localized?.period ?? experience.period,
      location: localized?.location ?? experience.location,
      description: localized?.description ?? experience.description,
      achievements: localized?.achievements ?? experience.achievements,
      responsibilities: localized?.responsibilities ?? experience.responsibilities,
    };
  }, [experience, language]);
};

