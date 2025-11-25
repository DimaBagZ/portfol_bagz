"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/hooks/useLanguage";

const AnimatedGreeting = () => {
  const translations = useTranslations();
  const { isHydrated } = useLanguage();
  const greetings = useMemo(() => translations.greetings, [translations]);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    setCurrentGreeting(0);
  }, [greetings]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [greetings]);

  return (
    <div className="h-8 flex items-center justify-center">
      {isHydrated ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-muted font-medium"
            suppressHydrationWarning
          >
            {greetings[currentGreeting]}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div suppressHydrationWarning style={{ minHeight: "32px" }} />
      )}
    </div>
  );
};

export default AnimatedGreeting;
