"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Logo from "./Logo";
import { site } from "@/lib/config";

const links = [
  { href: "#features", label: "Why WIGO" },
  { href: "#rides", label: "Rides" },
  { href: "#how", label: "How it works" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-brand"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={34} />
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-brand sm:block">
              Where I Go
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={site.downloadUrl}
            className="btn-shine rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 active:scale-95"
          >
            Get the app
          </a>
        </nav>
      </motion.header>
    </>
  );
}
