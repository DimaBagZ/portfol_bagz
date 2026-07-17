"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Section from "./Section";
import { useLanguage } from "@/hooks/useLanguage";
import TranslatedText from "./TranslatedText";
import { getImagePath } from "@/utils/imagePaths";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  /** Путь к фону hero, например /images/backgrounds/portfolio-hero-fullstack.webp */
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  children,
  className = "",
  backgroundImage,
}: HeroSectionProps) => {
  const { isHydrated } = useLanguage();
  const imageUrl = backgroundImage ? getImagePath(backgroundImage) : undefined;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      {isHydrated ? (
        <>
          {typeof title === "string" ? (
            <TranslatedText as="h1" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </TranslatedText>
          ) : (
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" suppressHydrationWarning>
              {title}
            </h1>
          )}
          {subtitle && (
            <TranslatedText as="p" className="text-xl text-muted max-w-3xl mx-auto mb-8">
              {subtitle}
            </TranslatedText>
          )}
          {children}
        </>
      ) : (
        <div suppressHydrationWarning style={{ minHeight: "120px" }} />
      )}
    </motion.div>
  );

  if (imageUrl) {
    return (
      <section className={`hero-devices py-16 md:py-20 ${className}`}>
        <div
          className="hero-devices-bg"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          aria-hidden="true"
        />
        <div className="hero-devices-overlay" aria-hidden="true" />
        <div className="hero-devices-content relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

  return (
    <Section background="primary" className={className}>
      {content}
    </Section>
  );
};

export default HeroSection;
