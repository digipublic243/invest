"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-300/40 blur-[96px] dark:bg-amber-400/20"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 right-[-12%] h-80 w-80 rounded-full bg-indigo-300/40 blur-[96px] dark:bg-indigo-500/20"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />
    </div>
  );
}
