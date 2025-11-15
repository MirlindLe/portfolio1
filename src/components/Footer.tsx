"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  url: string;
  color: string;
}

interface QuickLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mirlindleku",
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/mirlind-leku",
      color: "hover:text-primary",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:lekumirlind@gmail.com",
      color: "hover:text-accent",
    },
  ];

  const quickLinks: QuickLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mirlind Leku
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              A passionate full-stack developer dedicated to creating innovative
              digital solutions and turning ideas into reality through code and
              creativity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground text-xl hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-300`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:lekumirlind@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  lekumirlind@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+38349425136"
                  className="hover:text-foreground transition-colors"
                >
                  +383 (49) 425-136
                </a>
              </li>
              <li className="hover:text-foreground transition-colors">
                Drenas, Kosovo
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Mirlind Leku. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> and
              lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
