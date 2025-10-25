"use client";

import { useState, useEffect, useRef } from "react";
import { Project } from "@/types";
import {
  ExternalLink,
  Github,
  Eye,
  BookOpen,
  Server,
  AlertCircle,
  Kanban,
} from "lucide-react";
import { motion } from "framer-motion";
import { getImagePath } from "@/utils/imagePaths";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 300); // Задержка 300мс перед исчезновением
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="h-48 relative overflow-hidden">
        {isHydrated && project.image ? (
          <img
            src={getImagePath(project.image)}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
        )}
        <div className="absolute inset-0 bg-black/20" />

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.category === "frontend"
                ? "bg-primary/20 text-primary"
                : project.category === "backend"
                ? "bg-success/20 text-success"
                : project.category === "fullstack"
                ? "bg-accent/20 text-accent"
                : "bg-warning/20 text-warning"
            }`}
          >
            {project.category}
          </span>
        </div>

        <p className="text-muted mb-4">{project.description}</p>

        <div className="flex flex-col space-y-3 mt-auto">
          {/* Технологии */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Кнопка "Подробнее" */}
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(project)}
              className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              <Eye size={16} />
              <span>Подробнее</span>
            </button>
          )}

          {/* Ссылки на код и демо */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted hover:text-primary transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="text-sm">Код</span>
                </a>
              )}
              {project.liveUrl && (
                <div className="relative">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">
                      {project.id === "18" ? "Сайт" : "Демо"}
                    </span>
                  </a>

                  {/* Всплывающая подсказка */}
                  {showTooltip && project.serverUrl && (
                    <div
                      className="absolute bottom-8 left-0 z-[9999] bg-card border border-theme rounded-lg shadow-lg p-4 w-64"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex items-start space-x-2">
                        <AlertCircle
                          size={16}
                          className="text-warning mt-0.5 flex-shrink-0"
                        />
                        <div className="space-y-2">
                          <p className="text-sm text-muted">
                            Перед запуском демо необходимо запустить сервер
                          </p>
                          <a
                            href={project.serverUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs hover:bg-accent transition-colors duration-200"
                          >
                            <Server size={14} />
                            <span>Запустить сервер</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {project.storybookUrl && (
                <a
                  href={project.storybookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:text-primary transition-colors duration-200"
                >
                  <BookOpen size={16} />
                  <span className="text-sm">Storybook</span>
                </a>
              )}
              {project.serverUrl && (
                <a
                  href={project.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-success hover:text-primary transition-colors duration-200"
                >
                  <Server size={16} />
                  <span className="text-sm">Сервер</span>
                </a>
              )}
              {project.kanbanUrl && (
                <a
                  href={project.kanbanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-info hover:text-primary transition-colors duration-200"
                >
                  <Kanban size={16} />
                  <span className="text-sm">Канбан</span>
                </a>
              )}
            </div>

            {/* Статус проекта */}
            <div className="flex-shrink-0">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === "completed"
                    ? "bg-success/20 text-success border border-success/30"
                    : project.status === "in-progress"
                    ? "bg-warning/20 text-warning border border-warning/30"
                    : "bg-muted/20 text-muted-foreground border border-muted/30"
                }`}
              >
                {project.status === "completed"
                  ? "Завершен"
                  : project.status === "in-progress"
                  ? "В разработке"
                  : "Планируется"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
