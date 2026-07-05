"use client";

import { motion } from "framer-motion";

const rides = [
  { emoji: "🏍️", name: "Bike", desc: "Slice through traffic", fare: "from ₹5/km" },
  { emoji: "🛵", name: "Scooter", desc: "Quick & easy hops", fare: "from ₹6/km" },
  { emoji: "🛺", name: "Auto", desc: "The everyday classic", fare: "from ₹9/km" },
  { emoji: "🚗", name: "Car", desc: "Comfort for four", fare: "from ₹14/km" },
  { emoji: "🚐", name: "Van", desc: "Bring the whole crew", fare: "from ₹19/km" },
];

export default function Vehicles() {
  return (
    <section id="rides" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand">The line-up</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Pick your <span className="font-script text-5xl text-brand sm:text-6xl">vibe</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium text-white/60">
            One tap to switch between five ride types — same pickup, same app, a fare for every
            pocket.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rides.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
              className="group cursor-default rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-brand hover:ring-brand"
            >
              <span className="mb-4 block text-5xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                {r.emoji}
              </span>
              <h3 className="text-lg font-extrabold">{r.name}</h3>
              <p className="mt-1 text-xs font-medium text-white/60 group-hover:text-white/85">{r.desc}</p>
              <p className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold group-hover:bg-white group-hover:text-brand">
                {r.fare}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
