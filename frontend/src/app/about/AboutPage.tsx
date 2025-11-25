"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Users, Award, Bot, Brain, Languages } from "lucide-react";
import { HeroSection, ContentSection, Card, StatsGrid } from "@/components/ui";
import { ExperienceCard, ExperienceModal } from "@/components/features/experience";
import { ProjectModal } from "@/components/features/projects";
import { workExperience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { useTranslations } from "@/hooks/useTranslations";
import { WorkExperience, Project } from "@/types";
import {
  calculateWorkExperience,
  calculateProjectStats,
  calculateProgrammingLanguages,
  calculateAIIntegrations,
  calculateBotProjects,
} from "@/utils/calculations";

export default function AboutPage() {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const translations = useTranslations();
  const about = translations.about;
  const achievementsLabels = translations.achievements.cards;

  // Рассчитываем реальные данные
  const workExp = useMemo(() => calculateWorkExperience(workExperience), []);
  const projectStats = useMemo(() => calculateProjectStats(projects), []);
  const programmingLanguages = useMemo(
    () => calculateProgrammingLanguages(skills),
    []
  );
  const aiIntegrations = useMemo(() => calculateAIIntegrations(projects), []);
  const botProjects = useMemo(() => calculateBotProjects(projects), []);

  // Подсчитываем коммерческие проекты (featured проекты)
  const commercialProjects = useMemo(
    () => projects.filter((p) => p.featured).length,
    []
  );

  const handleViewExperience = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const achievements = [
    {
      icon: Code,
      label: achievementsLabels.portfolio.label,
      value: projectStats.total,
      suffix: "+",
      color: "text-primary",
      useCounter: true,
      details: achievementsLabels.portfolio.details,
    },
    {
      icon: Users,
      label: achievementsLabels.commercial.label,
      value: commercialProjects,
      suffix: "",
      color: "text-success",
      useCounter: true,
      details: achievementsLabels.commercial.details,
    },
    {
      icon: Award,
      label: achievementsLabels.experience.label,
      value: workExp,
      suffix: "+",
      color: "text-accent",
      useCounter: true,
      details: achievementsLabels.experience.details,
    },
    {
      icon: Globe,
      label: achievementsLabels.technologies.label,
      value: projectStats.uniqueTechnologies.length,
      suffix: "+",
      color: "text-warning",
      useCounter: true,
      details: achievementsLabels.technologies.details,
    },
    {
      icon: Languages,
      label: achievementsLabels.languages.label,
      value: programmingLanguages,
      suffix: "",
      color: "text-primary",
      useCounter: true,
      details: achievementsLabels.languages.details,
    },
    {
      icon: Brain,
      label: achievementsLabels.ai.label,
      value: aiIntegrations,
      suffix: "+",
      color: "text-success",
      useCounter: true,
      details: achievementsLabels.ai.details,
    },
    {
      icon: Bot,
      label: achievementsLabels.bots.label,
      value: botProjects,
      suffix: "",
      color: "text-accent",
      useCounter: true,
      details: achievementsLabels.bots.details,
    },
    {
      icon: Code,
      label: achievementsLabels.backendShare.label,
      value: "30%",
      suffix: "",
      color: "text-primary",
      useCounter: false,
      details: achievementsLabels.backendShare.details,
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title={translations.header.nav.about}
        subtitle={about.heroSubtitle}
      />

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <Card delay={0.2}>
            <h2 className="text-3xl font-bold text-primary mb-6">{about.storyTitle}</h2>
            <div className="space-y-4 text-muted">
              {about.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card delay={0.4} className="flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-2 md:mb-4">
              {about.achievementsTitle}
            </h2>
            <p className="text-sm text-muted mb-4">{translations.achievements.interactiveHint}</p>
            <div className="flex-1">
              <StatsGrid stats={achievements} columns={4} />
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title={about.experienceTitle}
        subtitle={about.experienceSubtitle}
        background="card"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workExperience.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard
                experience={experience}
                onViewDetails={handleViewExperience}
              />
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Модальное окно опыта работы */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewProject={handleViewProject}
      />

      {/* Модальное окно проекта */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}
