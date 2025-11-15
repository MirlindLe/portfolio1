"use client";

import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  url: string;
  color: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "lekumirlind@gmail.com",
      link: "mailto:lekumirlind@gmail.com",
      color: "text-primary",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+383 (49) 425-136",
      link: "tel:+38349425136",
      color: "text-primary",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Drenas, Kosovo",
      link: "#",
      color: "text-primary",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "mirlind-leku",
      link: "https://linkedin.com/in/mirlind-leku",
      color: "text-primary",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/mirlindleku",
      color: "hover:text-primary",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/mirlind-leku",
      color: "hover:text-primary",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:lekumirlind@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-input border-border text-foreground placeholder-muted-foreground focus:ring-ring resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-card backdrop-blur-sm border border-border rounded-xl hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground text-xl hover:bg-primary hover:text-primary-foreground transform hover:scale-110 transition-all duration-300`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div
              className={`${
                isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
            >
              <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Let&apos;s Work Together
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I&apos;m currently available for freelance work and full-time
                  opportunities. Whether you have a project in mind or just want
                  to chat, feel free to reach out!
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
