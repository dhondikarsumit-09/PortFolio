import type { StatItem } from "@/types/portfolio";

export const stats = [
  {
    value: "50+",
    label: "REST APIs",
    detail: "Designed for booking flows, role-based actions, and backend orchestration."
  },
  {
    value: "400+",
    label: "DSA Problems",
    detail: "Consistent LeetCode practice across graphs, DP, trees, and arrays."
  },
  {
    value: "<500ms",
    label: "Realtime Latency",
    detail: "Achieved for ride-tracking updates using WebSocket-driven communication."
  },
  {
    value: "2022",
    label: "Engineering Journey Start",
    detail: "Started focused computer science training and project-led learning."
  }
] as const satisfies readonly StatItem[];
