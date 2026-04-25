"use client";

import { motion } from "framer-motion";

const symptoms = [
  "You worry excessively.",
  "It keeps you up at night.",
  "It prevents you from engaging socially or trying new things.",
  "It interferes with your work or relationships.",
  "You feel on edge, irritable, or overwhelmed — even just reading this.",
];

export function WhyNowTA() {
  return (
    <section
      id="why"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className="eyebrow">Do any of these feel familiar?</span>
          <h2 className="serif mt-6 text-4xl leading-tight md:text-5xl">
            Anxiety is the most common
            <br />
            <span className="text-gradient">mental illness in the world.</span>
          </h2>
          <p className="mt-6 text-cream/70">
            But calling it an illness implies something is wrong with us — when
            in fact it is often an inner reflection of the outer chaos around
            us. Lockdowns, the news, war, poverty, climate, corruption, the
            daily struggle to survive. It is no wonder so many of us are
            anxious.
          </p>
          <p className="mt-4 text-cream/70">
            The very fact that you feel anxiety means you have the power to
            change it.
          </p>
        </div>

        <ul className="space-y-4">
          {symptoms.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="glass flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ember/40 bg-ember/10 text-xs text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-cream/85">{p}</p>
            </motion.li>
          ))}
          <p className="pt-2 text-sm text-cream/55">
            If you can answer "yes" to any of the above, you are not alone —
            and we commend you for the courage of seeking a solution.
          </p>
        </ul>
      </div>
    </section>
  );
}
