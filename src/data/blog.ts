import type { BlogItem } from "@/types/portfolio";

export const blogPosts: readonly BlogItem[] = [
  {
    title: "Designing REST APIs for Realtime Product Workflows",
    summary: "A backend-focused breakdown of resource modeling, auth boundaries, and event-driven updates.",
    tag: "Backend",
    status: "Published",
    href: "https://www.ijfmr.com/research-paper.php?id=59449"
  },
  {
    title: "What 400+ DSA Problems Changed in My Engineering Thinking",
    summary: "Patterns, tradeoffs, and the gap between interview prep and production code decisions.",
    tag: "Problem Solving",
    status: "Published",
    href: "https://leetcode.com/u/Sumit_0905/"
  },
  {
    title: "Building a CRM with Spring Boot, Redis, and WebSocket",
    summary:
      "A short write-up on designing a customer management system with secure JWT authentication, Redis caching, and realtime updates for scalable backend workflows.",
    tag: "CRM Case Study",
    status: "Draft Idea"
  }
];
