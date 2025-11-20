"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  icons: React.ReactElement[];
  github: string;
  live: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Ecommerce Multivendor Platform",
    description:
      "Engineered a comprehensive multi-vendor marketplace using ASP.NET Core Web API (.NET 9) and Next.js 15 with TypeScript, supporting multiple business owners and buyers. Implemented JWT-based authentication, Stripe payment processing, shopping cart functionality, and separate dashboards using MySQL, Entity Framework Core, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "fullstack",
    technologies: [".NET Core", "Next.js", "TypeScript", "MySQL"],
    icons: [
      <FaReact key="dotnet" />,
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <FaDatabase key="mysql" />,
    ],
    github: "#",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "QuickMunch - Food Delivery Platform",
    description:
      "Engineered a complete food delivery marketplace using Next.js 15, Node.js/Express.js, MongoDB, and Clerk authentication with multi-role dashboards for customers, restaurant owners, and delivery partners. Implemented Stripe payment processing, real-time order tracking, dynamic restaurant discovery with filtering, and responsive UI using Tailwind CSS and Socket.io.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    category: "fullstack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    icons: [
      <SiNextdotjs key="next" />,
      <FaNodeJs key="node" />,
      <FaDatabase key="mongo" />,
      <FaReact key="stripe" />,
    ],
    github: "#",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js 15 and TypeScript. Features responsive design, smooth animations, interactive components, and contact form integration. Showcases projects, skills, and professional experience with a clean, modern UI using Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    icons: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "#",
    live: "",
    featured: false,
  },
  {
    id: 4,
    title: "TaskNotesApp",
    description:
      "Full-stack CEO productivity app with Next.js frontend and .NET backend. Advanced task management, note-taking, and productivity tracking for executives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", ".NET", "C#"],
    icons: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <FaReact key="dotnet" />,
      <FaReact key="csharp" />,
    ],
    github: "https://github.com/mirlindleku/TaskNotesApp",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Airbnb Clone",
    description:
      "Full-stack Airbnb clone with Node.js, Express, MongoDB, and modern UI. Features user authentication, property listings, booking system, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    icons: [
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <FaDatabase key="db" />,
      <FaReact key="ejs" />,
    ],
    github: "https://github.com/mirlindleku/airbnb-clone",
    live: "",
    featured: false,
  },
  {
    id: 6,
    title: "Django Chat Application",
    description:
      "Real-time Django Chat Application with WebSocket support. Features instant messaging, user authentication, and real-time communication.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    category: "fullstack",
    technologies: ["Django", "Python", "WebSocket", "HTML"],
    icons: [
      <FaReact key="django" />,
      <FaReact key="python" />,
      <FaReact key="websocket" />,
      <FaHtml5 key="html" />,
    ],
    github: "https://github.com/mirlindleku/djangochat",
    live: "",
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(1);

  return (
    <section id="projects" className="py-6 md:py-8 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Projects Layout - Image Left, List Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Project Image */}
          <div className="hidden lg:block relative h-[600px] sticky top-24">
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={project.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>
              ))}

              {/* Project Number Indicator */}
              <div className="absolute top-8 right-8 text-6xl md:text-8xl font-bold text-white/20">
                {hoveredProject}
              </div>
            </div>
          </div>

          {/* Right Side - Project List */}
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                className="block group"
              >
                <div
                  className={`relative border-b-2 transition-all duration-300 py-2 px-4 ${
                    hoveredProject === project.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Mobile Image */}
                  <div className="lg:hidden relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-xl md:text-2xl lg:text-xl font-bold mb-2 transition-colors ${
                          hoveredProject === project.id
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-card border border-primary/30 rounded text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <FaArrowRight
                      className={`text-2xl ml-4 transition-all duration-300 ${
                        hoveredProject === project.id
                          ? "text-primary translate-x-2"
                          : "text-muted-foreground group-hover:text-primary group-hover:translate-x-2"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
