import Image from "next/image";
import Link from "next/link";
import { CASE_STUDY, CUSTOMER_LOGOS, LINKS, TESTIMONIALS } from "@/lib/content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

function LogoStrip() {
  const featured = CUSTOMER_LOGOS.slice(0, 8);

  return (
    <div className="mt-10 rounded-2xl border border-ink-900/8 bg-white px-5 py-6 shadow-soft sm:px-8">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
        Organisations already on Skefto
      </p>
      <div className="mt-5 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
        {featured.map((logo) => (
          <div
            key={logo.name}
            className="flex h-10 items-center justify-center opacity-90 transition-opacity hover:opacity-100 sm:h-11"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="max-h-8 w-auto object-contain sm:max-h-9"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />

      <Container>
        <SectionHeading
          eyebrow="Proof & outcomes"
          title="Trusted by organisations that take compliance seriously"
          subtitle="Real outcomes from regulated teams - not generic marketing claims."
        />

        <LogoStrip />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800 p-7 text-white shadow-[0_28px_70px_-32px_rgba(20,24,31,0.55)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.12]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 top-0 size-56 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.25),transparent_68%)]"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
                <Icon.spark className="size-3.5" />
                {CASE_STUDY.eyebrow} case study
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-[1.75rem]">
                {CASE_STUDY.headline}
              </h3>

              <dl className="mt-6 space-y-4 text-sm leading-7">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    Challenge
                  </dt>
                  <dd className="mt-1.5 text-ink-200">{CASE_STUDY.challenge}</dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    Solution
                  </dt>
                  <dd className="mt-1.5 text-ink-200">{CASE_STUDY.solution}</dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl border border-accent-500/25 bg-accent-500/10 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
                  Measured outcome
                </p>
                <p className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white">
                  {CASE_STUDY.result}
                </p>
              </div>

              <Link
                href={CASE_STUDY.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent-200"
              >
                See local government solutions
                <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.org}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-7 shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-brand-200/70 hover:shadow-card"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.08),transparent_70%)]"
                />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="font-display text-5xl font-bold leading-none text-brand-100">
                    “
                  </span>
                  <div className="flex gap-0.5 text-brand-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon.spark key={i} className="size-3.5" />
                    ))}
                  </div>
                </div>
                <blockquote className="relative mt-3 flex-1 text-pretty text-lg leading-8 text-ink-800">
                  {t.quote}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-ink-900/6 pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink-500">{t.org}</span>
                  </span>
                </figcaption>
              </figure>
            ))}

            <div className="rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 to-white p-6">
              <p className="font-display text-lg font-bold text-ink-900">
                See how Skefto fits your obligations
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-600">
                Get a walkthrough mapped to your sector, frameworks, and reporting
                needs - with time for your questions.
              </p>
              <div className="mt-5">
                <BeamButton href={LINKS.demo} fill="brand" size="lg">
                  Book a demo
                </BeamButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
