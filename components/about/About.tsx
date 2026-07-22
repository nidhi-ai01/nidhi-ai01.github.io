"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AboutBadge from "./AboutBadge";
import AboutButtons from "./AboutButtons";
import AboutSocials from "./AboutSocials";
import AboutStats from "./AboutStats";
import AboutAvatar from "./AboutAvatar";

export default function About() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AboutBadge />

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Building AI
            <br />
            <span className="text-indigo-400">with Empathy.</span>
          </h1>

          <div className="mt-6 h-10 text-xl font-semibold text-indigo-300">
            <TypeAnimation
              sequence={[
                "Founder @ HeartHaxor",
                1800,
                "AI Engineer",
                1800,
                "AI Consultant",
                1800,
                "Researcher",
                1800,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg text-muted">
            Building emotionally intelligent AI systems that understand,
            remember, and support people through meaningful human-centered
            interactions.
          </p>

          <AboutButtons />

          <AboutSocials />

          <AboutStats />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <AboutAvatar />
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-400"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}