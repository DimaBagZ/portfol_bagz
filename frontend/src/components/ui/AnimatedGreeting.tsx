"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

const AnimatedGreeting = () => {
  const translations = useTranslations();
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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-muted font-medium"
        >
          {greetings[currentGreeting]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedGreeting;
