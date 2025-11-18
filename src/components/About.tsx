"use client";

import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block px-6 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">About Me</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Everything About <span className="text-primary">Mirlind</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <div
              className={
                isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
              }
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate self-taught programmer with expertise in
                both frontend and backend technologies. My journey includes
                building full-stack applications with Node.js, Express, MongoDB,
                Next.js, TypeScript, and Django. I love creating innovative
                solutions and turning ideas into reality through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My self-directed learning approach has led me to master multiple
                technologies including React, Next.js, Node.js, Python, Django,
                and .NET. I&apos;m constantly exploring new technologies and
                building projects that showcase my skills and passion for
                development.
              </p>
            </div>

            <div
              className={
                isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"
              }
            >
              <Button
                className="px-8 py-3 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                size="lg"
                asChild
              >
                <a href="/about">More About Me</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Decorative Tech Icons */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Central code icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/30 shadow-xl animate-float">
                <FaCode className="text-primary text-5xl" />
              </div>
            </div>

            {/* React icon */}
            <div className="absolute top-[10%] right-[20%] animate-float animation-delay-500">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiReact className="text-[#61DAFB] text-4xl" />
              </div>
            </div>

            {/* Next.js icon */}
            <div className="absolute top-[25%] left-[10%] animate-float animation-delay-1000">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiNextdotjs className="text-foreground text-4xl" />
              </div>
            </div>

            {/* TypeScript icon */}
            <div className="absolute top-[40%] right-[5%] animate-float animation-delay-1500">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiTypescript className="text-[#3178C6] text-4xl" />
              </div>
            </div>

            {/* Node.js icon */}
            <div className="absolute bottom-[30%] left-[5%] animate-float animation-delay-2000">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiNodedotjs className="text-[#339933] text-4xl" />
              </div>
            </div>

            {/* MongoDB icon */}
            <div className="absolute bottom-[20%] right-[15%] animate-float animation-delay-2500">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiMongodb className="text-[#47A248] text-4xl" />
              </div>
            </div>

            {/* Tailwind icon */}
            <div className="absolute top-[60%] left-[20%] animate-float animation-delay-3000">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiTailwindcss className="text-[#06B6D4] text-4xl" />
              </div>
            </div>

            {/* .NET */}
            <div className="absolute top-[60%] left-[20%] animate-float animation-delay-3000">
              <div className="w-20 h-20 bg-card/50 backdrop-blur-sm rounded-lg flex items-center justify-center border shadow-lg">
                <SiDotnet className="text-foreground text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
