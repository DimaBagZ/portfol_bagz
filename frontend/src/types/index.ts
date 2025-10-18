export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
  featured: boolean;
  createdAt: string;
  status: "completed" | "in-progress" | "planned";
  features?: string[];
  duration?: string;
  teamSize?: number;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "languages";
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  responsibilities: string[];
  companyLogo?: string;
  companyUrl?: string;
}
