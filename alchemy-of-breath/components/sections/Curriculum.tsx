"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MiniOrb = dynamic(() => import("@/components/three/MiniOrb").then((m) => m.MiniOrb), {
  ssr: false,
  loading: () => null,
});

const modules = [
  {
    n: "01",
    name: "The Felt Sense of Breath",
    duration: "45 min",
    color: "#9d4edd",
    accent: "#f4a261",
    desc: "Awareness before technique. You'll meet the four chambers of breath and the nervous-system literacy that every facilitator must own before guiding another.",
  },
  {
    n: "02",
    name: "Conscious Connected Breath",
    duration: "60 min",
    color: "#f4a261",
    accent: "#e76f51",
    desc: "The signature lineage technique — continuous, circular, music-held. We move through the safety container, the activation curve, and the integration window.",
  },
  {
    n: "03",
    name: "Holding Space",
    duration: "50 min",
    color: "#2a9d8f",
    accent: "#80ffdb",
    desc: "Presence as the primary tool. Trauma-informed orientation, scope of practice, and the somatic literacy of staying when something hard arrives.",
  },
  {
    n: "04",
    name: "Anxiety as Material",
    duration: "55 min",
    color: "#e76f51",
    accent: "#f4a261",
    desc: "How AoB facilitators meet anxiety, panic, and constriction in the room. Not as enemy — as messenger. The exact dialogue we teach for first sessions.",
  },
  {
    n: "05",
    name: "The Path Onward",
    duration: "30 min",
    color: "#9d4edd",
    accent: "#80ffdb",
    desc: "How Foundations dovetails into the 400-hour Facilitator Training, BreathCamp, and the ASHA in-person residency. A clear-eyed map of what's next.",
  },
];

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <span className="eyebrow">Curriculum</span>
          <h2 className="serif mt-6 text-4xl leading-tight md:text-5xl">
            Five modules.
            <br />
            <span className="text-gradient">Drawn from the lineage.</span>
          </h2>
          <p className="mt-6 max-w-md text-cream/65">
            Every module is a slice of the actual 400-hour curriculum —
            so what you learn here is what you'd carry into facilitation,
            not a marketing summary of it.
          </p>
        </div>

        <div className="space-y-5">
          {modules.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="glass group flex items-center gap-6 rounded-3xl p-6 transition hover:border-cream/20 md:p-8"
            >
              <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                <MiniOrb color={p.color} accent={p.accent} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="serif text-xl text-cream/40">{p.n}</span>
                  <h3 className="serif text-2xl md:text-3xl">{p.name}</h3>
                  <span className="eyebrow !text-[10px]">{p.duration}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/65 md:text-base">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
