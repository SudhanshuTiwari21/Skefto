import Link from "next/link";
import {
  COMPARISON,
  EXPERT,
  LINKS,
  OUTCOMES,
  PILLARS,
  TESTIMONIAL,
  WHY_CHOOSE,
} from "@/lib/risk-content";
import { BeamButton, Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";

export function RiskTrustSection() {
  return (
    <section id="why-skefto" className="scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Skefto"
          title="Practitioner-led risk management — not another generic GRC tool"
          subtitle="Software, advisory and training from the team that built the platform — with sector templates Australian regulated organisations actually need."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {WHY_CHOOSE.map((item) => {
            const I = Icon[item.icon as IconName];
            return (
              <article
                key={item.title}
                className={`rounded-2xl border p-5 sm:p-6 ${
                  item.featured
                    ? "border-brand-300/60 bg-gradient-to-br from-brand-50/90 via-white to-accent-50/40 shadow-soft"
                    : "border-ink-900/8 bg-white shadow-soft"
                }`}
              >
                {item.featured ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    <SkeftoGeoMark shape="hexagon" />
                    Key differentiator
                  </span>
                ) : null}
                <div className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <I className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-600">{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink-900/8 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Generic vendors</p>
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

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-ink-800 bg-ink-950 p-7 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">Practitioner-led design</p>
            <blockquote className="mt-5 font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
              &ldquo;{EXPERT.quote}&rdquo;
            </blockquote>
            <p className="mt-5 font-display text-base font-bold text-white">{EXPERT.name}</p>
            <p className="text-sm text-ink-400">{EXPERT.role}</p>
            <ul className="mt-6 space-y-2">
              {EXPERT.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-ink-300">
                  <Icon.check className="mt-0.5 size-4 shrink-0 text-accent-400" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                href={LINKS.contact}
                className="text-sm font-semibold text-accent-300 transition-colors hover:text-white"
              >
                Speak with a risk specialist →
              </Link>
            </p>
          </article>

          <div className="space-y-4">
            {PILLARS.map((p) => {
              const I = Icon[p.icon as IconName];
              return (
                <article
                  key={p.title}
                  className={`rounded-2xl border p-5 ${
                    p.featured
                      ? "border-brand-300/60 bg-white shadow-soft"
                      : "border-ink-900/8 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <I className="size-5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                        {p.proof}
                      </span>
                      <h3 className="mt-1 font-display text-base font-bold text-ink-900">{p.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink-600">{p.body}</p>
                      {p.href ? (
                        <p className="mt-3">
                          <InlineLink href={p.href}>{p.linkLabel}</InlineLink>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
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

        <blockquote className="mt-10 rounded-2xl border border-ink-900/8 bg-white p-6 sm:p-8">
          <p className="font-display text-lg font-medium leading-relaxed text-ink-800 sm:text-xl">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-ink-500">
            <span className="font-semibold text-ink-700">{TESTIMONIAL.name}</span>
            {" · "}
            {TESTIMONIAL.org}
          </footer>
        </blockquote>

        <div className="mt-10 flex justify-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
        </div>
      </Container>
    </section>
  );
}
