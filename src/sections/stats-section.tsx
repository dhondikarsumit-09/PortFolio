import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/data/stats";
import { popIn, staggerContainer } from "@/lib/animations";

const metricWidths = ["88%", "76%", "72%", "64%"] as const;

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
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={popIn}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.985, y: -2 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <Card className="h-full transition-colors hover:border-primary/30">
              <CardContent className="space-y-4 p-6">
                <p className="font-display text-4xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{stat.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      style={{ width: metricWidths[index % metricWidths.length] }}
                    />
                  </div>
                  <div className="glass-pill inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Metric Snapshot
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
