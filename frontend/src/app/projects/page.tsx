import type { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Проекты | Bagiskij - Fullstack Developer",
  description:
    "Портфолио проектов Bagiskij - fullstack разработчика. Примеры работ: веб-приложения, API, мобильные приложения. Технологии: React, Next.js, Node.js, Nest.js, TypeScript.",
  openGraph: {
    title: "Проекты | Bagiskij - Fullstack Developer",
    description:
      "Портфолио проектов Bagiskij - fullstack разработчика. Примеры работ: веб-приложения, API, мобильные приложения.",
    type: "website",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
