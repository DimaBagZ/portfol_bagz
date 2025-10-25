"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Award,
  Code,
  Briefcase,
} from "lucide-react";
import { Modal, Button } from "@/components/ui";
import { WorkExperience, Project } from "@/types";
import { projects } from "@/data/projects";
import Link from "next/link";

interface ExperienceModalProps {
  experience: WorkExperience | null;
  isOpen: boolean;
  onClose: () => void;
  onViewProject?: (project: Project) => void;
}

const ExperienceModal = ({
  experience,
  isOpen,
  onClose,
  onViewProject,
}: ExperienceModalProps) => {
  if (!experience) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" title={experience.position}>
      <div className="p-6 space-y-6">
        {/* Company Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary mb-2">{experience.company}</h2>
            <div className="flex flex-wrap gap-4 text-muted text-sm">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {experience.period}
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {experience.location}
              </div>
            </div>
          </div>
          {experience.companyUrl && (
            <Button
              href={experience.companyUrl}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-2" />
              Сайт компании
            </Button>
          )}
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
            <Briefcase size={20} className="mr-2" />
            Описание работы
          </h3>
          <p className="text-muted leading-relaxed">{experience.description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
              <Users size={20} className="mr-2" />
              Обязанности
            </h3>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted">{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
              <Award size={20} className="mr-2" />
              Достижения
            </h3>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
            <Code size={20} className="mr-2" />
            Используемые технологии
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {experience.relatedProjects && experience.relatedProjects.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
              <Briefcase size={20} className="mr-2" />
              Связанные проекты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {experience.relatedProjects.map((projectId, index) => {
                const project = projects.find((p) => p.id === projectId);
                if (!project) return null;

                return (
                  <motion.div
                    key={projectId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-theme rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary text-sm">
                        {project.title}
                      </h4>
                      <span className="text-xs text-muted bg-muted px-2 py-1 rounded">
                        {project.status === "completed"
                          ? "Завершен"
                          : project.status === "in-progress"
                          ? "В разработке"
                          : "Планируется"}
                      </span>
                    </div>
                    <p className="text-xs text-muted mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    {onViewProject ? (
                      <button
                        onClick={() => {
                          onViewProject(project);
                          onClose();
                        }}
                        className="inline-flex items-center text-xs text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink size={12} className="mr-1" />
                        Посмотреть проект
                      </button>
                    ) : (
                      <Link
                        href={`/projects#${project.id}`}
                        className="inline-flex items-center text-xs text-primary hover:text-accent transition-colors"
                        onClick={onClose}
                      >
                        <ExternalLink size={12} className="mr-1" />
                        Посмотреть проект
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-theme">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Calendar className="text-primary mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {experience.period.split(" - ")[0]}
            </div>
            <div className="text-sm text-muted">Начало работы</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Code className="text-success mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {experience.technologies.length}
            </div>
            <div className="text-sm text-muted">технологий</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Award className="text-accent mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {experience.achievements.length}
            </div>
            <div className="text-sm text-muted">достижений</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-4 bg-card rounded-lg border border-theme"
          >
            <Users className="text-warning mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-primary mb-1">
              {experience.responsibilities.length}
            </div>
            <div className="text-sm text-muted">обязанностей</div>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
};

export default ExperienceModal;
