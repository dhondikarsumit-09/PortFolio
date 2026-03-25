import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { popIn } from "@/lib/animations";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasGithubLink = Boolean(project.githubUrl && project.githubUrl !== "#");
  const hasLiveLink = project.liveUrl !== "#";

  return (
    <motion.div
      variants={popIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      data-scroll
      data-scroll-speed="0.04"
    >
        <Card className="group h-full border-border/70 bg-card/70 transition-colors hover:border-cyan-300/50">
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-background/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Challenge</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Solution</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Impact</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={`${project.title}-${tech}`} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="mt-auto flex gap-3">
          {hasGithubLink ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          ) : null}
          {hasLiveLink ? (
            <Button asChild size="sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled>
              Live Demo Coming Soon
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
