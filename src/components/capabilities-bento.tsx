import { CAPABILITIES, LINKS } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { Container, InlineLink, SectionHeading, ShimmerButton } from "@/components/ui";

type Capability = (typeof CAPABILITIES)[number];

/** Grid: row1 = obligations | calendar | policy - row2 = reporting | audit | attestations */
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

function ObligationsPreview() {
  const rows: ObligationRow[] = [
    { name: "Privacy Act - annual attestation", status: "On track", tone: "brand" },
    { name: "WHS audit - regional depots", status: "Due 4d", tone: "accent" },
    { name: "NDIS evidence pack Q2", status: "In review", tone: "slate" },
  ];
  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <ObligationsList rows={rows} />
    </div>
  );
}

function FeaturedObligationsPanel() {
  const rows: ObligationRow[] = [
    { name: "Privacy Act - annual attestation", status: "On track", tone: "brand" },
    { name: "WHS audit - regional depots", status: "Due 4d", tone: "accent" },
    { name: "NDIS evidence pack Q2", status: "In review", tone: "slate" },
    { name: "Local Government annual report", status: "On track", tone: "brand" },
  ];

  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/50">
      <div className="flex items-center justify-between gap-3 border-b border-ink-900/6 px-4 py-3">
        <p className="text-xs font-semibold text-ink-800">Live obligations register</p>
        <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
          312 active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-ink-900/6 bg-ink-100/80">
        {[
          { label: "On track", value: "248", tone: "text-brand-600" },
          { label: "Due soon", value: "12", tone: "text-accent-600" },
          { label: "Overdue", value: "0", tone: "text-ink-900" },
        ].map((s) => (
          <div key={s.label} className="bg-white px-3 py-2.5 text-center">
            <p className={`font-display text-lg font-bold leading-none ${s.tone}`}>{s.value}</p>
            <p className="mt-1 text-[10px] text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="px-3 pt-3">
        <div className="flex items-center gap-2 rounded-lg border border-ink-200/80 bg-white px-3 py-2">
          <Icon.register className="size-3.5 shrink-0 text-ink-400" />
          <span className="text-xs text-ink-400">Search obligations…</span>
        </div>
      </div>

      <div className="space-y-2 p-3 pt-2">
        <ObligationsList rows={rows} />
      </div>
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
    { name: "Code of Conduct", version: "v4.0", status: "In approval", tone: "slate" },
  ];

  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <div className="flex items-center justify-between gap-2 border-b border-ink-900/6 pb-2.5">
        <p className="text-[10px] font-semibold text-ink-700">Policy library</p>
        <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700">
          86 docs
        </span>
      </div>
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
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const active = [2, 4, 9, 11, 16, 18, 23];
  return (
    <div className="mt-5 rounded-xl border border-ink-900/6 bg-ink-50/60 p-3">
      <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-semibold uppercase tracking-wider text-ink-400">
        {days.map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }, (_, i) => {
          const n = i + 1;
          const on = active.includes(n);
          return (
            <span
              key={n}
              className={`grid aspect-square place-items-center rounded-md text-[10px] font-medium ${
                on
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-ink-500"
              }`}
            >
              {n}
            </span>
          );
        })}
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

function CapabilityCard({
  cap,
  layout,
  isAudit,
}: {
  cap: Capability;
  layout: (typeof LAYOUT)[number];
  isAudit: boolean;
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
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.12),transparent_70%)]"
        />
        <div className="border-beam absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
            {index}
          </span>
          <CapabilityIcon name={cap.icon} />
        </div>
        <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">
          {cap.title}
        </h3>
        <p className="relative mt-2 max-w-md text-sm leading-relaxed text-ink-600">
          {cap.body}
        </p>
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
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-0 size-40 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.35),transparent_65%)]"
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
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
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

  const showCalendar = cap.icon === "calendar";
  const showPolicyDocs = cap.icon === "document";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white/90 p-5 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-brand-200/80 hover:shadow-card sm:p-6 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-ink-400">
          {index}
        </span>
        <CapabilityIcon name={cap.icon} />
      </div>
      <h3 className="mt-4 font-display text-base font-bold tracking-tight text-ink-900 sm:text-lg">
        {cap.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{cap.body}</p>
      {showCalendar ? <CalendarPreview /> : null}
      {showPolicyDocs ? <PolicyDocumentsPreview /> : null}
      {isAudit ? (
        <p className="mt-4 border-t border-ink-900/6 pt-4 text-sm">
          <InlineLink href={LINKS.solutions.incident}>
            Connect incident workflows
          </InlineLink>
        </p>
      ) : null}
    </article>
  );
}

export function CapabilitiesBento() {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-sand-50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(141,61,151,0.07),transparent)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Everything you need to manage compliance in one place"
          subtitle="Replace spreadsheets and scattered registers with a single, auditable source of truth."
        />

        <div className="mt-14 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard
              key={cap.title}
              cap={cap}
              layout={LAYOUT[i]!}
              isAudit={cap.title.startsWith("Audit")}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <ShimmerButton href={LINKS.demo} className="!h-11 !px-6 !text-sm">
            Book a demo
          </ShimmerButton>
        </div>
      </Container>
    </section>
  );
}
