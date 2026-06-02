/** Ambient hero overlays - mesh, orbs, grid shimmer */

export function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-mesh absolute inset-0 opacity-80" />
      <div className="hero-grid-shimmer absolute inset-0 opacity-[0.45]" />

      <div className="hero-orb hero-orb--brand absolute -left-20 top-24 h-72 w-72 rounded-full blur-3xl" />
      <div className="hero-orb hero-orb--accent absolute right-0 top-1/3 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="hero-orb hero-orb--amber absolute bottom-20 left-1/3 h-48 w-48 rounded-full blur-3xl" />

      {/* Soft arcs toward illustration */}
      <svg
        className="absolute right-0 top-1/2 hidden w-[min(42%,520px)] -translate-y-1/2 text-brand-200/40 lg:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="hero-orbit-ring"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 12"
          className="hero-orbit-ring hero-orbit-ring--reverse"
        />
      </svg>
    </div>
  );
}
