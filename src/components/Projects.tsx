"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
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
    title: "QuickMunch - Full-Stack Food Delivery Platform",
    description:
      "Engineered a complete food delivery marketplace using Next.js 15, Node.js/Express.js, MongoDB, and Clerk authentication with multi-role dashboards for customers, restaurant owners, and delivery partners. Implemented Stripe payment processing, real-time order tracking, dynamic restaurant discovery with filtering, and responsive UI using Tailwind CSS and Socket.io.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
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
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
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
  const [isVisible, setIsVisible] = useState<boolean>(false);

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

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve built to showcase my skills
            and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
          id="projects-all"
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 md:transform md:hover:scale-105 md:hover:-translate-y-2 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 border-0">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-white/10 text-gray-300 border-white/20 hover:bg-white/20"
                      >
                        <span className="flex items-center gap-2">
                          {project.icons[techIndex]}
                          {tech}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                {/* Project Links */}
                <div className="flex gap-3 w-full">
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/10 text-gray-300 border-white/20 hover:bg-white/20"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-fade-in animation-delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can work together to bring
              your ideas to life.
            </p>
            <Button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
