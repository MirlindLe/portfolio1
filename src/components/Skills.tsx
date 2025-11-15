"use client";

import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
  icon: React.ReactElement;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    // Ensure visibility on small screens
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsVisible(true);
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
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & Others" },
  ];

  const skills: Skill[] = [
    // Frontend
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "frontend",
    },
    {
      name: "React",
      icon: <FaReact />,
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      category: "backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "backend",
    },
    {
      name: "Django",
      icon: <FaReact />,
      category: "backend",
    },
    {
      name: ".NET",
      icon: <FaReact />,
      category: "backend",
    },
    {
      name: "C#",
      icon: <FaReact />,
      category: "backend",
    },

    // Tools & Others
    {
      name: "Git",
      icon: <FaGit />,
      category: "tools",
    },
    {
      name: "GitHub",
      icon: <FaGit />,
      category: "tools",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0"
                  : "border-white/20 text-gray-300 hover:bg-white/20"
              }`}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {filteredSkills.map((skill, index) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`group relative px-4 py-2 text-base bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-2 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                  {skill.name}
                </span>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Badge>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m constantly expanding my skill set and staying updated
              with the latest technologies. Currently exploring advanced
              concepts in cloud architecture, machine learning, and emerging web
              technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="outline"
                className="px-4 py-2 bg-teal-500/20 text-teal-300 border-teal-500/30"
              >
                Learning: Advanced React Patterns
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
              >
                Exploring: AI/ML Integration
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
              >
                Next: Cloud Architecture
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
