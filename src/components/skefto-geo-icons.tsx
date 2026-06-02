/** Skefto main-site geometric module icons - solid shape in a coloured outline square */

type Shape = "circle" | "square" | "triangle" | "hexagon";

const SHAPES: Record<
  Shape,
  { border: string; fill: string; path: React.ReactNode }
> = {
  circle: {
    border: "border-accent-400/70",
    fill: "bg-accent-500",
    path: <span className="block size-3 rounded-full bg-accent-400" />,
  },
  square: {
    border: "border-brand-400/70",
    fill: "bg-brand-500",
    path: <span className="block size-3 rounded-[2px] bg-brand-400" />,
  },
  triangle: {
    border: "border-amber-400/70",
    fill: "bg-amber-500",
    path: (
      <span
        className="block size-0 border-x-[6px] border-b-[10px] border-x-transparent border-b-amber-400"
        aria-hidden
      />
    ),
  },
  hexagon: {
    border: "border-sky-400/70",
    fill: "bg-sky-500",
    path: (
      <svg viewBox="0 0 16 16" className="size-3.5 text-sky-400" aria-hidden>
        <path
          fill="currentColor"
          d="M8 1.5 13.5 4.75v6.5L8 14.5 2.5 11.25v-6.5L8 1.5Z"
        />
      </svg>
    ),
  },
};

export function SkeftoGeoMark({
  shape,
  className = "",
}: {
  shape: Shape;
  className?: string;
}) {
  const s = SHAPES[shape];
  return (
    <span
      className={`grid size-5 place-items-center rounded-md border-2 bg-white/[0.04] ${s.border} ${className}`}
      aria-hidden
    >
      {shape === "circle" ? (
        <span className="block size-2 rounded-full bg-accent-400" />
      ) : shape === "square" ? (
        <span className="block size-2 rounded-[2px] bg-brand-400" />
      ) : shape === "triangle" ? (
        <span className="block size-0 border-x-[4px] border-b-[7px] border-x-transparent border-b-amber-400" />
      ) : (
        <svg viewBox="0 0 16 16" className="size-2.5 text-sky-400">
          <path fill="currentColor" d="M8 1.5 13.5 4.75v6.5L8 14.5 2.5 11.25v-6.5L8 1.5Z" />
        </svg>
      )}
    </span>
  );
}

export function SkeftoGeoIcon({
  shape,
  label,
  size = "md",
  className = "",
}: {
  shape: Shape;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const s = SHAPES[shape];
  const box =
    size === "sm" ? "size-9" : size === "lg" ? "size-14" : "size-11";

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`grid ${box} place-items-center rounded-xl border-2 bg-white/[0.04] backdrop-blur-sm ${s.border}`}
      >
        {s.path}
      </div>
      {label ? (
        <span className="text-[10px] font-semibold text-white/80">{label}</span>
      ) : null}
    </div>
  );
}