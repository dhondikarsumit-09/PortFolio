import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/data/achievements";
import { popIn, staggerContainer } from "@/lib/animations";

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      title="Certifications and milestones from continuous learning."
      description="Focused progression across problem solving, Java mastery, and modern AI productivity tools."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {achievements.map((item) => (
          <motion.div key={item.title} variants={popIn}>
            <Card className="h-full border-border/70 bg-card/70">
              <CardHeader className="space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                  <Award className="h-5 w-5" />
                </span>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                  <Badge variant="outline">{item.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified learning outcome
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
