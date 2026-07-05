"use client";

import { motion } from "framer-motion";

const ROUTE =
  "M 80 430 C 180 400 150 330 230 310 C 310 290 300 250 330 210 C 360 170 440 190 480 150 C 515 115 525 100 540 70";

function Vehicle({ emoji, begin }: { emoji: string; begin: string }) {
  return (
    <g>
      <circle r="17" fill="#ffffff" stroke="#f0392b" strokeWidth="2.5" />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="17"
        style={{ pointerEvents: "none" }}
      >
        {emoji}
      </text>
      <animateMotion dur="9s" begin={begin} repeatCount="indefinite" fill="freeze">
        <mpath href="#wigo-route" />
      </animateMotion>
    </g>
  );
}

function Pin({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="4" rx="16" ry="6" fill="#f0392b" opacity="0.25" className="pin-ripple" />
      <g className="pin-drop" style={{ animationDelay: delay }}>
        <path
          d="M0 2 C -9 -10 -14 -15 -14 -24 a 14 14 0 1 1 28 0 C 14 -15 9 -10 0 2 Z"
          fill="#f0392b"
          stroke="#ffffff"
          strokeWidth="2.5"
        />
        <circle cx="0" cy="-23" r="5" fill="#ffffff" />
      </g>
    </g>
  );
}

/**
 * Animated "map" hero scene — glowing route, pulsing pins and
 * vehicles driving the route (pure SMIL, zero JS on the hot path).
 */
export default function RouteScene() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <svg viewBox="0 0 620 520" className="w-full" role="img" aria-label="A WIGO ride moving across a city map">
        {/* --- faint city blocks --- */}
        <g stroke="#d8cfba" strokeWidth="2" opacity="0.55">
          <path d="M 0 120 H 620" />
          <path d="M 0 260 H 620" />
          <path d="M 0 400 H 620" />
          <path d="M 140 0 V 520" />
          <path d="M 320 0 V 520" />
          <path d="M 500 0 V 520" />
        </g>
        <g fill="#eae2cf" opacity="0.8">
          <rect x="20" y="20" width="100" height="80" rx="10" />
          <rect x="360" y="290" width="110" height="90" rx="10" />
          <rect x="170" y="130" width="120" height="100" rx="10" />
          <rect x="530" y="290" width="70" height="90" rx="10" />
          <rect x="30" y="150" width="90" height="80" rx="10" />
        </g>
        {/* a little park + water for life */}
        <rect x="360" y="30" width="110" height="70" rx="12" fill="#dfe5c8" />
        <path d="M 0 480 C 120 460 200 500 320 485 S 540 500 620 480" stroke="#cfdde4" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.8" />

        {/* --- route glow --- */}
        <path d={ROUTE} fill="none" stroke="#f0392b" strokeWidth="16" strokeLinecap="round" opacity="0.18" />
        {/* --- route core, draws itself in --- */}
        <path id="wigo-route" d={ROUTE} fill="none" stroke="#f0392b" strokeWidth="5.5" strokeLinecap="round" className="route-draw" />
        {/* --- energy flow dashes --- */}
        <path d={ROUTE} fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" className="route-flow" opacity="0.9" />

        {/* --- pins --- */}
        <Pin x={80} y={430} delay="0.4s" />
        <Pin x={540} y={70} delay="1.1s" />

        {/* --- riders --- */}
        <Vehicle emoji="🏍️" begin="0s" />
        <Vehicle emoji="🛺" begin="3s" />
        <Vehicle emoji="🚕" begin="6s" />
      </svg>

      {/* floating ETA chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="animate-float absolute left-[4%] top-[16%] flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-xl shadow-ink/10 ring-1 ring-ink/5"
      >
        <span className="flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>
        Driver 2 min away
      </motion.div>

      {/* floating driver card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="animate-float-slow absolute bottom-[10%] right-[2%] flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl shadow-ink/10 ring-1 ring-ink/5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white">
          R
        </span>
        <span>
          <span className="block text-sm font-bold">Ravi · Auto</span>
          <span className="block text-xs font-semibold text-muted">★ 4.9 · TS 09 WG 4321</span>
        </span>
      </motion.div>
    </div>
  );
}
