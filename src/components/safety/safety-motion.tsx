"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Pointer-tracking card: sets --spot-x / --spot-y CSS vars so a radial
 * highlight follows the cursor, and adds a subtle 3D tilt toward it.
 * Falls back to a static card under reduced motion / touch.
 */
export function SpotlightCard({
  as,
  href,
  children,
  className,
  spotClassName = "tilt-card--brand",
  tilt = true,
  style,
}: Readonly<{
  as?: ElementType;
  href?: string;
  children: ReactNode;
  className?: string;
  /** Controls spotlight tint: tilt-card--brand | tilt-card--accent | tilt-card--dark */
  spotClassName?: string;
  tilt?: boolean;
  style?: CSSProperties;
}>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    function onMove(e: PointerEvent) {
      if (!el) return;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el!.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el!.style.setProperty("--spot-x", `${x}%`);
        el!.style.setProperty("--spot-y", `${y}%`);
        if (tilt) {
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
          el!.style.setProperty("--tilt-x", `${rx}deg`);
          el!.style.setProperty("--tilt-y", `${ry}deg`);
        }
      });
    }
    function onLeave() {
      if (!el) return;
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [tilt]);

  const Comp = (as ?? (href ? "a" : "div")) as ElementType;
  return (
    <Comp
      ref={ref}
      href={href}
      className={cx("tilt-card", spotClassName, className)}
      style={style}
    >
      {children}
    </Comp>
  );
}

/**
 * Reveals + staggers direct children when the group scrolls into view.
 * Adds `in-view` class so children can animate via CSS `--i` index.
 */
export function InViewStagger({
  as: Comp = "div",
  children,
  className,
  step = 90,
  threshold = 0.15,
}: Readonly<{
  as?: ElementType;
  children: ReactNode;
  className?: string;
  step?: number;
  threshold?: number;
}>) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Comp
      ref={ref}
      className={cx("stagger-group", inView && "is-in-view", className)}
      style={{ "--stagger": `${step}ms` } as CSSProperties}
    >
      {children}
    </Comp>
  );
}

/** Count-up number that animates once when scrolled into view. */
export function CountUp({
  value,
  className,
  suffix = "",
  prefix = "",
  duration = 1400,
}: Readonly<{
  value: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}>) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        function tick(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
