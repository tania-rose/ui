"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(
  () => import("@/components/three/Scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

export function HeroTA() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,6,15,0.85)_100%)]" />

      <div className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pt-32 pb-20 md:px-10 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow inline-flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember2 animate-pulse" />
          Transforming Anxiety With Breathwork
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="serif max-w-4xl text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]"
        >
          Release the burden of anxiety.
          <br />
          Create an <span className="text-gradient">inner oasis of calm.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-xl text-base leading-relaxed text-cream/70 md:text-lg"
        >
          A 10-day online course of breath practices, video training, and
          a workbook — designed to dissolve anxiety at its root and create
          a state of calm that can be maintained amidst a chaotic world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#enroll" className="btn-primary">
            <span className="flex items-baseline gap-2">
              <span className="text-cream/60 line-through text-sm">$299</span>
              <span>$179</span>
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#inside" className="btn-ghost">See what's included</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-cream/55"
        >
          <span className="rounded-full border border-cream/15 px-3 py-1">10-day online course</span>
          <span className="rounded-full border border-cream/15 px-3 py-1">5 hours of video training</span>
          <span className="rounded-full border border-cream/15 px-3 py-1">Breath practices &amp; workbook</span>
        </motion.div>
      </div>
    </section>
  );
}
