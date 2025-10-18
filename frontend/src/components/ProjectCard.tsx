"use client";

import { Project } from "@/types";
import { ExternalLink, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-primary to-accent relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <Github size={16} className="text-white" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
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

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col space-y-3">
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Демо</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
