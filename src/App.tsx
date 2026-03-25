import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/sections/about-section";
import { BlogSection } from "@/sections/blog-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { FooterSection } from "@/sections/footer-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { StatsSection } from "@/sections/stats-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { navItems } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll";
import { useTheme } from "@/hooks/use-theme";

function App() {
  const activeSection = useActiveSection(navItems);
  const { theme, toggleTheme } = useTheme();
  useLocomotiveScroll();
  const { scrollYProgress } = useScroll();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, isPointer: false });
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.2
  });

  useEffect(() => {
    const magneticNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));

    const cleanups = magneticNodes.map((node) => {
      const handleMove = (event: MouseEvent) => {
        const rect = node.getBoundingClientRect();
        const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.16;
        const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.16;
        node.style.setProperty("--mx", `${offsetX}px`);
        node.style.setProperty("--my", `${offsetY}px`);
      };

      const handleLeave = () => {
        node.style.setProperty("--mx", "0px");
        node.style.setProperty("--my", "0px");
      };

      node.addEventListener("mousemove", handleMove);
      node.addEventListener("mouseleave", handleLeave);

      return () => {
        node.removeEventListener("mousemove", handleMove);
        node.removeEventListener("mouseleave", handleLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  });

  return (
    <div
      className="relative min-h-screen bg-background text-foreground"
      data-scroll-container
      onMouseMove={(event) => {
        pointerX.set(event.clientX - 180);
        pointerY.set(event.clientY - 180);
        setCursor({
          x: event.clientX,
          y: event.clientY,
          isPointer: Boolean((event.target as HTMLElement | null)?.closest("a, button, [data-magnetic]"))
        });
      }}
    >
      <CustomCursor x={cursor.x} y={cursor.y} isPointer={cursor.isPointer} />
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
        style={{ scaleX: progressScaleX }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),rgba(99,102,241,0.02)_58%,transparent_72%)] blur-3xl"
          style={{ x: pointerX, y: pointerY }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(168,85,247,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-grid-soft bg-[length:72px_72px] opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
        <div className="absolute -left-20 top-36 h-72 w-72 animate-float-slow rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 animate-float-slow rounded-full bg-purple-500/15 blur-3xl [animation-delay:-3s]" />
      </div>

      <Navbar activeSection={activeSection} navItems={navItems} theme={theme} onToggleTheme={toggleTheme} />

      <main className="container relative z-10 flex flex-col gap-24 pb-24 pt-28 md:gap-28 md:pb-28" data-scroll-section>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <StatsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <div data-scroll-section>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
