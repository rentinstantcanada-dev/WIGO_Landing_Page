"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Any Place",
    body: "From metro hubs to the last unnamed lane — if a wheel can reach it, WIGO takes you there.",
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    ),
  },
  {
    title: "Any Time",
    body: "3 pm or 3 am — drivers nearby around the clock, with live tracking on every trip.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
  {
    title: "Any Ride",
    body: "Bike for beating traffic, auto for the everyday, car for the family, van for the crew.",
    icon: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3.5A6.5 6.5 0 1 1 5.5 12 6.5 6.5 0 0 1 12 5.5Zm0 4A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Z" />
    ),
  },
  {
    title: "Any Comfort",
    body: "Budget-friendly or premium — set your comfort level and the fare follows, transparently.",
    icon: (
      <path d="M12 21s-7.5-4.7-9.7-9A5.7 5.7 0 0 1 12 6.2 5.7 5.7 0 0 1 21.7 12c-2.2 4.3-9.7 9-9.7 9Z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand">Why WIGO</p>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Four promises. <span className="text-brand">Zero</span> compromises.
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-2xl hover:shadow-brand/10 hover:ring-brand/30"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                {f.icon}
              </svg>
            </span>
            <h3 className="mb-2 text-xl font-extrabold">{f.title}</h3>
            <p className="text-sm font-medium leading-relaxed text-muted">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
