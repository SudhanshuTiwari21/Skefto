/** Aceternity UI “Background Beams” pattern - CSS-only, no motion dependency */
export function HeroBeams() {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-280 80C-120 200 80 120 320 280C520 420 720 340 920 520",
    "M-180 400C40 280 200 360 400 220C600 80 780 200 980 120",
    "M80 -120C200 80 120 260 340 380C520 480 680 400 880 600",
    "M200 600C360 480 480 520 620 400C760 280 840 360 1100 280",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute left-1/2 top-0 h-[min(140%,900px)] w-[min(180%,1200px)] -translate-x-1/2 text-white/0"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-beam-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--color-accent-400)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-brand-400)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#hero-beam-a)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="hero-beam-path"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(0,145,174,0.12),transparent)]" />
    </div>
  );
}
