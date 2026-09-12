import Link from "next/link";
import Logo from "./Logo";
import Footer from "./Footer";
import { legal } from "@/lib/config";

/**
 * Shared shell for the legal / support pages.
 *
 * Deliberately plainer than the marketing page: these exist to be read (and to
 * be checked by App Store and Play Store reviewers), so they get a readable
 * measure, real headings and no animation.
 */
export default function LegalLayout({
  title,
  intro,
  showUpdated = true,
  children,
}: {
  title: string;
  intro?: string;
  showUpdated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ink/10 bg-cream/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
              Where I Go
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-ink/70 transition-colors hover:text-brand"
          >
            &larr; Back to site
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>

        {showUpdated && (
          <p className="mt-3 text-sm font-semibold text-muted">
            Last updated {legal.policyUpdated}
          </p>
        )}

        {intro && (
          <p className="mt-6 text-lg leading-relaxed text-ink/80">{intro}</p>
        )}

        <div className="legal-body mt-10">{children}</div>
      </main>

      <Footer />
    </>
  );
}
