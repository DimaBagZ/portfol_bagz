import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend" },
  { name: "Next.js", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "Vue.js", level: 3, category: "frontend" },
  { name: "SASS/SCSS", level: 4, category: "frontend" },

  // Backend
  { name: "Node.js", level: 5, category: "backend" },
  { name: "Nest.js", level: 4, category: "backend" },
  { name: "Express.js", level: 5, category: "backend" },
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "MongoDB", level: 3, category: "backend" },
  { name: "Redis", level: 3, category: "backend" },

  // Languages
  { name: "JavaScript", level: 5, category: "languages" },
  { name: "TypeScript", level: 4, category: "languages" },
  { name: "Python", level: 3, category: "languages" },
  { name: "Java", level: 2, category: "languages" },

  // Tools
  { name: "Git", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "AWS", level: 2, category: "tools" },
  { name: "Linux", level: 3, category: "tools" },
  { name: "Figma", level: 3, category: "tools" },
];
