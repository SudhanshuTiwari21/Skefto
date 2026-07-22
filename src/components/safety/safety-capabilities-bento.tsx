import Link from "next/link";
import { CAPABILITIES, LINKS } from "@/lib/safety-content";
import { Icon, type IconName } from "@/components/icons";
import { Container, SectionHeading, ShimmerButton } from "@/components/ui";

const LAYOUT = [
  { className: "sm:col-span-2 lg:col-span-6 lg:row-start-1", variant: "featured" as const, index: "01" },
  { className: "lg:col-span-3 lg:row-start-1", variant: "default" as const, index: "02" },
  { className: "lg:col-span-3 lg:row-start-1", variant: "default" as const, index: "03" },
  { className: "lg:col-span-3 lg:row-start-2", variant: "default" as const, index: "04" },
  { className: "lg:col-span-3 lg:row-start-2", variant: "default" as const, index: "05" },
  { className: "sm:col-span-2 lg:col-span-6 lg:row-start-2", variant: "dark" as const, index: "06" },
];

function InspectionPreview() {
  return (
    <div className="mt-5 space-y-2">
      {[
        { t: "Depot plant inspection", s: "Due 3d" },
        { t: "Lab safety walk", s: "On track" },
      ].map((r) => (
        <div
          key={r.t}
          className="flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/80 px-3 py-2"
        >
          <span className="truncate text-xs font-medium text-ink-800">{r.t}</span>
          <span className="shrink-0 rounded-md bg-accent-100 px-2 py-0.5 text-[10px] font-semibold text-accent-800">
            {r.s}
          </span>
        </div>
      ))}
    </div>
  );
}

function ActionPreview() {
  return (
    <div className="mt-5 space-y-2">
      {[
        { t: "Replace damaged ladder", s: "Owner set" },
        { t: "Update SWMS, contractors", s: "Evidence due" },
      ].map((r) => (
        <div
          key={r.t}
          className="flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/80 px-3 py-2"
        >
          <span className="truncate text-xs font-medium text-ink-800">{r.t}</span>
          <span className="shrink-0 rounded-md bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
            {r.s}
          </span>
        </div>
      ))}
    </div>
  );
}

function ReportingPreview() {
  const bars = [38, 52, 44, 68, 58, 82, 74, 88];
  return (
    <div className="mt-5 flex h-16 items-end gap-1.5 sm:h-20">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-700/40 to-accent-400"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function CapabilityCard({
  cap,
  layout,
}: Readonly<{
  cap: (typeof CAPABILITIES)[number];
  layout: (typeof LAYOUT)[number];
}>) {
  const I = Icon[cap.icon as IconName];
  const { variant, index, className } = layout;

  if (variant === "featured") {
    return (
      <article
        className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 sm:p-7 ${className}`}
      >
        <div className="relative flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">{index}</span>
          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white/80 text-ink-800">
            <I className="size-[1.15rem]" />
          </span>
        </div>
        <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
          {cap.title}
        </h3>
        <p className="relative mt-2 max-w-md text-sm leading-relaxed text-ink-600">{cap.body}</p>
        <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/50 p-3">
          <div className="flex items-center justify-between border-b border-ink-900/6 pb-2">
            <p className="text-xs font-semibold text-ink-800">Open hazards</p>
            <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              42 active
            </span>
          </div>
          <div className="mt-2 space-y-2">
            {[
              { n: "Manual handling, depot", s: "High" },
              { n: "Psychosocial, rostering", s: "Medium" },
            ].map((r) => (
              <div key={r.n} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-ink-900/5">
                <span className="truncate text-xs font-medium text-ink-800">{r.n}</span>
                <span className="rounded-md bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
                  {r.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  if (variant === "dark") {
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900 p-6 text-white sm:p-7 ${className}`}
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">{index}</span>
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-300">
                <I className="size-[1.15rem]" />
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">{cap.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{cap.body}</p>
          </div>
          <div className="w-full shrink-0 sm:max-w-[220px]">
            <ReportingPreview />
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-ink-500">
              WHS committee view
            </p>
          </div>
        </div>
      </article>
    );
  }

  const showInspection = cap.icon === "audit";
  const showActions = cap.icon === "workflow";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white/90 p-5 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-brand-200/80 hover:shadow-card sm:p-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">{index}</span>
        <span className="inline-flex size-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white/80 text-ink-800">
          <I className="size-[1.15rem]" />
        </span>
      </div>
      <h3 className="mt-4 font-display text-base font-bold tracking-tight text-ink-900 sm:text-lg">{cap.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{cap.body}</p>
      {showInspection ? <InspectionPreview /> : null}
      {showActions ? <ActionPreview /> : null}
    </article>
  );
}

export function SafetyCapabilitiesBento() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Platform capabilities"
          title="WHS software connected to risk, not another checklist app"
          subtitle="Hazard reporting, inspections, injuries, registers and corrective actions in one onshore-hosted system."
        />
        <div className="mt-12 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} layout={LAYOUT[i]!} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <ShimmerButton href={LINKS.demo} className="!h-11 !px-6 !text-sm">
            Book a demo
          </ShimmerButton>
          <Link
            href="#safety-workflow"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
          >
            See WHS workflow
            <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
