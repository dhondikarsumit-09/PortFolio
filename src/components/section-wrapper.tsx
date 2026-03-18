import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, sectionViewport } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/types/portfolio";

interface SectionWrapperProps extends PropsWithChildren {
  id: SectionId;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionWrapper({ id, label, title, description, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("section-anchor space-y-10", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="space-y-4">
        <Badge variant="outline" className="px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
          {label}
        </Badge>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description ? <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
