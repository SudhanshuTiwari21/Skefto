import { LINKS, REGULATORY_VALUES, STANDARDS } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { Container, InlineLink, SectionHeading } from "@/components/ui";

const PILLAR_STYLE = [
  {
    ring: "from-brand-500/20 via-brand-400/8 to-transparent",
    icon: "bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-[0_8px_24px_-8px_rgba(141,61,151,0.4)]",
    chip: "text-brand-700 bg-brand-50 ring-brand-100",
    step: "text-brand-600",
  },
  {
    ring: "from-accent-500/22 via-accent-400/8 to-transparent",
    icon: "bg-gradient-to-br from-accent-600 to-accent-500 text-white shadow-[0_8px_24px_-8px_rgba(0,145,174,0.38)]",
    chip: "text-accent-800 bg-accent-50 ring-accent-100",
    step: "text-accent-600",
  },
  {
    ring: "from-ink-400/15 via-brand-400/6 to-transparent",
    icon: "bg-gradient-to-br from-ink-800 to-ink-700 text-white shadow-[0_8px_24px_-8px_rgba(20,24,31,0.32)]",
    chip: "text-ink-700 bg-ink-50 ring-ink-100",
    step: "text-ink-600",
  },
] as const;

const FLOW_LABELS = ["Monitor", "Map", "Assure"] as const;

function RegulatoryCard({
  item,
  index,
}: Readonly<{
  item: (typeof REGULATORY_VALUES)[number];
  index: number;
}>) {
  const I = Icon[item.icon as IconName];
  const style = PILLAR_STYLE[index] ?? PILLAR_STYLE[0];
  const step = String(index + 1).padStart(2, "0");
  const isCenter = index === 1;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-200/70 hover:shadow-card sm:p-7 ${
        isCenter ? "lg:scale-[1.02] lg:shadow-[0_20px_50px_-28px_rgba(20,24,31,0.15)]" : ""
      }`}
    >
      <div className="border-beam absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-gradient-to-br ${style.ring}`}
      />
      {isCenter ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400/0 via-brand-500/50 to-accent-400/0"
        />
      ) : null}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`font-mono text-[11px] font-semibold tracking-[0.2em] ${style.step}`}
        >
          {step}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ${style.chip}`}
        >
          {FLOW_LABELS[index]}
        </span>
      </div>

      <div
        className={`relative mt-6 inline-flex size-12 items-center justify-center rounded-2xl ${style.icon} transition-transform duration-300 group-hover:scale-[1.04]`}
      >
        <I className="size-5" aria-hidden />
      </div>

      <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-ink-900">
        {item.title}
      </h3>
      <p className="relative mt-3 flex-1 text-pretty text-sm leading-7 text-ink-600">
        {item.body}
      </p>
    </article>
  );
}

export function RegulatorySection() {
  return (
    <section
      id="standards"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(0,145,174,0.07),transparent_55%),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(141,61,151,0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Regulatory change"
          title="Stay ahead of regulatory change, aligned to Australian standards"
          subtitle="Built around the obligations Australian regulators actually hold you to - not a generic offshore template."
        />

        <div className="relative mt-12 sm:mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[4.5rem] hidden h-px bg-gradient-to-r from-brand-200 via-accent-300/60 to-brand-200 lg:block"
          />
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {REGULATORY_VALUES.map((item, i) => (
              <RegulatoryCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[1.65rem] bg-gradient-to-r from-brand-300/30 via-ink-200/25 to-accent-300/30 opacity-90"
          />
          <div className="relative overflow-hidden rounded-3xl border border-ink-900/8 bg-gradient-to-b from-sand-50/90 to-white px-6 py-8 shadow-soft sm:px-10 sm:py-9">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
            />

            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              Mapped to Australian standards &amp; regulations
            </p>

            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
              {STANDARDS.map((standard) => (
                <li key={standard}>
                  <span className="inline-flex items-center rounded-full border border-ink-900/8 bg-white px-4 py-2 text-sm font-semibold text-ink-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors hover:border-brand-200 hover:text-brand-800">
                    {standard}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-sm text-ink-500">
              New to the framework?{" "}
              <InlineLink href={LINKS.grcGuide}>
                Governance, risk &amp; compliance (GRC) explained
              </InlineLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
