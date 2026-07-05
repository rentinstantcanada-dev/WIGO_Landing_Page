"use client";

import { motion } from "framer-motion";
import RouteScene from "./RouteScene";
import QrCard from "./QrCard";
import StoreButtons from "./StoreButtons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* ambient blobs */}
      <div className="animate-breathe pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="animate-breathe pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl [animation-delay:3s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* ---- left: copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/70 shadow-sm ring-1 ring-ink/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Launching soon · Pre-register now
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(3.2rem,8vw,5.8rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            <span className="text-outline block">WHERE</span>
            <span className="block">
              I{" "}
              <span className="animate-wiggle inline-block rounded-2xl bg-brand px-4 pb-1 text-white shadow-xl shadow-brand/30">
                GO
              </span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-script text-4xl text-brand sm:text-5xl">
            Your ride, your way.
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-md text-lg font-medium text-muted">
            Bikes, scooters, autos, cars &amp; vans — pick the ride that fits the moment. Any
            place. Any time. Any comfort.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-bold text-white shadow-xl shadow-ink/20 transition-transform hover:scale-105 active:scale-95"
            >
              Pre-register on Google Play
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#how"
              className="rounded-full px-5 py-4 text-base font-bold text-ink/70 underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6">
            <StoreButtons />
          </motion.div>
        </motion.div>

        {/* ---- right: animated map + QR ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <RouteScene />
          <motion.div
            initial={{ opacity: 0, rotate: -12, y: 30 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute -bottom-6 left-[6%] hidden sm:block"
          >
            <QrCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
