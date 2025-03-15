import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Shashank. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/shanki200801/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
            >
              <FaGithub className="mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 