"use client";

import { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Code,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Send,
} from "lucide-react";
import AvatarModal from "@/components/ui/AvatarModal";
import { skills } from "@/data/skills";
import { workExperience } from "@/data/experience";
import { projects } from "@/data/projects";
import { StatsCard } from "@/components/common";
import { useSidebar } from "@/contexts/SidebarContext";
import {
  calculateAge,
  calculateWorkExperience,
  calculateProjectStats,
  getAgeWord,
  getExperienceWord,
} from "@/utils/calculations";

const Sidebar = () => {
  const { isCollapsed, isMobile, isHydrated, toggleSidebar } = useSidebar();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  // Персональные данные
  const birthDate = "29.01.1994";
  const age = useMemo(() => calculateAge(birthDate), []);
  const workExp = useMemo(() => calculateWorkExperience(workExperience), []);
  const projectStats = useMemo(() => calculateProjectStats(projects), []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/DimaBagZ",
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "Telegram",
      href: "https://t.me/@DimaBagz",
      icon: Send,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      href: "mailto:DimaBagZ@yandex.ru",
      icon: Mail,
      color: "hover:text-red-600",
    },
  ];

  const skillCategories = {
    frontend: { label: "Frontend", icon: Monitor, color: "text-blue-600" },
    backend: { label: "Backend", icon: Database, color: "text-green-600" },
    mobile: { label: "Mobile", icon: Smartphone, color: "text-purple-600" },
    tools: { label: "DevOps & Tools", icon: Globe, color: "text-orange-600" },
    languages: { label: "Languages", icon: Code, color: "text-red-600" },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <>
      {/* Overlay for mobile and desktop when sidebar is open */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-[45]"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? (isMobile ? 320 : 80) : 320,
          x: isMobile && isCollapsed ? -320 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-theme z-50 shadow-lg overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div
            className={`${
              isCollapsed && !isMobile ? "p-2" : "p-6"
            } border-b border-theme`}
          >
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className={`relative ${isCollapsed && !isMobile ? "mb-2" : "mb-4"}`}>
                <div
                  className={`${
                    isCollapsed && !isMobile ? "w-12 h-12" : "w-24 h-24"
                  } rounded-full overflow-hidden border-2 border-primary/20 ${
                    isCollapsed && !isMobile
                      ? "cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200"
                      : !isCollapsed || isMobile
                      ? "cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200"
                      : ""
                  }`}
                  onClick={
                    isCollapsed && !isMobile
                      ? toggleSidebar
                      : !isCollapsed || isMobile
                      ? () => setIsAvatarModalOpen(true)
                      : undefined
                  }
                  title={
                    isCollapsed && !isMobile
                      ? "Нажмите для открытия профиля"
                      : !isCollapsed || isMobile
                      ? "Нажмите для увеличения фото"
                      : undefined
                  }
                >
                  <img
                    src={
                      isCollapsed && !isMobile
                        ? "/images/avatar/avatar.svg"
                        : "/images/avatar/avatar.png"
                    }
                    alt="Дмитрий Багинский"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 ${
                    isCollapsed && !isMobile ? "w-4 h-4" : "w-6 h-6"
                  } bg-success rounded-full border-2 border-card`}
                ></div>
              </div>

              {/* Name and Title */}
              <AnimatePresence>
                {(!isCollapsed || isMobile) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <h2 className="text-xl font-bold text-primary mb-1">
                      Дмитрий Багинский
                    </h2>
                    <p className="text-sm text-muted mb-1">Fullstack Developer</p>
                    <p className="text-xs text-muted mb-2">
                      {age} {getAgeWord(age)}
                    </p>
                    <div className="flex items-center justify-center text-xs text-muted mb-3">
                      <MapPin size={12} className="mr-1" />
                      Москва, Россия
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Links */}
              <div
                className={`flex ${
                  isCollapsed && !isMobile ? "flex-col space-y-2" : "space-x-3"
                }`}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted ${social.color} transition-colors duration-200`}
                      title={isCollapsed && !isMobile ? social.name : undefined}
                    >
                      <Icon size={isCollapsed && !isMobile ? 20 : 18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`flex-1 overflow-y-auto ${
              isCollapsed && !isMobile ? "p-2" : "p-6"
            }`}
          >
            <AnimatePresence>
              {(!isCollapsed || isMobile) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {/* Stats Card */}
                  <div className="mb-6">
                    <StatsCard projectStats={projectStats} workExperience={workExp} />
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-4">Навыки</h3>

                  {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                    const categoryInfo =
                      skillCategories[category as keyof typeof skillCategories];
                    const Icon = categoryInfo.icon;

                    return (
                      <div key={category} className="mb-6">
                        <div className="flex items-center mb-3">
                          <Icon size={16} className={`mr-2 ${categoryInfo.color}`} />
                          <h4 className="text-sm font-medium text-muted">
                            {categoryInfo.label}
                          </h4>
                        </div>

                        <div className="space-y-2">
                          {categorySkills.map((skill) => (
                            <div
                              key={skill.name}
                              className="flex items-center justify-between"
                            >
                              <span className="text-xs text-muted">{skill.name}</span>
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < skill.level ? "bg-primary" : "bg-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Collapsed Skills Progress */}
            <AnimatePresence>
              {isCollapsed && !isMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center space-y-3"
                >
                  {Object.entries(skillCategories).map(([category, categoryInfo]) => {
                    const Icon = categoryInfo.icon;
                    const categorySkills = groupedSkills[category] || [];
                    const avgLevel =
                      categorySkills.length > 0
                        ? categorySkills.reduce((sum, skill) => sum + skill.level, 0) /
                          categorySkills.length
                        : 0;

                    return (
                      <div
                        key={category}
                        className="flex flex-col items-center"
                        title={`${categoryInfo.label}: ${
                          categorySkills.length
                        } навыков, средний уровень ${avgLevel.toFixed(1)}/5`}
                      >
                        <Icon size={18} className={`${categoryInfo.color} mb-1`} />
                        <div className="w-1 h-6 bg-muted rounded-full">
                          <div
                            className="bg-primary rounded-full transition-all duration-500"
                            style={{
                              height: `${(avgLevel / 5) * 100}%`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-muted mt-1">
                          {categorySkills.length}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div
            className={`${
              isCollapsed && !isMobile ? "p-2" : "p-4"
            } border-t border-theme`}
          >
            <AnimatePresence>
              {(!isCollapsed || isMobile) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center text-xs text-muted mb-2">
                    <Calendar size={12} className="mr-1" />
                    Опыт: {workExp}+ {getExperienceWord(workExp)}
                  </div>
                  <div className="flex items-center justify-center text-xs text-muted mb-2">
                    <Code size={12} className="mr-1" />
                    Проектов: {projectStats.total}
                  </div>
                  <p className="text-xs text-muted">© 2024 Дмитрий Багинский</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>

      {/* Модальное окно для увеличенного аватара */}
      <AvatarModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
      />
    </>
  );
};

export default memo(Sidebar);
