import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/content";
import { BeamButton, Container } from "@/components/ui";
import { RegisterMockup } from "@/components/visuals";
import { HeroBeams } from "@/components/hero/hero-beams";

const FRAMEWORKS = ["ISO 37301", "APRA CPS 230", "NDIS Practice Standards", "Local Government Act"];
const TICKER = [
  "Obligations register",
  "Regulatory change",
  "Compliance calendar",
  "Audit management",
  "Board reporting",
  "Australian-hosted",
];

function HeroEnter({
  index,
  children,
  className = "",
}: {
  index: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`hero-enter-item ${className}`}
      style={{ "--hero-i": index } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  const marquee = [...TICKER, ...TICKER];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-ink-950 text-white"
    >
      <div className="hero-enter-beams">
        <HeroBeams />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.12]"
      />

      <Container className="relative pt-[5.5rem] sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-xl">
            <HeroEnter index={0}>
              <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                <span className="size-1.5 rounded-full bg-accent-400" aria-hidden />
                Compliance management · Australia
              </p>
            </HeroEnter>

            <HeroEnter index={1}>
              <h1 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.15rem]">
                Compliance management software for{" "}
                <span className="hero-wordmark">regulated</span> Australian
                organisations
              </h1>
            </HeroEnter>

            <HeroEnter index={2}>
              <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-ink-300 sm:text-lg sm:leading-8">
                Track obligations, regulatory change, audits and evidence in one
                platform - built for councils, government, healthcare and education.
              </p>
            </HeroEnter>

            <HeroEnter index={3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BeamButton href={LINKS.demo} fill="white" size="lg" hero>
                  Book a demo
                </BeamButton>
                <Link
                  href={LINKS.contact}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  Talk to a specialist
                </Link>
              </div>
            </HeroEnter>

            <HeroEnter index={4}>
              <p className="mt-10 text-xs font-medium leading-relaxed text-ink-500">
                Aligned to{" "}
                {FRAMEWORKS.map((f, i) => (
                  <span key={f}>
                    {i > 0 ? <span className="text-ink-600"> · </span> : null}
                    <span className="text-ink-400">{f}</span>
                  </span>
                ))}
              </p>
            </HeroEnter>
          </div>

          <div className="hero-enter-visual relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="absolute -right-6 -top-6 hidden h-40 w-40 overflow-hidden rounded-2xl opacity-40 lg:block"
            >
              <div className="retro-grid h-full w-full">
                <div className="retro-grid__plane h-[200%]">
                  <div className="retro-grid__lines h-full w-full" />
                </div>
              </div>
            </div>

            <div className="border-beam relative overflow-hidden rounded-2xl shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)]">
              <RegisterMockup />
            </div>
          </div>
        </div>
      </Container>

      <div className="hero-enter-ticker relative mt-16 sm:mt-20">
        <div className="border-t border-white/15 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl backdrop-saturate-150">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee items-center py-3.5">
              {marquee.map((label, i) => (
                <span key={`${label}-${i}`} className="flex items-center">
                  <span className="whitespace-nowrap px-8 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-300/90">
                    {label}
                  </span>
                  <span className="text-white/25" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
