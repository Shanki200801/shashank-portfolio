"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Flips `.dark` on <html> and remembers the choice. The initial class is set by
 * an inline script in the layout, so this only mirrors it into React state.
 */
const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
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
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative grid h-9 w-9 place-items-center rounded-lg border border-line bg-elevated/60 text-muted transition-colors hover:text-brand-400 ${className}`}
    >
      {mounted && (isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />)}
    </button>
  );
};

export default ThemeToggle;
