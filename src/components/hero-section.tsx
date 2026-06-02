import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { CUSTOMER_LOGOS } from "@/lib/content";
import { Container } from "@/components/ui";
import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroDecor } from "@/components/hero/hero-decor";
import { HeroProductShowcase } from "@/components/hero/hero-product-showcase";

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

function HeroLogoStrip() {
  const logos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <div className="mt-14 border-t border-ink-900/8 pt-8 sm:mt-16">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
        Trusted by Australian councils, care providers &amp; educators
      </p>
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-10 w-28 shrink-0 items-center justify-center opacity-60 grayscale transition-opacity hover:opacity-100 sm:h-11 sm:w-32"
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

export function HeroSection() {
  const marquee = [...TICKER, ...TICKER];

  return (
    <section
      id="hero"
      data-theme="light"
      className="hero--light relative isolate overflow-hidden bg-white text-ink-900"
    >
      <HeroDecor />

      <Container className="relative pt-[5.5rem] sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <HeroCopy />

          <div className="hero-enter-visual relative">
            <HeroProductShowcase />
          </div>
        </div>

        <HeroEnter index={1}>
          <HeroLogoStrip />
        </HeroEnter>
      </Container>

      <div className="hero-enter-ticker relative mt-10 border-t border-ink-900/6 bg-sand-50 sm:mt-12">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee items-center py-3.5">
            {marquee.map((label, i) => (
              <span key={`${label}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
                  {label}
                </span>
                <span className="text-brand-400/50" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
