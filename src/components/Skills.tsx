"use client";

import React, { useState, useEffect } from "react";

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
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT",
      "NEXT JS",
      "ZUSTAND",
      "Shadcn UI",
      "TAILWIND CSS",
    ],
    backend: [
      "NODE",
      ".net",
      "DJANGO",
      "EXPRESS",
      "REST API",
      "ZOD VALIDATION",
      "JWT/OAUTH",
      "MySQL",
      "MongoDB",
      "STRIPE PAYMENTS",
    ],
    languages: ["JAVASCRIPT", "TYPESCRIPT", "PYTHON", "C++", "C#"],
    tools: ["GIT", "GITHUB", "LINUX", "VERCEL"],
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Skills Tree Structure */}
        <div className="flex justify-center">
          <div className="relative max-w-6xl w-full">
            {/* MY SKILLS - Root Node */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div
                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-card border-2 border-primary rounded-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-wider">
                  MY SKILLS
                </h3>
              </div>
            </div>

            {/* Connecting Lines Container - Hidden on mobile */}
            <div className="hidden md:block relative mb-8">
              {/* Vertical line from root */}
              <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-border transform -translate-x-1/2"></div>

              {/* Horizontal line connecting branches */}
              <div className="absolute left-[15%] right-[15%] top-8 h-0.5 bg-border"></div>

              {/* Vertical lines down to categories */}
              <div className="absolute left-[20%] top-8 w-0.5 h-8 bg-border"></div>
              <div className="absolute left-1/2 top-8 w-0.5 h-8 bg-border transform -translate-x-1/2"></div>
              <div className="absolute right-[20%] top-8 w-0.5 h-8 bg-border"></div>
            </div>

            {/* Main Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-0 md:mt-16">
              {/* Frontend */}
              <div
                className={`${
                  isVisible
                    ? "animate-fade-in animation-delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      FRONTEND
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.frontend.map((skill, index) => (
                    <div
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300"
                      style={{ animationDelay: `${(index + 2) * 50}ms` }}
                    >
                      {skill}
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
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      BACKEND
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.backend.map((skill, index) => (
                    <div
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300"
                      style={{ animationDelay: `${(index + 4) * 50}ms` }}
                    >
                      {skill}
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
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      LANGUAGES
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.languages.map((skill, index) => (
                    <div
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300"
                      style={{ animationDelay: `${(index + 6) * 50}ms` }}
                    >
                      {skill}
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
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-card border border-primary/50 rounded-lg">
                    <h4 className="text-base sm:text-lg font-semibold text-primary tracking-wide">
                      TOOLS & PLATFORM
                    </h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillTree.tools.map((skill, index) => (
                    <div
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 border border-primary/30 rounded-md text-xs sm:text-sm text-foreground hover:bg-card hover:border-primary/60 transition-all duration-300"
                      style={{ animationDelay: `${(index + 8) * 50}ms` }}
                    >
                      {skill}
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
