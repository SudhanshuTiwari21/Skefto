import { CAPABILITIES, LINKS } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { Container, SectionHeading, ShimmerButton } from "@/components/ui";

type Capability = (typeof CAPABILITIES)[number];

/** Grid: row1 = obligations | calendar | policy · row2 = reporting | audit | attestations */
const LAYOUT: {
  className: string;
  variant: "featured" | "default" | "dark";
  index: string;
}[] = [
  {
    className:
      "order-1 sm:col-span-2 lg:order-none lg:col-span-6 lg:row-start-1",
    variant: "featured",
    index: "01",
  },
  {
    className: "order-3 lg:order-none lg:col-span-3 lg:row-start-1",
    variant: "default",
    index: "02",
  },
  {
    className: "order-4 lg:order-none lg:col-span-3 lg:row-start-1",
    variant: "default",
    index: "03",
  },
  {
    className: "order-5 lg:order-none lg:col-span-3 lg:row-start-2",
    variant: "default",
    index: "04",
  },
  {
    className: "order-6 lg:order-none lg:col-span-3 lg:row-start-2",
    variant: "default",
    index: "05",
  },
  {
    className:
      "order-2 sm:col-span-2 lg:order-none lg:col-span-6 lg:row-start-2",
    variant: "dark",
    index: "06",
  },
];

function CapabilityIcon({ name }: { name: IconName }) {
  const I = Icon[name];
  return (
    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white/80 text-ink-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm">
      <I className="size-[1.15rem]" />
    </span>
  );
}

type ObligationRow = {
  name: string;
  status: string;
  tone: "brand" | "accent" | "slate";
};

