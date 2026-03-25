import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const NAV_OFFSET = 112;

export function useLocomotiveScroll() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let isDisposed = false;
    let cleanupClickHandler = () => {};
    let cleanupHashHandler = () => {};

    void import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      if (isDisposed) {
        return;
      }

      const scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.09,
          smoothWheel: true,
          syncTouch: true,
          wheelMultiplier: 0.9
        }
      });

      const handleAnchorClick = (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
          return;
        }

        const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
        const href = anchor?.getAttribute("href");
        if (!href || href === "#") {
          return;
        }

        const section = document.querySelector<HTMLElement>(href);
        if (!section) {
          return;
        }

        event.preventDefault();
        scroll.scrollTo(section, { offset: -NAV_OFFSET, duration: 1.2 });
        window.history.replaceState(null, "", href);
      };

      const handleHashNavigation = () => {
        if (!window.location.hash) {
          return;
        }

        const section = document.querySelector<HTMLElement>(window.location.hash);
        if (!section) {
          return;
        }

        requestAnimationFrame(() => {
          scroll.scrollTo(section, { offset: -NAV_OFFSET, immediate: true });
        });
      };

      document.addEventListener("click", handleAnchorClick);
      window.addEventListener("hashchange", handleHashNavigation);
      handleHashNavigation();

      cleanupClickHandler = () => document.removeEventListener("click", handleAnchorClick);
      cleanupHashHandler = () => window.removeEventListener("hashchange", handleHashNavigation);

      if (isDisposed) {
        cleanupClickHandler();
        cleanupHashHandler();
        scroll.destroy();
      }
    });

    return () => {
      isDisposed = true;
      cleanupClickHandler();
      cleanupHashHandler();
    };
  }, [shouldReduceMotion]);
}
