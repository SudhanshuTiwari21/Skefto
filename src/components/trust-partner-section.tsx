import Image from "next/image";
import Link from "next/link";
import {
  CASE_STUDY,
  CLIENT_OUTCOMES,
  CUSTOMER_LOGOS,
  LINKS,
  SECTOR_DIFFERENTIATOR,
  TESTIMONIALS,
  WHY_CHOOSE_SKEFTO,
  WHY_SKEFTO,
} from "@/lib/content";
import { BeamButton, Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";

const PILLAR_ACCENT = [
  {
    icon: "bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-[0_8px_24px_-8px_rgba(141,61,151,0.45)]",
    tag: "text-brand-700 bg-brand-50 ring-brand-100",
  },
  {
    icon: "bg-gradient-to-br from-accent-600 to-brand-600 text-white shadow-[0_8px_24px_-8px_rgba(0,145,174,0.4)]",
    tag: "text-accent-800 bg-accent-50 ring-accent-100",
  },
  {
    icon: "bg-gradient-to-br from-ink-800 to-ink-700 text-white shadow-[0_8px_24px_-8px_rgba(20,24,31,0.35)]",
    tag: "text-ink-700 bg-ink-50 ring-ink-100",
  },
] as const;

function WhyChooseCard({
  item,
}: Readonly<{ item: (typeof WHY_CHOOSE_SKEFTO)[number] }>) {
  const I = Icon[item.icon as IconName];

  if (item.featured) {
    return (
      <article className="relative overflow-hidden rounded-2xl border border-brand-300/60 bg-gradient-to-br from-brand-50/90 via-white to-accent-50/40 p-5 shadow-soft sm:p-6 lg:col-span-1">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500"
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
          <SkeftoGeoMark shape="hexagon" />
          Key differentiator
        </span>
        <div className="mt-4 inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white">
          <I className="size-5" />
        </div>
        <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-ink-600">{item.body}</p>
      </article>
    );
  }

  return (
    <article className="rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
      <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <I className="size-5" />
      </div>
      <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-ink-600">{item.body}</p>
    </article>
  );
}

function OutcomeCard({
  item,
}: Readonly<{ item: (typeof CLIENT_OUTCOMES)[number] }>) {
  const I = Icon[item.icon as IconName];
  return (
    <article className="rounded-xl border border-ink-900/8 bg-sand-50/60 p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-brand-700 shadow-sm">
          <I className="size-4" />
        </span>
        <div>
          <h4 className="font-display text-sm font-bold text-ink-900">{item.title}</h4>
          <p className="mt-1.5 text-sm leading-6 text-ink-600">{item.body}</p>
        </div>
      </div>
    </article>
  );
}

function PartnerPillar({
  item,
  index,
}: Readonly<{
  item: (typeof WHY_SKEFTO)[number];
  index: number;
}>) {
  const I = Icon[item.icon as IconName];
  const accent = PILLAR_ACCENT[index] ?? PILLAR_ACCENT[0];
  const isCenter = index === 1;

  return (
    <article
      className={`relative flex flex-col px-6 py-7 sm:px-8 sm:py-8 ${
        isCenter ? "bg-gradient-to-b from-brand-50/90 via-white to-accent-50/40" : "bg-white"
      }`}
    >
      <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent.icon}`}>
        <I className="size-5" />
      </div>
      <p
        className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${accent.tag}`}
      >
        {item.proof}
      </p>
      <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-ink-600">{item.body}</p>
      {item.href && item.linkLabel ? (
        <p className="mt-4">
          <InlineLink href={item.href}>
            {item.linkLabel}
            <Icon.arrow className="size-4" />
          </InlineLink>
        </p>
      ) : null}
    </article>
  );
}

export function TrustPartnerSection() {
  const logos = CUSTOMER_LOGOS.slice(0, 8);

  return (
    <section
      id="why-skefto"
      className="relative scroll-mt-20 overflow-hidden bg-white py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(141,61,151,0.08),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Skefto"
          title="Why choose Skefto over other compliance software?"
          subtitle="Sector-ready from day one — then proof from organisations already on Skefto."
        />

        <blockquote className="relative mt-8 overflow-hidden rounded-2xl border border-brand-200/70 bg-gradient-to-r from-brand-50/80 via-white to-accent-50/50 px-6 py-5 shadow-soft sm:mt-10 sm:px-8 sm:py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.12),transparent_70%)]"
          />
          <p className="relative font-display text-lg font-bold leading-snug tracking-tight text-ink-900 sm:text-xl">
            {SECTOR_DIFFERENTIATOR}
          </p>
          <p className="relative mt-2 text-sm text-ink-600">
            CouncilCloud, CareCloud and EducationCloud — not a generic register you configure from scratch.
          </p>
        </blockquote>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {WHY_CHOOSE_SKEFTO.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 border-t border-ink-100 pt-10">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink-900 sm:text-[1.35rem]">
            What customers report after implementation
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {CLIENT_OUTCOMES.map((item) => (
              <OutcomeCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-ink-100 pt-10">
          <h3 className="text-center font-display text-xl font-bold tracking-tight text-ink-900">
            More than software — a compliance partner
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-600">
            Platform, expert advisory, and training from one Australian team.
          </p>
          <div className="relative mt-6 overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-soft">
            <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-ink-100">
              {WHY_SKEFTO.map((item, i) => (
                <PartnerPillar key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-100 pt-12">
          <h3 className="text-center font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-[1.65rem]">
            Trusted by organisations that take compliance seriously
          </h3>

          <div className="mt-8 grid grid-cols-2 items-center gap-x-4 gap-y-5 rounded-2xl border border-ink-900/8 bg-sand-50/50 px-5 py-6 sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-9 items-center justify-center opacity-90 sm:h-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={36}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-950 to-ink-900 p-6 text-white sm:p-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
                {CASE_STUDY.eyebrow} · case study
              </span>
              <h4 className="mt-3 font-display text-xl font-bold">{CASE_STUDY.headline}</h4>
              <p className="mt-4 text-sm leading-7 text-ink-300">{CASE_STUDY.challenge}</p>
              <p className="mt-3 font-display text-2xl font-extrabold text-brand-300">
                {CASE_STUDY.result}
              </p>
              <Link
                href={CASE_STUDY.href}
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-200"
              >
                See local government solutions
                <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-4">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.org}
                  className="rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft"
                >
                  <blockquote className="text-pretty text-sm leading-7 text-ink-800">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-3 text-xs">
                    <span className="font-semibold text-ink-900">{t.name}</span>
                    <span className="block text-ink-500">{t.org}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
          <Link
            href={LINKS.contact}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 px-6 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            Talk to our team
          </Link>
        </div>
      </Container>
    </section>
  );
}
