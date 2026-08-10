import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socials = [
  { name: "GitHub", url: "https://github.com/shanki200801", icon: <FaGithub className="h-4 w-4" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shashank200801", icon: <FaLinkedin className="h-4 w-4" /> },
  { name: "Twitter", url: "https://twitter.com/shashank200801", icon: <FaTwitter className="h-4 w-4" /> },
  { name: "Email", url: "mailto:shashank200801@gmail.com", icon: <FiMail className="h-4 w-4" /> },
];

const Footer = () => (
  <footer className="border-t border-line py-10">
    <div className="container-page">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Shashank
        </p>

        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted transition-colors hover:text-[var(--text)]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
