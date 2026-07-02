"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpeedLinesProps {
  type?: "radial" | "linear" | "focus";
  className?: string;
  animate?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

const SpeedLines = ({
  type = "radial",
  className,
  animate = true,
  intensity = "medium",
}: SpeedLinesProps) => {
  const typeStyles = {
    radial: "speed-lines-radial",
    linear: "speed-lines-linear",
    focus: "speed-lines-focus",
  };

  const intensityOpacity = {
    light: "opacity-10",
    medium: "opacity-20",
    heavy: "opacity-30",
  };

  const lineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
        className={cn(typeStyles[type], intensityOpacity[intensity], className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn(typeStyles[type], intensityOpacity[intensity], className)}
      aria-hidden="true"
    />
  );
};

// Seeded random number generator for deterministic values
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

// SVG-based manga speed lines for more control
export const MangaSpeedLines = ({
  className,
  direction = "center",
}: {
  className?: string;
  direction?: "left" | "right" | "center";
}) => {
  // Pre-compute random values using useMemo to ensure consistent rendering
  const lineData = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      angle: (i * 360) / 60,
      length: 150 + seededRandom(i * 3) * 100,
      strokeWidth: 1 + seededRandom(i * 3 + 1) * 2,
      opacity: 0.3 + seededRandom(i * 3 + 2) * 0.3,
    }));
  }, []);

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("absolute inset-0 w-full h-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8dcc8" stopOpacity="0" />
          <stop offset="50%" stopColor="#e8dcc8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e8dcc8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g
        transform={`translate(200, 200) ${
          direction === "left"
            ? "translate(-100, 0)"
            : direction === "right"
            ? "translate(100, 0)"
            : ""
        }`}
      >
        {lineData.map((line, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={line.length}
            y2="0"
            stroke="url(#lineGradient)"
            strokeWidth={line.strokeWidth}
            transform={`rotate(${line.angle})`}
            opacity={line.opacity}
          />
        ))}
      </g>
    </svg>
  );
};

export default SpeedLines;
