"use client";

import { motion } from "framer-motion";

const stages = [
  {
    n: "I",
    title: "Foundations",
    text: "$47 · 14 days. The doorway you are looking at. A real taste of the lineage, not a teaser.",
  },
  {
    n: "II",
    title: "BreathCamp",
    text: "$497 · 7 weeks online. Live cohorts with master trainers. Earn your online facilitator certificate.",
  },
  {
    n: "III",
    title: "400-Hour Facilitator Training",
    text: "12-week practicum + supervision. The full lineage transmission, accredited and insurance-eligible.",
  },
  {
    n: "IV",
    title: "ASHA In-Person Residency",
    text: "21 days at our retreat in Tuscany. Live with Anthony and the master trainers — graduate as a residential facilitator.",
  },
  {
    n: "V",
    title: "The Work Itself",
    text: "Carry breath into the rooms it has not yet reached — clinics, classrooms, prisons, your own quiet living room.",
  },
];

export function Journey() {
  return (
    <section
      id="pathway"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">The Pathway</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          From <span className="text-gradient">$47 doorway</span>
          <br />
          to certified facilitator.
        </h2>
        <p className="mt-6 text-cream/65">
          Foundations is step one of five. There's no obligation past it —
          but if the breath calls you forward, the rest of the lineage is
          already mapped.
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
