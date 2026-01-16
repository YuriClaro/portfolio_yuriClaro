"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => pathname === href;

  const getLinkStyles = (href: string) => {
    const baseStyles =
      "px-4 py-2 rounded-lg transition duration-200 font-medium text-sm";
    const inactiveStyles =
      "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
    const activeStyles =
      "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20";

    return `${baseStyles} ${isActive(href) ? activeStyles : inactiveStyles}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-0.5 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  Y
                </span>
              </div>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gray-900 dark:text-white">
              Yuri
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={getLinkStyles("/")}
              title="Home"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={getLinkStyles("/projects")}
              title="Projects"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={getLinkStyles("/contact")}
              title="Contact"
            >
              Contact
            </Link>
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Social Links - Always visible on desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <IoMdClose size={24} />
              ) : (
                <IoMdMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/"
                className={getLinkStyles("/")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={getLinkStyles("/projects")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={getLinkStyles("/contact")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Social Links */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
