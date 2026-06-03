import Link from "next/link";
import { LINKS, WHY_PROOF, WHY_SKEFTO } from "@/lib/content";
import {
  BeamButton,
  Container,
  InlineLink,
  SectionHeading,
} from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

function WhyCard({
  title,
  body,
  icon,
  proof,
  featured,
  href,
  linkLabel,
  index,
  className = "",
}: (typeof WHY_SKEFTO)[number] & { index: string; className?: string }) {
  const I = Icon[icon as IconName];

  if (featured) {
    return (
      <article className={`group relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-950 p-6 text-white shadow-[0_24px_60px_-28px_rgba(20,24,31,0.55)] sm:p-7 lg:flex lg:flex-col lg:justify-between ${className}`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.14]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.35),transparent_68%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-8 size-40 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.28),transparent_70%)]"
        />
        <div className="border-beam absolute inset-0 rounded-3xl opacity-70" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
              {index}
            </span>
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-300">
              <I className="size-5" />
            </span>
          </div>
          <p className="mt-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
            {proof}
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-sm text-pretty text-sm leading-7 text-ink-300">
            {body}
          </p>
        </div>

        {href && linkLabel ? (
          <p className="relative mt-6 border-t border-white/10 pt-5">
            <Link
              href={href}
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent-200"
            >
              {linkLabel}
              <Icon.arrow className="size-4 transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </p>
        ) : null}
      </article>
    );
  }

  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-brand-200/80 hover:shadow-card sm:p-7 ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="border-beam absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
          {index}
        </span>
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <I className="size-[1.15rem]" />
        </span>
      </div>
      <p className="relative mt-5 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700">
        {proof}
      </p>
      <h3 className="relative mt-3 font-display text-xl font-bold tracking-tight text-ink-900">
        {title}
      </h3>
      <p className="relative mt-2 flex-1 text-pretty text-sm leading-7 text-ink-600">
        {body}
      </p>
      {href && linkLabel ? (
        <p className="relative mt-5 border-t border-ink-900/6 pt-4">
          <InlineLink href={href}>
            {linkLabel}
            <Icon.arrow className="size-4" />
          </InlineLink>
        </p>
      ) : null}
    </article>
  );
}

export function WhySkeftoSection() {
  const cardOrder = ["01", "02", "03"] as const;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.38]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[min(640px,70vw)] rounded-full bg-[radial-gradient(closest-side,rgba(141,61,151,0.08),transparent)]"
      />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Skefto"
              title="More than software — a compliance partner"
              subtitle="Software, advisory, and training from a team with 20+ years in Australian governance, risk, and compliance."
              align="left"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {WHY_PROOF.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ink-900/8 bg-white/90 px-4 py-4 shadow-soft backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
                    <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                      {item.value}
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-medium leading-5 text-ink-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BeamButton href={LINKS.demo} fill="brand" size="lg">
                Book a demo
              </BeamButton>
              <Link
                href={LINKS.contact}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-2">
            {WHY_SKEFTO.map((item, i) => (
              <WhyCard
                key={item.title}
                {...item}
                index={cardOrder[i]}
                className={
                  item.featured
                    ? "lg:col-start-2 lg:row-start-1 lg:row-span-2"
                    : i === 0
                      ? "lg:col-start-1 lg:row-start-1"
                      : "lg:col-start-1 lg:row-start-2"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
