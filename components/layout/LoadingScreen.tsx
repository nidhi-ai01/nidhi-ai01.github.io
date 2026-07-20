"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.8,
      }}
    >
      <motion.h1
        className="font-heading text-5xl font-bold"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        Building AI with Empathy
      </motion.h1>
    </motion.div>
  );
}