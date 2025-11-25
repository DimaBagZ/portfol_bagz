"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Monitor } from "lucide-react";
import { ProjectCard, ProjectModal } from "@/components/features/projects";
import { HeroSection, ContentSection, Card, Button, TranslatedText } from "@/components/ui";
import StatsSection from "@/components/ui/StatsSection";
import AnimatedGreeting from "@/components/ui/AnimatedGreeting";
import { useProjects } from "@/hooks/useProjects";
import { useTranslations } from "@/hooks/useTranslations";
import { Project } from "@/types";

export default function HomePage() {
  const { featuredProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const translations = useTranslations();
  const home = translations.home;

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedGreeting />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              suppressHydrationWarning
            >
              {home.hero.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center text-lg text-muted"
              suppressHydrationWarning
            >
              <span>{home.hero.position}</span>
            </motion.div>
          </motion.div>
        }
        subtitle={home.hero.subtitle}
        className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button href="/projects" size="lg" className="group">
              <span className="flex items-center" suppressHydrationWarning>
                {home.hero.primaryCta}
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button href="/contact" variant="outline" size="lg" className="group">
              <span className="flex items-center" suppressHydrationWarning>
                <span className="mr-2">💬</span>
                {home.hero.secondaryCta}
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted"
        >
          {home.hero.tags.map((tag, index) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full ${
                index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
              }`}
              suppressHydrationWarning
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </HeroSection>

      {/* Статистика */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="py-16 bg-gradient-to-r from-primary/5 to-accent/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center mb-12"
          >
            <TranslatedText as="h2" className="text-3xl font-bold text-primary mb-4">
              {home.stats.title}
            </TranslatedText>
            <TranslatedText as="p" className="text-lg text-muted max-w-2xl mx-auto">
              {home.stats.description}
            </TranslatedText>
          </motion.div>
          <StatsSection />
        </div>
      </motion.div>

      <ContentSection title={home.services.title} subtitle={home.services.subtitle} background="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card delay={0}>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-600" size={32} />
              </div>
              <TranslatedText as="h3" className="text-xl font-semibold text-primary mb-2">
                {home.services.cards.frontend.title}
              </TranslatedText>
              <TranslatedText as="p" className="text-muted">
                {home.services.cards.frontend.description}
              </TranslatedText>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="text-center">
              <div className="bg-success/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-success" size={32} />
              </div>
              <TranslatedText as="h3" className="text-xl font-semibold text-primary mb-2">
                {home.services.cards.backend.title}
              </TranslatedText>
              <TranslatedText as="p" className="text-muted">
                {home.services.cards.backend.description}
              </TranslatedText>
            </div>
          </Card>

          <Card delay={0.4}>
            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-accent" size={32} />
              </div>
              <TranslatedText as="h3" className="text-xl font-semibold text-primary mb-2">
                {home.services.cards.devops.title}
              </TranslatedText>
              <TranslatedText as="p" className="text-muted">
                {home.services.cards.devops.description}
              </TranslatedText>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title={home.featured.title}
        subtitle={home.featured.subtitle}
        background="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects
            .filter((project): project is Project => project !== undefined)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewProject}
              />
            ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/projects" size="lg">
            <span suppressHydrationWarning>{home.featured.viewAll}</span>
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </ContentSection>

      {/* Модальное окно проекта */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
