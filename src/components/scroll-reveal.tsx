"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** First screen / hero - visible immediately (no hidden flash after page load) */
  priority?: boolean;
  /** Extra delay after entering the viewport (ms) */
  delay?: number;
  /** How far into the viewport before triggering (0–1) */
  threshold?: number;
};

export function Reveal({
  children,
  className,
  priority = false,
  delay = 0,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, threshold]);

  return (
    <div
      ref={ref}
      className={cx("scroll-reveal", visible && "scroll-reveal--in", className)}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Stagger direct children when the group scrolls into view */
export function RevealStagger({
  children,
  className,
  staggerMs = 80,
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        visible && "scroll-reveal-stagger--in",
        className,
      )}
      style={
        { "--stagger-step": `${staggerMs}ms` } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
