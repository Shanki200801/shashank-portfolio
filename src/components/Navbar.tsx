"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Never leave the body locked if the menu unmounts while open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[var(--bg)]">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-medium tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shashank
          </Link>

          <div className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm transition-colors ${
                  isActive(item.path)
                    ? "text-[var(--text)]"
                    : "text-muted hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-[var(--text)]"
            >
              Résumé
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative z-50 grid h-9 w-9 place-items-center rounded-md border border-line"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <div className="relative h-3.5 w-4.5">
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-all duration-200 ${
                    isMobileMenuOpen ? "top-1/2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-all duration-200 ${
                    isMobileMenuOpen ? "top-1/2 -rotate-45" : "bottom-0.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg)] transition-opacity duration-200 sm:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 pt-24">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 text-lg ${
                isActive(item.path) ? "text-[var(--text)]" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-lg text-muted"
          >
            Résumé
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
