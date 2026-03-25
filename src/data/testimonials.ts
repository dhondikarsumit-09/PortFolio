import type { TestimonialItem } from "@/types/portfolio";

export const testimonials = [
  {
    name: "Recommendation Slot",
    role: "Mentor or Team Lead",
    quote: "Add a real recommendation here from a mentor, internship lead, client, or collaborator once available.",
    status: "placeholder"
  },
  {
    name: "Recommendation Slot",
    role: "Project Collaborator",
    quote: "Use this space for a concrete comment on ownership, reliability, backend depth, or communication.",
    status: "placeholder"
  }
] as const satisfies readonly TestimonialItem[];
