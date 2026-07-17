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
  Lock,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImagePath } from "@/utils/imagePaths";
import { useProjectContent } from "@/hooks/useProjectContent";
import { useTranslations } from "@/hooks/useTranslations";
import { Button } from "@/components/ui";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const localizedProject = useProjectContent(project);
  const translations = useTranslations();
  const cardTexts = translations.projects.card;

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
      className="ui-card ui-card--hover ui-card--project flex flex-col h-full overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden">
        {isHydrated && project.image ? (
          <img
            src={getImagePath(project.image)}
            alt={localizedProject.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="tech-badge tech-badge--compact">{cardTexts.featured}</span>
          </div>
        )}
      </div>

      <div className="ui-card__body flex flex-col flex-grow !pt-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-xl font-semibold text-primary">{localizedProject.title}</h3>
          <span className="tech-badge tech-badge--compact shrink-0">
            {translations.projects.filters.categories[
              project.category as keyof typeof translations.projects.filters.categories
            ] || project.category}
          </span>
        </div>

        <p className="text-muted mb-4">{localizedProject.description}</p>

        <div className="flex flex-col space-y-3 mt-auto">
          <div className="flex flex-wrap gap-2">
            {(localizedProject.technologies ?? project.technologies).map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>

          {onViewDetails && (
            <Button size="sm" className="w-full" onClick={() => onViewDetails(project)}>
              <Eye size={16} />
              <span>{cardTexts.viewDetails}</span>
            </Button>
          )}

          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {project.isNda && (
                <>
                  <span className="project-link-btn project-link-btn--muted" title="NDA">
                    <Lock size={14} />
                    <span>{cardTexts.nda}</span>
                  </span>
                  <Link href="/contact" className="project-link-btn project-link-btn--accent">
                    <MessageCircle size={14} />
                    <span>{cardTexts.onRequest}</span>
                  </Link>
                </>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <Github size={14} />
                  <span>{cardTexts.code}</span>
                </a>
              )}
              {project.liveUrl && (
                <div className="project-card-tooltip-anchor">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn project-link-btn--accent"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ExternalLink size={14} />
                    <span>
                      {project.id === "18" || project.id === "25"
                        ? cardTexts.site
                        : cardTexts.demo}
                    </span>
                  </a>

                  {showTooltip && project.serverUrl && (
                    <div
                      className="project-card-tooltip"
                      role="tooltip"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <AlertCircle size={16} className="text-warning mt-0.5 shrink-0" />
                      <div className="space-y-2 min-w-0">
                        <p className="text-sm text-muted">{cardTexts.serverTooltip}</p>
                        <Button
                          size="sm"
                          href={project.serverUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Server size={14} />
                          <span>{cardTexts.launchServer}</span>
                        </Button>
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
                  className="project-link-btn"
                >
                  <BookOpen size={14} />
                  <span>{cardTexts.storybook}</span>
                </a>
              )}
              {project.serverUrl && (
                <a
                  href={project.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <Server size={14} />
                  <span>{cardTexts.server}</span>
                </a>
              )}
              {project.kanbanUrl && (
                <a
                  href={project.kanbanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <Kanban size={14} />
                  <span>{cardTexts.kanban}</span>
                </a>
              )}
            </div>

            <span
              className={`tech-badge tech-badge--compact shrink-0 ${
                project.status === "completed"
                  ? "tech-badge--success"
                  : project.status === "in-progress"
                  ? "tech-badge--warning"
                  : ""
              }`}
            >
              {project.status === "completed"
                ? cardTexts.status.completed
                : project.status === "in-progress"
                ? cardTexts.status.progress
                : cardTexts.status.planned}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
