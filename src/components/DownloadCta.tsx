"use client";

import { motion } from "framer-motion";
import QrCard from "./QrCard";
import StoreButtons from "./StoreButtons";

/** Tiny CSS-drawn phone running the WIGO app. */
function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[420px] w-[210px] rounded-[2.6rem] bg-ink-2 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/15">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0a0a0a]">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-2" />
        {/* mini map */}
        <div className="relative h-[58%] w-full overflow-hidden">
          <svg viewBox="0 0 210 240" className="h-full w-full" aria-hidden>
            <rect width="210" height="240" fill="#141414" />
            <g stroke="#242424" strokeWidth="3">
              <path d="M 0 60 H 210" />
              <path d="M 0 140 H 210" />
              <path d="M 60 0 V 240" />
              <path d="M 150 0 V 240" />
            </g>
            <path
              id="mini-route"
              d="M 30 210 C 80 190 70 140 110 120 C 150 100 150 70 180 40"
              fill="none"
              stroke="#f0392b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="30" cy="210" r="6" fill="#f0392b" stroke="#fff" strokeWidth="2" />
            <circle cx="180" cy="40" r="6" fill="#f0392b" stroke="#fff" strokeWidth="2" />
            <g>
              <circle r="8" fill="#fff" />
              <text textAnchor="middle" dominantBaseline="central" fontSize="9">
                🛺
              </text>
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#mini-route" />
              </animateMotion>
            </g>
          </svg>
        </div>
        {/* bottom sheet */}
        <div className="absolute bottom-0 w-full rounded-t-3xl bg-[#1c1c1c] p-4">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
          <div className="mb-3 rounded-xl bg-white/5 px-3 py-2.5 text-[11px] font-semibold text-white/50 ring-1 ring-white/10">
            Where to?
          </div>
          <div className="mb-3 flex gap-2">
            {["🏍️", "🛺", "🚗"].map((e, i) => (
              <span
                key={e}
                className={`flex h-12 flex-1 items-center justify-center rounded-xl text-lg ${
                  i === 1 ? "bg-brand/20 ring-1 ring-brand" : "bg-white/5 ring-1 ring-white/10"
                }`}
              >
                {e}
              </span>
            ))}
          </div>
          <div className="rounded-full bg-brand py-2.5 text-center text-xs font-extrabold text-white">
            GO · ₹96
          </div>
        </div>
      </div>
      {/* floating notification */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="animate-float absolute -right-24 top-14 hidden rounded-2xl bg-white px-4 py-3 text-xs font-bold text-ink shadow-2xl lg:block"
      >
        Ride confirmed 🎉
        <span className="block text-[10px] font-semibold text-muted">Ravi is on the way</span>
      </motion.div>
    </div>
  );
}

export default function DownloadCta() {
  return (
    <section id="download" className="px-4 pb-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-ink px-6 py-16 text-white sm:px-14"
      >
        {/* glow blobs */}
        <div className="animate-breathe pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="animate-breathe pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl [animation-delay:4s]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand">
              Launching soon
            </p>
            <h2 className="text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">
              Be first to{" "}
              <span className="inline-block rounded-2xl bg-brand px-4 pb-1 shadow-xl shadow-brand/40">
                GO.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-lg font-medium text-white/60">
              Scan the code to pre-register on Google Play — we&apos;ll ping you the moment WIGO
              goes live in your city.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 0 }}
                initial={{ rotate: -4 }}
                className="shrink-0"
              >
                <QrCard size={150} caption="Scan to pre-register" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <StoreButtons light />
                <p className="text-xs font-semibold text-white/40">
                  Free · Pre-register on Google Play · iOS coming soon
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden justify-center md:flex"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
