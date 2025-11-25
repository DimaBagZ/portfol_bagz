"use client";

import { useMemo } from "react";
import { WorkExperience } from "@/types";
import { useLanguage } from "./useLanguage";
import { experienceContent } from "@/locales/experienceContent";

export const useExperienceContent = (experience: WorkExperience | null) => {
  const { language } = useLanguage();

  return useMemo(() => {
    if (!experience) {
      return {
        company: "",
        position: "",
        period: "",
        location: "",
        description: "",
        achievements: [],
        responsibilities: [],
      };
    }
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

