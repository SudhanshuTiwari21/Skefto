import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ----------------------------- Container ----------------------------- */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/* ------------------------------ Button ------------------------------- */
type ButtonVariant = "primary" | "secondary" | "white" | "ghost";
type ButtonSize = "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-ink-800 ring-1 ring-inset ring-ink-200 hover:ring-brand-300 hover:text-brand-700 focus-visible:outline-brand-600",
  white:
    "bg-white text-brand-700 shadow-soft hover:bg-brand-50 focus-visible:outline-white",
  ghost: "text-ink-700 hover:text-brand-700 focus-visible:outline-brand-600",
};

const SIZES: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  const inner = (
    <>
      {children}
      {showArrow ? (
        <Icon.arrow className="size-[1.05em] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      ) : null}
    </>
  );
  const classes = cx(
    "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ------------------------- BeamButton (moving border) ---------------- */
type BeamFill = "white" | "ink";
type BeamSize = "md" | "lg";

const BEAM_FILL: Record<BeamFill, string> = {
  white: "bg-white text-ink-900 hover:bg-ink-100",
  ink: "bg-ink-900 text-white hover:bg-ink-800",
};

const BEAM_SIZE: Record<BeamSize, string> = {
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-6 text-sm sm:h-12 sm:px-7",
};

export function BeamButton({
  href,
  children,
  fill = "white",
  size = "md",
  showArrow = true,
  hero = false,
  className,
  wrapperClassName,
}: {
  href: string;
  children: ReactNode;
  fill?: BeamFill;
  size?: BeamSize;
  showArrow?: boolean;
  /** Brighter beam, glow, lift + shine - for hero on dark backgrounds */
  hero?: boolean;
  className?: string;
  wrapperClassName?: string;
}) {
  const external = href.startsWith("http");
  const inner = (
    <>
      <span className="relative z-[2]">{children}</span>
      {showArrow ? (
        <Icon.arrow className="relative z-[2] size-[1.05em] transition-transform duration-200 group-hover/beam:translate-x-1" />
      ) : null}
    </>
  );
  const linkClass = cx(
    "group/beam relative z-10 inline-flex w-full items-center justify-center gap-1.5 rounded-full font-semibold transition-colors",
    BEAM_FILL[fill],
    BEAM_SIZE[size],
    hero && "beam-btn-hero",
    className,
  );
  const wrapClass = cx(
    "border-beam relative inline-flex rounded-full",
    hero ? "border-beam--hero-cta" : "border-beam--cta",
    wrapperClassName,
  );

  if (external) {
    return (
      <span className={wrapClass}>
        <a href={href} className={linkClass}>
          {inner}
        </a>
      </span>
    );
  }
  return (
    <span className={wrapClass}>
      <Link href={href} className={linkClass}>
        {inner}
      </Link>
    </span>
  );
}

/* ------------------------- ShimmerButton (Magic UI) ------------------ */
export function ShimmerButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  const content = (
    <>
      {/* spark */}
      <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [mask:none]">
          <div className="absolute -inset-full w-auto animate-spin-around [background:conic-gradient(from_calc(270deg-45deg),transparent_0,#ffffff_90deg,transparent_90deg)]" />
        </div>
      </div>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <Icon.arrow className="size-[1.05em] transition-transform duration-200 group-hover/sb:translate-x-0.5" />
      </span>
      {/* highlight */}
      <span className="absolute inset-0 -z-20 rounded-full [box-shadow:inset_0_-8px_10px_rgba(255,255,255,0.12)] transition-all duration-300 group-hover/sb:[box-shadow:inset_0_-6px_10px_rgba(255,255,255,0.25)]" />
      {/* backdrop */}
      <span className="absolute inset-[1.6px] -z-20 rounded-full bg-brand-700 transition-colors group-hover/sb:bg-brand-600" />
    </>
  );
  const classes = cx(
    "group/sb relative z-0 inline-flex h-12 items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-white/10 bg-brand-700 px-7 text-[0.95rem] font-semibold text-white shadow-glow transition-transform duration-200 active:translate-y-px",
    className,
  );
  return external ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/* --------------------------- ShinyBadge (Magic UI) ------------------- */
export function ShinyBadge({ children }: { children: ReactNode }) {
  return (
    <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-brand-200 bg-brand-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700 shadow-soft backdrop-blur transition-colors hover:border-brand-300">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-brand-600" />
      </span>
      <span className="relative z-10">{children}</span>
      {/* light sweep */}
      <span
        aria-hidden
        className="animate-badge-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.85),transparent)]"
      />
    </span>
  );
}

/* ----------------------------- InlineLink ---------------------------- */
export function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group/il inline-flex items-center gap-1 font-semibold text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4 transition-colors hover:text-brand-800 hover:decoration-brand-600",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/* -------------------------------- Chip ------------------------------- */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-700 shadow-soft">
      {children}
    </span>
  );
}

/* --------------------------- SectionHeading -------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <span
          className={cx(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
            invert ? "text-brand-300" : "text-brand-600",
          )}
        >
          <span
            className={cx(
              "h-px w-5",
              invert ? "bg-brand-300/60" : "bg-brand-400/70",
            )}
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cx(
          "mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-balance sm:text-4xl",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cx(
            "mt-4 text-pretty text-lg leading-8",
            invert ? "text-ink-300" : "text-ink-600",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
