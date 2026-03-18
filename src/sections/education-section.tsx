import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/data/education";
import { popIn, staggerContainer } from "@/lib/animations";

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      label="Education"
      title="Academic foundation in computer science and engineering."
      description="Formal education supporting my backend development and full stack engineering journey."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative space-y-5 before:absolute before:left-3.5 before:top-0 before:h-full before:w-px before:bg-border/80"
      >
        {education.map((item) => (
          <motion.article key={`${item.degree}-${item.duration}`} variants={popIn} className="relative pl-10">
            <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full border border-cyan-300/80 bg-cyan-400/60 shadow-[0_0_0_4px_rgba(56,189,248,0.18)]" />
            <Card className="border-border/70 bg-card/70">
              <CardHeader className="space-y-3 pb-4">
                <CardTitle className="text-xl">{item.degree}</CardTitle>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {item.institution}
                  </span>
                  <span>{item.duration}</span>
                  <span>{item.score}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
