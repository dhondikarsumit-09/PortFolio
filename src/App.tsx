import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { AchievementsSection } from "@/sections/achievements-section";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { FooterSection } from "@/sections/footer-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { navItems } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/hooks/use-theme";

function App() {
  const activeSection = useActiveSection(navItems);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.2
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500"
        style={{ scaleX: progressScaleX }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(232,121,249,0.14),transparent_30%)] dark:opacity-100" />
        <div className="absolute inset-0 bg-grid-soft bg-[length:72px_72px] opacity-[0.18] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
        <div className="absolute -left-20 top-36 h-72 w-72 animate-float-slow rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 animate-float-slow rounded-full bg-fuchsia-500/15 blur-3xl [animation-delay:-3s]" />
      </div>

      <Navbar activeSection={activeSection} navItems={navItems} theme={theme} onToggleTheme={toggleTheme} />

      <main className="container relative z-10 flex flex-col gap-24 pb-24 pt-28 md:gap-28 md:pb-28">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
