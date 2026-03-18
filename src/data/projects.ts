import type { ProjectItem } from "@/types/portfolio";

export const projects = [
  {
    title: "Ride Share Platform",
    description:
      "Scalable ride-sharing platform with secure auth, real-time ride tracking, and optimized API performance.",
    highlights: [
      "Built the platform with Spring Boot, React.js, and PostgreSQL.",
      "Developed 50+ REST APIs for ride booking and driver matching.",
      "Implemented JWT authentication with role-based access control.",
      "Integrated WebSocket ride updates with sub-500ms latency.",
      "Used Redis caching and Docker containerization for performance and portability."
    ],
    stack: ["Spring Boot", "React.js", "PostgreSQL", "Redis", "Docker", "WebSocket", "JWT"],
    githubUrl: "https://github.com/SumitDh09",
    liveUrl: "#"
  },
  {
    title: "Customer Management System",
    description:
      "Customer relationship management system focused on secure workflows and real-time operational updates.",
    highlights: [
      "Developed a CRM application using Spring Boot and React.",
      "Implemented secure JWT authentication and route protection.",
      "Integrated Redis caching to improve response performance.",
      "Added WebSocket-based real-time update flows."
    ],
    stack: ["Spring Boot", "React", "JWT", "Redis", "WebSocket"],
    githubUrl: "https://github.com/SumitDh09",
    liveUrl: "#"
  },
  {
    title: "Library Management System",
    description:
      "Core Java application for tracking books, search workflows, and issue-return management.",
    highlights: [
      "Built with Core Java and object-oriented design principles.",
      "Implemented book search and issue-return tracking modules.",
      "Used Java Collections for efficient in-memory data handling."
    ],
    stack: ["Core Java", "OOP", "Java Collections"],
    githubUrl: "https://github.com/SumitDh09",
    liveUrl: "#"
  }
] as const satisfies readonly ProjectItem[];
