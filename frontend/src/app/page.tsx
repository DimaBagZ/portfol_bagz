import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Главная | Bagiskij - Fullstack Developer",
  description:
    "Добро пожаловать в портфолио Bagiskij - fullstack разработчика. Специализируюсь на создании современных веб-приложений с использованием React, Next.js, Node.js и Nest.js.",
  openGraph: {
    title: "Главная | Bagiskij - Fullstack Developer",
    description:
      "Добро пожаловать в портфолио Bagiskij - fullstack разработчика. Создаю современные веб-приложения от идеи до развертывания.",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
