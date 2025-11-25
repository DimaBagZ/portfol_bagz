"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  type = "button",
  target,
  rel,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border border-primary text-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    // Если есть target или rel, используем обычную ссылку
    if (target || rel) {
      return (
        <a href={href} target={target} rel={rel} className="inline-block" suppressHydrationWarning>
          <motion.div
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.div>
        </a>
      );
    }

    // Иначе используем Next.js Link для внутренней навигации
    return (
      <Link href={href} className="inline-block" suppressHydrationWarning>
        <motion.div
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      suppressHydrationWarning
    >
      {children}
    </motion.button>
  );
};

export default Button;
