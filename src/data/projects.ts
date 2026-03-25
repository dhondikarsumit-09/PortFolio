import type { ProjectItem } from "@/types/portfolio";

export const projects = [
  {
    title: "Ride Share Platform",
    description:
      "Scalable ride-sharing platform with secure auth, real-time ride tracking, and backend-first architecture decisions.",
    challenge:
      "Design a full-stack mobility workflow that handles booking, matching, and live ride visibility without sacrificing API clarity or response time.",
    solution:
      "Built the system on Spring Boot and React with JWT auth, WebSocket updates, Redis-backed performance improvements, and a Dockerized dev workflow.",
    impact:
      "Delivered a project that demonstrates production-style API design, role-based access control, and sub-500ms realtime updates for core ride events.",
    highlights: [
      "Built the platform with Spring Boot, React.js, and PostgreSQL.",
      "Developed 50+ REST APIs for ride booking and driver matching.",
      "Implemented JWT authentication with role-based access control.",
      "Integrated WebSocket ride updates with sub-500ms latency.",
      "Used Redis caching and Docker containerization for performance and portability."
    ],
    stack: ["Spring Boot", "React.js", "PostgreSQL", "Redis", "Docker", "WebSocket", "JWT"],
    githubUrl: "https://github.com/dhondikarsumit-09/Ride-Share",
    liveUrl: "#"
  }
] as const satisfies readonly ProjectItem[];
