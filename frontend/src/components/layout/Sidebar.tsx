"use client";

import { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
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
import { getImagePath } from "@/utils/imagePaths";
import { calculateAge, calculateWorkExperience, calculateProjectStats } from "@/utils/calculations";
import { useTranslations } from "@/hooks/useTranslations";

const Sidebar = () => {
  const { isCollapsed, isMobile, isHydrated, toggleSidebar } = useSidebar();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const translations = useTranslations();

  // Вычисляемые значения для упрощения условий
  const isCompactMode = isCollapsed && !isMobile;
  const isExpanded = !isCollapsed || isMobile;
  const hiddenUntilHydrated = !isHydrated
    ? { visibility: "hidden" as const, height: 0, overflow: "hidden" as const }
    : undefined;

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
      href: "https://t.me/DimaBagz",
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

  const skillCategories = useMemo(
    () => ({
      frontend: {
        label: translations.sidebar.skills.categories.frontend,
        icon: Monitor,
        color: "text-blue-600",
      },
      backend: {
        label: translations.sidebar.skills.categories.backend,
        icon: Database,
        color: "text-green-600",
      },
      mobile: {
        label: translations.sidebar.skills.categories.mobile,
        icon: Smartphone,
        color: "text-purple-600",
      },
      tools: {
        label: translations.sidebar.skills.categories.tools,
        icon: Globe,
        color: "text-orange-600",
      },
      languages: {
        label: translations.sidebar.skills.categories.languages,
        icon: Code,
        color: "text-red-600",
      },
    }),
    [translations]
  );

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
        {!isCollapsed && isHydrated && (
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
          opacity: isHydrated ? 1 : 0,
        }}
        transition={{ duration: isHydrated ? 0.3 : 0, ease: "easeInOut" }}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-theme z-50 shadow-lg overflow-hidden"
        style={{ visibility: isHydrated ? "visible" : "hidden" }}
        suppressHydrationWarning
      >
        <div className="flex flex-col h-full" suppressHydrationWarning>
          {/* Profile Section */}
          <div
            className={`${isCompactMode ? "p-2" : "p-6"} border-b border-theme`}
            suppressHydrationWarning
          >
            <div className="flex flex-col items-center" suppressHydrationWarning>
              {/* Avatar */}
              <div
                className={`relative ${isCompactMode ? "mb-2" : "mb-4"}`}
                suppressHydrationWarning
              >
                <div
                  className={`${
                    isCompactMode ? "w-12 h-12" : "w-24 h-24"
                  } rounded-full overflow-hidden border-2 border-primary/20 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200`}
                  onClick={
                    isCompactMode ? toggleSidebar : () => setIsAvatarModalOpen(true)
                  }
                  title={
                    isCompactMode
                      ? translations.sidebar.profile.compactAvatarTooltip
                      : translations.sidebar.profile.expandedAvatarTooltip
                  }
                  suppressHydrationWarning
                >
                  <img
                    src={
                      isCompactMode
                        ? getImagePath("/images/avatar/avatar.svg")
                        : getImagePath("/images/avatar/avatar.png")
                    }
                    alt={translations.sidebar.profile.fullName}
                    className="w-full h-full object-cover"
                    suppressHydrationWarning
                  />
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 ${
                    isCompactMode ? "w-4 h-4" : "w-6 h-6"
                  } bg-success rounded-full border-2 border-card`}
                  suppressHydrationWarning
                />
              </div>

              {/* Name and Title */}
              <div suppressHydrationWarning style={hiddenUntilHydrated}>
                {isHydrated ? (
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-center"
                        suppressHydrationWarning
                      >
                        <h2 className="text-xl font-bold text-primary mb-1">
                          {translations.sidebar.profile.firstName}
                        </h2>
                        <p className="text-sm text-muted mb-1">
                          {translations.sidebar.profile.role}
                        </p>
                        <p className="text-xs text-muted mb-2">
                          {translations.sidebar.profile.ageLabel.replace(
                            "{years}",
                            age.toString()
                          )}
                        </p>
                        <div className="flex items-center justify-center text-xs text-muted mb-3">
                          <MapPin size={12} className="mr-1" />
                          {translations.sidebar.profile.location}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <div
                    className="text-center"
                    style={{ minHeight: "100px" }}
                    suppressHydrationWarning
                  />
                )}
              </div>

              {/* Social Links */}
              <div
                className={`flex ${isCompactMode ? "flex-col space-y-2" : "space-x-3"}`}
                suppressHydrationWarning
                style={hiddenUntilHydrated}
              >
                {isHydrated
                  ? socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-muted ${social.color} transition-colors duration-200`}
                          title={isCompactMode ? social.name : undefined}
                          suppressHydrationWarning
                        >
                          <Icon size={isCompactMode ? 20 : 18} />
                        </a>
                      );
                    })
                  : socialLinks.map((_, index) => (
                      <div
                        key={index}
                        style={{ width: "18px", height: "18px" }}
                        suppressHydrationWarning
                      />
                    ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`flex-1 overflow-y-auto ${isCompactMode ? "p-2" : "p-6"}`}
            suppressHydrationWarning
          >
            <div suppressHydrationWarning>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    suppressHydrationWarning
                  >
                    {/* Stats Card */}
                    <div className="mb-6">
                      <StatsCard projectStats={projectStats} />
                    </div>

                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {translations.sidebar.skills.title}
                    </h3>

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
            </div>

            {/* Collapsed Skills Progress */}
            <AnimatePresence>
              {isCompactMode && (
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
                        title={translations.sidebar.skills.tooltip
                          .replace("{category}", categoryInfo.label)
                          .replace("{count}", categorySkills.length.toString())
                          .replace("{avg}", avgLevel.toFixed(1))}
                        suppressHydrationWarning
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
            className={`${isCompactMode ? "p-2" : "p-4"} border-t border-theme`}
            suppressHydrationWarning
          >
            <div suppressHydrationWarning>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                    suppressHydrationWarning
                  >
                    <div className="flex items-center justify-center text-xs text-muted mb-2">
                      <Calendar size={12} className="mr-1" />
                      {translations.sidebar.footer.experience.replace(
                        "{years}",
                        workExp.toString()
                      )}
                    </div>
                    <div className="flex items-center justify-center text-xs text-muted mb-2">
                      <Code size={12} className="mr-1" />
                      {translations.sidebar.footer.projects.replace(
                        "{count}",
                        projectStats.total.toString()
                      )}
                    </div>
                    <p className="text-xs text-muted">
                      {translations.sidebar.footer.copyright}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
