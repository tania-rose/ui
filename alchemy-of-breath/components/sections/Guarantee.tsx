"use client";

import { motion } from "framer-motion";

export function Guarantee() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="glass flex flex-col items-center gap-6 rounded-[2rem] p-10 text-center md:flex-row md:gap-10 md:text-left"
      >
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-ember/30 to-violet2/20 blur-2xl" />
          <svg viewBox="0 0 100 100" className="relative h-24 w-24">
            <defs>
              <linearGradient id="seal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f4a261" />
                <stop offset="100%" stopColor="#9d4edd" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="none" stroke="url(#seal)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="url(#seal)" strokeWidth="0.6" strokeDasharray="2 4" />
            <text x="50" y="46" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#f6efe2">
              14 DAYS
            </text>
            <text x="50" y="62" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fill="#f6efe2" opacity="0.6">
              full refund
            </text>
          </svg>
        </div>
        <div>
          <span className="eyebrow">No-risk threshold</span>
          <h3 className="serif mt-4 text-2xl leading-tight md:text-3xl">
            If the breath does not meet you, we send your $47 back —
            <span className="text-cream/60"> no questions, no form, no debate.</span>
          </h3>
          <p className="mt-4 text-sm text-cream/60">
            We trust the practice. We trust you to know within fourteen days
            whether it is yours. If not — keep what served you and walk on.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
