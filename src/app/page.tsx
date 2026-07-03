"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Code2, FolderOpen, Mail, GraduationCap } from "lucide-react";
import { MangaAvatar, SoundEffect } from "@/components/comic";

const chapters = [
  { href: "/chapters/origin", label: "About Me", icon: BookOpen },
  { href: "/chapters/skills", label: "Skills", icon: Code2 },
  { href: "/chapters/experience", label: "Experience", icon: Briefcase },
  { href: "/chapters/projects", label: "Projects", icon: FolderOpen },
  { href: "/chapters/education", label: "Education", icon: GraduationCap },
  { href: "/chapters/contact", label: "Contact", icon: Mail },
];

export default function CoverPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e1] flex flex-col">
      {/* Main Cover Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Comic Title Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-8"
          >
            <SoundEffect text="ISSUE #1" size="md" color="red" rotate={-3} />
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <MangaAvatar expression="determined" size="xl" showSparkles />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] tracking-wide mb-2">
              NITESH RANJAN SINGH
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              <span className="h-1 w-16 bg-[#b5544a]" />
              <span className="h-1 w-8 bg-[#d4a84b]" />
              <span className="h-1 w-16 bg-[#b5544a]" />
            </div>
            <p className="font-[family-name:var(--font-courier-prime)] text-lg md:text-xl text-[#8b7355]">
              I build production data platforms and GenAI systems — from
              10M-record pipelines for global pharma to fine-tuned LLMs served at scale.
            </p>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <span className="inline-block px-4 py-2 bg-[#4a6fa5] text-white font-[family-name:var(--font-bangers)] text-sm border-2 border-[#1a1a1a]">
              MSc Data Science @ University of Glasgow
            </span>
            <span className="inline-block px-4 py-2 bg-[#6b8e4e] text-white font-[family-name:var(--font-bangers)] text-sm border-2 border-[#1a1a1a]">
              Open to Data / AI Engineer roles — Summer 2026
            </span>
            <span className="inline-block px-4 py-2 bg-[#d4a84b] text-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm border-2 border-[#1a1a1a]">
              🥈 2nd Place, Kaggle — $3,000 Prize (Team HyperX)
            </span>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-[#5c4d3c] text-sm font-[family-name:var(--font-courier-prime)]"
          >
            Azure &amp; Databricks Pipelines • LLM Fine-Tuning • Hybrid RAG • MCP Agents
          </motion.p>

          {/* Start Reading CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <Link
              href="/chapters/origin"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-2xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <BookOpen size={24} />
              Start Reading
            </Link>
          </motion.div>

          {/* Quick Access Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <p className="font-[family-name:var(--font-bangers)] text-sm text-[#8b7355] mb-4">
              QUICK ACCESS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <Link
                    href={chapter.href}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-[2px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm text-[#5c4d3c] hover:bg-[#d4a84b] hover:text-[#1a1a1a] transition-colors"
                  >
                    <chapter.icon size={16} />
                    {chapter.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer Badge */}
      <footer className="py-4 text-center border-t-4 border-[#1a1a1a] bg-[#1a1a1a]">
        <p className="font-[family-name:var(--font-bangers)] text-xs text-[#8b7355] tracking-widest">
          GLASGOW, SCOTLAND • DATA ENGINEERING • GENAI
        </p>
      </footer>
    </div>
  );
}
