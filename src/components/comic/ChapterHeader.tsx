"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChapterHeaderProps {
  chapterNumber: number;
  title: string;
  subtitle?: string;
  className?: string;
}

const ChapterHeader = ({
  chapterNumber,
  title,
  subtitle,
  className,
}: ChapterHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-8 md:mb-12", className)}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="chapter-number inline-block mb-2"
      >
        Chapter {chapterNumber}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="chapter-header"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#8b7355] text-lg mt-2 font-[family-name:var(--font-courier-prime)] italic"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ChapterHeader;
