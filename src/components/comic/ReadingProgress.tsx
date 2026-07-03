"use client";

import { motion, useScroll } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-[#b5544a] origin-left z-[70]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
};

export default ReadingProgress;
