"use client";

import { motion } from "framer-motion";

const points = [
  "Breath is the missing somatic literacy in modern coaching, therapy, and care.",
  "Most facilitator programs ask for thousands and a year of commitment up front.",
  "You may already feel the call — and want to test it before you leap.",
  "Foundations is the doorway: real material from the lineage, kept low so the call decides.",
];

export function WhyNow() {
  return (
    <section
      id="why"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className="eyebrow">Why this, why now</span>
          <h2 className="serif mt-6 text-4xl leading-tight md:text-5xl">
            The world is starving
            <br />
            for <span className="text-gradient">embodied guides.</span>
          </h2>
          <p className="mt-6 text-cream/70">
            Alchemy of Breath has carried Conscious Connected Breathwork
            into festivals, yoga halls, the corporate floor, prisons,
            hospitals, and to the bedside of the dying — across more than
            forty countries.
          </p>
          <p className="mt-4 text-cream/70">
            Foundations is the way you find out — without leaving your
            life — whether you are next.
          </p>
        </div>

        <ul className="space-y-5">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ember/40 bg-ember/10 text-xs text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-cream/85">{p}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
