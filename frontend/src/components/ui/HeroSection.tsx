"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Section from "./Section";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const HeroSection = ({ title, subtitle, children, className = "" }: HeroSectionProps) => {
  return (
    <Section background="primary" className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
        {children}
      </motion.div>
    </Section>
  );
};

export default HeroSection;
