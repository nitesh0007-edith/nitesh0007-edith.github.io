"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  type?: "speech" | "thought" | "shout" | "whisper";
  tailPosition?: "left" | "right" | "top" | "bottom-left" | "bottom-right" | "none";
  animate?: boolean;
  delay?: number;
}

const bubbleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 25,
    },
  },
};

const SpeechBubble = ({
  children,
  className,
  type = "speech",
  tailPosition = "left",
  animate = true,
  delay = 0,
}: SpeechBubbleProps) => {
  const baseTypeStyles = {
    speech: "speech-bubble",
    thought: "thought-bubble",
    shout: "shout-bubble",
    whisper: "speech-bubble border-dashed",
  };

  const tailStyles = {
    left: "",
    right: "speech-bubble-right",
    top: "speech-bubble-top",
    "bottom-left": "",
    "bottom-right": "speech-bubble-right",
    none: "before:hidden after:hidden",
  };

  const content = (
    <div
      className={cn(
        baseTypeStyles[type],
        type === "speech" && tailStyles[tailPosition],
        "text-[#1a1a1a]",
        className
      )}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bubbleVariants}
        transition={{ delay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default SpeechBubble;
