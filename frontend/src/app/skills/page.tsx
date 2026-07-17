import type { Metadata } from "next";
import SkillsPage from "./SkillsPage";

export const metadata: Metadata = {
  title: "Skills & Stack | Bagiskij - Fullstack Software Engineer",
  description:
    "Business-focused Skills & Stack: product ownership, web, backend integrations, mobile App Store/Google Play, DevOps and AI — end-to-end delivery.",
  openGraph: {
    title: "Skills & Stack | Bagiskij",
    description:
      "Краткое саммари ключевых навыков для бизнеса: продукт, web, backend, mobile, DevOps и AI.",
    type: "website",
  },
};

export default function Skills() {
  return <SkillsPage />;
}
