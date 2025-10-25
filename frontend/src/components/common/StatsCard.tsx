"use client";

import { motion } from "framer-motion";
import { TrendingUp, Code, Users, Award, Clock, CheckCircle } from "lucide-react";

interface StatsCardProps {
  projectStats?: {
    total: number;
    completed: number;
    inProgress: number;
    planned: number;
    uniqueTechnologies: string[];
  };
  workExperience?: number;
}

const StatsCard = ({ projectStats, workExperience }: StatsCardProps) => {
  const stats = [
    {
      label: "Всего проектов",
      value: `${projectStats?.total || 0}`,
      icon: Code,
      color: "text-primary",
    },
    {
      label: "Завершено",
      value: `${projectStats?.completed || 0}`,
      icon: CheckCircle,
      color: "text-success",
    },
    {
      label: "В разработке",
      value: `${projectStats?.inProgress || 0}`,
      icon: Clock,
      color: "text-warning",
    },
    {
      label: "Технологий",
      value: `${projectStats?.uniqueTechnologies.length || 0}`,
      icon: Award,
      color: "text-accent",
    },
  ];

  return (
    <div className="p-4 bg-muted rounded-lg">
      <h4 className="text-sm font-semibold text-primary mb-3">Статистика</h4>
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
              <div className="text-xs text-muted">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
