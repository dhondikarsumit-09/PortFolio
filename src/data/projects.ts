import type { ProjectItem } from "@/types/portfolio";

export const projects = [
  {
    title: "Ride Share Platform",
    description:
      "Research-backed ride-sharing platform with real-time matching, secure JWT authentication, and scalable REST API architecture.",
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
    liveUrl: "https://rideshare.sumit-dhondikar.in/"
  },
  {
    title: "TrackSphere Platform",
    description:
      "Productivity-focused task management platform with structured workflows, analytics, and scalable backend design.",
    challenge:
      "Design a task management system that supports project boards, task prioritization, deadlines, and efficient workflow tracking while maintaining clean APIs and smooth user experience.",
    solution:
      "Built the platform using Spring Boot and React with JWT authentication, modular REST APIs, and PostgreSQL storage. Implemented Kanban boards, task lifecycle management, search and filter functionality, and reminder-based deadline tracking.",
    impact:
      "Delivered a system showcasing structured task workflows, secure access control, and productivity-driven features with scalable backend architecture and optimized performance.",
    highlights: [
      "Built the platform with Spring Boot, React.js, and PostgreSQL.",
      "Developed REST APIs for task creation, updates, filtering, and tracking.",
      "Implemented JWT authentication with role-based access control.",
      "Designed Kanban boards with prioritization, due dates, and reminders.",
      "Integrated dashboard analytics for productivity tracking."
    ],
    stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "Kanban", "REST API"],
    githubUrl: "https://github.com/dhondikarsumit-09/TrackSphere",
    liveUrl: "#"
  },
  {
    title: "Customer Management System",
    description:
      "Enterprise-grade CRM application designed for secure customer lifecycle management, real-time updates, and scalable backend performance.",
    challenge:
      "Design and develop a scalable CRM system capable of handling authentication, customer data management, and real-time updates with high performance and security.",
    solution:
      "Built a CRM platform using Spring Boot. Implemented JWT-based authentication, Redis caching for performance optimization, and WebSocket for real-time data synchronization.",
    impact:
      "Enhanced backend architecture skills including authentication, caching, and event-driven updates, while delivering a scalable and production-ready CRM solution.",
    highlights: [
      "Developed a CRM system for secure customer lifecycle management.",
      "Implemented JWT authentication for protected access control.",
      "Integrated Redis caching for performance optimization.",
      "Implemented real-time updates using WebSocket."
    ],
    stack: ["Spring Boot", "JWT", "Redis", "WebSocket"],
    githubUrl: "https://github.com/Sumit09-dhonq/CRM",
    liveUrl: "#"
  },
  {
    title: "Library Management System",
    description:
      "Java-based management system for book discovery and issue-return workflows built with core programming fundamentals.",
    challenge:
      "Create a reliable desktop-style management system that models library operations cleanly using object-oriented design principles.",
    solution:
      "Built the application in Core Java with OOP principles, implemented book search and issue-return tracking, and used Java Collections for efficient in-memory data handling.",
    impact:
      "Strengthened core Java, data modeling, and structured problem-solving through a foundational management system project.",
    highlights: [
      "Developed system using Core Java and OOP principles.",
      "Implemented book search and issue-return tracking.",
      "Used Java Collections for efficient data management."
    ],
    stack: ["Core Java", "OOP", "Java Collections"],
    githubUrl: "#",
    liveUrl: "#"
  }
] as const satisfies readonly ProjectItem[];
