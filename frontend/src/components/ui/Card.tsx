"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card = ({ children, className = "", hover = true, delay = 0 }: CardProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hover && !reduceMotion
          ? { y: -4, transition: { type: "spring", stiffness: 380, damping: 28 } }
          : undefined
      }
      className={`ui-card ${hover ? "ui-card--hover" : ""} ${className}`}
    >
      <span className="ui-card__grid" aria-hidden="true" />
      <span className="ui-card__glow" aria-hidden="true" />
      <div className="ui-card__body">{children}</div>
    </motion.div>
  );
};

export default Card;
