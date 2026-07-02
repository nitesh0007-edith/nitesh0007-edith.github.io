"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NarratorBoxProps {
  children: React.ReactNode;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  animate?: boolean;
  delay?: number;
}

const NarratorBox = ({
  children,
  className,
  position = "top-left",
  animate = true,
  delay = 0,
}: NarratorBoxProps) => {
  const positionStyles = {
    "top-left": "self-start",
    "top-right": "self-end",
    "bottom-left": "self-start",
    "bottom-right": "self-end",
    center: "self-center mx-auto",
  };

  const content = (
    <div
      className={cn(
        "narrator-box max-w-md",
        positionStyles[position],
        className
      )}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, x: position.includes("left") ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={positionStyles[position]}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default NarratorBox;
