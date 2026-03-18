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
      title="Professional projects with backend-heavy implementation."
      description="A focused selection of systems I designed and developed using Spring Boot, React, and Java."
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
