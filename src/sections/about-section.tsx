import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { popIn, staggerContainer } from "@/lib/animations";

const focusAreas = [
  { icon: Target, title: "Problem Solving", detail: "Strong DSA practice with 400+ solved problems on LeetCode." },
  { icon: Zap, title: "Realtime Systems", detail: "I build low-latency features with WebSocket-driven updates." },
  { icon: Sparkles, title: "Production Mindset", detail: "I focus on secure auth, scaling, and maintainable architecture." }
] as const;

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      label="About"
      title="Building practical software with backend depth and product focus."
      description="From Java fundamentals to full stack projects, I focus on systems that are secure, scalable, and user-centric."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-4 p-6">
            {profile.shortAbout.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-4">
            {focusAreas.map((item) => (
              <motion.article key={item.title} variants={popIn} className="rounded-xl border border-border/70 bg-card/70 p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
