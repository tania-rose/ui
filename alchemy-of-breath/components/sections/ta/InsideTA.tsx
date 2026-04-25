"use client";

import { motion } from "framer-motion";

const items = [
  {
    glyph: "☉",
    title: "5 hours of on-demand video training",
    body: "In-depth video lessons with proven techniques and practices to dissolve anxiety and address its root causes.",
  },
  {
    glyph: "☾",
    title: "Breath awareness exercises",
    body: "Practices that bring you into the present moment — where anxiety cannot exist.",
  },
  {
    glyph: "✶",
    title: "Several breathing tools for anxiety",
    body: "Switch yourself out of fight-or-flight mode and transform the energy of anxiety into something positive and productive.",
  },
  {
    glyph: "✦",
    title: "A full-length Conscious Connected Breathwork session",
    body: "Guided by Anthony, a deep inner journey to access subconscious programming and address anxiety at its root. Revisit it as often as you like — each session peels back another layer.",
  },
  {
    glyph: "❖",
    title: "Transforming Anxiety Workbook",
    body: "Self-inquiry questions, practices, and exercises to train your brain toward the positive, transform fear-based programming into empowered thinking, and create a lasting state of inner peace.",
  },
  {
    glyph: "◈",
    title: "Generalized Anxiety Questionnaire",
    body: "An assessment to measure where you are at — and to track your progress through the course.",
  },
];

export function InsideTA() {
  return (
    <section
      id="inside"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">What's included</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          Everything you need to <span className="text-gradient">come home to yourself.</span>
        </h2>
        <p className="mt-6 text-cream/65">
          With the right tools and an approach that addresses both body and
          mind, an inner oasis of calm becomes a new normal — preventatively,
          and on the occasion that anxiety sneaks up on you.
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
              <span className="text-4xl text-ember">{p.glyph}</span>
              <h3 className="serif mt-8 text-2xl md:text-3xl">{p.title}</h3>
              <p className="mt-4 text-cream/65">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
