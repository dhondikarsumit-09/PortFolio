import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/experience";
import { popIn, staggerContainer } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="An engineering timeline built through study, systems work, and consistent problem solving."
      description="This timeline reflects practical experience from academic projects and backend-focused development, without overstating formal work history."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative space-y-5 before:absolute before:left-3.5 before:top-0 before:h-full before:w-px before:bg-border/80"
      >
        {experience.map((item) => (
          <motion.article key={`${item.title}-${item.period}`} variants={popIn} className="relative pl-10">
            <span className="absolute left-1.5 top-2 h-4 w-4 rounded-full border border-primary/40 bg-primary/75 shadow-[0_0_0_5px_rgba(92,70,56,0.12)]" />
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-primary">{item.summary}</p>
                    </div>
                  </div>
                  <span className="rounded-full border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.detail}</p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
