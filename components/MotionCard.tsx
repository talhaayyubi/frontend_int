"use client";
import { motion } from "motion/react";
export default function MotionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4"
      role="region"
      aria-label="Animated card"
    >
      <p className="text-sm text-zinc-300">Animated with Motion for React</p>
    </motion.div>
  );
}
