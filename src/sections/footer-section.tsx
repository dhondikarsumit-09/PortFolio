import { socialLinks } from "@/data/profile";

export function FooterSection() {
  return (
    <footer className="py-10">
      <div className="container">
        <div className="glass-panel rounded-[2rem] p-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md space-y-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-display text-sm font-bold text-white shadow-glow">
                SD
              </div>
              <p className="font-display text-xl font-semibold text-foreground">Sumit Dhondikar</p>
              <p>
                Backend-focused developer building secure APIs, realtime systems, and practical full stack products with
                clean engineering fundamentals.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-pill rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/70 pt-5">
            <span className="font-medium text-foreground">Languages:</span>
            <span>English</span>
            <span>-</span>
            <span>Hindi</span>
            <span className="ml-4 font-medium text-foreground">Interests:</span>
            <span>Cricket</span>
            <span>-</span>
            <span>Music</span>
            <span>-</span>
            <span>Gardening</span>
          </div>

          <div className="mt-5 border-t border-border/70 pt-5">
            <p>&copy; {new Date().getFullYear()} Sumit Dhondikar.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
