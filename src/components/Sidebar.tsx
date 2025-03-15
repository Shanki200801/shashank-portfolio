"use client";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shanki200801',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shashank200801',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shashank200801',
      icon: <FaTwitter className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed left-4 bottom-0 z-0 hidden md:block pointer-events-none">
      <div className="flex flex-col items-center space-y-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200 pointer-events-auto"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
        <div className="h-24 w-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Sidebar; 