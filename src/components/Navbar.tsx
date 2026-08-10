"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/shanki200801", icon: <FaGithub className="h-5 w-5" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shashank200801", icon: <FaLinkedin className="h-5 w-5" /> },
  { name: "Twitter", url: "https://twitter.com/shashank200801", icon: <FaTwitter className="h-5 w-5" /> },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never leave the body locked if the menu unmounts while open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-[var(--bg)]/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5" onClick={closeMenu}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 font-mono text-sm font-bold text-white shadow-lg shadow-brand-500/25">
              S
            </span>
            <span className="text-base font-semibold tracking-tight">
              Shashank
              <span className="text-brand-400">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active ? "text-[var(--text)]" : "text-muted hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                  )}
                </Link>
              );
            })}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated/60 px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-brand-400 hover:text-[var(--text)]"
            >
              <FiFileText className="h-4 w-4" />
              Resume
            </a>

            <ThemeToggle className="ml-2" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative z-50 grid h-9 w-9 place-items-center rounded-lg border border-line bg-elevated/60"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "top-1/2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
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
        className={`fixed inset-y-0 right-0 z-40 flex w-full flex-col bg-[var(--bg)]/95 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-grow flex-col px-6 pb-8 pt-24">
          <div className="space-y-2">
            {navItems.map((item) => {
              const active =
                item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3.5 text-lg font-medium transition-colors ${
                    active
                      ? "border border-line bg-elevated text-[var(--text)]"
                      : "text-muted hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-lg font-medium text-muted"
            >
              <FiFileText className="h-5 w-5" />
              Resume
            </a>
          </div>

          <div className="mt-auto border-t border-line pt-6">
            <div className="flex justify-center gap-8 py-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  onClick={closeMenu}
                  className="p-2 text-muted transition-colors hover:text-brand-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
