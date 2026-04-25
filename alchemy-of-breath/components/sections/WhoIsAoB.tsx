"use client";

import { motion } from "framer-motion";

export function WhoIsAoB() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-5xl px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="text-center"
      >
        <span className="eyebrow">Who is</span>
        <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">
          <span className="text-gradient">Alchemy of Breath?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-cream/70">
          Alchemy of Breath is a world leader in online Breathwork
          facilitator training and has developed several holistic courses
          that utilize Breathwork as their foundation. Each program works
          with the mental, emotional, spiritual, and physical aspects of
          the self — on everything from unlocking trauma in the body to
          understanding the limiting beliefs of the mind, to finding your
          higher purpose in life.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-cream/70">
          The practices taught by Alchemy of Breath were developed by
          amalgamating the most effective Breathwork patterns from
          different styles around the world. By working with Alchemy of
          Breath, you'll discover a natural remedy for stress and anxiety,
          and cultivate greater self-awareness, love, and compassion,
          improved relationships, and enhanced wellbeing — all from the
          comfort of your own home.
        </p>
      </motion.div>
    </section>
  );
}
