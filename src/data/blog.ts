import type { BlogItem } from "@/types/portfolio";

export const blogPosts = [
  {
    title: "Designing REST APIs for Realtime Product Workflows",
    summary: "A backend-focused breakdown of resource modeling, auth boundaries, and event-driven updates.",
    tag: "Backend",
    status: "Planned"
  },
  {
    title: "What 400+ DSA Problems Changed in My Engineering Thinking",
    summary: "Patterns, tradeoffs, and the gap between interview prep and production code decisions.",
    tag: "Problem Solving",
    status: "Planned"
  },
  {
    title: "Spring Boot, Redis, and WebSockets in a Portfolio-Grade Project",
    summary: "A practical case study on layering data access, caching, and realtime messaging into one application.",
    tag: "Case Study",
    status: "Draft Idea"
  }
] as const satisfies readonly BlogItem[];
