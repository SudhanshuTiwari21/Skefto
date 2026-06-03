import Link from "next/link";
import { LINKS, WHY_PROOF, WHY_SKEFTO } from "@/lib/content";
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
    <div className="relative overflow-hidden rounded-2xl border border-ink-900/8 bg-white/80 shadow-soft backdrop-blur-md">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />
      <ul className="grid divide-y divide-ink-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {WHY_PROOF.map((item, i) => (
          <li
            key={item.label}
            className="flex flex-col items-center px-6 py-5 text-center sm:py-6"
          >
            <p className="font-display text-3xl font-extrabold tracking-tight sm:text-[2rem]">
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
    </div>
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
      className={`group relative flex flex-col px-6 py-8 sm:px-8 sm:py-10 lg:px-10 ${
        isCenter
          ? "bg-gradient-to-b from-brand-50/90 via-white to-accent-50/40 lg:py-12"
          : "bg-white"
      }`}
    >
      {isCenter ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-brand-300/0 via-brand-400/70 to-brand-300/0 sm:inset-x-8"
        />
      ) : null}

      <div
        aria-hidden
        className={`pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${accent.ring} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        <div
          className={`inline-flex size-14 items-center justify-center rounded-2xl ${accent.icon} transition-transform duration-300 group-hover:scale-[1.03]`}
        >
          <I className="size-6" />
        </div>

        <p
          className={`mt-6 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset ${accent.tag}`}
        >
          {item.proof}
        </p>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-900 sm:text-[1.35rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-7 text-ink-600">
          {item.body}
        </p>

        {item.href && item.linkLabel ? (
          <p className="mt-6">
            <InlineLink href={item.href}>
              {item.linkLabel}
              <Icon.arrow className="size-4" />
            </InlineLink>
          </p>
        ) : (
          <p className="mt-6 text-sm font-medium text-ink-400">
            Included with your Skefto platform
          </p>
        )}
      </div>
    </article>
  );
}

export function WhySkeftoSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(141,61,151,0.09),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(0,145,174,0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.22]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Skefto"
          title="More than software - a compliance partner"
          subtitle="Software, advisory, and training from one Australian team - so you implement faster, stay audit-ready, and build capability that lasts."
        />

        <div className="mt-10 sm:mt-12">
          <ProofRibbon />
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-brand-400/35 via-ink-200/40 to-accent-400/35 opacity-80"
          />
          <div className="relative overflow-hidden rounded-[1.65rem] border border-ink-900/8 bg-white shadow-[0_32px_80px_-40px_rgba(20,24,31,0.18)]">
            <div
              aria-hidden
              className="flex items-center justify-center gap-0 border-b border-ink-100 bg-sand-50/80 px-4 py-5 sm:px-8"
            >
              {WHY_SKEFTO.map((item, i) => {
                const I = Icon[item.icon as IconName];
                return (
                  <div key={item.title} className="flex flex-1 items-center justify-center">
                    {i > 0 ? (
                      <span
                        aria-hidden
                        className="mx-2 hidden h-px flex-1 max-w-[4rem] bg-gradient-to-r from-ink-200 to-brand-300/50 sm:mx-4 sm:block lg:max-w-[6rem]"
                      />
                    ) : null}
                    <span className="flex flex-col items-center gap-2 text-center">
                      <span className="grid size-9 place-items-center rounded-full border border-brand-200/80 bg-white text-brand-600 shadow-sm">
                        <I className="size-4" />
                      </span>
                      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500 sm:block">
                        {item.title.split(" ")[0]}
                      </span>
                    </span>
                    {i < WHY_SKEFTO.length - 1 ? (
                      <span
                        aria-hidden
                        className="mx-2 hidden h-px flex-1 max-w-[4rem] bg-gradient-to-l from-ink-200 to-brand-300/50 sm:mx-4 sm:block lg:max-w-[6rem]"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-ink-100">
              {WHY_SKEFTO.map((item, i) => (
                <PartnerPillar key={item.title} item={item} index={i} />
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-100 bg-gradient-to-r from-sand-50/90 via-white to-brand-50/30 px-6 py-6 sm:flex-row sm:px-8 sm:py-7">
              <p className="text-center text-sm text-ink-600 sm:text-left">
                <span className="font-semibold text-ink-900">
                  One partner, end to end.
                </span>{" "}
                Platform, expert guidance, and training - without juggling vendors.
              </p>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
