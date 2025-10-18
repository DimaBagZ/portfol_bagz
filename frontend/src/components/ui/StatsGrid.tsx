"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  color?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const StatsGrid = ({ stats, columns = 4, className = "" }: StatsGridProps) => {
  const gridClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-8 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`text-4xl font-bold mb-2 ${stat.color || "text-primary"}`}>
              {stat.value}
            </div>
            <div className="text-muted">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
