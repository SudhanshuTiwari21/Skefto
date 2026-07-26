import Link from "next/link";
import {
  COMPARISON_ROWS,
  EXPERT,
  LINKS,
  NAMED_PROOF,
  PILLARS,
} from "@/lib/safety-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

/**
 * Why Skefto: procurement comparison table + Pete + named proof.
 * Outcome blurbs removed (redundant with problems + comparison).
 */
export function SafetyTrustSection() {
  return (
    <section id="why-skefto" className="scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Skefto"
          title="See how Skefto compares to checklist-only safety apps"
          subtitle="A shortlist matrix you can paste into a procurement note. Practitioner-led WHS with advisory and training in-house."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink-900/8 bg-ink-50/80">
                  <th className="px-4 py-3.5 font-semibold text-ink-500 sm:px-6">Criterion</th>
                  <th className="px-4 py-3.5 font-semibold text-ink-500 sm:px-6">Checklist apps</th>
                  <th className="px-4 py-3.5 font-semibold text-brand-700 sm:px-6">Skefto</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="border-b border-ink-900/6 last:border-b-0">
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-ink-900 sm:px-6">
                      {row.criterion}
                    </th>
                    <td className="px-4 py-4 align-top text-ink-500 sm:px-6">{row.checklist}</td>
                    <td className="px-4 py-4 align-top font-medium text-ink-800 sm:px-6">
                      <span className="inline-flex items-start gap-2">
                        <Icon.check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                        {row.skefto}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Named peer proof */}
        <SpotlightCard className="mt-8 rounded-2xl border border-ink-900/8 bg-white p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
            Customer proof · {NAMED_PROOF.org}
          </p>
          <h3 className="mt-2 font-display text-xl font-bold text-ink-900 sm:text-2xl">
            {NAMED_PROOF.headline}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-600">{NAMED_PROOF.body}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {NAMED_PROOF.metrics.map((m) => (
              <div
                key={m.l}
                className="rounded-xl border border-ink-900/8 bg-sand-50/80 px-4 py-3"
              >
                <p className="font-display text-2xl font-extrabold text-brand-600">{m.v}</p>
                <p className="mt-1 text-xs font-medium text-ink-600">{m.l}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>

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

        <div className="mt-10 flex justify-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
        </div>
      </Container>
    </section>
  );
}
