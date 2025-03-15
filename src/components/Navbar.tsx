"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                Shashank
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.path
                      ? 'border-indigo-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700"
              >
                Resume
              </a>
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className="hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path
                  ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-200'
                  : 'text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 