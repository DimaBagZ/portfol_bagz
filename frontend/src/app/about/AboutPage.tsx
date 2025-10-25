"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Users, Award } from "lucide-react";
import { HeroSection, ContentSection, Card, StatsGrid } from "@/components/ui";
import { ExperienceCard, ExperienceModal } from "@/components/features/experience";
import { ProjectModal } from "@/components/features/projects";
import { workExperience } from "@/data/experience";
import { projects } from "@/data/projects";
import { WorkExperience, Project } from "@/types";

export default function AboutPage() {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

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
    { icon: Code, label: "Проектов в портфолио", value: "20+", color: "text-primary" },
    { icon: Users, label: "Коммерческих проектов", value: "6", color: "text-success" },
    { icon: Award, label: "Лет в разработке", value: "2+", color: "text-accent" },
    { icon: Globe, label: "Технологий освоено", value: "25+", color: "text-warning" },
    { icon: Code, label: "Backend кода в команде", value: "30%", color: "text-primary" },
    { icon: Users, label: "CI/CD pipeline", value: "100%", color: "text-success" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="О себе"
        subtitle="Fullstack разработчик с опытом создания современных веб-приложений. Специализируюсь на React, Next.js, Node.js, NestJS и React Native."
      />

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <Card delay={0.2}>
            <h2 className="text-3xl font-bold text-primary mb-6">Моя история</h2>
            <div className="space-y-4 text-muted">
              <p>
                Начал свой путь в программировании в 2023 году, изучая fullstack
                разработку в Яндекс.Практикум. С самого начала меня привлекала возможность
                создавать полноценные приложения от идеи до развертывания.
              </p>
              <p>
                С 2024 года работаю как freelance fullstack разработчик, создавая
                коммерческие проекты для малого бизнеса. Специализируюсь на React,
                Next.js, Node.js, NestJS и React Native.
              </p>
              <p>
                Участвовал в командной разработке для Яндекса, работая над проектами
                ProCharity и SkillSwapAPI. Получил опыт работы в Agile/Scrum методологии с
                тим-лидами и фич-лидами.
              </p>
              <p>
                Считаю, что хороший код - это не только функциональность, но и читаемость,
                масштабируемость и производительность. Люблю изучать новые технологии и
                применять их в реальных проектах.
              </p>
            </div>
          </Card>

          {/* Achievements */}
          <Card delay={0.4}>
            <h2 className="text-3xl font-bold text-primary mb-6">Достижения</h2>
            <StatsGrid stats={achievements} columns={3} />
          </Card>
        </div>
      </ContentSection>

      <ContentSection
        title="Опыт работы"
        subtitle="Мой профессиональный путь в разработке"
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
