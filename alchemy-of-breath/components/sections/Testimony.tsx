"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    body: "Starting with AoB was one of the best decisions of my life. The combination of personal process and structured teaching grew me as a person and dramatically changed the course of my professional career. Anthony's insight was foundational — held me gently but firmly accountable throughout.",
    name: "Cara M.",
    role: "Certified Facilitator · Master Trainer-in-training",
  },
  {
    body: "Foundations was the test I didn't know I needed. By the end of week two I knew — not from my head, from my chest — that this was my next decade of work. I'd recommend it to any therapist sitting on the same fence.",
    name: "Daniel R.",
    role: "Psychotherapist, Amsterdam",
  },
  {
    body: "What I love is that nothing was hidden. The same nervous-system frameworks I now use with clients, I learned in that first $47 course. It was an honest doorway, not a sales funnel.",
    name: "Priya S.",
    role: "Yoga Teacher · AoB Graduate",
  },
];

export function Testimony() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass rounded-3xl p-7"
          >
            <span className="serif text-4xl text-ember/70">"</span>
            <blockquote className="mt-2 text-cream/85">{q.body}</blockquote>
            <figcaption className="mt-6 border-t border-cream/10 pt-4 text-sm">
              <span className="block text-cream">{q.name}</span>
              <span className="block text-cream/50">{q.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
