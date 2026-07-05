import Logo from "./Logo";
import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-2/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo size={30} />
          <p className="text-xs font-semibold text-muted">
            Your ride, your way. Made with ❤️ in India.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-ink/60">
          <a href="#features" className="transition-colors hover:text-brand">Why WIGO</a>
          <a href="#rides" className="transition-colors hover:text-brand">Rides</a>
          <a href="#how" className="transition-colors hover:text-brand">How it works</a>
          <a href={`mailto:${site.supportEmail}`} className="transition-colors hover:text-brand">
            Contact
          </a>
        </nav>

        <p className="text-xs font-semibold text-muted">
          © {new Date().getFullYear()} WIGO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
