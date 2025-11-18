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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [counts, setCounts] = useState({ projects: 0, skills: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about-page");
    if (element) observer.observe(element);
    return () => observer.disconnect();
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
    <section id="about-page" className="min-h-screen py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
            }
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Self-Taught Programmer & Full-Stack Developer
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="text-4xl text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
            }
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              My Journey
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Self-Taught Programmer
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Online Learning • 2020-Present
                  </p>
                  <p className="text-muted-foreground">
                    Started my programming journey through online courses,
                    documentation, and building projects. Learned full-stack
                    development through hands-on practice and continuous
                    learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-primary text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Full Stack Developer
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Freelance • 2022-Present
                  </p>
                  <p className="text-muted-foreground">
                    Working as a freelance developer, building modern web
                    applications with React, Next.js, Node.js, and various
                    databases. Specializing in full-stack solutions with
                    authentication, payments, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-700" : "opacity-0"
            }
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Education
            </h3>
            <div className="relative bg-card backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl shrink-0">
                    <FaUniversity />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-foreground mb-1">
                      Bachelor of Computerized Automation and Robotics
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      University of Prishtina, Prishtinë • 2019 – Present
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
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
                      and efficiency. This blend of technical knowledge and
                      logical training supports my path toward full-stack
                      development.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-2">
                        <FaMicrochip /> Electronics
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-2">
                        <FaCodeBranch /> Communication Protocols
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30 inline-flex items-center gap-2">
                        <FaRobot /> Robotics & Control
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div
            className={
              isVisible ? "animate-fade-in animation-delay-800" : "opacity-0"
            }
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">Name</span>
                <span className="text-foreground font-semibold text-lg">
                  Mirlind Leku
                </span>
              </div>
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">Age</span>
                <span className="text-foreground font-semibold text-lg">
                  24 Years
                </span>
              </div>
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">
                  Location
                </span>
                <span className="text-foreground font-semibold text-lg">
                  Drenas, Kosovo
                </span>
              </div>
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">
                  Freelance
                </span>
                <span className="text-primary font-semibold text-lg">
                  Available
                </span>
              </div>
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/mirlind-leku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                >
                  mirlind-leku
                </a>
              </div>
              <div className="p-6 bg-card/50 rounded-lg border">
                <span className="text-muted-foreground block mb-2">GitHub</span>
                <a
                  href="https://github.com/mirlindleku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                >
                  mirlindleku
                </a>
              </div>
            </div>
          </div>

          {/* Download CV */}
          <div
            className={`text-center ${
              isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
            }`}
          >
            <div className="p-8 bg-card/50 backdrop-blur-sm border rounded-2xl max-w-2xl mx-auto">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                Download My Resume
              </h4>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my skills, experience, and projects
              </p>
              <Button
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
