"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SoundEffectProps {
  text: string;
  className?: string;
  color?: "red" | "yellow" | "blue" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  rotate?: number;
  animate?: boolean;
}

const slamVariants = {
  hidden: { scale: 3, opacity: 0, rotate: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    },
  },
};

const SoundEffect = ({
  text,
  className,
  color = "red",
  size = "lg",
  rotate = -5,
  animate = true,
}: SoundEffectProps) => {
  const colorStyles = {
    red: "text-[#b5544a]",
    yellow: "text-[#d4a84b]",
    blue: "text-[#4a6fa5]",
    green: "text-[#6b8e4e]",
  };

  const sizeStyles = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-4xl",
    lg: "text-4xl md:text-6xl",
    xl: "text-5xl md:text-8xl",
  };

  const content = (
    <span
      className={cn(
        "sound-effect",
        colorStyles[color],
        sizeStyles[size],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {text}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slamVariants}
        className="inline-block"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default SoundEffect;
