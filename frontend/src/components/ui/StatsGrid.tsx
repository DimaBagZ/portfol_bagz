"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import TranslatedText from "./TranslatedText";

interface StatItem {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  color?: string;
  suffix?: string;
  useCounter?: boolean;
  details?: string[];
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-4 md:gap-8 ${className}`}>
      {stats.map((stat, index) => {
        const isNumber = typeof stat.value === "number";
        const useCounter = stat.useCounter !== false && isNumber;
        const hasDetails = Boolean(stat.details && stat.details.length > 0);
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative text-center flex flex-col justify-center min-h-[80px] md:min-h-[100px] px-2 rounded-lg border border-transparent ${
              hasDetails ? "cursor-pointer hover:border-primary/40" : ""
            }`}
            onMouseEnter={() => hasDetails && setActiveIndex(index)}
            onMouseLeave={() => hasDetails && setActiveIndex(null)}
            onClick={() => hasDetails && handleToggle(index)}
            role={hasDetails ? "button" : undefined}
            tabIndex={hasDetails ? 0 : undefined}
            aria-expanded={hasDetails ? isActive : undefined}
          >
            <div
              className={`text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color || "text-primary"}`}
            >
              {useCounter ? (
                <AnimatedCounter
                  end={stat.value as number}
                  suffix={stat.suffix || ""}
                  duration={2}
                />
              ) : (
                `${stat.value}${stat.suffix || ""}`
              )}
            </div>
            <TranslatedText className="text-xs md:text-sm text-muted leading-tight break-words hyphens-auto">
              {stat.label}
            </TranslatedText>

            <AnimatePresence>
              {hasDetails && isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-20 mt-3 w-max min-w-[180px] max-w-[220px] -translate-x-1/2 text-left"
                >
                  <div className="space-y-1 text-muted text-xs md:text-sm bg-card/90 border border-theme rounded-lg p-3 shadow-lg pointer-events-none">
                    {stat.details!.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <TranslatedText>{item}</TranslatedText>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