function StatusBadge({ status, tone }: { status: string; tone: ObligationRow["tone"] }) {
  const styles = {
    brand: "bg-brand-100 text-brand-800",
    accent: "bg-accent-100 text-accent-800",
    slate: "bg-ink-100 text-ink-700",
  };
  return (
    <span
      className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${styles[tone]}`}
    >
      {status}
    </span>
  );
}

function ObligationsList({ rows }: { rows: ObligationRow[] }) {
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.name}
          className="flex items-center justify-between gap-3 rounded-lg bg-ink-50/80 px-3 py-2.5"
        >
          <span className="truncate text-xs font-medium text-ink-800">{r.name}</span>
          <StatusBadge status={r.status} tone={r.tone} />
        </div>
      ))}
    </div>
  );
}

/** Lighter mini UI: compact status chips, not full register screenshot */
function FeaturedObligationsPanel() {
  const rows: ObligationRow[] = [
    { name: "Privacy Act attestation", status: "On track", tone: "brand" },
    { name: "WHS depot audit", status: "Due 4d", tone: "accent" },
    { name: "NDIS evidence pack", status: "In review", tone: "slate" },
  ];

  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/50 p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
          Status snapshot
        </p>
        <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
          Live
        </span>
      </div>
      <ObligationsList rows={rows} />
    </div>
  );
}

type PolicyRow = {
  name: string;
  version: string;
  status: string;
  tone: ObligationRow["tone"];
};

function PolicyDocumentsPreview() {
  const rows: PolicyRow[] = [
    { name: "WHS Policy", version: "v3.2", status: "Approved", tone: "brand" },
    { name: "Privacy Procedure", version: "v2.1", status: "Review 14d", tone: "accent" },
  ];

  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        Policy versions
      </p>
      <div className="mt-2 space-y-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-2 rounded-lg bg-white/80 px-2.5 py-2 ring-1 ring-ink-900/5"
          >
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-ink-100 text-ink-500">
              <Icon.document className="size-3.5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="truncate text-[11px] font-medium text-ink-800">{r.name}</span>
                <span className="shrink-0 font-mono text-[9px] text-ink-400">{r.version}</span>
              </div>
              <div className="mt-1">
                <StatusBadge status={r.status} tone={r.tone} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarPreview() {
  const days = ["M", "T", "W", "T", "F"];
  const active = [1, 3, 4];
  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        This week
      </p>
      <div className="grid grid-cols-5 gap-1.5 text-center">
        {days.map((d, i) => (
          <div key={`${d}-${i}`} className="space-y-1">
            <span className="text-[9px] font-semibold uppercase text-ink-400">{d}</span>
            <span
              className={`grid aspect-square place-items-center rounded-md text-[10px] font-medium ${
                active.includes(i)
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-white text-ink-500 ring-1 ring-ink-900/5"
              }`}
            >
              {i + 8}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditPreview() {
  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        Findings queue
      </p>
      <div className="mt-2 space-y-1.5">
        {[
          { label: "Delegations exception", sev: "High" },
          { label: "Vendor register gap", sev: "Med" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-lg bg-white/80 px-2.5 py-2 ring-1 ring-ink-900/5"
          >
            <span className="text-[11px] font-medium text-ink-800">{row.label}</span>
            <span className="rounded-md bg-accent-100 px-1.5 py-0.5 text-[9px] font-semibold text-accent-800">
              {row.sev}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttestationPreview() {
  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        Sign-off path
      </p>
      <div className="mt-2 flex items-center gap-1.5">
        {["Owner", "Reviewer", "Exec"].map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-1.5">
            <span
              className={`flex-1 rounded-lg px-2 py-2 text-center text-[10px] font-semibold ${
                i < 2
                  ? "bg-brand-100 text-brand-800"
                  : "bg-white text-ink-500 ring-1 ring-ink-900/8"
              }`}
            >
              {step}
            </span>
            {i < 2 ? <span className="text-ink-300">→</span> : null}
          </div>
        ))}
      </div>
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

function CardCopy({ cap }: { cap: Capability }) {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
        {cap.eyebrow}
      </p>
      <h3 className="mt-2 font-display text-base font-bold tracking-tight text-ink-900 sm:text-lg">
        {cap.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{cap.body}</p>
    </>
  );
}

function CapabilityCard({
  cap,
  layout,
}: {
  cap: Capability;
  layout: (typeof LAYOUT)[number];
}) {
  const { variant, index, className } = layout;

  if (variant === "featured") {
    return (
      <article
        className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 sm:p-7 ${className}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.14),transparent_68%)]"
        />
        <div className="border-beam absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
            {index}
          </span>
          <CapabilityIcon name={cap.icon} />
        </div>
        <div className="relative mt-5">
          <CardCopy cap={cap} />
        </div>
        <FeaturedObligationsPanel />
      </article>
    );
  }

  if (variant === "dark") {
    return (
      <article
        className={`group relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900 p-6 text-white sm:p-7 ${className}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.12]"
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
                {index}
              </span>
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-300">
                <Icon.chart className="size-[1.15rem]" />
              </span>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
              {cap.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight sm:text-2xl">
              {cap.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{cap.body}</p>
          </div>
          <div className="w-full shrink-0 sm:max-w-[220px]">
            <ReportingPreview />
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-ink-500">
              Live compliance posture
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white/90 p-5 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-brand-200/80 hover:shadow-card sm:p-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
          {index}
        </span>
        <CapabilityIcon name={cap.icon} />
      </div>
      <div className="mt-4 flex-1">
        <CardCopy cap={cap} />
      </div>
      {cap.icon === "calendar" ? <CalendarPreview /> : null}
      {cap.icon === "document" ? <PolicyDocumentsPreview /> : null}
      {cap.icon === "audit" ? <AuditPreview /> : null}
      {cap.icon === "workflow" ? <AttestationPreview /> : null}
    </article>
  );
}

/** Layout order: featured obligations, calendar, policy, audit, attestations, dark reporting */
const CARD_ORDER = [0, 1, 2, 3, 4, 5] as const;

export function CapabilitiesBento() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />

      <Container className="relative">
        <SectionHeading
          eyebrow="How it works"
          title="From obligation mapping to audit-ready evidence"
          subtitle="Core capabilities that replace spreadsheets and scattered registers with one auditable source of truth."
        />

        <div className="mt-12 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {CARD_ORDER.map((capIndex, layoutIndex) => (
            <CapabilityCard
              key={CAPABILITIES[capIndex]!.eyebrow}
              cap={CAPABILITIES[capIndex]!}
              layout={LAYOUT[layoutIndex]!}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ShimmerButton href={LINKS.demo} className="!h-11 !px-6 !text-sm">
            Book a demo
          </ShimmerButton>
        </div>
      </Container>
    </section>
  );
}
