import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CUSTOMER_LOGOS,
  HERO_TRUST_TOKENS,
  LINKS,
  RISKMAT_URL,
  SECTOR_PRELOADS,
} from "@/lib/risk-content";
import { BeamButton, Container } from "@/components/ui";
import { Icon } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";
import { RiskHeroShowcase } from "@/components/risk/risk-hero-showcase";

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
    <div className="mt-14 border-t border-ink-900/8 pt-8 sm:mt-16">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
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

export function RiskHeroSection() {
  return (
    <section
      id="hero"
      data-theme="light"
      className="hero--light relative isolate overflow-hidden bg-white pb-6 text-ink-900 sm:pb-8"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.32]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.10),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.10),transparent_65%)]"
      />

      <Container className="relative pt-[5.5rem] sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative flex flex-col justify-center lg:py-4 xl:max-w-[32rem]">
            <CopyBlock index={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 shadow-soft">
                <SkeftoGeoMark shape="hexagon" />
                Risk management software
              </span>
            </CopyBlock>

            <CopyBlock index={1} className="mt-4">
              <h1 className="font-display text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 sm:text-[2.75rem] lg:text-[3.05rem]">
                Risk management software for modern regulated organisations
              </h1>
            </CopyBlock>

            <CopyBlock index={2} className="mt-5">
              <p className="max-w-[32rem] text-pretty text-base leading-7 text-ink-600 sm:text-[1.0625rem] sm:leading-8">
                From spreadsheets to a single source of truth. Identify, assess, treat and monitor
                risk in one platform, designed by practitioners and built around{" "}
                ISO 31000 (AS/ISO 31000 in Australia).
              </p>
            </CopyBlock>

            <CopyBlock index={3} className="mt-7">
              <div className="flex flex-wrap gap-2">
                {SECTOR_PRELOADS.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
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
                  href={RISKMAT_URL}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-7 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  Take the RiskMAT assessment
                </Link>
              </div>
            </CopyBlock>

            <CopyBlock index={5} className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {HERO_TRUST_TOKENS.map((token) => (
                  <li key={token} className="inline-flex items-center gap-2 text-sm font-medium text-ink-600">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Icon.check className="size-3.5" />
                    </span>
                    {token}
                  </li>
                ))}
              </ul>
            </CopyBlock>
          </div>

          <div className="hero-enter-visual relative">
            <RiskHeroShowcase />
          </div>
        </div>

        <LogoStrip />
      </Container>
    </section>
  );
}
