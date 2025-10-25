import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "О себе | Bagiskij - Fullstack Developer",
  description:
    "Узнайте больше о Bagiskij - fullstack разработчике с 3+ годами опыта. Моя история, достижения и профессиональный путь в веб-разработке.",
  openGraph: {
    title: "О себе | Bagiskij - Fullstack Developer",
    description:
      "Узнайте больше о Bagiskij - fullstack разработчике с 3+ годами опыта. Моя история, достижения и профессиональный путь в веб-разработке.",
    type: "profile",
  },
};

export default function About() {
  return <AboutPage />;
}
