"use client";

import { motion } from "framer-motion";
import { Code, Award, Clock, CheckCircle } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface StatsCardProps {
  projectStats?: {
    total: number;
    completed: number;
    inProgress: number;
    planned: number;
    uniqueTechnologies: string[];
  };
}

const StatsCard = ({ projectStats }: StatsCardProps) => {
  const translations = useTranslations();
  const labels = translations.sidebar.statsCard;
  const stats = [
    {
      label: labels.total,
      value: `${projectStats?.total || 0}`,
      icon: Code,
      color: "text-primary",
    },
    {
      label: labels.completed,
      value: `${projectStats?.completed || 0}`,
      icon: CheckCircle,
      color: "text-success",
    },
    {
      label: labels.inProgress,
      value: `${projectStats?.inProgress || 0}`,
      icon: Clock,
      color: "text-warning",
    },
    {
      label: labels.technologies,
      value: `${projectStats?.uniqueTechnologies?.length || 0}`,
      icon: Award,
      color: "text-accent",
    },
  ];

  return (
    <div className="p-4 bg-muted rounded-lg">
      <h4 className="text-sm font-semibold text-primary mb-3" suppressHydrationWarning>
        {labels.title}
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center p-2 bg-card rounded-lg shadow-sm"
            >
              <Icon size={16} className={`mx-auto mb-1 ${stat.color}`} />
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted" suppressHydrationWarning>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
