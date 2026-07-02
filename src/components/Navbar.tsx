"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const chapters = [
  { href: "/chapters/origin", label: "About Me", chapter: 1 },
  { href: "/chapters/skills", label: "Skills", chapter: 2 },
  { href: "/chapters/experience", label: "Experience", chapter: 3 },
  { href: "/chapters/projects", label: "Projects", chapter: 4 },
  { href: "/chapters/education", label: "Education", chapter: 5 },
  { href: "/chapters/contact", label: "Contact", chapter: 6 },
];

const Navbar = () => {
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e1]/95 backdrop-blur-md border-b-4 border-[#1a1a1a] px-4 md:px-6 py-3"
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative">
            <div className="bg-[#1a1a1a] px-3 py-1 border-[3px] border-[#1a1a1a] comic-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              <span className="font-[family-name:var(--font-bangers)] text-xl text-[#d4a84b]">
                NRS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "font-[family-name:var(--font-bangers)] text-sm transition-colors",
                isHomePage ? "text-[#b5544a]" : "text-[#8b7355] hover:text-[#1a1a1a]"
              )}
            >
              Home
            </Link>

            {/* Chapters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsChaptersOpen(!isChaptersOpen)}
                className="flex items-center gap-1 font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] hover:text-[#1a1a1a] transition-colors"
              >
                Chapters
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform",
                    isChaptersOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {isChaptersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] shadow-lg"
                  >
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.href}
                        href={chapter.href}
                        onClick={() => setIsChaptersOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 font-[family-name:var(--font-bangers)] text-sm border-b border-[#e8dcc8] last:border-b-0 transition-colors",
                          pathname === chapter.href
                            ? "bg-[#d4a84b] text-[#1a1a1a]"
                            : "text-[#5c4d3c] hover:bg-[#e8dcc8]"
                        )}
                      >
                        <span className="text-[#b5544a] text-xs">
                          CH.{chapter.chapter}
                        </span>
                        {chapter.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3 pl-4 border-l-2 border-[#e8dcc8]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-[#f5f0e1] border-2 border-[#1a1a1a] text-[#1a1a1a] font-[family-name:var(--font-bangers)] text-xs hover:bg-[#d4a84b] transition-colors"
              >
                <FileText size={14} />
                CV
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh0007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-[#4a6fa5] border-2 border-[#1a1a1a] text-white font-[family-name:var(--font-bangers)] text-xs hover:bg-[#3a5f95] transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f5f0e1] pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 font-[family-name:var(--font-bangers)] text-xl text-[#1a1a1a] border-b-2 border-[#e8dcc8]"
              >
                Home
              </Link>
              {chapters.map((chapter) => (
                <Link
                  key={chapter.href}
                  href={chapter.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 font-[family-name:var(--font-bangers)] text-xl border-b-2 border-[#e8dcc8]",
                    pathname === chapter.href
                      ? "text-[#b5544a]"
                      : "text-[#5c4d3c]"
                  )}
                >
                  <span className="text-[#b5544a] text-sm">
                    CH.{chapter.chapter}
                  </span>
                  {chapter.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm"
                >
                  <FileText size={16} />
                  CV
                </a>
                <a
                  href="https://www.linkedin.com/in/nitesh0007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
