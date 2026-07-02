"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChapterLayoutProps {
  children: ReactNode;
  chapterNumber: number;
  title: string;
  subtitle?: string;
  prevChapter?: { href: string; label: string };
  nextChapter?: { href: string; label: string };
}

const ChapterLayout = ({
  children,
  chapterNumber,
  title,
  subtitle,
  prevChapter,
  nextChapter,
}: ChapterLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#f5f0e1] flex flex-col"
    >
      {/* Chapter Header */}
      <div className="pt-20 pb-6 px-4 md:px-8 border-b-4 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-[#b5544a] text-white font-[family-name:var(--font-bangers)] text-sm border-2 border-[#1a1a1a] mb-3">
            CHAPTER {chapterNumber}
          </span>
          <h1 className="font-[family-name:var(--font-bangers)] text-4xl md:text-6xl text-[#1a1a1a] tracking-wide">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-[#8b7355] font-[family-name:var(--font-courier-prime)] text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>

      {/* Chapter Navigation */}
      <nav className="border-t-4 border-[#1a1a1a] bg-[#e8dcc8] py-4 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {prevChapter ? (
            <Link
              href={prevChapter.href}
              className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-[#1a1a1a] hover:bg-[#d4a84b] transition-colors comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">{prevChapter.label}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/"
            className="px-4 py-2 text-[#8b7355] font-[family-name:var(--font-bangers)] hover:text-[#1a1a1a] transition-colors"
          >
            Back to Cover
          </Link>

          {nextChapter ? (
            <Link
              href={nextChapter.href}
              className="flex items-center gap-2 px-4 py-2 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] hover:bg-[#943f37] transition-colors comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <span className="hidden sm:inline">{nextChapter.label}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight size={20} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default ChapterLayout;
