"use client";

import { motion } from "framer-motion";

const principles = [
  {
    glyph: "☉",
    title: "Solve",
    body: "Dissolve the residue of held breath, held grief, held performance. The body remembers what the mind tries to forget — breath is the gentlest solvent.",
  },
  {
    glyph: "☾",
    title: "Coagula",
    body: "From release, a new structure forms. Nervous system regulated, attention sharpened, heart open. Vitality re-coagulated into form.",
  },
  {
    glyph: "✶",
    title: "Lumen",
    body: "What emerges is not a different person, but the original one — luminous, available, unmistakably alive. The lead becomes gold.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Philosophy</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          Three movements of the <span className="text-gradient">Great Work</span>
        </h2>
        <p className="mt-6 text-cream/65">
          The alchemists left coded maps for inner transformation. We follow
          their lineage with breath as the laboratory — and the body as the
          first vessel.
        </p>
      </div>

      <div className="divider-rune mt-16" />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-violet2/20 to-ember/10 opacity-0 blur-3xl transition group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-4xl text-ember">{p.glyph}</span>
                <span className="eyebrow !text-[10px]">0{i + 1}</span>
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
