import Link from "next/link";
import Logo from "./Logo";
import { site, legal } from "@/lib/config";

// Anchors are written as "/#id" rather than "#id" so they still reach the
// marketing page when the footer renders on /privacy, /support or
// /delete-account.
const sections = [
  { href: "/#features", label: "Why WIGO" },
  { href: "/#rides", label: "Rides" },
  { href: "/#how", label: "How it works" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
  { href: "/delete-account", label: "Delete account" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo size={30} />
            <p className="text-xs font-semibold text-muted">
              Your ride, your way. Made with ❤️ in India.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-ink/60">
            {sections.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            ))}
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.supportEmail}`}
              className="transition-colors hover:text-brand"
            >
              Contact
            </a>
          </nav>
        </div>

        <p className="text-center text-xs font-semibold text-muted sm:text-left">
          © {new Date().getFullYear()} {legal.entity}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
