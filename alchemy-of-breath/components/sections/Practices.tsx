"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MiniOrb = dynamic(() => import("@/components/three/MiniOrb").then((m) => m.MiniOrb), {
  ssr: false,
  loading: () => null,
});

const practices = [
  {
    name: "Conscious Connected Breath",
    duration: "60 min",
    intensity: "Deep",
    color: "#9d4edd",
    accent: "#f4a261",
    desc: "A continuous, rhythmic breath without pause — used for centuries to dissolve emotional armor and reach altered, healing states.",
  },
  {
    name: "Pranayama Lineage",
    duration: "30 min",
    intensity: "Subtle",
    color: "#2a9d8f",
    accent: "#80ffdb",
    desc: "Nadi Shodhana, Kapalabhati, Bhramari. Eight-limb practices to refine prana and prepare the inner channels for stillness.",
  },
  {
    name: "Coherence Training",
    duration: "20 min",
    intensity: "Daily",
    color: "#f4a261",
    accent: "#e76f51",
    desc: "Heart-rate variability protocols paired with paced breath. Build a regulated baseline you can return to under any pressure.",
  },
];

export function Practices() {
  return (
    <section
      id="practices"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <span className="eyebrow">Practices</span>
          <h2 className="serif mt-6 text-4xl leading-tight md:text-5xl">
            Three vessels.
            <br />
            <span className="text-gradient">One breath.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/65">
            Choose a vessel to begin — each is a different temperature of
            transformation, each leads back to the same still center.
          </p>
        </div>

        <div className="space-y-6">
          {practices.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="glass group flex items-center gap-6 rounded-3xl p-6 md:p-8 transition hover:border-cream/20"
            >
              <div className="relative h-20 w-20 shrink-0 md:h-28 md:w-28">
                <MiniOrb color={p.color} accent={p.accent} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="serif text-2xl md:text-3xl">{p.name}</h3>
                  <span className="eyebrow !text-[10px]">
                    {p.duration} · {p.intensity}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/65 md:text-base">
                  {p.desc}
                </p>
              </div>
              <a
                href="#contact"
                aria-label={`Begin ${p.name}`}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 transition group-hover:border-cream/40 group-hover:bg-cream/5 md:flex"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
