"use client";

import { CalendarCheck, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-4 border-[#1a1a1a] bg-[#1a1a1a] py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] tracking-widest text-center">
          DATA ENGINEERING • GENAI • PRODUCTION SYSTEMS
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:niteshranjansingh85389@gmail.com"
            aria-label="Email"
            className="text-[#8b7355] hover:text-[#d4a84b] transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/nitesh0007-edith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#8b7355] hover:text-[#d4a84b] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh0007/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#8b7355] hover:text-[#d4a84b] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://topmate.io/nitesh2039"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 1:1 on Topmate"
            className="text-[#8b7355] hover:text-[#d4a84b] transition-colors"
          >
            <CalendarCheck size={18} />
          </a>
        </div>

        <p className="font-[family-name:var(--font-courier-prime)] text-xs text-[#5c4d3c]">
          © {new Date().getFullYear()} Nitesh Ranjan Singh · Glasgow, Scotland
        </p>
      </div>
    </footer>
  );
};

export default Footer;
