"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(
  () => import("@/components/three/Scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden">
      {/* 3D backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <HeroScene />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,6,15,0.85)_100%)]" />

      {/* Copy */}
      <div className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pt-32 pb-20 md:px-10 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow"
        >
          Ancient Practice · Living Science
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="serif max-w-4xl text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]"
        >
          The <span className="text-gradient">alchemy</span> begins
          <br />
          at the <span className="text-gradient">edge of breath.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-xl text-base leading-relaxed text-cream/70 md:text-lg"
        >
          Where ancient pranayama meets transformational neuroscience —
          a sanctuary for those ready to transmute the heaviness they carry
          into clarity, presence, and quiet, fierce vitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#practices" className="btn-primary">
            Begin the Journey
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#philosophy" className="btn-ghost">Discover the Practice</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="eyebrow !text-[10px]">Inhale · Hold · Exhale</span>
          <span className="block h-10 w-[1px] animate-breath bg-gradient-to-b from-cream/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
