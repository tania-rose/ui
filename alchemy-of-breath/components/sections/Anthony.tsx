"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MiniOrb = dynamic(() => import("@/components/three/MiniOrb").then((m) => m.MiniOrb), {
  ssr: false,
  loading: () => null,
});

const credentials = [
  "Founder, Alchemy of Breath",
  "1,000+ certified facilitators",
  "ASHA Retreat & Community Centre, Tuscany",
  "Featured: The Shift Network",
];

export function Anthony() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-6xl px-6 py-28 md:px-10 md:py-36">
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet2/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-ember/15 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto aspect-square w-64 max-w-full overflow-hidden rounded-full border border-cream/15 bg-ink/40 md:w-full"
          >
            <MiniOrb color="#f4a261" accent="#9d4edd" />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-cream/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">Your guide</span>
            <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
              Anthony Abbagnano
            </h2>
            <p className="mt-6 text-cream/70">
              Anthony has carried Conscious Connected Breathwork into
              festivals, yoga halls, the corporate floor, prisons, the
              Psychedelic Society, hospitals and to the bedside of the
              dying. His work is recognized for its application in
              addiction, trauma release, transformation, and the
              integration of plant medicine — and for the quiet conviction
              underneath all of it: a heart-centered, harmonious existence
              is still available to us.
            </p>
            <p className="mt-4 text-cream/70">
              Foundations is the door he keeps open for the next
              generation of facilitators — kept low so the call, not the
              cost, decides who walks through.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-cream/70">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-ember" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
