import { socialLinks } from "@/data/profile";

export function FooterSection() {
  const essentialLinks = socialLinks.filter((social) => social.label === "LinkedIn" || social.label === "Email");

  return (
    <footer className="py-10">
      <div className="container">
        <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 text-sm text-muted-foreground backdrop-blur-xl">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Languages:</span>
              <span>English</span>
              <span>-</span>
              <span>Hindi</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Interests:</span>
              <span>Cricket</span>
              <span>-</span>
              <span>Music</span>
              <span>-</span>
              <span>Gardening</span>
            </div>

            <div className="border-t border-border/70 pt-5">
              <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                <p>&copy; {new Date().getFullYear()} Sumit Dhondikar.</p>
                <div className="flex items-center gap-4">
                  {essentialLinks.map((social) => (
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
          </div>
        </div>
      </div>
    </footer>
  );
}
