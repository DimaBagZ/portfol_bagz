"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card = ({ children, className = "", hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-card rounded-lg border border-theme p-6 ${
        hover ? "hover:shadow-lg transition-shadow duration-300" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
