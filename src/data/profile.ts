import type { HeroStat, NavItem, SocialLink } from "@/types/portfolio";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "stats", label: "Stats" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" }
] as const satisfies readonly NavItem[];

export const profile = {
  name: "Sumit Dhondikar",
  role: "Full Stack Developer",
  tagline:
    "Developer with hands-on experience across frontend, backend, databases, and deployment.",
  location: "Betul, Madhya Pradesh, India",
  email: "dhondikarsumit@gmail.com",
  phone: "+91-7489998165",
  shortAbout: [
    "I am a Computer Science Engineering student focused on full stack development with a strong backend foundation.",
    "I enjoy designing practical systems that handle real-time workflows, secure authentication, and production-ready deployments."
  ],
  resumeUrl: "https://drive.google.com/file/d/1puUYSE0JNcGkld4dksBKXzcWZlMaAkk6/view?usp=drive_link"
} as const;

export const heroStats = [
  { value: "50+", label: "REST APIs Built" },
  { value: "400+", label: "LeetCode Problems Solved" },
  { value: "<500ms", label: "Realtime Tracking Latency" }
] as const satisfies readonly HeroStat[];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumit-dhondikar/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Sumit_0905/" },
  { label: "Email", href: "mailto:dhondikarsumit@gmail.com" }
] as const satisfies readonly SocialLink[];
