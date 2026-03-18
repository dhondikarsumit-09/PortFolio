import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import profileMark from "@/assets/profile-mark.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroStats, profile, socialLinks } from "@/data/profile";
import { fadeUp, sectionViewport, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section id="home" className="section-anchor grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeUp} className="space-y-5">
          <Badge className="rounded-full bg-cyan-400/90 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-950">
            Available for Full-Time & Internship Roles
          </Badge>

          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 bg-clip-text text-2xl text-transparent md:text-3xl">
              {profile.role}
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{profile.tagline}</p>
          <p className="text-sm text-muted-foreground">
            {profile.location} · {profile.email} · {profile.phone}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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
          <Button asChild variant="ghost" size="lg" className="rounded-full">
            <a href={profile.resumeUrl}>
              Resume
              <Download className="ml-2 h-4 w-4" />
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
              className="rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-cyan-300/60 hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="space-y-5"
      >
        <Card className="border-border/70 bg-card/80">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center gap-4">
              <img
                src={profileMark}
                alt="Profile mark"
                className="h-14 w-14 rounded-2xl border border-border/70 bg-background/80 p-1.5"
              />
              <div>
                <p className="text-sm text-muted-foreground">Engineering Focus</p>
                <p className="font-medium text-foreground">Java backend systems, API architecture, and real-time apps</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border/70 bg-background/50 p-3">
                  <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
