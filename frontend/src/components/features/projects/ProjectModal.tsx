"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Clock, Users, Code } from "lucide-react";
import { Modal, Button, ImageGallery } from "@/components/ui";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title={project.title}>
      <div className="p-6 space-y-6">
        {/* Project Screenshots Gallery */}
        <ImageGallery
          images={project.screenshots || []}
          alt={`${project.title} screenshots`}
        />

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Описание</h3>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Особенности</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            {/* Status */}
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-theme">
              <span className="text-muted">Статус</span>
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
                  ? "Завершен"
                  : project.status === "in-progress"
                  ? "В разработке"
                  : "Планируется"}
              </span>
            </div>

            {/* Category */}
            <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-theme">
              <span className="text-muted">Категория</span>
              <span className="text-primary font-medium capitalize">
                {project.category}
              </span>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Технологии</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
            <div className="text-sm text-muted">Год создания</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Clock className="text-success mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {project.duration || "3"}
            </div>
            <div className="text-sm text-muted">месяцев</div>
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
            <div className="text-sm text-muted">участников</div>
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
            <div className="text-sm text-muted">технологий</div>
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
              Посмотреть код
            </Button>
          )}

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} className="mr-2" />
              Открыть проект
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
