"use client";

import { motion } from "framer-motion";

export default function AppBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute -top-36 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-[96px]"
        style={{ backgroundColor: "var(--glow-amber)" }}
        animate={{
          x: [-30, 20, -30],
          y: [0, 18, 0],
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 right-[-12%] h-80 w-80 rounded-full blur-[96px]"
        style={{ backgroundColor: "var(--glow-indigo)" }}
        animate={{
          x: [20, -15, 20],
          y: [0, -14, 0],
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
