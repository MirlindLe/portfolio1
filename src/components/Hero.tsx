"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      className="min-h-screen flex items-center justify-center relative pt-20 pb-12 lg:py-16"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 animate-fade-in">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-primary/30 shadow-xl">
              <AvatarImage src="/foto.jpg" alt="Mirlind Leku" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-2xl font-bold">
                ML
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <p className="text-primary font-medium mb-2">Hi, I&apos;m</p>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Mirlind Leku
              </h1>
              <h2 className="text-lg text-muted-foreground mb-4">
                I&apos;m a{" "}
                <span className="text-primary border-r-2 border-primary pr-2 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto px-4">
              Passionate about creating innovative digital experiences and
              turning ideas into reality through code and creativity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-2">
            <a
              href="https://github.com/mirlindleku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/mirlind-leku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:lekumirlind@gmail.com"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm pt-2">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              asChild
            >
              <a href="/Resume2.pdf" download="Mirlind_Leku_CV.pdf">
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-primary/50 hover:bg-primary/10 font-medium"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Left Side - Card */}
          <div className="flex justify-center animate-fade-in">
            <Card className="w-full max-w-md bg-card/95 dark:bg-card/90 backdrop-blur-md border-2 dark:border-primary/20 shadow-2xl dark:shadow-primary/10">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="w-64 h-64 mb-4 border-4 border-primary/20">
                    <AvatarImage src="/foto.jpg" alt="Mirlind Leku" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-xl font-bold">
                      ML
                    </AvatarFallback>
                  </Avatar>

                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Mirlind Leku
                    </h3>
                    <p className="text-base text-muted-foreground font-medium">
                      Full Stack Web Developer
                    </p>
                  </div>
                  {/* Social Links */}
                  <div className="flex justify-center pb-4 space-x-6 animate-fade-in animation-delay-800">
                    <a
                      href="https://github.com/mirlindleku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
                    >
                      <FaGithub className="w-7 h-7" />
                    </a>
                    <a
                      href="https://linkedin.com/in/mirlind-leku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
                    >
                      <FaLinkedin className="w-7 h-7" />
                    </a>
                    <a
                      href="mailto:lekumirlind@gmail.com"
                      className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
                    >
                      <FaEnvelope className="w-7 h-7" />
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="flex-1 text-sm font-medium hover:bg-primary"
                    asChild
                  >
                    <a href="/Resume.pdf" download="Mirlind_Leku_CV.pdf">
                      Download CV
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-sm font-medium hover:bg-primary"
                    asChild
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            {/* Greeting */}
            <div className="mb-6">
              <h2 className="text-2xl text-primary font-medium mb-2 animate-fade-in">
                Hi, I&apos;m
              </h2>
              <h1 className="text-6xl font-bold text-foreground mb-4 animate-fade-in animation-delay-200">
                Mirlind Leku
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-6 animate-fade-in animation-delay-400">
                I&apos;m a{" "}
                <span className="text-primary border-r-2 border-primary pr-2 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in animation-delay-600">
              Passionate about creating innovative digital experiences and
              turning ideas into reality through code and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
