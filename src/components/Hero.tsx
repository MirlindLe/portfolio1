"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-2 animate-fade-in">
            Hello, I&apos;m
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in animation-delay-200">
            Mirlind Leku
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in animation-delay-400">
            I&apos;m a{" "}
            <span className="text-primary border-r-2 border-primary pr-2 animate-pulse">
              {text}
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
          Passionate about creating innovative digital experiences and turning
          ideas into reality through code and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-800">
          <Button
            className="px-8 py-3 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            size="lg"
            asChild
          >
            <a href="/Resume2.pdf" download="Mirlind_Leku_CV.pdf">
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
            size="lg"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-fade-in animation-delay-1000">
          <a
            href="https://github.com/mirlindleku"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mirlind-leku"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:lekumirlind@gmail.com"
            className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
