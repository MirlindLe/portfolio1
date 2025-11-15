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
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    // Initialize visibility based on screen size
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return true;
    }
    return false;
  });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    // Skip intersection observer on small screens
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                  ? "bg-primary hover:bg-primary/90 border-0"
                  : "border-border text-muted-foreground hover:bg-card"
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
              className={`group relative px-4 py-2 text-base bg-card border-border hover:bg-card/80 transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-2 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Badge>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div
          className={`mt-16 text-center ${
            isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
          }`}
        >
          <div
            className={`bg-card backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto ${
              isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m constantly expanding my skill set and staying updated
              with the latest technologies. Currently exploring advanced
              concepts in cloud architecture, machine learning, and emerging web
              technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="outline"
                className="px-4 py-2 bg-primary/20 text-primary border-primary/30"
              >
                Learning: Advanced React Patterns
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 bg-primary/20 text-primary border-primary/30"
              >
                Exploring: AI/ML Integration
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 bg-primary/20 text-primary border-primary/30"
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
