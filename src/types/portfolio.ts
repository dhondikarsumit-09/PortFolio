export type SectionId = "home" | "about" | "skills" | "projects" | "achievements" | "education" | "contact";

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
  highlights: string[];
  stack: string[];
  githubUrl: string;
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
