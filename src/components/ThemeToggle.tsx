"use client";

import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Flips `.dark` on <html> and remembers the choice.
 *
 * Deliberately stateless: the initial class is set pre-paint by an inline script
 * in the layout, and which icon shows is decided by CSS (`dark:` variants) rather
 * than React. That avoids a hydration mismatch and any post-mount flicker.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the toggle still works for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className={`grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-[var(--text)] ${className}`}
    >
      <FiSun className="hidden h-4 w-4 dark:block" />
      <FiMoon className="h-4 w-4 dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
