import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { fadeUp, popIn, staggerContainer } from "@/lib/animations";

const WEB3FORMS_ACCESS_KEY = "b5cc3ae4-5423-4d0b-a926-a3b1ba6fe332";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/sumit-dhondikar/" },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` }
] as const;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Portfolio Contact Form Submission");
    formData.append("from_name", "Portfolio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Message sent successfully. I’ll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the message right now.");
    }
  }

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
                  Web3Forms Live
                </div>
                <h3 className="font-display text-2xl font-semibold">Send a message directly from the portfolio.</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  This form is now connected through Web3Forms. You can still use email or LinkedIn, but direct form submission works here as well.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Your email" required />
                </div>
                <Input name="company" placeholder="Company / Organization" />
                <Textarea
                  name="message"
                  placeholder="Tell me about the role, project, or opportunity..."
                  required
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" size="lg" className="rounded-2xl" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="rounded-2xl">
                      <a href={`mailto:${profile.email}`}>
                        Email
                        <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-2xl">
                      <a href="https://www.linkedin.com/in/sumit-dhondikar/" target="_blank" rel="noreferrer">
                        LinkedIn
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </form>

              {message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-400/30 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {message}
                </div>
              ) : null}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
