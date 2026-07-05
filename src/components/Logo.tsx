export default function Logo({ size = 40 }: { size?: number }) {
  const h = size;
  const fs = h * 0.5;
  return (
    <span
      className="inline-flex select-none overflow-hidden font-extrabold tracking-tight text-white shadow-lg shadow-brand/20"
      style={{ borderRadius: h * 0.28, fontSize: fs, lineHeight: 1 }}
      aria-label="WIGO — Where I Go"
    >
      <span className="bg-brand flex items-center" style={{ padding: `${h * 0.24}px ${h * 0.32}px` }}>
        WI
      </span>
      <span className="bg-ink flex items-center" style={{ padding: `${h * 0.24}px ${h * 0.32}px` }}>
        GO
      </span>
    </span>
  );
}
