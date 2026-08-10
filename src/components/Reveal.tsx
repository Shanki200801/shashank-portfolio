"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observes every `.reveal` element on the page and adds `.is-visible` when it
 * scrolls into view. Mounted once in the layout so any page can opt in with a
 * single class instead of shipping its own client component.
 */
const Reveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (nodes.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));

    // Safety net: never leave content stuck invisible if the observer misses.
    const failsafe = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-visible"));
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default Reveal;
