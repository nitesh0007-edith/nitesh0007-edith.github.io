"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "standard" | "action" | "wide" | "splash";
  id?: string;
  animate?: boolean;
}

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ComicPanel = ({
  children,
  className,
  variant = "standard",
  id,
  animate = true,
}: ComicPanelProps) => {
  const baseStyles = "comic-panel relative overflow-hidden";

  const variantStyles = {
    standard: "p-8 md:p-12",
    action: "comic-panel-action p-8 md:p-12",
    wide: "p-6 md:p-10 w-full",
    splash: "p-8 md:p-16 min-h-[80vh]",
  };

  if (animate) {
    return (
      <motion.section
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={panelVariants}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </section>
  );
};

export default ComicPanel;
