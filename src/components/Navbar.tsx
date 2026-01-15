"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  IoMdHome,
  IoMdPerson,
  IoMdFolder,
  IoMdMail,
  IoMdMenu,
  IoMdClose,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (href: string) => pathname === href;

  const getLinkStyles = (href: string) => {
    const baseStyles =
      "flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200";
    const inactiveStyles =
      "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100";
    const activeStyles =
      "bg-blue-100 dark:bg-blue-900 shadow-lg text-blue-600 dark:text-blue-400 font-semibold";

    return `${baseStyles} ${isActive(href) ? activeStyles : inactiveStyles}`;
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible when menu is closed */}
      {!isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700"
          aria-label="Open mobile menu"
        >
          <IoMdMenu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          ${isCollapsed ? "w-20" : "w-64 lg:w-60 xl:w-64"} h-screen flex flex-col flex-shrink-0 
          bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
          fixed md:relative z-40 transition-all duration-300 ease-in-out
          border-r border-gray-200 dark:border-gray-800
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <nav className="flex flex-col h-full px-4 py-6">
          {/* Header with Collapse Button */}
          <div className="flex items-center justify-between gap-3 pb-6 flex-shrink-0">
            {!isCollapsed && (
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      Y
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="font-bold text-sm text-gray-900 dark:text-white truncate">
                    Yuri
                  </h1>
                  <p className="font-light text-xs text-gray-600 dark:text-gray-300 truncate">
                    Dev
                  </p>
                </div>
              </div>
            )}
            
            {/* Collapse Toggle Button - Hidden on Mobile */}
            <button
              onClick={toggleCollapse}
              className="hidden md:flex p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? (
                <IoMdArrowForward size={18} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <IoMdArrowBack size={18} className="text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Mobile Close Button - Only visible when menu is open */}
            {isMobileMenuOpen && (
              <div className="md:hidden flex justify-end">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <IoMdClose
                    size={18}
                    className="text-gray-600 dark:text-gray-400"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  className={getLinkStyles("/")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  title={isCollapsed ? "Home" : ""}
                >
                  <IoMdHome
                    size={20}
                    className={`flex-shrink-0 ${
                      isActive("/") ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                  {!isCollapsed && <span>Home</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={getLinkStyles("/about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  title={isCollapsed ? "About" : ""}
                >
                  <IoMdPerson
                    size={20}
                    className={`flex-shrink-0 ${
                      isActive("/about") ? "text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                  {!isCollapsed && <span>About</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={getLinkStyles("/projects")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  title={isCollapsed ? "Projects" : ""}
                >
                  <IoMdFolder
                    size={20}
                    className={`flex-shrink-0 ${
                      isActive("/projects")
                        ? "text-blue-600 dark:text-blue-400"
                        : ""
                    }`}
                  />
                  {!isCollapsed && <span>Projects</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={getLinkStyles("/contact")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  title={isCollapsed ? "Contact" : ""}
                >
                  <IoMdMail
                    size={20}
                    className={`flex-shrink-0 ${
                      isActive("/contact")
                        ? "text-blue-600 dark:text-blue-400"
                        : ""
                    }`}
                  />
                  {!isCollapsed && <span>Contact</span>}
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            {!isCollapsed && (
              <div className="pt-6">
                <h2 className="mb-3 font-bold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Socials
                </h2>
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <FaLinkedin size={20} />
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <FaGithub size={20} />
                      <span>GitHub</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {/* Collapsed Social Icons */}
            {isCollapsed && (
              <div className="pt-6 flex flex-col gap-2">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex justify-center"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex justify-center"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};
