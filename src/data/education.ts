import type { EducationItem } from "@/types/portfolio";

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Shri Balaji Institute of Technology and Management",
    duration: "2022 - 2026",
    score: "CGPA: 6.36",
    location: "Betul, India"
  },
  {
    degree: "Class XII",
    institution: "Corolla Public School",
    duration: "2020 - 2021",
    score: "Score: 84.4%",
    location: "Multai, Madhya Pradesh"
  }
] as const satisfies readonly EducationItem[];
