"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f0e1] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 halftone-bg opacity-20 pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative">
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="inline-block mb-8"
        >
          <div className="action-burst w-56 h-56 mx-auto">
            <span className="font-[family-name:var(--font-bangers)] text-5xl text-[#1a1a1a]">
              404!
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-[family-name:var(--font-bangers)] text-4xl md:text-5xl text-[#1a1a1a] tracking-wide mb-4"
        >
          THIS PAGE WAS TORN OUT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="narrator-box inline-block mb-8 max-w-md"
        >
          Meanwhile, somewhere in Glasgow… our hero realises this page never
          made it past the editor. The story continues back at the cover.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <BookOpen size={22} />
            Back to the Cover
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
