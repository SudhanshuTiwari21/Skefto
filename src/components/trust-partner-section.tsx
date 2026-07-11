import Link from "next/link";
import {
  BELMONT_OUTCOME_CHIPS,
  CASE_STUDY,
  LINKS,
  TESTIMONIALS,
} from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

const ArrowIcon = Icon.arrow;

export function TrustPartnerSection() {
  return (
    <section id="proof" className="relative scroll-mt-20 overflow-hidden bg-white py-16 sm:py-20">
      <Container className="relative">
        <SectionHeading
          eyebrow="Proof"
          title="Results from organisations on Skefto"
          subtitle="Named outcomes and customer voices from regulated teams."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-950 to-ink-900 p-6 text-white sm:p-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
              {CASE_STUDY.eyebrow} · case study
            </span>
            <h3 className="mt-3 font-display text-xl font-bold">{CASE_STUDY.headline}</h3>
            <p className="mt-4 text-sm leading-7 text-ink-300">{CASE_STUDY.challenge}</p>
            <p className="mt-3 font-display text-2xl font-extrabold text-brand-300">
              {CASE_STUDY.result}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {BELMONT_OUTCOME_CHIPS.map((outcome) => (
                <span
                  key={outcome.metricLabel}
                  className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-ink-200"
                >
                  {outcome.metric} {outcome.metricLabel}
                </span>
              ))}
            </div>
            <Link
              href={CASE_STUDY.href}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-200"
            >
              Explore government &amp; council solutions
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-4">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.org}
                className="rounded-2xl border border-ink-900/8 bg-sand-50/60 p-5 shadow-soft"
              >
                <blockquote className="text-pretty text-sm leading-7 text-ink-800">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs">
                  <span className="font-semibold text-ink-900">{t.name}</span>
                  <span className="block text-ink-500">{t.org}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
