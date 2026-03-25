import { cn } from "@/lib/cn";
import type { Theme } from "@/hooks/use-theme";
import type { NavItem, SectionId } from "@/types/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarProps {
  navItems: readonly NavItem[];
  activeSection: SectionId;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ navItems, activeSection, theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div className="container space-y-2">
        <div className="glass-panel-strong flex items-center justify-between rounded-2xl px-4 py-3 shadow-glass">
          <a
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 font-display text-sm font-bold text-slate-950 shadow-[0_8px_24px_-10px_rgba(34,211,238,0.8)]"
          >
            SD
          </a>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "glass-pill rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  activeSection === item.id &&
                    "bg-accent/70 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <nav className="glass-panel flex gap-1.5 overflow-x-auto rounded-xl p-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "glass-pill whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
                activeSection === item.id && "bg-accent/70 text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
