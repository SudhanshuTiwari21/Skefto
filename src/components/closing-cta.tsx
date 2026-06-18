import Link from "next/link";
import { CLOSING_CTA_TRUST, LINKS } from "@/lib/content";
import { BeamButton, Container } from "@/components/ui";
import { Icon } from "@/components/icons";
import { HeroBeams } from "@/components/hero/hero-beams";

const TRUST = CLOSING_CTA_TRUST;

export function ClosingCta() {
  return (
    <section className="border-t border-ink-900/6 bg-sand-50 py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink-800/80 bg-ink-950 shadow-[0_24px_80px_-32px_rgba(20,24,31,0.55)]">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <HeroBeams />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.1]"
          />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.15fr_auto] lg:items-center lg:gap-14 lg:p-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-4xl">
                Ready to take control of compliance?
              </h2>
              <p className="mt-4 text-pretty text-base leading-7 text-ink-300 sm:text-lg">
                See how Skefto fits your obligations, frameworks and reporting - in
                a walkthrough tailored to your sector.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {TRUST.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-2 text-sm text-ink-400"
                  >
                    <Icon.check className="size-4 shrink-0 text-accent-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-[240px]">
              <BeamButton href={LINKS.demo} fill="white" size="lg" hero>
                Book a demo
              </BeamButton>
              <Link
                href={LINKS.contact}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-center text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/5"
              >
                Speak with a specialist
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
