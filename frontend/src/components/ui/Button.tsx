"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

  const classes = [
    "ui-btn",
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    disabled ? "is-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileHover: reduceMotion || disabled ? undefined : { scale: 1.02, y: -1 },
    whileTap: reduceMotion || disabled ? undefined : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 420, damping: 28 },
  };

  const content = (
    <>
      <span className="ui-btn__grid" aria-hidden="true" />
      <span className="ui-btn__glow" aria-hidden="true" />
      <span className="ui-btn__label">{children}</span>
    </>
  );

  if (href) {
    if (target || rel) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className="ui-btn-wrap"
          suppressHydrationWarning
        >
          <motion.span className={classes} {...motionProps}>
            {content}
          </motion.span>
        </a>
      );
    }

    return (
      <Link href={href} className="ui-btn-wrap" suppressHydrationWarning>
        <motion.span className={classes} {...motionProps}>
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      suppressHydrationWarning
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
