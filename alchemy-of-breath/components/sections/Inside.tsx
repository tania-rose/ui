"use client";

import { motion } from "framer-motion";

const items = [
  {
    glyph: "☉",
    title: "Live Breathwork Session",
    body: "A full-length Conscious Connected Breathwork journey, guided by Anthony. Yours to revisit as often as needed — each pass peels back another layer.",
    meta: "75 min · Live + recorded",
  },
  {
    glyph: "☾",
    title: "Foundations Workbook",
    body: "Self-inquiry prompts, somatic exercises, and the Generalized Anxiety scale that AoB facilitators are trained to use with their first clients.",
    meta: "44 pages · PDF",
  },
  {
    glyph: "✶",
    title: "Facilitator Pre-Curriculum",
    body: "Five video modules from the 400-hour training, drawn from the actual Alchemy of Breath syllabus. Watch what the work really asks of you.",
    meta: "5 modules · 4.5 hrs",
  },
  {
    glyph: "✦",
    title: "Live Q&A with Master Trainer",
    body: "A monthly small-circle call. Bring questions about the practice, the path, your readiness — and meet humans walking it with you.",
    meta: "60 min · Monthly",
  },
];

export function Inside() {
  return (
    <section
      id="inside"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">What's inside</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          Four vessels, <span className="text-gradient">one practice.</span>
        </h2>
        <p className="mt-6 text-cream/65">
          Designed to be felt before it is studied. You will breathe
          first, then read, then ask — the order the body actually trusts.
        </p>
      </div>

      <div className="divider-rune mt-16" />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-violet2/20 to-ember/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-4xl text-ember">{p.glyph}</span>
                <span className="eyebrow !text-[10px]">{p.meta}</span>
              </div>
              <h3 className="serif mt-8 text-3xl">{p.title}</h3>
              <p className="mt-4 text-cream/65">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
