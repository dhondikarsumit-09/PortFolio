import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div className="container space-y-2">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 shadow-glass">
          <a
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 hover:scale-105"
          >
            SD
          </a>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "glass-pill rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground",
                  activeSection === item.id && "bg-accent/45 text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="glass-pill inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="glass-panel space-y-2 rounded-xl p-3 shadow-glass md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-accent/35 hover:text-foreground",
                  activeSection === item.id && "bg-accent/45 text-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
