"use client";

import { memo } from "react";
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
} from "lucide-react";
import { skills } from "@/data/skills";
import StatsCard from "./StatsCard";
import { useSidebar } from "@/contexts/SidebarContext";

const Sidebar = () => {
  const { isCollapsed, isMobile, isHydrated, toggleSidebar } = useSidebar();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/username",
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/username",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      href: "mailto:email@example.com",
      icon: Mail,
      color: "hover:text-red-600",
    },
  ];

  const skillCategories = {
    frontend: { label: "Frontend", icon: Code, color: "text-blue-600" },
    backend: { label: "Backend", icon: Database, color: "text-green-600" },
    tools: { label: "Tools", icon: Globe, color: "text-purple-600" },
    languages: { label: "Languages", icon: Code, color: "text-orange-600" },
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
      {/* Overlay for mobile */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-[45] lg:hidden"
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
                    isCollapsed && !isMobile ? "w-12 h-12 text-lg" : "w-24 h-24 text-2xl"
                  } bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold`}
                >
                  B
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
                    <h2 className="text-xl font-bold text-primary mb-1">Bagiskij</h2>
                    <p className="text-sm text-muted mb-2">Fullstack Developer</p>
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
                    <StatsCard />
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

            {/* Collapsed Skills Icons */}
            <AnimatePresence>
              {isCollapsed && !isMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center space-y-4"
                >
                  {Object.entries(skillCategories).map(([category, categoryInfo]) => {
                    const Icon = categoryInfo.icon;
                    return (
                      <div
                        key={category}
                        className="flex flex-col items-center"
                        title={categoryInfo.label}
                      >
                        <Icon size={20} className={`${categoryInfo.color} mb-1`} />
                        <div className="w-1 h-8 bg-muted rounded-full">
                          <div
                            className="bg-primary rounded-full transition-all duration-300"
                            style={{
                              height: `${(groupedSkills[category]?.length || 0) * 20}%`,
                            }}
                          />
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
                    Опыт: 3+ года
                  </div>
                  <p className="text-xs text-muted">© 2024 Bagiskij</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default memo(Sidebar);
