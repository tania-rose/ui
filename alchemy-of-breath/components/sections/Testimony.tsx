"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    body: "Starting the anxiety training with the AOB was one of the best decisions in my life. To meet up consistently over a long period of time, really gave me the opportunity to dive deep into my own inner inquiry. It was so much more than training to me. It's deep and healing work. It was a connection to myself and to the group. It was an expansion, stepping out of my comfort zone, it was growth; it was one step closer to becoming the person I am meant to be. I found my purpose! Anthony's beautiful way of teaching, and his artistic and poetic way of using his words really inspired me and still does. His ability to create such a solid and safe container, helped me a lot to find the strength to dig deep. I have nothing but love for this man and I will be forever grateful and proud to call him my teacher.",
    name: "Marianna Manderscheid",
  },
  {
    body: "The decision to train as a breathwork facilitator was hands down one of the best decisions I've ever made in my life. As a licensed bodyworker, I had already just started a cranio-sacral training when deciding to follow my heart and switch to breathwork instead, and I've honestly never looked back. The combined use of personal process and structured teaching has grown me as a person and dramatically changed the course of my professional career as a result. Anthony's insight and wisdom as the foundational cornerstone were exemplary and held me gently but firmly accountable throughout. I found my passion, I found my unique perspective on the breath (which is encouraged for all students), and I'm now deeply honoured to be able to support the training of new students in this life affirming work. If you are hesitating, LEAP! It's a decision you will never regret!",
    name: "Steph Magenta",
  },
];

export function Testimony() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <div className="mb-12 text-center">
        <span className="eyebrow">Testimonials</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((q, i) => (
          <motion.figure
            key={q.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <span className="serif text-5xl text-ember/70">"</span>
            <blockquote className="mt-2 text-cream/85 leading-relaxed">{q.body}</blockquote>
            <figcaption className="mt-6 border-t border-cream/10 pt-4 text-sm">
              <span className="block text-cream">{q.name}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
