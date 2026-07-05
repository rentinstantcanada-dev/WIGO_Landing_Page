import { ImageResponse } from "next/og";

// Route segment metadata
export const alt = "WIGO — Where I Go. Your ride, your way.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetch a Google font as a TTF ArrayBuffer for Satori (old UA forces TTF). */
async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(
      / /g,
      "+"
    )}:wght@${weight}`;
    const css = await (
      await fetch(url, {
        headers: {
          // Old UA → Google serves .ttf instead of .woff2 (Satori-friendly)
          "User-Agent":
            "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8) AppleWebKit/533.20.25",
        },
      })
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const [extra, semi] = await Promise.all([
    loadFont("Plus Jakarta Sans", 800),
    loadFont("Plus Jakarta Sans", 600),
  ]);

  const fonts = [
    extra && { name: "Jakarta", data: extra, weight: 800 as const, style: "normal" as const },
    semi && { name: "Jakarta", data: semi, weight: 600 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 800 | 600; style: "normal" }[];

  const font = fonts.length ? "Jakarta" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F5F1E8",
          fontFamily: font,
          padding: "80px 90px",
          position: "relative",
        }}
      >
        {/* decorative red blobs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(240,57,43,0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "rgba(240,57,43,0.10)",
          }}
        />

        {/* WI|GO pill logo */}
        <div style={{ display: "flex", borderRadius: 30, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              background: "#F0392B",
              color: "#fff",
              fontSize: 92,
              fontWeight: 800,
              padding: "14px 36px",
              letterSpacing: -3,
            }}
          >
            WI
          </div>
          <div
            style={{
              display: "flex",
              background: "#1C1C1C",
              color: "#fff",
              fontSize: 92,
              fontWeight: 800,
              padding: "14px 36px",
              letterSpacing: -3,
            }}
          >
            GO
          </div>
        </div>

        {/* WHERE I GO */}
        <div
          style={{
            marginTop: 30,
            color: "#F0392B",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 14,
          }}
        >
          WHERE I GO
        </div>

        {/* headline */}
        <div
          style={{
            marginTop: 34,
            color: "#1C1C1C",
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Your ride, your way.
        </div>

        {/* sub */}
        <div
          style={{
            marginTop: 26,
            color: "#6F675E",
            fontSize: 34,
            fontWeight: 600,
          }}
        >
          Any place · Any time · Any ride · Any comfort
        </div>

        {/* footer row */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#1C1C1C",
              color: "#fff",
              fontSize: 26,
              fontWeight: 800,
              padding: "12px 28px",
              borderRadius: 999,
            }}
          >
            wigoride.in
          </div>
          <div style={{ display: "flex", color: "#6F675E", fontSize: 26, fontWeight: 600 }}>
            Bikes · Scooters · Autos · Cars · Vans
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
