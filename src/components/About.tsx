"use client";

import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaHeart,
  FaCode,
  FaLightbulb,
  FaDownload,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [counts, setCounts] = useState<{
    projects: number;
    experience: number;
    skills: number;
    clients: number;
  }>({
    projects: 0,
    experience: 0,
    skills: 0,
    clients: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const targets = { projects: 3, experience: 4, skills: 16, clients: 5 };
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
  };

  const stats = [
    {
      icon: <FaCode />,
      label: "Projects Completed",
      value: counts.projects,
      suffix: "+",
    },
    {
      icon: <FaBriefcase />,
      label: "Years Experience",
      value: counts.experience,
      suffix: "+",
    },
    {
      icon: <FaLightbulb />,
      label: "Skills Mastered",
      value: counts.skills,
      suffix: "+",
    },
    {
      icon: <FaHeart />,
      label: "Happy Clients",
      value: counts.clients,
      suffix: "+",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <FaUser size={120} className="text-white" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl text-teal-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Self-Taught Programmer & Full-Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate self-taught programmer with expertise in
                both frontend and backend technologies. My journey includes
                building full-stack applications with Node.js, Express, MongoDB,
                Next.js, TypeScript, and Django. I love creating innovative
                solutions and turning ideas into reality through code.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My self-directed learning approach has led me to master multiple
                technologies including React, Next.js, Node.js, Python, Django,
                and .NET. I&apos;m constantly exploring new technologies and
                building projects that showcase my skills and passion for
                development.
              </p>
            </div>

            {/* Education & Experience */}
            <div
              className={`space-y-4 ${
                isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-teal-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Self-Taught Programmer
                  </h4>
                  <p className="text-gray-400">
                    Online Learning • 2020-Present
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Full Stack Developer
                  </h4>
                  <p className="text-gray-400">Freelance • 2022-Present</p>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-800" : "opacity-0"
              }`}
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Personal Information
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">Mirlind Leku</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Age:</span>
                  <span className="text-white">24 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">Drenas, Kosovo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Freelance:</span>
                  <span className="text-green-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/mirlind-leku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    mirlind-leku
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GitHub:</span>
                  <a
                    href="https://github.com/mirlindleku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    mirlindleku
                  </a>
                </div>
              </div>
            </div>

            {/* CV Download Section */}
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
              }`}
            >
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">
                  Download My Resume
                </h4>
                <p className="text-gray-300 text-center mb-6">
                  Get a detailed overview of my skills, experience, and projects
                </p>
                <div className="flex justify-center">
                  <Button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
        </div>
      </div>
    </section>
  );
};

export default About;
