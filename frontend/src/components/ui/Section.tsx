"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "card" | "muted" | "primary" | "secondary";
  padding?: "sm" | "md" | "lg" | "xl";
}

const Section = ({
  children,
  className = "",
  background = "default",
  padding = "lg",
}: SectionProps) => {
  const backgroundClasses = {
    default: "bg-background",
    card: "bg-card",
    muted: "bg-muted",
    primary: "bg-primary/10",
    secondary: "bg-secondary",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
    xl: "py-24",
  };

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;
