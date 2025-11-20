"use client";

import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDjango,
  SiExpress,
  SiStripe,
  SiCplusplus,
  SiVercel,
  SiDotnet,
} from "react-icons/si";
import { TbApi, TbShieldLock } from "react-icons/tb";
import { BiPackage } from "react-icons/bi";

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skillTree = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JAVASCRIPT", icon: <FaJs className="text-yellow-400" /> },
      { name: "TYPESCRIPT", icon: <SiTypescript className="text-blue-600" /> },
      { name: "REACT", icon: <FaReact className="text-cyan-400" /> },
      { name: "NEXT JS", icon: <SiNextdotjs /> },
      { name: "ZUSTAND", icon: <BiPackage className="text-purple-600" /> },
      { name: "Shadcn UI", icon: <BiPackage /> },
      {
        name: "TAILWIND CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
    backend: [
      { name: "NODE", icon: <FaNode className="text-green-500" /> },
      { name: ".net", icon: <SiDotnet className="text-purple-600" /> },
      { name: "DJANGO", icon: <SiDjango className="text-green-700" /> },
      { name: "EXPRESS", icon: <SiExpress /> },
      { name: "REST API", icon: <TbApi className="text-blue-500" /> },
      {
        name: "ZOD VALIDATION",
        icon: <TbShieldLock className="text-blue-600" />,
      },
      { name: "JWT/OAUTH", icon: <TbShieldLock className="text-orange-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      {
        name: "STRIPE PAYMENTS",
        icon: <SiStripe className="text-purple-500" />,
      },
    ],
    languages: [
      { name: "JAVASCRIPT", icon: <FaJs className="text-yellow-400" /> },
      { name: "TYPESCRIPT", icon: <SiTypescript className="text-blue-600" /> },
      { name: "PYTHON", icon: <FaPython className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
      { name: "C#", icon: <SiDotnet className="text-purple-600" /> },
    ],
    tools: [
      { name: "GIT", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GITHUB", icon: <FaGithub /> },
      { name: "LINUX", icon: <FaLinux className="text-yellow-500" /> },
      { name: "VERCEL", icon: <SiVercel /> },
    ],
  };

  return (
    <section id="skills" className="py-4 md:py-6 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Skills Tree Structure */}
        <div className="flex justify-center">
          <div className="relative max-w-6xl w-full">
            {/* MY SKILLS - Root Node */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-card border-2 border-primary rounded-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-wider">
                  MY SKILLS
                </h3>
              </div>
            </div>

            {/* Connecting Lines Container - Hidden on mobile */}
            <div className="hidden md:block relative mb-6">
              {/* Vertical line from root */}
              <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-border transform -translate-x-1/2"></div>

              {/* Horizontal line connecting branches */}
              <div className="absolute left-[15%] right-[15%] top-6 h-0.5 bg-border"></div>

              {/* Vertical lines down to categories */}
              <div className="absolute left-[20%] top-6 w-0.5 h-6 bg-border"></div>
              <div className="absolute left-1/2 top-6 w-0.5 h-6 bg-border transform -translate-x-1/2"></div>
              <div className="absolute right-[20%] top-6 w-0.5 h-6 bg-border"></div>
            </div>

            {/* Main Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-0 md:mt-12">
              {/* Frontend */}
              <div
                className={`${
                  isVisible
                    ? "animate-fade-in animation-delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-block px-4 sm:px-5 py-2 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      FRONTEND
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.frontend.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300 flex items-center gap-1.5"
                      style={{ animationDelay: `${(index + 2) * 50}ms` }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div
                className={`${
                  isVisible
                    ? "animate-fade-in animation-delay-400"
                    : "opacity-0"
                }`}
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-block px-4 sm:px-5 py-2 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      BACKEND
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.backend.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300 flex items-center gap-1.5"
                      style={{ animationDelay: `${(index + 4) * 50}ms` }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div
                className={`${
                  isVisible
                    ? "animate-fade-in animation-delay-600"
                    : "opacity-0"
                }`}
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-block px-4 sm:px-5 py-2 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      LANGUAGES
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.languages.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300 flex items-center gap-1.5"
                      style={{ animationDelay: `${(index + 6) * 50}ms` }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div
                className={`${
                  isVisible
                    ? "animate-fade-in animation-delay-800"
                    : "opacity-0"
                }`}
              >
                <div className="text-center mb-3 sm:mb-4">
                  <div className="inline-block px-4 sm:px-5 py-2 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      TOOLS & PLATFORM
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.tools.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300 flex items-center gap-1.5"
                      style={{ animationDelay: `${(index + 8) * 50}ms` }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
