import { Icon } from "@/components/icons";

export function ProductVideoInline() {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800 shadow-soft">
      <div className="absolute inset-0 bg-grid-dark opacity-[0.15]" />
      <div className="absolute inset-0 grid place-items-center">
        <button
          type="button"
          className="grid size-14 place-items-center rounded-full bg-white/95 text-brand-700 shadow-glow transition-transform hover:scale-105"
          aria-label="Play product overview"
        >
          <Icon.play className="size-7" />
        </button>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
        <span className="text-xs font-semibold sm:text-sm">Overview · 2 min</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-medium">
          Skefto
        </span>
      </div>
    </div>
  );
}
