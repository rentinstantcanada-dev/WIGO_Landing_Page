"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Drop your pin",
    body: "Open WIGO, set where you are and where you're headed. Multi-stop trips? Add as many as you like.",
  },
  {
    n: "02",
    title: "Pick your ride",
    body: "Compare live fares across bike, scooter, auto, car and van — choose what fits the moment.",
  },
  {
    n: "03",
    title: "Just GO",
    body: "Track your driver in real time, pay however you like, and rate the ride when you land.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand">How it works</p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Three taps to <span className="text-brand">anywhere</span>
        </h2>
      </motion.div>

      <div className="relative grid gap-10 md:grid-cols-3">
        {/* connecting dashed line */}
        <svg
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-8 w-full md:block"
          viewBox="0 0 1000 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 100 20 C 300 -10 380 50 500 20 C 620 -10 700 50 900 20"
            fill="none"
            stroke="#f0392b"
            strokeWidth="3"
            strokeDasharray="10 12"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </svg>

        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            className="relative text-center"
          >
            <span className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-2xl font-extrabold text-white shadow-xl shadow-brand/30 ring-8 ring-cream">
              {s.n}
            </span>
            <h3 className="mb-2 text-xl font-extrabold">{s.title}</h3>
            <p className="mx-auto max-w-xs text-sm font-medium leading-relaxed text-muted">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
