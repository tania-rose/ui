"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const MiniOrb = dynamic(() => import("@/components/three/MiniOrb").then((m) => m.MiniOrb), {
  ssr: false,
  loading: () => null,
});

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
            <span className="eyebrow">Meet your teacher</span>
            <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
              Anthony Abbagnano
            </h2>
            <p className="mt-2 text-cream/55">
              Breathwork Guru and Founder of Alchemy of Breath
            </p>
            <p className="mt-6 text-cream/70">
              Having been a breather for decades, Anthony first incorporated
              Breathwork into his other practices in 2012. The founder of
              Alchemy of Breath, Anthony and his facilitation team have
              successfully taken Breathwork into festivals, yoga spaces, the
              corporate world, prisons, the Psychedelic Society, hospitals
              and to the dying. Driven by his passion to awaken the whole
              world to the miraculous gift of the Breath, Anthony is the
              pioneer of #BreatheTheWorld, an initiative to uplift world
              consciousness that has introduced Online Breathwork to
              thousands around the globe in over 40 countries to date.
            </p>
            <p className="mt-4 text-cream/70">
              His work is noted for its application in the fields of
              addiction, trauma release, transformation, personal
              empowerment, the integration of psychotropic and plant
              medicine experiences, and the opening of humanity's hope for
              a heart-centered harmonious existence. Anthony has a unique
              and profound way of seeing and loving people, life, and the
              world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
