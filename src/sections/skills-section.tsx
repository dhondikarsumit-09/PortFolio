import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layers, ServerCog, Wrench } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { SkillChip } from "@/components/skill-chip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { popIn, staggerContainer } from "@/lib/animations";
import type { SkillCategory } from "@/types/portfolio";

const iconByCategory: Record<SkillCategory["category"], ComponentType<{ className?: string }>> = {
  "Programming Languages": Code2,
  "Frontend Development": Layers,
  "Backend Development": ServerCog,
  Databases: Database,
  "Tools & Platforms": Wrench
};

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technical skills organized by development domain."
      description="Core strengths across programming, frontend, backend, database systems, and tooling."
    >
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%)]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = iconByCategory[group.category];
            return (
              <motion.div
                key={group.category}
                variants={popIn}
                whileHover={{ y: -10, scale: 1.015 }}
                whileTap={{ scale: 0.985, y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Card
                  className="group relative h-full cursor-default overflow-hidden bg-white/8 transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/40 hover:shadow-glow dark:bg-white/[0.04]"
                  data-scroll
                  data-scroll-speed="0.03"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%),linear-gradient(180deg,rgba(99,102,241,0.08),transparent_55%)] opacity-80" />
                  <CardHeader className="relative space-y-3">
                    <span className="glass-pill inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle>{group.category}</CardTitle>
                    <p className="text-sm text-muted-foreground">{group.summary}</p>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillChip key={`${group.category}-${item}`} label={item} />
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
