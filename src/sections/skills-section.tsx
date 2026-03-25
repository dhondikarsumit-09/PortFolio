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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skills.map((group) => {
          const Icon = iconByCategory[group.category];
          return (
            <motion.div key={group.category} variants={popIn}>
              <Card className="h-full border-border/70 bg-card/70" data-scroll data-scroll-speed="0.03">
                <CardHeader className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{group.category}</CardTitle>
                  <p className="text-sm text-muted-foreground">{group.summary}</p>
                </CardHeader>
                <CardContent>
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
    </SectionWrapper>
  );
}
