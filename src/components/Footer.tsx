import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { name: "GitHub", url: "https://github.com/shanki200801", icon: <FaGithub className="h-5 w-5" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shashank200801", icon: <FaLinkedin className="h-5 w-5" /> },
  { name: "Twitter", url: "https://twitter.com/shashank200801", icon: <FaTwitter className="h-5 w-5" /> },
  { name: "Email", url: "mailto:shashank200801@gmail.com", icon: <FiMail className="h-5 w-5" /> },
];

const Footer = () => (
  <footer className="mt-10 border-t border-line py-12">
    <div className="container-page">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 font-mono text-sm font-bold text-white">
              S
            </span>
            <span className="font-semibold">Shashank</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Software engineer in Bengaluru. Distributed systems, Go, and long runs.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-400"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-line pt-6 text-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Shashank · Built with Next.js &amp; Tailwind
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
