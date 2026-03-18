import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
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
      title="Let's connect for opportunities and collaboration."
      description="Open to software engineering roles, internships, and impactful product-building opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={popIn}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border/70 bg-card/70 p-4 transition-colors hover:border-cyan-300/50"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
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

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="space-y-6 p-6">
              <div>
                <h3 className="font-display text-xl font-semibold">Send a message</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  This is a static form UI for presentation only. Connect directly via email or LinkedIn for responses.
                </p>
              </div>

              <Separator />

              <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" aria-label="Your name" />
                  <Input type="email" placeholder="Your email" aria-label="Your email" />
                </div>
                <Input placeholder="Subject" aria-label="Subject" />
                <Textarea placeholder="Tell me about your project or opportunity..." aria-label="Message" />
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message (Static)
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
