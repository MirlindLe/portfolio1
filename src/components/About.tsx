"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    ".NET Core",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
              <Image
                src="/ProfileAI.png"
                alt="Profile"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3">
            <h2 className="flex items-center text-3xl font-bold text-foreground mb-8">
              About Me
              <span className="ml-4 h-px bg-border flex-grow max-w-xs"></span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-primary font-semibold">
                  full-stack developer
                </span>{" "}
                specializing in building{" "}
                <span className="text-primary font-semibold">
                  scalable web applications
                </span>{" "}
                using Next.js, Node.js, Django, and .NET.
              </p>
              <p>
                I&apos;ve built full platforms including multivendor ecommerce
                systems with{" "}
                <span className="text-primary font-semibold">
                  Stripe integration
                </span>
                , real-time chat applications with{" "}
                <span className="text-primary font-semibold">
                  WebSocket support
                </span>
                , Airbnb-style booking platforms, and food delivery marketplaces
                with role-based dashboards.
              </p>
              <p>
                As a self-taught developer, I&apos;ve mastered modern
                technologies and best practices through hands-on experience
                building production-ready applications. I love tackling complex
                challenges and transforming ideas into elegant, scalable
                solutions.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 mt-8 font-mono text-sm text-muted-foreground">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="text-primary mr-2 w-4 h-4" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
