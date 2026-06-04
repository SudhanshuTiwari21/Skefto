import Image from "next/image";
import Link from "next/link";
import {
  CASE_STUDY,
  CUSTOMER_LOGOS,
  LINKS,
  TESTIMONIALS,
  WHY_PROOF,
  WHY_SKEFTO,
} from "@/lib/content";
import { BeamButton, Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

const PILLAR_ACCENT = [
  {
    ring: "from-brand-500/20 via-brand-400/10 to-transparent",
    icon: "bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-[0_8px_24px_-8px_rgba(141,61,151,0.45)]",
    tag: "text-brand-700 bg-brand-50 ring-brand-100",
  },
  {
    ring: "from-accent-500/25 via-brand-500/10 to-transparent",
    icon: "bg-gradient-to-br from-accent-600 to-brand-600 text-white shadow-[0_8px_24px_-8px_rgba(0,145,174,0.4)]",
    tag: "text-accent-800 bg-accent-50 ring-accent-100",
  },
  {
    ring: "from-ink-400/15 via-brand-400/8 to-transparent",
    icon: "bg-gradient-to-br from-ink-800 to-ink-700 text-white shadow-[0_8px_24px_-8px_rgba(20,24,31,0.35)]",
    tag: "text-ink-700 bg-ink-50 ring-ink-100",
  },
] as const;

function ProofRibbon() {
  return (
    <ul className="grid divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {WHY_PROOF.map((item, i) => (
        <li
          key={item.label}
          className="flex flex-col items-center px-6 py-5 text-center sm:py-6"
        >
          <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span
              className={
                i === 0
                  ? "bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent"
                  : i === 1
                    ? "bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-ink-800 to-ink-600 bg-clip-text text-transparent"
              }
            >
              {item.value}
            </span>
          </p>
          <p className="mt-1 max-w-[11rem] text-xs font-medium leading-5 text-ink-500">
            {item.label}
          </p>
        </li>
      ))}
    </ul>
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
      <div
        className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent.icon}`}
      >
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
          title="More than software - a compliance partner"
          subtitle="Software, advisory, and training from one Australian team - then proof from organisations already on Skefto."
        />

        <div className="mt-8 sm:mt-10">
          <ProofRibbon />
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-ink-900/8 bg-white shadow-soft">
          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-ink-100">
            {WHY_SKEFTO.map((item, i) => (
              <PartnerPillar key={item.title} item={item} index={i} />
            ))}
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
