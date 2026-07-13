import Link from "next/link";
import {
  COMPARISON,
  EXPERT,
  LINKS,
  OUTCOMES,
  PILLARS,
} from "@/lib/risk-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

/**
 * Consolidated Why Skefto:
 * comparison table (claims) + compact Pete proof + pillars.
 * Removed the three repetitive differentiator mini-cards.
 */
export function RiskTrustSection() {
  return (
    <section id="why-skefto" className="scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Skefto"
          title="See how Skefto compares to generic GRC tools"
          subtitle="Practitioner-led software with advisory and training in-house, built for regulated organisations."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink-900/8 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Generic vendors
            </p>
            <ul className="mt-4 space-y-3">
              {COMPARISON.generic.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-ink-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-200/80 bg-gradient-to-br from-brand-50/50 to-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Skefto</p>
            <ul className="mt-4 space-y-3">
              {COMPARISON.skefto.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                  <Icon.check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compact Pete proof strip: credibility for the table claims, not a giant section */}
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
              <blockquote className="mt-3 text-sm leading-6 text-ink-300">
                &ldquo;{EXPERT.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex flex-wrap gap-2">
                {EXPERT.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-ink-200"
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
                  Speak with a risk specialist →
                </Link>
              </p>
            </div>
            <div className="grid gap-3">
              {PILLARS.map((p) => {
                const I = Icon[p.icon as IconName];
                return (
                  <article
                    key={p.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
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
                        {p.href ? (
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
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {OUTCOMES.map((o) => {
            const I = Icon[o.icon as IconName];
            return (
              <article key={o.title} className="rounded-xl border border-ink-900/8 bg-white p-5">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <I className="size-4" />
                </span>
                <h4 className="mt-4 font-display text-sm font-bold text-ink-900">{o.title}</h4>
                <p className="mt-2 text-sm leading-6 text-ink-600">{o.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
        </div>
      </Container>
    </section>
  );
}
