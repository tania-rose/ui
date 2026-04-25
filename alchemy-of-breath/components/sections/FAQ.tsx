"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need any breathwork experience to begin?",
    a: "No. Foundations is built for the absolute beginner who senses a calling. If you've already breathed a thousand times, the curriculum will simply move faster — the materials are yours forever.",
  },
  {
    q: "Is this a prerequisite for the AoB Facilitator Training?",
    a: "It is the gentlest on-ramp we offer — designed for people exploring whether the call is real before they commit to the full 400-hour path. Foundations is not a formal prerequisite; you are not obligated to continue, ever.",
  },
  {
    q: "Why is it priced low?",
    a: "Anthony's intention is that the call decides who walks through, not the cost. Foundations is meant as an honest doorway, not a sales funnel.",
  },
  {
    q: "Can I do this if I have anxiety, panic, or trauma history?",
    a: "Conscious Connected Breathwork can be deeply supportive, and many students arrive with these experiences. That said, breathwork is contraindicated for some conditions — if you are in active acute crisis or under medical/psychiatric care, please consult a clinician before beginning. Alchemy of Breath is not a medical practice and facilitators are not medically trained.",
  },
  {
    q: "How long do I have access?",
    a: "Lifetime. The materials don't expire — return as many times as the breath asks you to.",
  },
  {
    q: "What format is the course in?",
    a: "On-demand video plus a downloadable workbook. Self-paced — you set the rhythm.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative z-20 mx-auto w-full max-w-4xl px-6 py-28 md:px-10 md:py-36">
      <div className="text-center">
        <span className="eyebrow">Honest answers</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-5xl">
          Questions worth <span className="text-gradient">asking.</span>
        </h2>
      </div>

      <ul className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.li
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-cream/5"
                aria-expanded={isOpen}
              >
                <span className="serif text-lg md:text-xl">{f.q}</span>
                <span
                  className={`shrink-0 text-ember transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-cream/65">{f.a}</p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
