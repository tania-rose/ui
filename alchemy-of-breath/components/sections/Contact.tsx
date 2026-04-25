"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section
      id="contact"
      className="relative z-20 mx-auto w-full max-w-5xl px-6 py-32 md:px-10 md:py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="glass relative overflow-hidden rounded-[2rem] p-10 md:p-16"
      >
        {/* Decorative aurora */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet2/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="eyebrow">Begin</span>
            <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
              The threshold is <span className="text-gradient">always one breath away.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream/65">
              Receive an invitation to the next intake — including a guided
              practice you can keep, regardless of where the path leads you.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/70">
              {[
                "Live online & in-person sessions",
                "Small cohorts — never more than twelve",
                "Certified facilitators with clinical training",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-ember" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
            className="space-y-4"
          >
            <label className="block">
              <span className="eyebrow">Your Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@elsewhere.com"
                className="mt-2 w-full rounded-2xl border border-cream/10 bg-ink/40 px-5 py-4 text-cream placeholder:text-cream/30 outline-none transition focus:border-ember/40 focus:bg-ink/60"
              />
            </label>
            <label className="block">
              <span className="eyebrow">Where you are now</span>
              <textarea
                rows={3}
                placeholder="One sentence is enough."
                className="mt-2 w-full resize-none rounded-2xl border border-cream/10 bg-ink/40 px-5 py-4 text-cream placeholder:text-cream/30 outline-none transition focus:border-ember/40 focus:bg-ink/60"
              />
            </label>
            <button type="submit" className="btn-primary w-full justify-center">
              {submitted ? "Breath received ·" : "Send across the threshold"}
              {!submitted && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              )}
            </button>
            {submitted && (
              <p className="text-center text-sm text-teal2/80">
                A messenger is on its way. Inhale slowly while you wait.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
