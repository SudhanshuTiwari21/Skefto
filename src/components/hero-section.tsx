import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { CUSTOMER_LOGOS } from "@/lib/content";
import { Container } from "@/components/ui";
import { HeroCopy } from "@/components/hero/hero-copy";
import { HeroProductShowcase } from "@/components/hero/hero-product-showcase";

function HeroEnter({
  index,
  children,
  className = "",
}: Readonly<{
  index: number;
  children: ReactNode;
  className?: string;
}>) {
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
        Trusted by Australian government, councils, care providers &amp; educators
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

export function HeroSection() {
  return (
    <section
      id="hero"
      data-theme="light"
      className="hero--light relative isolate overflow-hidden bg-white pb-6 text-ink-900 sm:pb-8"
    >
      {/* Light enterprise background: sand + subtle brand wash (no spacey effects) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.32]"
      />
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
          <HeroCopy />

          <div className="hero-enter-visual relative">
            <HeroProductShowcase />
          </div>
        </div>

        <HeroEnter index={1}>
          <HeroLogoStrip />
        </HeroEnter>
      </Container>
    </section>
  );
}
