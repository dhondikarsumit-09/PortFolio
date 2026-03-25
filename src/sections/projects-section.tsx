import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Case studies that show how I think about backend architecture, product flows, and execution."
      description="Each project is framed as a compact case study with the problem, technical approach, and measurable engineering outcome."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
