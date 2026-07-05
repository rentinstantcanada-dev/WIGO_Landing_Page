const WORDS = ["ANY PLACE", "ANY TIME", "ANY RIDE", "ANY COMFORT", "WIGO — WHERE I GO"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="marquee-band relative z-10 -rotate-1 overflow-hidden bg-brand py-4 shadow-xl shadow-brand/20">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((w, i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap text-lg font-extrabold tracking-wider text-white"
              >
                <span className="px-5">{w}</span>
                <span className="text-white/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
