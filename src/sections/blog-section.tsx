import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog";
import { popIn, staggerContainer } from "@/lib/animations";

export function BlogSection() {
  return (
    <SectionWrapper
      id="blog"
      label="Blog"
      title="Optional writing section for technical notes, backend breakdowns, and project learnings."
      description="These are planned topics I can turn into published posts. The section exists now so the portfolio supports future writing without another redesign."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {blogPosts.map((post) => (
          <motion.article key={post.title} variants={popIn}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    {post.tag}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{post.status}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold leading-snug">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                </div>
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Planned article
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
