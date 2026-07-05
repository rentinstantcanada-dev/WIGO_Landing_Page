import { site } from "@/lib/config";

function Badge({
  href,
  top,
  bottom,
  icon,
  ready,
}: {
  href: string;
  top: string;
  bottom: string;
  icon: React.ReactNode;
  ready: boolean;
}) {
  const inner = (
    <>
      {icon}
      <span className="leading-tight">
        <span className="block text-[10px] font-semibold uppercase tracking-wide opacity-70">{top}</span>
        <span className="block text-sm font-bold">{bottom}</span>
      </span>
      {!ready && (
        <span className="ml-1 rounded-full bg-brand px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
          Soon
        </span>
      )}
    </>
  );

  const base =
    "flex items-center gap-3 rounded-xl px-4 py-2.5 ring-1 ring-white/10 transition-all";

  if (!ready) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={`${base} bg-ink text-white opacity-50 cursor-not-allowed`}
      >
        {inner}
      </span>
    );
  }

  return (
    <a href={href} className={`${base} bg-ink text-white hover:scale-105 hover:bg-ink-2 active:scale-95`}>
      {inner}
    </a>
  );
}

export default function StoreButtons({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${
        light ? "[&_a]:bg-white [&_a]:text-ink [&_a:hover]:bg-cream" : ""
      }`}
    >
      <Badge
        href={site.playStoreUrl}
        top={site.androidReady ? "Get it on" : "Coming soon to"}
        bottom="Google Play"
        ready={site.androidReady}
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 2.5v19c0 .4.45.65.8.43l10.2-6.36L4.9 2.1c-.36-.24-.9 0-.9.4Zm13.6 8.06 2.9 1.8c.67.42.67 1.4 0 1.82l-2.9 1.8-2.83-2.7 2.83-2.72ZM6.3 3.9l8.1 7.75-8.1 7.74V3.9Z" />
          </svg>
        }
      />
      <Badge
        href={site.appStoreUrl}
        top={site.iosReady ? "Download on the" : "Coming soon to"}
        bottom="App Store"
        ready={site.iosReady}
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16.36 12.9c.03 3.03 2.66 4.04 2.69 4.05-.02.07-.42 1.44-1.39 2.85-.84 1.23-1.7 2.44-3.07 2.47-1.34.02-1.78-.8-3.31-.8-1.54 0-2.02.77-3.29.82-1.32.05-2.32-1.32-3.17-2.54C3.1 17.26 1.77 12.7 3.55 9.7a4.92 4.92 0 0 1 4.14-2.52c1.3-.02 2.52.87 3.31.87.79 0 2.28-1.07 3.84-.92.65.03 2.49.27 3.67 1.99-.1.06-2.19 1.28-2.15 3.78ZM13.83 5.5c.7-.85 1.17-2.03 1.04-3.2-1 .04-2.22.67-2.94 1.51-.65.75-1.21 1.95-1.06 3.1 1.12.09 2.26-.57 2.96-1.41Z" />
          </svg>
        }
      />
    </div>
  );
}
