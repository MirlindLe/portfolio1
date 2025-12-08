"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Folder, Link as LinkIcon } from "lucide-react";

// --- Data Definitions ---

interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  alignment: "left" | "right";
}

interface OtherProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "ecommerce-platform",
    title: "Full-Stack Ecommerce Platform",
    tagline: "Featured Project",
    description:
      "A comprehensive multi-vendor marketplace using ASP.NET Core Web API (.NET 9) and Next.js 15 with TypeScript. Supports multiple business owners and buyers with JWT authentication, Stripe payments, shopping cart, and separate dashboards using MySQL and Entity Framework Core.",
    tech: ["Nest Js", "Next.js", "TypeScript", "MySQL", "Stripe"],
    image:
      "https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?w=1600&h=900&fit=crop",

    github: "#",
    live: "#",
    alignment: "right",
  },
  {
    id: "django-chat",
    title: "Real-Time Chat Application",
    tagline: "Featured Project",
    description:
      "Real-time chat application with Django and WebSockets. Features instant messaging, user authentication, and presence indicators.",
    tech: ["Django", "Python", "WebSocket", "Redis"],
    image:
      "https://plus.unsplash.com/premium_photo-1676057060928-c717a8e96784?w=1600&h=900&fit=crop",
    github: "https://github.com/mirlindleku/djangochat",
    live: "#",
    alignment: "left",
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone - Booking Platform",
    tagline: "Featured Project",
    description:
      "A full-stack property booking platform with user authentication, property listings, and real-time booking system. Built with Node.js, Express, and MongoDB, featuring interactive maps, image uploads with Cloudinary, and user reviews.",
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "EJS"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop",
    github: "https://github.com/mirlindleku/airbnb-clone",
    live: "#",
    alignment: "right",
  },
];

const OTHER_PROJECTS: OtherProject[] = [
  {
    id: "tasknotes-app",
    title: "TaskNotesApp - CEO Productivity Tool",
    description:
      "Full-stack productivity app with Next.js frontend and .NET backend. Advanced task management, note-taking, and productivity tracking for executives.",
    tech: ["Next.js", "TypeScript", ".NET Core", "C#"],
    github: "https://github.com/mirlindleku/TaskNotesApp",
    live: "#",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website with smooth animations, interactive components, and contact form integration. Built with Next.js 15, TypeScript, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    id: "quickmunch",
    title: "QuickMunch - Food Delivery Platform",
    description:
      "A complete food delivery marketplace with multi-role dashboards for customers, restaurant owners, and delivery partners. Built with Next.js 15, Node.js/Express, MongoDB, and Clerk authentication. Features real-time order tracking with Socket.io and Stripe payment processing.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    github: "#",
    live: "#",
  },
];

// --- Animation Component (Reveal) ---

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// --- Sub-Components ---

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  const imageOrder =
    project.alignment === "right" ? "md:order-1" : "md:order-2";
  const contentOrder =
    project.alignment === "right" ? "md:order-2" : "md:order-1";
  const contentPositioning =
    project.alignment === "right"
      ? "md:-ml-12 md:text-right"
      : "md:-mr-12 md:text-left";
  const justifyContent =
    project.alignment === "right" ? "md:justify-end" : "md:justify-start";

  return (
    <Reveal className="relative grid md:grid-cols-12 gap-6 items-center group">
      {/* Image */}
      <Link
        href={`/projects/${project.id}`}
        className={`cursor-pointer ${imageOrder} md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] border border-border group-hover:border-primary/50 transition-all duration-300`}
      >
        <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-300 z-10 mix-blend-multiply"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </Link>

      {/* Content */}
      <div
        className={`
        ${contentOrder} md:col-span-5 relative z-20 ${contentPositioning} p-6 
        bg-card/95 md:bg-transparent rounded-xl shadow-xl backdrop-blur-sm 
        border border-border md:border-none
      `}
      >
        <p className="font-mono text-primary text-sm mb-2">{project.tagline}</p>
        <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        <div
          className={`
          bg-card/90 md:p-6 rounded-lg md:shadow-xl md:border md:border-border 
          text-muted-foreground text-sm leading-relaxed mb-4 hover:shadow-primary/5 transition-shadow
        `}
        >
          <p>{project.description}</p>
        </div>

        <ul
          className={`flex flex-wrap ${justifyContent} gap-3 text-xs font-mono text-muted-foreground mb-6`}
        >
          {project.tech.map((t) => (
            <li
              key={t}
              className="bg-background/50 px-3 py-1 rounded-full border border-primary/30 text-primary"
            >
              {t}
            </li>
          ))}
        </ul>

        <div
          className={`flex space-x-4 text-muted-foreground ${justifyContent}`}
        >
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub link for ${project.title}`}
              className="hover:text-primary transition-transform hover:-translate-y-1 p-2"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo link for ${project.title}`}
              className="hover:text-primary transition-transform hover:-translate-y-1 p-2"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="text-xs border border-primary text-primary px-3 py-1 rounded hover:bg-primary/10 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </Reveal>
  );
};

interface OtherProjectCardProps {
  project: OtherProject;
  delay: number;
}

const OtherProjectCard: React.FC<OtherProjectCardProps> = ({
  project,
  delay,
}) => {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group bg-card p-6 rounded-xl border border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-primary/5">
        <div className="flex justify-between items-center mb-6">
          <Folder className="w-8 h-8 text-primary/80" />
          <div className="flex space-x-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub link for ${project.title}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo link for ${project.title}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </h4>
        <p className="text-sm text-muted-foreground mb-6 flex-grow">
          {project.description}
        </p>
        <ul className="text-xs font-mono text-muted-foreground/80 flex flex-wrap gap-3 mt-auto pt-4">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

// --- Main Component ---

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal delay={0}>
          <h2 className="flex items-center text-3xl md:text-4xl font-extrabold text-foreground mb-16">
            Some Things I&apos;ve Built
            <span className="ml-4 h-px bg-border flex-grow max-w-xs"></span>
          </h2>
        </Reveal>

        {/* Featured Projects */}
        <div className="space-y-24 md:space-y-32">
          {FEATURED_PROJECTS.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects Grid Heading */}
        <Reveal delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-10 mt-32 text-center">
            Other Noteworthy Projects
          </h3>
        </Reveal>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project, index) => (
            <OtherProjectCard
              key={project.id}
              project={project}
              delay={0.05 * index}
            />
          ))}
        </div>

        {/* CTA to Archive */}
        <div className="text-center mt-20">
          <Reveal delay={0.3}>
            <a
              href="https://github.com/mirlindleku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono text-sm shadow-lg hover:shadow-primary/20"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              View Full Project Archive
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
