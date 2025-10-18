"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Users, Award } from "lucide-react";
import { HeroSection, ContentSection, Card, StatsGrid } from "@/components/ui";
import { ExperienceCard, ExperienceModal } from "@/components/features/experience";
import { workExperience } from "@/data/experience";
import { WorkExperience } from "@/types";

export default function About() {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewExperience = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  const achievements = [
    { icon: Code, label: "Успешно завершенных", value: "15+", color: "text-primary" },
    { icon: Users, label: "Довольных результатом", value: "12+", color: "text-success" },
    { icon: Award, label: "Опыта разработки", value: "3+", color: "text-accent" },
    { icon: Globe, label: "Изучено и применено", value: "20+", color: "text-warning" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="О себе"
        subtitle="Fullstack разработчик с 3+ годами опыта создания современных веб-приложений. Специализируюсь на React, Next.js, Node.js и Nest.js."
      />

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <Card delay={0.2}>
            <h2 className="text-3xl font-bold text-primary mb-6">Моя история</h2>
            <div className="space-y-4 text-muted">
              <p>
                Начал свой путь в программировании 3 года назад, изучая веб-разработку. С
                самого начала меня привлекала возможность создавать что-то полезное и
                видеть результат своей работы.
              </p>
              <p>
                Специализируюсь на fullstack разработке, что позволяет мне создавать
                полноценные приложения от идеи до развертывания. Люблю изучать новые
                технологии и применять их в реальных проектах.
              </p>
              <p>
                Считаю, что хороший код - это не только функциональность, но и читаемость,
                масштабируемость и производительность.
              </p>
            </div>
          </Card>

          {/* Achievements */}
          <Card delay={0.4}>
            <h2 className="text-3xl font-bold text-primary mb-6">Достижения</h2>
            <StatsGrid stats={achievements} columns={2} />
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
      />
    </div>
  );
}
