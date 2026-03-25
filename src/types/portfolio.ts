export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "stats"
  | "blog"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface SkillCategory {
  category:
    | "Programming Languages"
    | "Frontend Development"
    | "Backend Development"
    | "Databases"
    | "Tools & Platforms";
  summary: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  location: string;
}

export interface AchievementItem {
  title: string;
  year: string;
  detail: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  summary: string;
  detail: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  status: "available" | "placeholder";
}

export interface BlogItem {
  title: string;
  summary: string;
  tag: string;
  status: string;
  href?: string;
}
