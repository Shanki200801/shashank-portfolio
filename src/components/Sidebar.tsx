import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/shanki200801", icon: <FaGithub className="h-[18px] w-[18px]" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shashank200801", icon: <FaLinkedin className="h-[18px] w-[18px]" /> },
  { name: "Twitter", url: "https://twitter.com/shashank200801", icon: <FaTwitter className="h-[18px] w-[18px]" /> },
  { name: "Email", url: "mailto:shashank200801@gmail.com", icon: <FiMail className="h-[18px] w-[18px]" /> },
];

/** Fixed social rail, desktop only. Sits below the page content in z-order. */
const Sidebar = () => (
  <aside className="pointer-events-none fixed bottom-0 left-5 z-30 hidden xl:block">
    <div className="flex flex-col items-center gap-1">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="pointer-events-auto p-2.5 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-400"
        >
          {link.icon}
        </a>
      ))}
      <div className="mt-3 h-24 w-px bg-gradient-to-b from-line to-transparent" />
    </div>
  </aside>
);

export default Sidebar;
