"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Mirlind&apos;s Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground px-0 py-1 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-primary"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side - Resume button and Theme Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 btn-outline"
            >
              <Download size={18} />
              Resume
            </a>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-muted-foreground hover:text-foreground p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md border-t border-border overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-0 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="w-full text-left px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 text-base font-medium transition-all duration-200 rounded-lg"
            >
              {item.name}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 w-full px-4 py-2.5 text-primary font-medium text-base transition-all duration-200 rounded-lg hover:bg-primary/10"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
