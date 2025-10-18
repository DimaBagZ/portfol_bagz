"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import HeroSection from "@/components/ui/HeroSection";
import ContentSection from "@/components/ui/ContentSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types";

export default function Home() {
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
          <>
            Привет, я <span className="text-primary">Bagiskij</span>
          </>
        }
        subtitle="Fullstack разработчик, создающий современные веб-приложения с использованием React, Next.js, Node.js и Nest.js"
        className="bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/projects" size="lg">
            Посмотреть проекты
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Связаться со мной
          </Button>
        </motion.div>
      </HeroSection>

      <ContentSection
        title="О моей работе"
        subtitle="Специализируюсь на создании современных веб-приложений с использованием передовых технологий. Опыт работы с полным стеком разработки позволяет создавать масштабируемые и производительные решения."
        background="card"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card delay={0}>
            <div className="text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary" size={32} />
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
          {featuredProjects.map((project) => (
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
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
