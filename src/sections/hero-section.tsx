import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile, socialLinks } from "@/data/profile";
import { fadeUp, sectionViewport, slowFloat, staggerContainer } from "@/lib/animations";

const roleHeadlines = [profile.role, "Backend Systems Engineer", "Full Stack Product Builder"] as const;
const floatingBadges = [
  { label: "Spring Boot", className: "left-3 top-5" },
  { label: "React", className: "right-3 top-10" },
  { label: "Open to Work", className: "left-6 bottom-7" }
] as const;

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedRole(roleHeadlines[0]);
      if (headlineIndex !== 0) {
        setHeadlineIndex(0);
      }
      if (isDeleting) {
        setIsDeleting(false);
      }
      return;
    }

    const currentHeadline = roleHeadlines[headlineIndex];
    const hasCompletedTyping = typedRole === currentHeadline;
    const hasFinishedDeleting = typedRole.length === 0;
    const timeoutMs = isDeleting ? 45 : hasCompletedTyping ? 1300 : 74;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !hasCompletedTyping) {
        setTypedRole(currentHeadline.slice(0, typedRole.length + 1));
        return;
      }

      if (!isDeleting && hasCompletedTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !hasFinishedDeleting) {
        setTypedRole(currentHeadline.slice(0, typedRole.length - 1));
        return;
      }

      setIsDeleting(false);
      setHeadlineIndex((index) => (index + 1) % roleHeadlines.length);
    }, timeoutMs);

    return () => window.clearTimeout(timeoutId);
  }, [headlineIndex, isDeleting, shouldReduceMotion, typedRole]);

  const displayedRole = shouldReduceMotion ? roleHeadlines[0] : typedRole;

  return (
    <section id="home" className="section-anchor grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]" data-scroll-section>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeUp} className="space-y-5" data-scroll data-scroll-speed="-0.08">
          <Badge className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white shadow-glow">
            Available for Full-Time & Internship Roles
          </Badge>

          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-2xl text-transparent md:text-3xl">
              <span className="inline-flex min-h-[1.2em] items-center">
                {displayedRole}
                {shouldReduceMotion ? null : (
                  <motion.span
                    aria-hidden
                    className="ml-1 inline-block h-[0.95em] w-px bg-indigo-300 align-[-0.08em]"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ duration: 1.05, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </span>
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{profile.tagline}</p>
          <p className="text-sm text-muted-foreground">
            {profile.location} · {profile.email} · {profile.phone}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3" data-scroll data-scroll-speed="-0.03">
          <Button asChild size="lg" className="rounded-full">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#contact">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="glass-pill rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={slowFloat}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="space-y-5"
        data-scroll
        data-scroll-speed="0.12"
      >
        <Card className="bg-white/10 hover:-translate-y-1 dark:bg-white/5">
          <CardContent className="space-y-5 p-6">
            <div className="relative rounded-[2rem] p-3">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-xl" />
                <div className="glass-panel absolute inset-0 rounded-[2rem]" />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15">
                  {floatingBadges.map((badge, index) => (
                    <motion.div
                      key={badge.label}
                      className={`glass-pill absolute z-10 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ${badge.className}`}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      {badge.label}
                    </motion.div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <img
                    src={profilePhoto}
                    alt={`${profile.name} portrait`}
                    className="h-[360px] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="glass-pill inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      Open to roles
                    </div>
                  </div>
                </div>
              </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_20px_60px_-36px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-[#15182b] dark:shadow-[0_20px_60px_-36px_rgba(15,23,42,0.9)]">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="space-y-3 font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <p>
                  <span className="text-sky-600 dark:text-sky-300">String</span> core = <span className="text-emerald-600 dark:text-emerald-300">"Spring Boot"</span>;
                </p>
                <p>
                  <span className="text-sky-600 dark:text-sky-300">String</span> focus = <span className="text-amber-600 dark:text-amber-200">"real-time systems"</span>;
                </p>
                <p>
                  <span className="text-sky-600 dark:text-sky-300">String</span> principle = <span className="text-emerald-600 dark:text-emerald-300">"fundamentals first"</span>;
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
