import type { SkillCategory } from "@/types/portfolio";

export const skills = [
  {
    category: "Programming Languages",
    summary: "Strong problem-solving with practical programming fundamentals.",
    items: ["Java", "SQL", "C", "JavaScript"]
  },
  {
    category: "Frontend Development",
    summary: "Building clean, responsive user interfaces with modern web tooling.",
    items: ["React.js", "HTML", "CSS", "Bootstrap"]
  },
  {
    category: "Backend Development",
    summary: "Designing secure, scalable services and API-driven architectures.",
    items: ["Spring Boot", "Servlet", "JSP"]
  },
  {
    category: "Databases",
    summary: "Data modeling and optimization for transactional and cached workloads.",
    items: ["PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "Tools & Platforms",
    summary: "Development workflows, testing utilities, and deployment tooling.",
    items: ["Git", "GitHub", "Postman", "Docker"]
  }
] as const satisfies readonly SkillCategory[];
