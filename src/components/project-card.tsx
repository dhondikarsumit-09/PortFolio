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
  const previewStats =
    project.title === "Library Management System"
      ? [
          { label: "DSA", value: "Fundamentals" },
          { label: "Auth", value: "Core" },
          { label: "Stack", value: project.stack[0] ?? "Java" }
        ]
      : project.title === "TrackSphere Platform"
        ? [
            { label: "APIs", value: "40+" },
            { label: "Auth", value: project.stack.includes("JWT") ? "JWT" : "Core" },
            { label: "Stack", value: project.stack[0] ?? "Java" }
          ]
        : project.title === "Customer Management System"
          ? [
              { label: "APIs", value: "25+" },
              { label: "Auth", value: project.stack.includes("JWT") ? "JWT" : "Core" },
              { label: "Stack", value: project.stack[0] ?? "Java" }
            ]
      : [
          { label: "APIs", value: project.stack.includes("REST API") ? "REST" : "50+" },
          { label: "Auth", value: project.stack.includes("JWT") ? "JWT" : "Core" },
          { label: "Stack", value: project.stack[0] ?? "Java" }
        ];

  return (
    <motion.div
      variants={popIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      data-scroll
      data-scroll-speed="0.04"
    >
        <Card className="group h-full transition-colors hover:border-primary/30">
          <div className="relative overflow-hidden rounded-t-xl border-b border-white/10 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-purple-500/20 p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_38%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Preview</p>
                <div className="glass-pill rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                  {project.title}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {previewStats.map((item) => (
                  <div key={`${project.title}-${item.label}`} className="glass-pill rounded-2xl p-3">
                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4">
              <div className="rounded-2xl border bg-secondary/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Challenge</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
              </div>
              <div className="rounded-2xl border bg-secondary/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Solution</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
              <div className="rounded-2xl border bg-secondary/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Impact</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
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
