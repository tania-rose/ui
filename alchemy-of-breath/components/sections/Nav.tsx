"use client";

import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-30 px-6 md:px-10 py-5"
    >
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
        <a href="/" className="flex items-center gap-2 group">
          <span className="relative inline-block h-2 w-2 rounded-full bg-ember2">
            <span className="absolute inset-0 rounded-full bg-ember2 animate-ping opacity-60" />
          </span>
          <span className="serif text-lg tracking-wide">Alchemy of Breath</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="/" className="text-sm tracking-wide text-cream/70 transition hover:text-cream">
              Foundations
            </a>
          </li>
          <li>
            <a href="/transforming-anxiety" className="text-sm tracking-wide text-cream/70 transition hover:text-cream">
              Transforming Anxiety
            </a>
          </li>
          <li>
            <a href="#curriculum" className="text-sm tracking-wide text-cream/70 transition hover:text-cream">
              Curriculum
            </a>
          </li>
          <li>
            <a href="#enroll" className="text-sm tracking-wide text-cream/70 transition hover:text-cream">
              Enroll
            </a>
          </li>
        </ul>
        <a href="#enroll" className="hidden md:inline-flex btn-ghost !py-2 !px-4 text-sm">
          Begin
        </a>
      </nav>
    </motion.header>
  );
}
