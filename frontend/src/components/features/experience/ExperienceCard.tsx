"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Eye } from "lucide-react";
import { WorkExperience } from "@/types";
import { useTranslations } from "@/hooks/useTranslations";
import { useExperienceContent } from "@/hooks/useExperienceContent";
import { useLanguage } from "@/hooks/useLanguage";
import { Button, TranslatedText } from "@/components/ui";

interface ExperienceCardProps {
  experience: WorkExperience;
  onViewDetails?: (experience: WorkExperience) => void;
}

const ExperienceCard = ({ experience, onViewDetails }: ExperienceCardProps) => {
  const translations = useTranslations();
  const { isHydrated } = useLanguage();
  const cardTexts = translations.experience.card;
  const localizedExperience = useExperienceContent(experience);
  const { position, company, description, period, location } = localizedExperience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ui-card ui-card--hover h-full flex flex-col"
    >
      <span className="ui-card__grid" aria-hidden="true" />
      <span className="ui-card__glow" aria-hidden="true" />

      <div className="ui-card__body flex flex-col flex-1 !pb-0">
        <div className="flex items-start justify-between mb-3 min-h-[3.5rem]">
          <div className="flex-1 min-w-0">
            <TranslatedText as="h3" className="text-xl font-bold text-primary mb-1">
              {position}
            </TranslatedText>
            <TranslatedText as="h4" className="text-lg font-semibold text-accent mb-2">
              {company}
            </TranslatedText>
          </div>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-primary hover:bg-muted/40 transition-colors duration-200 shrink-0"
              title={isHydrated ? cardTexts.companyTooltip : ""}
              suppressHydrationWarning
            >
              <ExternalLink size={20} />
            </a>
          ) : (
            <span className="w-9 shrink-0" aria-hidden="true" />
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-muted text-sm mb-4">
          <div className="flex items-center" suppressHydrationWarning>
            <Calendar size={16} className="mr-2 shrink-0" />
            <TranslatedText>{period}</TranslatedText>
          </div>
          <div className="flex items-center" suppressHydrationWarning>
            <MapPin size={16} className="mr-2 shrink-0" />
            <TranslatedText>{location}</TranslatedText>
          </div>
        </div>

        <TranslatedText as="p" className="text-muted leading-relaxed flex-1 mb-5">
          {description}
        </TranslatedText>
      </div>

      <div className="px-6 pb-5 border-t border-theme/60 pt-5 relative z-[1]">
        <h5 className="text-sm font-semibold text-primary mb-3" suppressHydrationWarning>
          {cardTexts.technologies}:
        </h5>
        <div className="flex flex-wrap gap-2 min-h-[3.25rem] content-start">
          {experience.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
          {experience.technologies.length > 6 && (
            <span className="tech-chip" suppressHydrationWarning>
              +{experience.technologies.length - 6} {cardTexts.more}
            </span>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 mt-auto relative z-[1]">
        {onViewDetails && (
          <Button size="sm" className="w-full" onClick={() => onViewDetails(experience)}>
            <Eye size={16} />
            <span>{cardTexts.viewDetails}</span>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
