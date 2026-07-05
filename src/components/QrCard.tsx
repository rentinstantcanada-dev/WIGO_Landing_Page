"use client";

import { QRCodeSVG } from "qrcode.react";
import { site } from "@/lib/config";

/** White tilted card with a scannable QR code pointing at the download link. */
export default function QrCard({
  size = 116,
  caption = "Scan to pre-register",
  className = "",
}: {
  size?: number;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-2xl shadow-ink/20 ring-1 ring-ink/10 ${className}`}
    >
      <div className="relative rounded-lg bg-white p-1">
        <QRCodeSVG
          value={site.downloadUrl}
          size={size}
          fgColor="#1c1c1c"
          bgColor="#ffffff"
          level="H"
        />
        {/* brand mark punched into the centre */}
        <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-brand text-sm font-extrabold text-white ring-4 ring-white">
          W
        </span>
      </div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-ink/60">{caption}</p>
    </div>
  );
}
