"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import { ProjectCard, ProjectModal } from "@/components/features/projects";
import { HeroSection, ContentSection, Button, StatsGrid, TranslatedText } from "@/components/ui";
import { useProjects } from "@/hooks/useProjects";
import { useTranslations } from "@/hooks/useTranslations";
import { Project } from "@/types";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categories, statuses, projectStats, getProjectsByCategoryAndStatus, projects } =
    useProjects();
  const translations = useTranslations();
  const projectsText = translations.projects;

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = getProjectsByCategoryAndStatus(
    selectedCategory,
    selectedStatus
  );

  return (
    <div className="min-h-screen">
      <HeroSection title={projectsText.pageTitle} subtitle={projectsText.pageSubtitle} />

      {/* Filter Section */}
      <ContentSection background="card" padding="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Фильтр по категориям */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Filter size={20} className="text-muted mr-2" />
              <TranslatedText className="text-muted font-medium">
                {projectsText.filters.categoriesTitle}:
              </TranslatedText>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "primary" : "outline"}
                  size="sm"
                >
                  <TranslatedText>{category.label}</TranslatedText>
                </Button>
              ))}
            </div>
          </div>

          {/* Фильтр по статусу */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Filter size={20} className="text-muted mr-2" />
              <TranslatedText className="text-muted font-medium">
                {projectsText.filters.statusesTitle}:
              </TranslatedText>
            </div>

            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  variant={selectedStatus === status.id ? "primary" : "outline"}
                  size="sm"
                >
                  <TranslatedText>{status.label}</TranslatedText>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </ContentSection>

      <ContentSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <TranslatedText as="p" className="text-muted text-center">
            {projectsText.results
              .replace("{{shown}}", filteredProjects.length.toString())
              .replace("{{total}}", projects.length.toString())}
          </TranslatedText>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} onViewDetails={handleViewProject} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-muted mb-4">
              <ExternalLink size={64} className="mx-auto" />
            </div>
            <TranslatedText as="h3" className="text-xl font-semibold text-muted mb-2">
              {projectsText.empty.title}
            </TranslatedText>
            <TranslatedText as="p" className="text-muted">
              {projectsText.empty.description}
            </TranslatedText>
          </motion.div>
        )}
      </ContentSection>

      <ContentSection title={projectsText.statsTitle} background="card">
        <StatsGrid stats={projectStats} />
      </ContentSection>

      {/* Модальное окно проекта */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
