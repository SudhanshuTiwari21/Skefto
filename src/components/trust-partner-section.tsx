import Link from "next/link";
import {
  CASE_STUDY,
  CLIENT_OUTCOMES,
  FUTURE_INITIATIVES,
  LINKS,
  SECONDARY_CTA_LABEL,
  TESTIMONIALS,
  WHY_SKEFTO,
} from "@/lib/content";
import { Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

const ArrowIcon = Icon.arrow;

function CompactRoadmapCard({
  item,
}: Readonly<{ item: (typeof FUTURE_INITIATIVES)[number] }>) {
  const I = Icon[item.icon];
  return (
    <article className="rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-2">
        <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <I className="size-5" />
        </span>
        <span className="rounded-full bg-sand-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">
          {item.tag}
        </span>
      </div>
      <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p>
      <ul className="mt-3 space-y-1.5">
        {item.bullets.slice(0, 2).map((bullet) => (
          <li key={bullet} className="flex gap-2 text-xs leading-5 text-ink-700">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-500" aria-hidden />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function TrustPartnerSection() {
  const advisory = WHY_SKEFTO.find((item) => item.title === "Expert advisory");
  const training = WHY_SKEFTO.find((item) => item.title === "Practical training");

  return (
    <section id="proof" className="relative scroll-mt-20 overflow-hidden bg-white py-16 sm:py-20">
      <Container className="relative">
        <SectionHeading
          eyebrow="Proof"
          title="Results from organisations on Skefto"
          subtitle="Named outcomes, customer voices, and sector innovation — in one place."
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
              {CLIENT_OUTCOMES.map((outcome) => (
                <span
                  key={outcome.title}
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

        <div className="mt-12 border-t border-ink-100 pt-12">
          <SectionHeading
            eyebrow="Innovation"
            title="Sector partnerships &amp; compliance roadmap"
            subtitle="LexisNexis integration, Compliance AI, and the Governance Portal programme for enterprise buyers evaluating long-term fit."
            align="left"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {FUTURE_INITIATIVES.map((item) => (
              <CompactRoadmapCard key={item.title} item={item} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-600">
            <InlineLink href={LINKS.partners}>View Skefto technology partners</InlineLink>
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-ink-600">
          More than software — Skefto also offers{" "}
          {advisory?.href ? (
            <InlineLink href={advisory.href}>{advisory.title.toLowerCase()}</InlineLink>
          ) : (
            "expert advisory"
          )}{" "}
          and{" "}
          {training?.href ? (
            <InlineLink href={training.href}>{training.title.toLowerCase()}</InlineLink>
          ) : (
            "practical training"
          )}
          .{" "}
          <Link
            href={LINKS.contact}
            className="font-semibold text-brand-700 hover:underline"
          >
            {SECONDARY_CTA_LABEL}
          </Link>
        </p>
      </Container>
    </section>
  );
}
