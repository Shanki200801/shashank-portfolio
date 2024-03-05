"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const Navbar = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const isActive = (href: string | null) => {
    return selectedLayoutSegment === href ? "text-blue-700" : "";
  };
  return (
    <header className="flex flex-row justify-start py-4 items-center w-full">
      <div className="flex items-center px-8">
        <a href="/" className="text-2xl font-bold px-4">
          Shashank
        </a>
        <nav>
          <ul className="flex flex-row items-center">
            <li className="px-2">
              <Link href="/">
                <p className={isActive(null)}>About</p>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/projects">
                <p className={isActive("projects")}>Projects</p>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/resume">
                <p className={isActive("resume")}>Resume</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* darkmode button */}
    </header>
  );
};

export default Navbar;
