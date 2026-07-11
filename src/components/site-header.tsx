"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/content";
import { BeamButton } from "@/components/ui";
import { Icon } from "@/components/icons";

const NAV = [
  { label: "How it works", href: "#capabilities" },
  { label: "Security", href: "#security" },
  { label: "Industries", href: "#industries" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
] as const;

export type NavItem = { label: string; href: string };

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteHeader({ nav = [...NAV] }: Readonly<{ nav?: NavItem[] }>) {
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const hero = document.getElementById("hero");
      const threshold = hero
        ? hero.getBoundingClientRect().bottom - 88
        : window.innerHeight * 0.72;
      const heroIsLight = hero?.classList.contains("hero--light");
      const inHero = threshold > 0;

      if (heroIsLight && inHero) {
        setOverLight(true);
      } else {
        setOverLight(threshold < 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !overLight;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] isolate px-4 pt-4 sm:px-6 sm:pt-5">
      <div
        className={cx(
          "pointer-events-auto relative mx-auto max-w-6xl transition-all duration-300",
          open && "z-50",
        )}
      >
        {/* Glass pill - shell unfurls from center, then content appears */}
        <div
          className={cx(
            "site-header-shell relative overflow-hidden rounded-full border",
            "backdrop-blur-xl backdrop-saturate-150",
            onDark
              ? "border-white/20 bg-white/[0.12] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/10"
              : "border-ink-200/70 bg-white/85 shadow-[0_4px_24px_-8px_rgba(20,24,31,0.1)] ring-1 ring-inset ring-white/80",
            scrolled &&
              (onDark
                ? "border-white/25 bg-white/[0.16]"
                : "border-ink-200/80 bg-white/95"),
          )}
        >
          <div
            className={cx(
              "site-header-content relative flex h-14 items-center gap-2 px-3 pl-4 sm:h-[3.75rem] sm:gap-3 sm:px-4 sm:pl-5",
            )}
          >
          <Link
            href="/"
            className="relative z-10 flex h-7 w-[7.5rem] shrink-0 items-center sm:h-7"
            aria-label="Skefto home"
          >
            <Image
              src="/skefto-logo.svg"
              alt=""
              width={120}
              height={26}
              priority
              className={cx(
                "absolute h-6 w-auto transition-opacity duration-300 sm:h-7",
                overLight ? "opacity-100" : "opacity-0",
              )}
            />
            <Image
              src="/skefto-logo-white.svg"
              alt="Skefto"
              width={120}
              height={26}
              priority
              className={cx(
                "h-6 w-auto transition-opacity duration-300 sm:h-7",
                overLight ? "opacity-0" : "opacity-100",
              )}
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 justify-center lg:flex"
            aria-label="Primary"
          >
            <ul className="flex max-w-full items-center gap-0.5 xl:gap-1">
              {nav.map((n) => (
                <li key={n.href} className="shrink-0">
                  <a
                    href={n.href}
                    className={cx(
                      "group relative block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm",
                      onDark
                        ? "text-ink-200 hover:text-white"
                        : "text-ink-700 hover:text-ink-900",
                    )}
                  >
                    {n.label}
                    <span
                      aria-hidden
                      className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-accent-600 transition-all duration-200 group-hover:w-5 group-focus-visible:w-5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center gap-1.5 sm:gap-2 lg:flex">
              <Link
                href={LINKS.contact}
                className={cx(
                  "inline-flex h-9 shrink-0 items-center justify-center rounded-full border px-3.5 text-sm font-semibold transition-colors xl:px-4",
                  onDark
                    ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                    : "border-ink-200 bg-white text-ink-800 hover:border-brand-200 hover:text-brand-800",
                )}
              >
                Contact
              </Link>
              <BeamButton
                href={LINKS.demo}
                fill={onDark ? "white" : "ink"}
                size="md"
              >
                Book a demo
              </BeamButton>
            </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cx(
              "relative z-10 grid size-9 place-items-center rounded-full border backdrop-blur-sm transition-colors lg:hidden",
              onDark
                ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                : "border-ink-200 bg-white text-ink-700 hover:bg-ink-50",
            )}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
          </div>
          </div>
        </div>

        {/* Mobile menu - glass panel */}
        {open ? (
          <div
            className={cx(
              "absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl border border-white/50 p-2 lg:hidden",
              "bg-white/75 shadow-[0_12px_40px_-12px_rgba(20,24,31,0.18)] backdrop-blur-xl backdrop-saturate-150",
            )}
          >
            <div className="space-y-0.5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-ink-800 transition-colors hover:bg-white/80"
                >
                  {n.label}
                  <Icon.arrow className="size-4 text-ink-400" />
                </a>
              ))}
            </div>
            <div className="mt-2 grid gap-2 border-t border-ink-900/6 p-2 pt-3">
              <Link
                href={LINKS.contact}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-sm font-semibold text-ink-800"
              >
                Contact
              </Link>
              <BeamButton
                href={LINKS.demo}
                fill="ink"
                size="lg"
                wrapperClassName="w-full"
              >
                Book a demo
              </BeamButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
