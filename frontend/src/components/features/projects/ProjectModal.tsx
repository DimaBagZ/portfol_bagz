"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Users,
  Code,
  BookOpen,
  Server,
  Kanban,
} from "lucide-react";
import { Modal, Button, ImageGallery } from "@/components/ui";
import { Project } from "@/types";
import { FeatureBlock } from "./FeatureBlock";
import { featureBlocksConfig, filterFeaturesByCategory } from "./featureBlocksConfig";
import { useTranslations } from "@/hooks/useTranslations";
import { useProjectContent } from "@/hooks/useProjectContent";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const translations = useTranslations();
  const modalTexts = translations.projects.modal;
  const statusTexts = translations.projects.card.status;
  const localizedProject = useProjectContent(project);

  if (!project) return null;

  const categoryLabel =
    translations.projects.filters.categories[
      project.category as keyof typeof translations.projects.filters.categories
    ] || project.category;

  const formatDuration = (duration: string | undefined) => {
    const durationTexts = modalTexts.stats.duration;
    if (!duration || duration === "") {
      return { value: "—", label: durationTexts.label };
    }

    const numDuration = parseFloat(duration);
    if (isNaN(numDuration) || numDuration < 1) {
      return { value: "<1", label: durationTexts.label };
    }

    let unit = durationTexts.many;
    if (numDuration === 1) {
      unit = durationTexts.singular;
    } else if (durationTexts.few && numDuration < 5) {
      unit = durationTexts.few;
    }

    return {
      value: numDuration.toString(),
      label: unit,
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title={localizedProject.title}>
      <div className="p-6 space-y-6">
        {/* Project Screenshots Gallery */}
        <ImageGallery
          images={project.screenshots || []}
          alt={`${localizedProject.title} screenshots`}
        />

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {modalTexts.description}
              </h3>
              <p className="text-muted leading-relaxed">{localizedProject.description}</p>
            </div>
            {localizedProject.longDescription && (
              <p className="text-muted leading-relaxed">{localizedProject.longDescription}</p>
            )}

            {/* Features - Special layout for certain projects */}
            {localizedProject.features && localizedProject.features.length > 0 && (
              <div>
                {project &&
                (project.id === "20" ||
                  project.id === "19" ||
                  project.id === "14" ||
                  project.id === "1" ||
                  project.id === "3" ||
                  project.id === "5") ? (
                  <>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {modalTexts.advancedFeaturesTitle}
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      {Object.entries(featureBlocksConfig).map(([key, config], index) => {
                        const filteredFeatures = filterFeaturesByCategory(
                          localizedProject.features || [],
                          config.keywords
                        );
                        return (
                          <FeatureBlock
                            key={key}
                            title={config.title}
                            features={filteredFeatures}
                            color={config.color}
                            delay={index * 0.1}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {modalTexts.featuresTitle}
                    </h3>
                    <ul className="space-y-2">
                      {localizedProject.features!.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            {/* Status */}
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-theme">
              <span className="text-muted">{modalTexts.status}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "completed"
                    ? "bg-success/20 text-success"
                    : project.status === "in-progress"
                    ? "bg-warning/20 text-warning"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {project.status === "completed"
                  ? statusTexts.completed
                  : project.status === "in-progress"
                  ? statusTexts.progress
                  : statusTexts.planned}
              </span>
            </div>

            {/* Category */}
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-theme">
              <span className="text-muted">{modalTexts.category}</span>
              <span className="text-primary font-medium capitalize">
                {categoryLabel}
              </span>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                {modalTexts.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(localizedProject.technologies ?? project.technologies).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Calendar className="text-primary mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {new Date(project.createdAt).getFullYear()}
            </div>
            <div className="text-sm text-muted">{modalTexts.stats.year}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Clock className="text-success mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {formatDuration(project.duration).value}
            </div>
            <div className="text-sm text-muted">
              {formatDuration(project.duration).label}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Users className="text-accent mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {project.teamSize || "1"}
            </div>
            <div className="text-sm text-muted">{modalTexts.stats.team}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Code className="text-warning mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {project.technologies.length}
            </div>
            <div className="text-sm text-muted">{modalTexts.stats.technologies}</div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-theme">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="mr-2" />
              {modalTexts.buttons.viewCode}
            </Button>
          )}

          {project.liveUrl && (
            <div className="flex-1 flex items-center space-x-3">
              <Button
                href={project.liveUrl}
                className="flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} className="mr-2" />
                {project.id === "18"
                  ? modalTexts.buttons.openSite
                  : modalTexts.buttons.openProject}
              </Button>

              {/* Кнопка запуска сервера */}
              {project.serverUrl && (
                <a
                  href={project.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-warning/10 border border-warning/20 rounded-lg px-3 py-2 hover:bg-warning/20 transition-colors duration-200 cursor-pointer"
                >
                  <Server size={16} className="text-warning flex-shrink-0" />
                  <span className="text-sm text-warning">
                    {modalTexts.buttons.launchServer}
                  </span>
                </a>
              )}
            </div>
          )}

          {project.storybookUrl && (
            <Button
              href={project.storybookUrl}
              variant="outline"
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen size={20} className="mr-2" />
              {translations.projects.card.storybook}
            </Button>
          )}

          {project.kanbanUrl && (
            <Button
              href={project.kanbanUrl}
              variant="outline"
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Kanban size={20} className="mr-2" />
              {translations.projects.card.kanban}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
