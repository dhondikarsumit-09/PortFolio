import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { popIn, staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      label="Testimonials"
      title="Recommendation-ready section for real feedback from mentors, leads, and collaborators."
      description="I have kept this section intentionally honest. These cards are placeholders for real quotes rather than fabricated testimonials."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 lg:grid-cols-2"
      >
        {testimonials.map((item, index) => (
          <motion.div key={`${item.name}-${index}`} variants={popIn}>
            <Card className="h-full">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Quote className="h-5 w-5" />
                  </span>
                  <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.status === "placeholder" ? "Placeholder" : "Verified"}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-foreground/90">{item.quote}</p>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
