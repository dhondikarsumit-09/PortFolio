import { useEffect, useState } from "react";
import type { NavItem, SectionId } from "@/types/portfolio";

export function useActiveSection(navItems: readonly NavItem[]): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(navItems[0]?.id ?? "home");

  useEffect(() => {
    const sectionNodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sectionNodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-40% 0px -48% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [navItems]);

  return activeSection;
}
