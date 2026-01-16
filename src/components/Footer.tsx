"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yuriclaro/",
      icon: FaLinkedin,
      color: "text-blue-500 hover:text-blue-600"
    },
    {
      name: "GitHub", 
      href: "https://github.com/YuriClaro",
      icon: FaGithub,
      color: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/yur1v/",
      icon: FaInstagram,
      color: "text-pink-500 hover:text-pink-600"
    }
  ];
  
  return (
    <footer className={`bg-black dark:bg-black transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Yuri Claro
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-stack developer and a love car enthusiast.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/projects"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
              <Link 
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <span className="font-medium">&copy; {currentYear}</span>
              {" "}Yuri Claro. All rights reserved.
            </div>
            
            {/* Built with */}
            <div className="text-sm text-gray-500 text-center md:text-right">
              Built with{" "}
              <span className="text-red-500">♥</span>
              {" "}using{" "}
              <span className="font-medium text-gray-300">
                Next.js
              </span>
              {" "}and{" "}
              <span className="font-medium text-gray-300">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
