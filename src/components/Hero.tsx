"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Problem Solver",
      "Creative Thinker",
    ],
    []
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }, 10);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradients - Dark mode only */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse !hidden dark:!block"></div>
      <div
        className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-pulse !hidden dark:!block"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            Full Stack Engineer & Software Architect
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Mirlind Leku.
              <br />
              <span className="text-muted-foreground">I build </span>
              <span className="text-primary font-semibold">{text}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I specialize in end-to-end development, crafting modern,
            high-performance frontends with{" "}
            <span className="text-foreground font-medium">React/Next.js</span>{" "}
            and robust, scalable backends with{" "}
            <span className="text-foreground font-medium">
              Node.js, Django, and .NET
            </span>{" "}
            hosted on cloud infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("#projects")}
            >
              <Rocket className="mr-2 h-5 w-5" />
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() =>
                window.open("https://github.com/mirlindleku", "_blank")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </motion.div>

          {/* Social Links - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6 pt-4 lg:hidden"
          >
            <a
              href="https://github.com/mirlindleku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mirlind-leku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lekumirlind@gmail.com"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Code Block Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block relative group"
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-secondary/50 opacity-20 blur-xl transition duration-1000 group-hover:opacity-40 !hidden dark:!block"></div>
          <div className="relative rounded-lg border border-border bg-card p-6 shadow-2xl">
            {/* Window Bar */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                architecture.js
              </span>
            </div>

            {/* Code Content */}
            <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
              <code>
                <div>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-400">FullStackEngineer</span> {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">constructor</span>(name){" "}
                  {"{"}
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">this</span>.
                  <span className="text-cyan-400">name</span> = name;
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">this</span>.
                  <span className="text-cyan-400">stack</span> = [
                  <span className="text-green-400">&apos;React&apos;</span>,{" "}
                  <span className="text-green-400">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-green-400">&apos;Node&apos;</span>,{" "}
                  <span className="text-green-400">&apos;PostgreSQL&apos;</span>
                  ];
                </div>
                <div className="ml-4">{"}"}</div>
                <div className="my-2"></div>
                <div className="ml-4">
                  <span className="text-yellow-400">deploy</span>(
                  <span className="text-cyan-400">project</span>) {"{"}
                </div>
                <div className="ml-8">
                  <span className="text-gray-500">/ Scalable architecture</span>
                </div>
                <div className="ml-8">
                  <span className="text-purple-400">if</span> (project.
                  <span className="text-cyan-400">isReady</span>) {"{"}
                </div>
                <div className="ml-12">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-green-400">
                    &apos;AWS/GCP Deploy&apos;
                  </span>
                  ;
                </div>
                <div className="ml-8">{"}"}</div>
                <div className="ml-4">{"}"}</div>
                <div>{"}"}</div>
                <div className="my-2"></div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">dev</span> ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-blue-400">FullStackEngineer</span>(
                  <span className="text-green-400">&apos;Mirlind&apos;</span>);
                </div>
                <div>
                  <span className="text-blue-400">dev</span>.
                  <span className="text-yellow-400">deploy</span>({"{"}
                  <span className="text-cyan-400">isReady</span>:{" "}
                  <span className="text-primary">true</span>
                  {"}"});
                </div>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
