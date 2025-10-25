"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Monitor } from "lucide-react";
import { ProjectCard, ProjectModal } from "@/components/features/projects";
import { HeroSection, ContentSection, Card, Button } from "@/components/ui";
import StatsSection from "@/components/ui/StatsSection";
import AnimatedGreeting from "@/components/ui/AnimatedGreeting";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types";

export default function HomePage() {
  const { featuredProjects } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            >
              Дмитрий Багинский
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center text-lg text-muted"
            >
              <span>Fullstack Developer</span>
            </motion.div>
          </motion.div>
        }
        subtitle="Создаю современные веб-приложения с использованием React, Next.js, Node.js, Nest.js и React Native"
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
              <span className="flex items-center">
                Посмотреть проекты
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
              <span className="flex items-center">
                <span className="mr-2">💬</span>
                Связаться со мной
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
          <span className="px-3 py-1 bg-primary/10 rounded-full">Frontend</span>
          <span className="px-3 py-1 bg-accent/10 rounded-full">Backend</span>
          <span className="px-3 py-1 bg-primary/10 rounded-full">Fullstack</span>
          <span className="px-3 py-1 bg-accent/10 rounded-full">Mobile</span>
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
            <h2 className="text-3xl font-bold text-primary mb-4">В цифрах</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Результаты моей работы в области веб-разработки
            </p>
          </motion.div>
          <StatsSection />
        </div>
      </motion.div>

      <ContentSection
        title="О моей работе"
        subtitle="Специализируюсь на создании современных веб-приложений с использованием передовых технологий. Опыт работы с полным стеком разработки позволяет создавать масштабируемые и производительные решения."
        background="card"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card delay={0}>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Frontend</h3>
              <p className="text-muted">
                Создаю интуитивные пользовательские интерфейсы с современными фреймворками
              </p>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="text-center">
              <div className="bg-success/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Backend</h3>
              <p className="text-muted">
                Разрабатываю надежные API и серверную логику для высоконагруженных систем
              </p>
            </div>
          </Card>

          <Card delay={0.4}>
            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">DevOps</h3>
              <p className="text-muted">
                Настраиваю инфраструктуру и процессы развертывания для стабильной работы
              </p>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title="Избранные проекты"
        subtitle="Примеры моих работ и достижений"
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
            Посмотреть все проекты
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
