"use client";

import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLightbulb,
  FaDownload,
  FaUniversity,
  FaRobot,
  FaMicrochip,
  FaCodeBranch,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function About() {
  const [isVisible] = useState<boolean>(true);
  const [counts, setCounts] = useState({ projects: 0, skills: 0 });

  useEffect(() => {
    const targets = { projects: 3, skills: 16 };
    const duration = 2000;
    const step = duration / 60;

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment =
        targets[key as keyof typeof targets] / (duration / step);
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key as keyof typeof targets]) {
          current = targets[key as keyof typeof targets];
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, step);
    });
  }, []);

  const stats = [
    {
      icon: <FaCode />,
      label: "Projects Completed",
      value: counts.projects,
      suffix: "+",
    },
    {
      icon: <FaLightbulb />,
      label: "Skills Mastered",
      value: counts.skills,
      suffix: "+",
    },
  ];

  return (
    <section id="about-page" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="w-20 md:w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Introduction - Mobile Optimized */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
            }
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 text-center md:text-left">
              Self-Taught Programmer & Full-Stack Developer
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate self-taught programmer with expertise in
                both frontend and backend technologies. My journey includes
                building full-stack applications with Node.js, Express, MongoDB,
                Next.js, TypeScript, and Django. I love creating innovative
                solutions and turning ideas into reality through code.
              </p>
              <p>
                My self-directed learning approach has led me to master multiple
                technologies including React, Next.js, Node.js, Python, Django,
                and .NET. I&apos;m constantly exploring new technologies and
                building projects that showcase my skills and passion for
                development.
              </p>
            </div>
          </div>

          {/* Stats - Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-sm border hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl text-primary mb-2 md:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline - Mobile Optimized */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
            }
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center md:text-left">
              My Journey
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-3 sm:space-y-0">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                  <FaGraduationCap className="text-primary text-xl md:text-2xl" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                    Self-Taught Programmer
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">
                    Online Learning • 2020-Present
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Started my programming journey through online courses,
                    documentation, and building projects. Learned full-stack
                    development through hands-on practice and continuous
                    learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-3 sm:space-y-0">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                  <FaBriefcase className="text-primary text-xl md:text-2xl" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                    Full Stack Developer
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">
                    Freelance • 2022-Present
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Working as a freelance developer, building modern web
                    applications with React, Next.js, Node.js, and various
                    databases. Specializing in full-stack solutions with
                    authentication, payments, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education - Redesigned for Mobile */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-700" : "opacity-0"
            }
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center md:text-left">
              Education
            </h3>
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl md:text-2xl shrink-0 mx-auto md:mx-0">
                    <FaUniversity />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1 md:mb-2">
                      Bachelor of Computerized Automation and Robotics
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                      University of Prishtina, Prishtinë • 2019 – Present
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto md:mx-0">
                      Pursuing a degree that combines programming, electronics,
                      and automation, which has helped me build a strong
                      problem-solving mindset and logical way of approaching
                      complex systems. My studies have given me solid experience
                      in programming with C++ as well as working with databases,
                      APIs, and communication protocols. While much of the
                      program is focused on robotics and control systems, I have
                      applied the same principles to software and web
                      development projects, where I design and build
                      applications with an emphasis on structure, scalability,
                      and efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-1 md:gap-2">
                        <FaMicrochip className="text-[10px] md:text-xs" />{" "}
                        Electronics
                      </span>
                      <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-1 md:gap-2">
                        <FaCodeBranch className="text-[10px] md:text-xs" />{" "}
                        Communication Protocols
                      </span>
                      <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-1 md:gap-2">
                        <FaRobot className="text-[10px] md:text-xs" /> Robotics
                        & Control
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information - Mobile Grid */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-800" : "opacity-0"
            }
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center md:text-left">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  Name
                </span>
                <span className="text-base md:text-lg text-foreground font-semibold">
                  Mirlind Leku
                </span>
              </div>
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  Age
                </span>
                <span className="text-base md:text-lg text-foreground font-semibold">
                  24 Years
                </span>
              </div>
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  Location
                </span>
                <span className="text-base md:text-lg text-foreground font-semibold">
                  Drenas, Kosovo
                </span>
              </div>
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  Freelance
                </span>
                <span className="text-base md:text-lg text-primary font-semibold">
                  Available
                </span>
              </div>
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/mirlind-leku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-primary hover:text-primary/80 transition-colors font-semibold break-all"
                >
                  mirlind-leku
                </a>
              </div>
              <div className="p-4 md:p-6 bg-card/50 rounded-lg border hover:border-primary/50 transition-all">
                <span className="text-xs md:text-sm text-muted-foreground block mb-1 md:mb-2">
                  GitHub
                </span>
                <a
                  href="https://github.com/mirlindleku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-primary hover:text-primary/80 transition-colors font-semibold break-all"
                >
                  mirlindleku
                </a>
              </div>
            </div>
          </div>

          {/* Download CV - Mobile Optimized */}
          <div
            className={`text-center ${
              isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
            }`}
          >
            <div className="p-6 md:p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl max-w-2xl mx-auto hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Download My Resume
              </h4>
              <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6">
                Get a detailed overview of my skills, experience, and projects
              </p>
              <Button
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
                size="lg"
                asChild
              >
                <a href="/Resume2.pdf" download="Mirlind_Leku_CV.pdf">
                  <FaDownload />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
