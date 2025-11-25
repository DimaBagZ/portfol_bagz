"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { projects } from "@/data/projects";
import { workExperience } from "@/data/experience";
import { calculateWorkExperience, calculateProjectStats } from "@/utils/calculations";
import { useTranslations } from "@/hooks/useTranslations";

const StatsSection = () => {
  const translations = useTranslations();
  // Рассчитываем реальные данные
  const workExp = useMemo(() => calculateWorkExperience(workExperience), []);
  const projectStats = useMemo(() => calculateProjectStats(projects), []);

  const stats = [
    {
      label: translations.home.stats.items.experience,
      value: workExp,
      suffix: "+",
      color: "text-primary",
    },
    {
      label: translations.home.stats.items.projects,
      value: projectStats.total,
      suffix: "",
      color: "text-accent",
    },
    {
      label: translations.home.stats.items.technologies,
      value: projectStats.uniqueTechnologies.length,
      suffix: "+",
      color: "text-primary",
    },
    {
      label: translations.home.stats.items.completed,
      value: projectStats.completed,
      suffix: "",
      color: "text-accent",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="text-center p-4 bg-card/50 rounded-lg border border-theme/20 hover:border-primary/30 transition-all duration-300"
        >
          <div className={`text-3xl font-bold ${stat.color} mb-2`}>
            <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
          </div>
          <div className="text-sm text-muted" suppressHydrationWarning>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
