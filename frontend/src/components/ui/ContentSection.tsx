"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Section from "./Section";
import TranslatedText from "./TranslatedText";

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "card" | "muted" | "primary" | "secondary";
  padding?: "sm" | "md" | "lg" | "xl";
}

const ContentSection = ({
  title,
  subtitle,
  children,
  className = "",
  background = "default",
  padding = "lg",
}: ContentSectionProps) => {
  return (
    <Section background={background} padding={padding} className={className}>
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {title && (
            <TranslatedText as="h2" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </TranslatedText>
          )}
          {subtitle && (
            <TranslatedText as="p" className="text-xl text-muted max-w-3xl mx-auto">
              {subtitle}
            </TranslatedText>
          )}
        </motion.div>
      )}
      {children}
    </Section>
  );
};

export default ContentSection;
