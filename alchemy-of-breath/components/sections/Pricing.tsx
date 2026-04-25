"use client";

import { motion } from "framer-motion";

const includes = [
  { v: "Live Conscious Connected Breathwork session (75 min)", price: "$97" },
  { v: "Foundations Workbook (44 pp PDF)", price: "$27" },
  { v: "5-module Facilitator Pre-Curriculum (4.5 hrs)", price: "$147" },
  { v: "Monthly live Q&A with a Master Trainer", price: "$60/mo" },
  { v: "Generalized Anxiety self-assessment + scoring guide", price: "$19" },
  { v: "Bonus: Lineage discount toward BreathCamp ($100 off)", price: "$100" },
];

export function Pricing() {
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
              Foundations of <span className="text-gradient">Facilitation</span>
            </h2>
            <p className="mt-6 text-cream/65">
              Everything below is yours the moment you enroll. Lifetime
              access — return as many times as the breath asks you to.
            </p>

            <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              {includes.map((it) => (
                <li key={it.v} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="flex items-center gap-3 text-cream/85">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2.5">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {it.v}
                  </span>
                  <span className="text-cream/45">{it.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-cream/55">Total stand-alone value</span>
              <span className="text-cream/85">$450+</span>
            </div>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-ink/40 p-8">
            <div className="text-center">
              <span className="eyebrow">Founders' rate</span>
              <div className="mt-4 flex items-baseline justify-center gap-3">
                <span className="serif text-6xl text-cream md:text-7xl">$47</span>
                <span className="text-lg text-cream/40 line-through">$197</span>
              </div>
              <span className="mt-2 inline-block rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-xs text-ember">
                76% off · ends when 200 seats fill
              </span>
            </div>

            <a href="#" className="btn-primary mt-8 w-full justify-center">
              Begin Foundations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <ul className="mt-6 space-y-2 text-xs text-cream/55">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-teal2" />
                14-day money-back, no questions
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-teal2" />
                Lifetime access to all materials
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-teal2" />
                $100 credit toward BreathCamp
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-teal2" />
                Secure checkout · Stripe + PayPal
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
