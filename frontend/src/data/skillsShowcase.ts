export type SkillsShowcaseGroupId =
  | "product"
  | "web"
  | "backend"
  | "mobile"
  | "devops"
  | "ai";

export interface SkillsShowcaseGroup {
  id: SkillsShowcaseGroupId;
  stack: string[];
}

/** Бизнес-витрина Skills & Stack: ключевые области, детали — в сайдбаре */
export const skillsShowcaseGroups: SkillsShowcaseGroup[] = [
  {
    id: "product",
    stack: ["Monorepo", "TZ / Discovery", "Architecture", "Figma handoff", "Support"],
  },
  {
    id: "web",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Admin panels"],
  },
  {
    id: "backend",
    stack: ["NestJS", "PostgreSQL", "Prisma", "BullMQ", "1C / CRM", "Payments"],
  },
  {
    id: "mobile",
    stack: ["React Native", "Expo", "EAS", "App Store", "Google Play", "Push"],
  },
  {
    id: "devops",
    stack: ["Docker", "GitHub Actions", "Railway", "Vercel", "Sentry", "CI/CD"],
  },
  {
    id: "ai",
    stack: ["OpenAI API", "Claude API", "LangChain", "Qdrant", "FastAPI"],
  },
];
