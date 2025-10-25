"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "Привет! Меня зовут",
  "Добро пожаловать! Я",
  "Рад видеть вас! Это",
  "Отлично! Меня зовут",
  "Приветствую! Я",
  "Здравствуйте! Меня зовут",
  "Добро пожаловать на мой сайт! Я",
  "Приветствую вас! Это",
  "Отлично, что вы здесь! Я",
  "Добро пожаловать в мое портфолио! Я",
  "Привет! Добро пожаловать! Я",
  "Здравствуйте! Добро пожаловать! Я",
  "Приветствую! Добро пожаловать! Я",
  "Отлично! Добро пожаловать! Я",
  "Привет! Рад видеть вас! Я",
];

const AnimatedGreeting = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000); // Увеличили время до 4 секунд

    return () => clearInterval(interval);
  }, []);

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
