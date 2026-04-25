"use client";

import { motion } from "framer-motion";

const includes = [
  "5 hours of in-depth, on-demand video anxiety training",
  "Breath awareness exercises that bring you into the present moment",
  "Several breathing tools to switch you out of fight-or-flight",
  "A full-length Conscious Connected Breathwork session with Anthony",
  "The Transforming Anxiety Workbook (self-inquiry, practices, exercises)",
  "Generalized Anxiety Questionnaire to measure progress",
];

export function PricingTA() {
  return (
    <section
      id="enroll"
      className="relative z-20 mx-auto w-full max-w-5xl px-6 py-28 md:px-10 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-14"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet2/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-ember/25 blur-3xl" />

        <div className="relative grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow">Enroll</span>
            <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
              The 10-Day <span className="text-gradient">Transformers Course</span>
            </h2>
            <p className="mt-6 text-cream/65">
              An anxiety management training course designed to reprogram
              your brain, body, and nervous system for the pleasure and
              ease that is your birthright.
            </p>

            <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {includes.map((it) => (
                <li key={it} className="flex items-center gap-4 py-3 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2.5" className="shrink-0">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                  <span className="text-cream/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-ink/40 p-8">
            <div className="text-center">
              <span className="eyebrow">Price</span>
              <div className="mt-4 flex items-baseline justify-center gap-3">
                <span className="serif text-6xl text-cream md:text-7xl">$179</span>
                <span className="text-lg text-cream/40 line-through">$299</span>
              </div>
              <span className="mt-3 inline-block text-xs text-cream/50">
                One-time payment · Lifetime access
              </span>
            </div>

            <a href="#" className="btn-primary mt-8 w-full justify-center">
              Begin the Course
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
