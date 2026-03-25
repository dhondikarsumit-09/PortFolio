import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/data/stats";
import { popIn, staggerContainer } from "@/lib/animations";

export function StatsSection() {
  return (
    <SectionWrapper
      id="stats"
      label="Stats"
      title="A quick numerical snapshot of my backend and product-building work."
      description="These metrics reflect actual project scale, coding practice, and engineering focus areas from my portfolio."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={popIn}>
            <Card className="h-full">
              <CardContent className="space-y-4 p-6">
                <p className="font-display text-4xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{stat.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
