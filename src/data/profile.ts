import type { HeroStat, NavItem, SocialLink } from "@/types/portfolio";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
] as const satisfies readonly NavItem[];

export const profile = {
  name: "Sumit Dhondikar",
  role: "Full Stack Developer",
  tagline:
    "I build scalable, real-time products using Java, Spring Boot, React, and robust backend architectures.",
  location: "Betul, Madhya Pradesh, India",
  email: "dhondikarsumit@gmail.com",
  phone: "+91-7489998165",
  shortAbout: [
    "I am a Computer Science Engineering student focused on full stack development with a strong backend foundation.",
    "I enjoy designing practical systems that handle real-time workflows, secure authentication, and production-ready deployments."
  ],
  resumeUrl: "#"
} as const;

export const heroStats = [
  { value: "50+", label: "REST APIs Built" },
  { value: "400+", label: "LeetCode Problems Solved" },
  { value: "<500ms", label: "Realtime Tracking Latency" }
] as const satisfies readonly HeroStat[];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/SumitDh09" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumit-dhondikar/" },
  { label: "Email", href: "mailto:dhondikarsumit@gmail.com" }
] as const satisfies readonly SocialLink[];
