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
  SiClerk,
  SiCloudinary,
} from "react-icons/si";
import { TbApi, TbShieldLock } from "react-icons/tb";
import { BiPackage } from "react-icons/bi";
import { motion } from "framer-motion";

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

  const techStack = {
    frontend: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "ShadCN UI", icon: <BiPackage /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: ".NET Core", icon: <SiDotnet className="text-purple-600" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "C#", icon: <SiDotnet className="text-purple-600" /> },
      { name: "REST API", icon: <TbApi className="text-blue-500" /> },
    ],
    databases: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
    auth: [
      { name: "Clerk", icon: <SiClerk className="text-blue-600" /> },
      { name: "JWT", icon: <TbShieldLock className="text-orange-500" /> },
      { name: "OAuth", icon: <TbShieldLock className="text-blue-600" /> },
    ],
    cloud: [
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500" /> },
      { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
    ],
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 px-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FaReact className="text-cyan-400" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FaNode className="text-green-500" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <SiMongodb className="text-green-500" />
              Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.databases.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Authentication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <TbShieldLock className="text-orange-500" />
              Auth
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.auth.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cloud & Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <SiStripe className="text-purple-500" />
              Cloud & Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.cloud.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <FaGitAlt className="text-orange-600" />
              Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 cursor-default"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
