"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-5xl px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-gradient-to-br from-violet2/15 via-ink/40 to-ember/15 p-10 text-center md:p-16"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet2/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-ember/25 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow">One last breath</span>
          <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
            The threshold is <span className="text-gradient">always one breath away.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-cream/70">
            $47 to find out if this is your work. 14 days to change your
            mind without a single question. A lifetime if it isn't.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#enroll" className="btn-primary">
              Begin Foundations — $47
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#curriculum" className="btn-ghost">Read the curriculum first</a>
          </div>
          <p className="mt-8 text-xs text-cream/45">
            Hosted by Alchemy of Breath · Established 2014 · 1,000+ facilitators across 40+ countries
          </p>
        </div>
      </motion.div>
    </section>
  );
}
