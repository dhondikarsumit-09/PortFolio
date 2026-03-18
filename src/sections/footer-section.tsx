import { socialLinks } from "@/data/profile";

export function FooterSection() {
  return (
    <footer className="border-t border-border/70 bg-background/70 py-8">
      <div className="container space-y-5 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-foreground">Languages:</span>
          <span>English (Professional Proficiency)</span>
          <span>-</span>
          <span>Hindi (Native)</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-foreground">Interests:</span>
          <span>Cricket</span>
          <span>-</span>
          <span>Music</span>
          <span>-</span>
          <span>Gardening</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-5 md:flex-row">
          <p>© {new Date().getFullYear()} Sumit Dhondikar. Built with React, TypeScript, Tailwind, and Framer Motion.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
