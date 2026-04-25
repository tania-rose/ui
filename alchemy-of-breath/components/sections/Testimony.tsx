"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    body: "I came skeptical. Three sessions in, I cried for the first time in seven years — not from sadness, but from finally feeling met by my own breath.",
    name: "Maya R.",
    role: "Surgeon, Lisbon",
  },
  {
    body: "It is the most precise inner technology I have encountered. My team noticed before I did — calmer, more present, less reactive.",
    name: "Jonas K.",
    role: "Founder, Berlin",
  },
  {
    body: "I expected mysticism and got a science of attention. I expected science and got something genuinely sacred. It is both.",
    name: "Aiyana B.",
    role: "Therapist, Toronto",
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
