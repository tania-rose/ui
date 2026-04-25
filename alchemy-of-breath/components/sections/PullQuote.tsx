"use client";

import { motion } from "framer-motion";

export function PullQuote({
  text,
  author,
  small,
}: {
  text: string;
  author?: string;
  small?: string;
}) {
  return (
    <section className="relative z-20 mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
      <motion.figure
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="text-center"
      >
        {small && (
          <p className="eyebrow mb-6">{small}</p>
        )}
        <blockquote className="serif text-3xl leading-snug md:text-5xl">
          <span className="text-gradient">"{text}"</span>
        </blockquote>
        {author && (
          <figcaption className="mt-6 text-sm tracking-[0.3em] uppercase text-cream/55">
            — {author}
          </figcaption>
        )}
      </motion.figure>
    </section>
  );
}
