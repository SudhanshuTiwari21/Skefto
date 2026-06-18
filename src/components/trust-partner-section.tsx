import Image from "next/image";
import Link from "next/link";
import {
  CASE_STUDY,
  CLIENT_OUTCOMES,
  CUSTOMER_LOGOS,
  FUTURE_INITIATIVES,
  LINKS,
  SECTOR_DIFFERENTIATOR,
  TESTIMONIALS,
  WHY_CHOOSE_SKEFTO,
  WHY_SKEFTO,
} from "@/lib/content";
import { BeamButton, Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";
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

const ArrowIcon = Icon.arrow;

function WhyChooseCard({
  item,
}: Readonly<{ item: (typeof WHY_CHOOSE_SKEFTO)[number] }>) {
  const I = Icon[item.icon];

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
  index,
}: Readonly<{ item: (typeof CLIENT_OUTCOMES)[number]; index: number }>) {
  const I = Icon[item.icon];
  const accents = [
    "from-brand-500/15 to-brand-50",
    "from-accent-500/15 to-accent-50",
    "from-ink-800/10 to-sand-50",
  ] as const;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accents[index % 3]} opacity-80`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-[0_8px_24px_-8px_rgba(141,61,151,0.45)]">
          <I className="size-5" />
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-[1.75rem]">
            {item.metric}
          </p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500">
            {item.metricLabel}
          </p>
        </div>
      </div>
      <h4 className="relative mt-5 font-display text-base font-bold text-ink-900">{item.title}</h4>
      <p className="relative mt-2 flex-1 text-sm leading-7 text-ink-600">{item.body}</p>
      <OutcomeMiniVisual variant={item.icon} />
    </article>
  );
}

function OutcomeMiniVisual({ variant }: Readonly<{ variant: (typeof CLIENT_OUTCOMES)[number]["icon"] }>) {
  if (variant === "register") {
    return (
      <div
        aria-hidden
        className="relative mt-5 overflow-hidden rounded-xl border border-ink-900/8 bg-sand-50/80 p-3"
      >
        <div className="mb-2 flex items-center justify-between text-[9px] font-semibold uppercase tracking-wider text-ink-500">
          <span>Obligations register</span>
          <span className="rounded bg-brand-100 px-1.5 py-0.5 text-brand-800">Live</span>
        </div>
        {[
          { row: "Privacy Act review", status: "On track", statusClass: "bg-accent-100 text-accent-800", rowClass: "bg-white shadow-sm" },
          { row: "WHS annual attestation", status: "Due Q3", statusClass: "bg-ink-100 text-ink-600", rowClass: "text-ink-600" },
          { row: "Board conflict register", status: "Current", statusClass: "bg-ink-100 text-ink-600", rowClass: "text-ink-600" },
        ].map((item) => (
          <div
            key={item.row}
            className={`flex items-center justify-between rounded-lg px-2 py-1.5 text-[10px] ${item.rowClass}`}
          >
            <span className="truncate font-medium text-ink-800">{item.row}</span>
            <span className={`ml-2 shrink-0 rounded px-1.5 py-0.5 font-semibold ${item.statusClass}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div
        aria-hidden
        className="relative mt-5 overflow-hidden rounded-xl border border-ink-900/8 bg-sand-50/80 p-3"
      >
        <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-ink-500">
          Compliance posture · rolling 12 months
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[
            { month: "Jan", h: 35 },
            { month: "Feb", h: 48 },
            { month: "Mar", h: 52 },
            { month: "Apr", h: 61 },
            { month: "May", h: 68 },
            { month: "Jun", h: 74 },
            { month: "Jul", h: 82 },
            { month: "Aug", h: 88 },
            { month: "Sep", h: 91 },
            { month: "Oct", h: 93 },
            { month: "Nov", h: 95 },
            { month: "Dec", h: 97 },
          ].map((bar, i) => (
            <div
              key={bar.month}
              className={`flex-1 rounded-t-sm ${i >= 9 ? "bg-gradient-to-t from-brand-600 to-brand-400" : "bg-ink-200/80"}`}
              style={{ height: `${bar.h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="relative mt-5 overflow-hidden rounded-xl border border-ink-900/8 bg-sand-50/80 p-3"
    >
      <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-ink-500">
        Task completion · this week
      </div>
      {[
        { label: "Policy acknowledgement", pct: 94 },
        { label: "Training modules", pct: 87 },
        { label: "Incident follow-ups", pct: 100 },
      ].map((row) => (
        <div key={row.label} className="mb-2 last:mb-0">
          <div className="flex justify-between text-[10px] font-medium text-ink-700">
            <span>{row.label}</span>
            <span>{row.pct}%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-500 to-brand-500"
              style={{ width: `${row.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function InitiativeCard({
  item,
  index,
}: Readonly<{ item: (typeof FUTURE_INITIATIVES)[number]; index: number }>) {
  const I = Icon[item.icon];
  const accent = PILLAR_ACCENT[(index + 1) % 3];

  return (
    <article className="flex flex-col rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className={`inline-flex size-11 items-center justify-center rounded-xl ${accent.icon}`}>
          <I className="size-5" />
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ${accent.tag}`}
        >
          {item.tag}
        </span>
      </div>
      <h4 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h4>
      <p className="mt-2 text-sm leading-7 text-ink-600">{item.body}</p>
      <ul className="mt-4 space-y-2 border-t border-ink-100 pt-4">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm text-ink-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
            <span className="leading-6">{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FeaturedInitiativeCard({
  item,
}: Readonly<{ item: (typeof FUTURE_INITIATIVES)[number] }>) {
  const I = Icon[item.icon];

  return (
    <article className="relative overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 p-6 text-white shadow-[0_24px_48px_-24px_rgba(20,24,31,0.55)] sm:p-7 lg:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.35),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.2),transparent_70%)]"
      />
      <div className="relative flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-200">
          <SkeftoGeoMark shape="hexagon" className="text-accent-300" />
          {item.tag}
        </span>
        <span className="rounded-full bg-brand-500/20 px-2.5 py-1 text-[10px] font-semibold text-brand-200 ring-1 ring-inset ring-brand-400/30">
          Partnership · City of Belmont
        </span>
      </div>
      <div className="relative mt-5 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-[0_8px_24px_-8px_rgba(141,61,151,0.5)]">
        <I className="size-5" />
      </div>
      <h4 className="relative mt-4 font-display text-xl font-bold sm:text-[1.35rem]">{item.title}</h4>
      <p className="relative mt-3 max-w-lg text-sm leading-7 text-ink-300">{item.body}</p>
      <ul className="relative mt-6 grid gap-2 sm:grid-cols-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-sm text-ink-200">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden />
            <span className="leading-6">{bullet}</span>
          </li>
        ))}
      </ul>
      <div
        aria-hidden
        className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
      >
        <div className="mb-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-wider text-ink-400">
          <span>Governance portal preview</span>
          <span className="text-accent-300">Councillor view</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { label: "Declarations due", value: "3", tone: "text-brand-300" },
            { label: "Gifts register", value: "Current", tone: "text-accent-300" },
            { label: "Conflicts cleared", value: "12", tone: "text-white" },
            { label: "Board papers", value: "Ready", tone: "text-ink-300" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/8 bg-ink-950/40 px-3 py-2">
              <p className="text-[9px] uppercase tracking-wider text-ink-500">{stat.label}</p>
              <p className={`mt-0.5 font-display text-sm font-bold ${stat.tone}`}>{stat.value}</p>
            </div>
          ))}
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
  const I = Icon[item.icon];
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
            <ArrowIcon className="size-4" />
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
            GovCloud, CareCloud and EducationCloud — not a generic register you configure from scratch.
          </p>
        </blockquote>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {WHY_CHOOSE_SKEFTO.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 border-t border-ink-100 pt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                Product roadmap
              </p>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-ink-900 sm:text-[1.35rem]">
                What Skefto is building next
              </h3>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              Planned integrations and partnerships that extend Skefto beyond a compliance register.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:gap-5">
            {FUTURE_INITIATIVES.filter((item) => item.featured).map((item) => (
              <div key={item.title} className="lg:col-span-7">
                <FeaturedInitiativeCard item={item} />
              </div>
            ))}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {FUTURE_INITIATIVES.filter((item) => !item.featured).map((item, i) => (
                <InitiativeCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-100 pt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-700">
                Customer outcomes
              </p>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-ink-900 sm:text-[1.35rem]">
                What customers report after implementation
              </h3>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              Recurring themes from councils, government, education and care providers on Skefto.
            </p>
          </div>
          <div className="relative mt-6 overflow-hidden rounded-3xl border border-ink-900/8 bg-gradient-to-br from-sand-50 via-white to-brand-50/30 p-4 shadow-soft sm:p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.12]"
            />
            <div className="relative grid gap-4 lg:grid-cols-3 lg:gap-5">
              {CLIENT_OUTCOMES.map((item, i) => (
                <OutcomeCard key={item.title} item={item} index={i} />
              ))}
            </div>
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
                See councils, state and federal government solutions
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
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
