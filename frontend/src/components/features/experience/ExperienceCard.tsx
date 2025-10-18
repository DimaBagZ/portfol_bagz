"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Eye } from "lucide-react";
import { WorkExperience } from "@/types";

interface ExperienceCardProps {
  experience: WorkExperience;
  onViewDetails?: (experience: WorkExperience) => void;
}

const ExperienceCard = ({ experience, onViewDetails }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-theme"
    >
      {/* Header */}
      <div className="p-6 border-b border-theme">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1">{experience.position}</h3>
            <h4 className="text-lg font-semibold text-accent mb-2">
              {experience.company}
            </h4>
          </div>
          {experience.companyUrl && (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted hover:text-primary hover:bg-muted transition-colors duration-200"
              title="Сайт компании"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-muted text-sm mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {experience.period}
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            {experience.location}
          </div>
        </div>

        <p className="text-muted leading-relaxed">{experience.description}</p>
      </div>

      {/* Technologies */}
      <div className="p-6 border-b border-theme">
        <h5 className="text-sm font-semibold text-primary mb-3">Технологии:</h5>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {experience.technologies.length > 6 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{experience.technologies.length - 6} еще
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6">
        {onViewDetails && (
          <button
            onClick={() => onViewDetails(experience)}
            className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
          >
            <Eye size={16} />
            <span>Подробнее о работе</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
