import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { fadeUp, popIn, staggerContainer } from "@/lib/animations";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/sumit-dhondikar/" },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` }
] as const;

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's build something impactful together."
      description="Open to software engineering roles, internships, and backend-heavy product opportunities. The fastest way to reach me is direct email or LinkedIn."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={popIn}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.985, y: -2 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <link.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{link.label}</p>
                    <p className="text-sm font-medium text-foreground">{link.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
        >
          <Card className="overflow-hidden transition-colors hover:border-primary/30">
            <CardContent className="space-y-6 p-6">
              <div className="space-y-3">
                <div className="glass-pill inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  Fastest response
                </div>
                <h3 className="font-display text-2xl font-semibold">Ready for backend, full stack, and realtime product work.</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  If you have an internship, role, or product idea that needs clean APIs, scalable backend logic, or realtime workflows, reach out directly.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href={`mailto:${profile.email}`}>
                    Email Me
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href="https://www.linkedin.com/in/sumit-dhondikar/" target="_blank" rel="noreferrer">
                    LinkedIn
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="glass-pill rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Response</p>
                  <p className="mt-2 font-medium text-foreground">Direct and fast</p>
                </div>
                <div className="glass-pill rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus</p>
                  <p className="mt-2 font-medium text-foreground">Backend + Product</p>
                </div>
                <div className="glass-pill rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</p>
                  <p className="mt-2 font-medium text-foreground">Betul, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
