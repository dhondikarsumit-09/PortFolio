import type { ExperienceItem } from "@/types/portfolio";

export const experience = [
  {
    title: "Computer Science Engineering",
    period: "2022 - 2026",
    summary: "Built the academic base for backend systems, full stack development, and data structures.",
    detail:
      "At Shri Balaji Institute of Technology and Management, I developed core engineering fundamentals while focusing on Java, APIs, databases, and practical software projects."
  },
  {
    title: "Ride Share Platform Case Study",
    period: "2025",
    summary: "Turned backend skills into a realtime product with auth, APIs, caching, and live updates.",
    detail:
      "This project pushed me into end-to-end architecture, including Spring Boot services, PostgreSQL data design, Redis, WebSockets, and a React frontend."
  },
  {
    title: "Problem Solving and DSA",
    period: "2024 - Present",
    summary: "Sustained algorithm practice to sharpen implementation speed and engineering decision-making.",
    detail:
      "Solving 400+ LeetCode problems improved my comfort with patterns, complexity tradeoffs, and translating ideas into reliable code under constraints."
  }
] as const satisfies readonly ExperienceItem[];
