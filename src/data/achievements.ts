import type { AchievementItem } from "@/types/portfolio";

export const achievements = [
  {
    title: "Solved 400+ DSA Problems on LeetCode",
    year: "2025",
    detail: "Consistent problem-solving across arrays, trees, dynamic programming, and graph patterns."
  },
  {
    title: "Certificate of Excellence in DSA (Java) - PW Skills",
    year: "2025",
    detail: "Recognized for strong implementation and algorithmic problem-solving skills in Java."
  },
  {
    title: "Certification in Learning Microsoft 365 Copilot",
    year: "2024",
    detail: "Completed practical training on AI-assisted productivity and modern workplace tooling."
  }
] as const satisfies readonly AchievementItem[];
