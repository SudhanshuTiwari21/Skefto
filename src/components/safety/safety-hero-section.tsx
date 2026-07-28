import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CUSTOMER_LOGOS,
  HERO_TRUST_TOKENS,
  LINKS,
  SECTOR_PRELOADS,
} from "@/lib/safety-content";
import { BeamButton, Container } from "@/components/ui";
import { Icon } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";
import { SafetyHeroShowcase } from "@/components/safety/safety-hero-showcase";

function CopyBlock({
  index,
  children,
  className = "",
}: Readonly<{ index: number; children: ReactNode; className?: string }>) {
  return (
    <div className={`hero-copy-enter ${className}`} style={{ "--copy-i": index } as CSSProperties}>
      {children}
    </div>
  );
}

function LogoStrip() {
  const logos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];
  return (
    <div className="mt-12 border-t border-accent-200/40 pt-8 sm:mt-14">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-800/70">
        Trusted by councils, agencies &amp; regulated organisations
      </p>
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-10 w-28 shrink-0 items-center justify-center opacity-90 transition-opacity hover:opacity-100 sm:h-11 sm:w-32"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={128}
                height={44}
                className="max-h-9 w-auto object-contain sm:max-h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SafetyHeroSection() {
  return (
    <section
      id="hero"
      data-theme="light"
      className="safety-cut relative isolate overflow-hidden pb-10 text-ink-900 sm:pb-14"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 safety-mesh" />
      <div aria-hidden className="pointer-events-none absolute inset-0 safety-hatch opacity-80" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-[42%] bg-gradient-to-l from-accent-100/50 to-transparent"
      />
      {/* accent safety stripe */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-accent-600 via-accent-400 to-brand-500"
      />

      <Container className="relative pt-[5.5rem] sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          <div className="relative flex flex-col justify-center lg:py-2 xl:max-w-[34rem]">
            <CopyBlock index={0}>
              <span className="inline-flex items-center gap-2 rounded-md border border-accent-200 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-800 shadow-sm">
                <span className="size-1.5 rounded-full bg-accent-500 animate-soft-pulse" />
                WHS software · Australia
              </span>
            </CopyBlock>

            <CopyBlock index={1} className="mt-5">
              <h1 className="font-display text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 sm:text-[2.7rem] lg:text-[3rem]">
                WHS software for Australian councils, schools and care providers
              </h1>
            </CopyBlock>

            <CopyBlock index={2} className="mt-5">
              <p className="max-w-[32rem] text-pretty text-base leading-7 text-ink-600 sm:text-[1.0625rem] sm:leading-8">
                Hazards, inspections, injuries and WHS registers in one platform, connected to
                risk and incidents, built around{" "}
                ISO 45001 (AS/NZS ISO 45001 in Australia).
              </p>
            </CopyBlock>

            <CopyBlock index={3} className="mt-7">
              <div className="flex flex-wrap gap-2">
                {SECTOR_PRELOADS.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-md border border-accent-200/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-sm transition-colors hover:border-accent-400 hover:text-accent-800"
                  >
                    <SkeftoGeoMark shape={s.shape} />
                    {s.name}
                  </Link>
                ))}
              </div>
            </CopyBlock>

            <CopyBlock index={4} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <BeamButton href={LINKS.demo} fill="brand" size="lg">
                  Book a demo
                </BeamButton>
                <Link
                  href="#field"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-accent-300 bg-white px-7 text-sm font-semibold text-accent-900 shadow-sm transition-colors hover:border-accent-500 hover:bg-accent-50"
                >
                  See field capture
                </Link>
              </div>
            </CopyBlock>

            <CopyBlock index={5} className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {HERO_TRUST_TOKENS.map((token) => (
                  <li key={token} className="inline-flex items-center gap-2 text-sm font-medium text-ink-600">
                    <span className="grid size-5 shrink-0 place-items-center rounded-md bg-accent-100 text-accent-700">
                      <Icon.check className="size-3.5" />
                    </span>
                    {token}
                  </li>
                ))}
              </ul>
            </CopyBlock>
          </div>

          <div className="hero-enter-visual relative">
            <SafetyHeroShowcase />
          </div>
        </div>

        <LogoStrip />
      </Container>
    </section>
  );
}
