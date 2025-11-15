"use client";

import React, { useEffect, useState } from "react";
import {
  FaUniversity,
  FaRobot,
  FaMicrochip,
  FaCodeBranch,
} from "react-icons/fa";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("education");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-teal-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
        </div>

        <div
          className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 md:transform md:hover:scale-105 md:hover:-translate-y-2 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center text-2xl shrink-0">
                <FaUniversity />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  Bachelor of Computerized Automation and Robotics
                </h3>
                <p className="text-slate-300 mb-2">
                  University of Prishtina, Prishtinë • 2019 – Present
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
                  Pursuing a degree that combines programming, electronics, and
                  automation, which has helped me build a strong problem-solving
                  mindset and logical way of approaching complex systems. My
                  studies have given me solid experience in programming with C++
                  as well as working with databases, APIs, and communication
                  protocols. While much of the program is focused on robotics
                  and control systems, I have applied the same principles to
                  software and web development projects, where I design and
                  build applications with an emphasis on structure, scalability,
                  and efficiency. This blend of technical knowledge and logical
                  training supports my path toward full-stack development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neutral-800/70 text-gray-300 text-xs rounded-full border border-neutral-700/50 inline-flex items-center gap-2">
                    <FaMicrochip /> Electronics
                  </span>
                  <span className="px-3 py-1 bg-neutral-800/70 text-gray-300 text-xs rounded-full border border-neutral-700/50 inline-flex items-center gap-2">
                    <FaCodeBranch /> Communication Protocols
                  </span>
                  <span className="px-3 py-1 bg-neutral-800/70 text-gray-300 text-xs rounded-full border border-neutral-700/50 inline-flex items-center gap-2">
                    <FaRobot /> Robotics & Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
