"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  icons: React.ReactElement[];
  github: string;
  live: string;
  featured: boolean;
  features: string[];
  challenges: string[];
  learnings: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Ecommerce Multivendor Platform",
    description:
      "Engineered a comprehensive multi-vendor marketplace using ASP.NET Core Web API (.NET 9) and Next.js 15 with TypeScript.",
    fullDescription:
      "This comprehensive e-commerce platform enables multiple vendors to sell their products through a unified marketplace. Built with modern technologies including ASP.NET Core Web API (.NET 9) for the backend and Next.js 15 with TypeScript for the frontend, the application provides separate dashboards for vendors, buyers, and administrators. The platform implements secure JWT-based authentication, Stripe payment processing for seamless transactions, and a robust shopping cart system.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    category: "fullstack",
    technologies: [
      ".NET Core",
      "Next.js",
      "TypeScript",
      "MySQL",
      "Stripe",
      "JWT",
    ],
    icons: [
      <FaReact key="dotnet" />,
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <FaDatabase key="mysql" />,
    ],
    github: "#",
    live: "",
    featured: true,
    features: [
      "Multi-vendor marketplace with separate dashboards",
      "JWT-based authentication and authorization",
      "Stripe payment integration for secure transactions",
      "Advanced shopping cart functionality",
      "Product management system for vendors",
      "Order tracking and management",
      "Responsive design with Tailwind CSS",
      "RESTful API architecture",
    ],
    challenges: [
      "Implementing role-based access control for vendors, buyers, and admins",
      "Handling complex payment flows with Stripe",
      "Optimizing database queries for large product catalogs",
      "Ensuring secure API endpoints and data validation",
    ],
    learnings: [
      "Advanced .NET Core Web API development patterns",
      "State management in Next.js applications",
      "Payment gateway integration best practices",
      "Database design for multi-tenant applications",
    ],
  },
  {
    id: 2,
    title: "QuickMunch - Food Delivery Platform",
    description:
      "Engineered a complete food delivery marketplace using Next.js 15, Node.js/Express.js, and MongoDB.",
    fullDescription:
      "QuickMunch is a full-featured food delivery platform that connects customers with restaurants and delivery partners. Built with Next.js 15 for the frontend and Node.js/Express.js for the backend, the application features real-time order tracking, dynamic restaurant discovery, and multi-role dashboards for customers, restaurant owners, and delivery partners. The platform uses Clerk for authentication and Stripe for payment processing.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    category: "fullstack",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.io",
      "Clerk",
    ],
    icons: [
      <SiNextdotjs key="next" />,
      <FaNodeJs key="node" />,
      <FaDatabase key="mongo" />,
      <FaReact key="stripe" />,
    ],
    github: "#",
    live: "",
    featured: true,
    features: [
      "Real-time order tracking with Socket.io",
      "Dynamic restaurant discovery with advanced filtering",
      "Multi-role dashboards (customers, restaurants, delivery partners)",
      "Stripe payment processing integration",
      "Clerk authentication for secure user management",
      "Restaurant menu management system",
      "Order history and analytics",
      "Responsive UI with Tailwind CSS",
    ],
    challenges: [
      "Implementing real-time updates across multiple user roles",
      "Optimizing geolocation-based restaurant search",
      "Managing complex order states and workflows",
      "Ensuring data consistency in real-time operations",
    ],
    learnings: [
      "WebSocket implementation for real-time features",
      "MongoDB aggregation pipelines for complex queries",
      "Microservices architecture patterns",
      "Building scalable real-time applications",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Next.js 15 and TypeScript.",
    fullDescription:
      "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with Next.js 15 and TypeScript, the site features smooth animations, interactive components, and a clean, modern UI using Tailwind CSS. The website includes sections for projects, skills, about me, and contact information.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icons: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "#",
    live: "",
    featured: false,
    features: [
      "Responsive design for all devices",
      "Smooth scroll animations",
      "Interactive project showcase",
      "Skills visualization",
      "Contact form integration",
      "Dark/Light theme toggle",
      "SEO optimized",
      "Fast page load times",
    ],
    challenges: [
      "Creating smooth animations without performance issues",
      "Optimizing images for fast loading",
      "Ensuring cross-browser compatibility",
      "Implementing SEO best practices",
    ],
    learnings: [
      "Next.js App Router and server components",
      "Advanced Tailwind CSS techniques",
      "Performance optimization strategies",
      "Accessibility best practices",
    ],
  },
  {
    id: 4,
    title: "TaskNotesApp",
    description:
      "Full-stack CEO productivity app with Next.js frontend and .NET backend.",
    fullDescription:
      "TaskNotesApp is a comprehensive productivity application designed for executives and CEOs. The application combines advanced task management, note-taking capabilities, and productivity tracking in a unified platform. Built with Next.js for the frontend and .NET for the backend, it provides a seamless user experience with real-time synchronization and intelligent task organization.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    category: "fullstack",
    technologies: ["Next.js", "TypeScript", ".NET", "C#", "SQL Server"],
    icons: [
      <SiNextdotjs key="next" />,
      <SiTypescript key="ts" />,
      <FaReact key="dotnet" />,
      <FaReact key="csharp" />,
    ],
    github: "https://github.com/mirlindleku/TaskNotesApp",
    live: "",
    featured: false,
    features: [
      "Advanced task management with priorities and deadlines",
      "Rich text note-taking with formatting",
      "Real-time synchronization across devices",
      "Productivity analytics and insights",
      "Calendar integration",
      "Task categorization and tagging",
      "Search and filter functionality",
      "Export capabilities",
    ],
    challenges: [
      "Implementing real-time sync without conflicts",
      "Building a rich text editor with all features",
      "Optimizing database queries for performance",
      "Ensuring data security and privacy",
    ],
    learnings: [
      ".NET Core API development",
      "Real-time data synchronization patterns",
      "Rich text editor implementation",
      "Building scalable backend architectures",
    ],
  },
  {
    id: 5,
    title: "Airbnb Clone",
    description:
      "Full-stack Airbnb clone with Node.js, Express, MongoDB, and modern UI.",
    fullDescription:
      "A full-featured clone of Airbnb's platform, enabling users to list properties, search for accommodations, and make bookings. Built with Node.js and Express for the backend, MongoDB for data storage, and EJS for server-side rendering. The application includes user authentication, property management, booking system, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
    icons: [
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <FaDatabase key="db" />,
      <FaReact key="ejs" />,
    ],
    github: "https://github.com/mirlindleku/airbnb-clone",
    live: "",
    featured: false,
    features: [
      "User authentication with Passport.js",
      "Property listing and management",
      "Advanced search with filters",
      "Booking system with date range selection",
      "User reviews and ratings",
      "Image upload and management",
      "Interactive maps integration",
      "Responsive design",
    ],
    challenges: [
      "Implementing complex search and filter logic",
      "Managing booking conflicts and availability",
      "Handling file uploads efficiently",
      "Building responsive layouts for various screen sizes",
    ],
    learnings: [
      "Express.js middleware and routing patterns",
      "MongoDB schema design for complex relationships",
      "Authentication strategies with Passport.js",
      "Server-side rendering with EJS",
    ],
  },
  {
    id: 6,
    title: "Django Chat Application",
    description: "Real-time Django Chat Application with WebSocket support.",
    fullDescription:
      "A real-time chat application built with Django and Django Channels, enabling instant messaging between users. The application uses WebSockets for real-time communication, providing a seamless chat experience. Features include user authentication, chat rooms, message history, and typing indicators.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=800&fit=crop",
    category: "fullstack",
    technologies: ["Django", "Python", "WebSocket", "HTML", "Channels"],
    icons: [
      <FaReact key="django" />,
      <FaReact key="python" />,
      <FaReact key="websocket" />,
      <FaHtml5 key="html" />,
    ],
    github: "https://github.com/mirlindleku/djangochat",
    live: "",
    featured: false,
    features: [
      "Real-time messaging with WebSockets",
      "User authentication and authorization",
      "Multiple chat rooms support",
      "Message history persistence",
      "Typing indicators",
      "Online/offline status",
      "Message timestamps",
      "Responsive chat interface",
    ],
    challenges: [
      "Implementing WebSocket connections in Django",
      "Managing real-time state across multiple users",
      "Ensuring message delivery and ordering",
      "Scaling WebSocket connections",
    ],
    learnings: [
      "Django Channels for WebSocket support",
      "Real-time communication protocols",
      "Asynchronous programming in Python",
      "WebSocket connection management",
    ],
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link href="/#projects">
            <Button className="bg-primary hover:bg-primary/90">
              <FaArrowLeft className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/#projects" className="inline-block mb-8">
          <Button
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.category === "fullstack"
              ? "Full-Stack Development"
              : "Web Development"}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" />
                View Source Code
              </a>
            </Button>
            {project.live && (
              <Button variant="outline" className="border-primary/50" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12 border-2 border-primary/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Challenges & Solutions
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Learnings
              </h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Project Info
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="text-foreground font-medium">
                    {project.category === "fullstack"
                      ? "Full-Stack"
                      : "Web Development"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="text-primary font-medium">
                    {project.featured ? "Featured Project" : "Completed"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Technologies
                  </p>
                  <p className="text-foreground font-medium">
                    {project.technologies.length} Technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Next Project */}
            {projectId < projects.length && (
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Next Project
                </h3>
                <Link href={`/projects/${projectId + 1}`}>
                  <p className="text-primary hover:underline font-medium">
                    {projects[projectId].title}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
