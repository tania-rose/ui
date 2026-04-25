"use client";

import { motion } from "framer-motion";

const stages = [
  {
    n: "I",
    title: "Calcination",
    text: "We meet what is heavy and unhelpful — defenses, fixed identities, old stories. Breath warms the cauldron.",
  },
  {
    n: "II",
    title: "Dissolution",
    text: "What is rigid softens. Tears, laughter, somatic release. The water of breath finds the cracks in the stone.",
  },
  {
    n: "III",
    title: "Conjunction",
    text: "Body and mind, masculine and feminine, shadow and light — the apparent opposites recognize each other.",
  },
  {
    n: "IV",
    title: "Sublimation",
    text: "What was dense becomes light. Awareness rises without effort. The breath breathes itself.",
  },
  {
    n: "V",
    title: "Coagulation",
    text: "The transformed self returns into form — quieter, clearer, more useful to the people you love.",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">The Journey</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          Five stages of <span className="text-gradient">transmutation</span>
        </h2>
        <p className="mt-6 text-cream/65">
          A 12-week container, traversed at your own rhythm. Each stage is a
          door you walk through, not a level you defeat.
        </p>
      </div>

      <div className="relative mt-20">
        {/* Vertical timeline line */}
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-[1px] bg-gradient-to-b from-transparent via-cream/20 to-transparent md:left-1/2 md:block" />

        <ol className="space-y-10 md:space-y-16">
          {stages.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8 }}
                className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={left ? "md:pr-16 md:text-right" : "md:pl-16"}>
                  <div className="serif text-5xl text-cream/30 md:text-6xl">{s.n}</div>
                  <h3 className="serif mt-2 text-3xl">{s.title}</h3>
                  <p className="mt-3 text-cream/65">{s.text}</p>
                </div>
                <div className="relative hidden md:block">
                  {/* Center dot */}
                  <span
                    className={`absolute top-6 h-3 w-3 -translate-y-1/2 rounded-full bg-ember shadow-[0_0_30px_rgba(244,162,97,0.7)] ${left ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                  />
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
