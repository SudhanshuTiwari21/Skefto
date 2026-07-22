import Link from "next/link";
import {
  COMPARISON,
  EXPERT,
  LINKS,
  OUTCOMES,
  PILLARS,
} from "@/lib/safety-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

function CrossMark({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/**
 * Consolidated Why Skefto:
 * before/after comparison + compact Pete proof + outcome cards.
 */
export function SafetyTrustSection() {
  return (
    <section id="why-skefto" className="scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Skefto"
          title="See how Skefto compares to checklist-only safety apps"
          subtitle="Practitioner-led WHS software with advisory and training in-house, built for regulated organisations."
        />

        {/* Before / after comparison */}
        <div className="relative mt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Generic vendors */}
            <div className="relative rounded-3xl border border-ink-900/8 bg-white/70 p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-ink-100 text-ink-400">
                  <CrossMark className="size-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Generic vendors
                </p>
              </div>
              <InViewStagger as="ul" step={80} className="mt-5 space-y-3">
                {COMPARISON.generic.map((item, i) => (
                  <li
                    key={item}
                    style={{ ["--i" as string]: i }}
                    className="flex items-start gap-2.5 text-sm leading-6 text-ink-500"
                  >
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-ink-200/70 text-ink-500">
                      <CrossMark className="size-2.5" />
                    </span>
                    <span className="line-through decoration-ink-300/70">{item}</span>
                  </li>
                ))}
              </InViewStagger>
            </div>

            {/* Skefto */}
            <SpotlightCard className="relative overflow-hidden rounded-3xl border border-brand-200/80 bg-gradient-to-br from-brand-50 via-white to-accent-50/40 p-6 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.12),transparent_70%)]"
              />
              <div className="relative flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-brand-600 text-white shadow-soft">
                  <Icon.check className="size-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  With Skefto
                </p>
              </div>
              <InViewStagger as="ul" step={80} className="relative mt-5 space-y-3">
                {COMPARISON.skefto.map((item, i) => (
                  <li
                    key={item}
                    style={{ ["--i" as string]: i }}
                    className="flex items-start gap-2.5 text-sm font-medium leading-6 text-ink-800"
                  >
                    <span className="check-pop mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <Icon.check className="size-2.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </InViewStagger>
            </SpotlightCard>
          </div>

          {/* center VS badge */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:grid"
          >
            <span className="grid size-11 place-items-center rounded-full border border-ink-900/10 bg-white font-display text-xs font-extrabold uppercase tracking-wide text-ink-500 shadow-card">
              vs
            </span>
          </span>
        </div>

        {/* Credibility proof - Pete */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-ink-800 bg-ink-950 p-5 text-white sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-300">
                Credibility proof
              </p>
              <p className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                {EXPERT.name}
              </p>
              <p className="text-sm text-ink-400">{EXPERT.role}</p>
              <blockquote className="mt-3 border-l-2 border-accent-400/60 pl-4 text-sm leading-6 text-ink-300">
                &ldquo;{EXPERT.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex flex-wrap gap-2">
                {EXPERT.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-ink-200 transition-colors hover:border-accent-400/40 hover:text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="mt-4">
                <Link
                  href={LINKS.contact}
                  className="text-sm font-semibold text-accent-300 transition-colors hover:text-white"
                >
                  Speak with a WHS specialist →
                </Link>
              </p>
            </div>
            <InViewStagger as="div" step={110} className="grid gap-3">
              {PILLARS.map((p, i) => {
                const I = Icon[p.icon as IconName];
                return (
                  <SpotlightCard
                    key={p.title}
                    spotClassName="tilt-card--dark"
                    tilt={false}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                    style={{ ["--i" as string]: i }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-accent-300">
                        <I className="size-4" />
                      </span>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                          {p.proof}
                        </span>
                        <h3 className="mt-0.5 font-display text-sm font-bold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-ink-400">{p.body}</p>
                        {"href" in p && p.href ? (
                          <p className="mt-2">
                            <Link
                              href={p.href}
                              className="text-xs font-semibold text-accent-300 hover:text-white"
                            >
                              {p.linkLabel}
                            </Link>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </InViewStagger>
          </div>
        </div>

        {/* Outcomes */}
        <InViewStagger as="div" step={110} className="mt-10 grid gap-4 sm:grid-cols-3">
          {OUTCOMES.map((o, i) => {
            const I = Icon[o.icon as IconName];
            return (
              <SpotlightCard
                key={o.title}
                className="group rounded-2xl border border-ink-900/8 bg-white p-5"
                style={{ ["--i" as string]: i }}
              >
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <I className="size-[1.125rem]" />
                </span>
                <h4 className="mt-4 font-display text-sm font-bold text-ink-900">{o.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink-600">{o.body}</p>
              </SpotlightCard>
            );
          })}
        </InViewStagger>

        <div className="mt-10 flex justify-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
        </div>
      </Container>
    </section>
  );
}
