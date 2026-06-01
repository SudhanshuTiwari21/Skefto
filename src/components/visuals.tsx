import { Icon } from "@/components/icons";

/* Browser-style chrome wrapper for product mockups */
function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100">
          <Icon.lock className="size-3 text-brand-500" />
          app.skefto.com
        </span>
        <span className="ml-auto text-[11px] font-semibold text-ink-400">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function StatusPill({ tone, children }: { tone: "ok" | "due" | "risk"; children: React.ReactNode }) {
  const map = {
    ok: "bg-brand-50 text-brand-700 ring-brand-100",
    due: "bg-accent-50 text-accent-700 ring-accent-100",
    risk: "bg-amber-50 text-amber-700 ring-amber-100",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ${map[tone]}`}>
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/* ---------------------- Hero: compliance dashboard ---------------------- */
export function ComplianceDashboard() {
  const bars = [42, 60, 48, 72, 66, 88, 80];
  const rows = [
    { name: "Privacy Act attestation", owner: "Risk & Governance", tone: "ok" as const, label: "On track" },
    { name: "WHS audit - Depot", owner: "Safety", tone: "due" as const, label: "Due in 3d" },
    { name: "Records policy review", owner: "Corporate", tone: "ok" as const, label: "On track" },
    { name: "NDIS evidence pack", owner: "Care Services", tone: "due" as const, label: "Due in 5d" },
  ];
  return (
    <Frame label="Compliance overview">
      <div className="space-y-4 p-5">
        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "On track", v: "248", tone: "text-brand-600", sub: "obligations" },
            { k: "Due this week", v: "12", tone: "text-accent-600", sub: "tasks" },
            { k: "Overdue", v: "0", tone: "text-ink-900", sub: "items" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-ink-100 bg-ink-50/60 p-3">
              <p className="text-[11px] font-medium text-ink-500">{s.k}</p>
              <p className={`mt-1 font-display text-2xl font-extrabold ${s.tone}`}>{s.v}</p>
              <p className="text-[10px] text-ink-400">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="rounded-xl border border-ink-100 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-700">Compliance by month</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
              <Icon.chart className="size-3.5" />
              +18%
            </span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* obligation rows */}
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-lg border border-ink-100 px-3 py-2">
              <div className="flex items-center gap-2.5">
                <span className="grid size-7 place-items-center rounded-md bg-brand-50 text-brand-600">
                  <Icon.register className="size-3.5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold leading-tight text-ink-900">{r.name}</p>
                  <p className="text-[10px] text-ink-400">{r.owner}</p>
                </div>
              </div>
              <StatusPill tone={r.tone}>{r.label}</StatusPill>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ----------------------- Obligations register table ----------------------- */
export function RegisterMockup() {
  const rows = [
    { id: "OBL-014", name: "Notifiable Data Breaches", owner: "DPO", tone: "ok" as const, label: "Met" },
    { id: "OBL-027", name: "Local Government annual report", owner: "Corporate", tone: "due" as const, label: "Due 30d" },
    { id: "OBL-039", name: "Child safe standards", owner: "Education", tone: "ok" as const, label: "Met" },
    { id: "OBL-051", name: "APRA CPS 230 controls", owner: "Risk", tone: "risk" as const, label: "Review" },
  ];
  return (
    <Frame label="Obligations register">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-bold text-ink-900">Obligations register</p>
          <span className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-semibold text-brand-700">312 active</span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-ink-100">
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
            <span>Ref</span>
            <span>Obligation</span>
            <span>Status</span>
          </div>
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-ink-100 px-3 py-2.5">
              <span className="font-mono text-[11px] text-ink-400">{r.id}</span>
              <div>
                <p className="text-[13px] font-semibold leading-tight text-ink-900">{r.name}</p>
                <p className="text-[10px] text-ink-400">Owner · {r.owner}</p>
              </div>
              <StatusPill tone={r.tone}>{r.label}</StatusPill>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* --------------------------- Compliance calendar --------------------------- */
export function CalendarMockup() {
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  const events: Record<number, "ok" | "due" | "risk"> = {
    4: "ok",
    9: "due",
    12: "ok",
    16: "risk",
    18: "due",
    23: "ok",
    27: "due",
  };
  return (
    <Frame label="Compliance calendar">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-bold text-ink-900">March 2026</p>
          <div className="flex items-center gap-3 text-[10px] font-medium text-ink-500">
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-full bg-brand-500" />On track</span>
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-full bg-accent-500" />Due</span>
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-full bg-amber-400" />At risk</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-[10px] font-semibold text-ink-400">{d}</span>
          ))}
          {days.map((d, i) => {
            const valid = d >= 1 && d <= 31;
            const ev = events[d];
            const toneBg =
              ev === "ok" ? "bg-brand-500" : ev === "due" ? "bg-accent-500" : ev === "risk" ? "bg-amber-400" : "";
            return (
              <div
                key={i}
                className={`relative grid h-8 place-items-center rounded-md text-[11px] ${
                  valid ? "text-ink-700" : "text-transparent"
                } ${ev ? "bg-ink-50 font-bold text-ink-900" : ""}`}
              >
                {valid ? d : "."}
                {ev ? (
                  <span className={`absolute bottom-1 size-1.5 rounded-full ${toneBg}`} />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-2.5 rounded-lg bg-accent-50 px-3 py-2 text-accent-800">
          <Icon.calendar className="size-4" />
          <p className="text-[12px] font-semibold">Next: Privacy attestation due in 3 days</p>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------- Wide app-shell screenshot (hero protagonist) ---------------- */
export function HeroDashboard() {
  const nav: { icon: keyof typeof Icon; label: string; active?: boolean }[] = [
    { icon: "shield", label: "Compliance", active: true },
    { icon: "register", label: "Obligations" },
    { icon: "calendar", label: "Calendar" },
    { icon: "audit", label: "Audits" },
    { icon: "document", label: "Policies" },
    { icon: "chart", label: "Reports" },
  ];
  const kpis = [
    { k: "Obligations on track", v: "248", d: "+12", tone: "text-brand-600" },
    { k: "Due this week", v: "12", d: "tasks", tone: "text-accent-600" },
    { k: "Overdue", v: "0", d: "items", tone: "text-ink-900" },
    { k: "Compliance score", v: "98%", d: "+4%", tone: "text-brand-600" },
  ];
  const bars = [44, 58, 50, 70, 62, 80, 74, 90];
  const rows = [
    { id: "OBL-014", name: "Notifiable Data Breaches scheme", owner: "Data Protection Officer", tone: "ok" as const, label: "On track" },
    { id: "OBL-027", name: "Local Government annual report", owner: "Corporate Services", tone: "due" as const, label: "Due in 6d" },
    { id: "OBL-039", name: "Child safe standards review", owner: "Education", tone: "ok" as const, label: "On track" },
    { id: "OBL-051", name: "APRA CPS 230 control test", owner: "Risk & Governance", tone: "risk" as const, label: "Review" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card">
      {/* top chrome */}
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="size-2.5 rounded-full bg-ink-300" />
        <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100">
          <Icon.lock className="size-3 text-brand-500" />
          app.skefto.com/compliance
        </span>
      </div>

      <div className="grid grid-cols-[180px_1fr] sm:grid-cols-[200px_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col gap-1 border-r border-ink-100 bg-sand-50 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-2">
            <span className="grid size-7 place-items-center rounded-lg bg-brand-600 text-white">
              <Icon.shield className="size-4" />
            </span>
            <span className="font-display text-sm font-bold text-ink-900">Skefto</span>
          </div>
          {nav.map((n) => {
            const I = Icon[n.icon];
            return (
              <span
                key={n.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium ${
                  n.active
                    ? "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                    : "text-ink-500"
                }`}
              >
                <I className="size-4" />
                {n.label}
              </span>
            );
          })}
          <div className="mt-auto rounded-xl bg-ink-900 p-3 text-white">
            <p className="text-[11px] font-semibold">Audit-ready</p>
            <p className="mt-0.5 text-[10px] text-ink-300">All evidence current</p>
          </div>
        </aside>

        {/* main */}
        <div className="p-4 sm:p-5">
          {/* topbar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-display text-sm font-bold text-ink-900 sm:text-base">
                Compliance overview
              </p>
              <p className="text-[11px] text-ink-400">Q1 2026 · All entities</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-[11px] text-ink-400 ring-1 ring-ink-100 md:inline-flex">
                Search obligations…
              </span>
              <span className="grid size-7 place-items-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700">
                SK
              </span>
            </div>
          </div>

          {/* kpis */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kpis.map((s) => (
              <div key={s.k} className="rounded-xl border border-ink-100 bg-white p-3">
                <p className="text-[10px] font-medium text-ink-500">{s.k}</p>
                <div className="mt-1 flex items-end justify-between">
                  <p className={`font-display text-xl font-extrabold ${s.tone}`}>{s.v}</p>
                  <span className="text-[10px] font-semibold text-ink-400">{s.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* chart + side panel */}
          <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-ink-100 p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-ink-700">Obligations met by month</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
                  <Icon.chart className="size-3.5" />
                  +18%
                </span>
              </div>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-ink-100 p-3.5">
              <p className="text-[12px] font-semibold text-ink-700">By framework</p>
              <div className="mt-3 space-y-2.5">
                {[
                  { l: "ISO 37301", v: 96 },
                  { l: "Privacy Act", v: 100 },
                  { l: "NDIS", v: 88 },
                  { l: "Local Gov Act", v: 92 },
                ].map((f) => (
                  <div key={f.l}>
                    <div className="flex justify-between text-[10px] text-ink-500">
                      <span>{f.l}</span>
                      <span className="font-semibold text-ink-700">{f.v}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink-100">
                      <div className="h-full rounded-full bg-accent-500" style={{ width: `${f.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* table */}
          <div className="mt-3 overflow-hidden rounded-xl border border-ink-100">
            <div className="grid grid-cols-[auto_1fr_auto] gap-3 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
              <span>Ref</span>
              <span>Obligation</span>
              <span>Status</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-ink-100 px-3 py-2.5"
              >
                <span className="font-mono text-[11px] text-ink-400">{r.id}</span>
                <div>
                  <p className="text-[12px] font-semibold leading-tight text-ink-900">{r.name}</p>
                  <p className="text-[10px] text-ink-400">{r.owner}</p>
                </div>
                <StatusPill tone={r.tone}>{r.label}</StatusPill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Orbiting circles hero background (Magic UI) ----------------- */
type Tone = "brand" | "accent" | "slate";
const TONE: Record<Tone, string> = {
  brand: "text-brand-600",
  accent: "text-accent-600",
  slate: "text-ink-700",
};

type OrbitItem = {
  icon: keyof typeof Icon;
  r: number;
  dur: number;
  angle: number;
  tone: Tone;
  rev?: boolean;
};

/** Radii in px for a 640px orbit stage - copy sits inside the inner ring (~336px Ø) */
const ORBIT_RINGS = [168, 268, 312];
const ORBIT_ITEMS: OrbitItem[] = [
  // middle ring (reverse)
  { icon: "calendar", r: 268, dur: 44, angle: 58, tone: "accent", rev: true },
  { icon: "audit", r: 268, dur: 44, angle: 178, tone: "brand", rev: true },
  { icon: "document", r: 268, dur: 44, angle: 302, tone: "slate", rev: true },
  // outer ring
  { icon: "shield", r: 312, dur: 60, angle: 18, tone: "brand" },
  { icon: "refresh", r: 312, dur: 60, angle: 92, tone: "accent" },
  { icon: "register", r: 312, dur: 60, angle: 158, tone: "brand" },
  { icon: "lock", r: 312, dur: 60, angle: 232, tone: "slate" },
  { icon: "chart", r: 312, dur: 60, angle: 300, tone: "accent" },
];

export function OrbitField() {
  return (
    <div className="relative size-[640px] shrink-0" aria-hidden>
      {/* rings - inner ring frames hero copy */}
      {ORBIT_RINGS.map((r, i) => (
        <div
          key={r}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
            i === 0
              ? "border-ink-400/55"
              : i === 1
                ? "border-brand-300/40"
                : "border-ink-300/50"
          }`}
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}
      {/* faint center halo */}
      <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(141,61,151,0.10),transparent)]" />

      {/* orbiting entities */}
      {ORBIT_ITEMS.map((it, i) => {
        const I = Icon[it.icon];
        return (
          <span
            key={`${it.icon}-${i}`}
            className={`orbit-item ${it.rev ? "orbit-item--rev" : ""} grid size-12 place-items-center rounded-2xl border border-ink-900/8 bg-white shadow-card sm:size-14 ${TONE[it.tone]}`}
            style={
              {
                "--orbit-r": `${it.r}px`,
                "--orbit-duration": `${it.dur}s`,
                "--orbit-angle": `${it.angle}deg`,
              } as React.CSSProperties
            }
          >
            <I className="size-5 sm:size-6" />
          </span>
        );
      })}
    </div>
  );
}

/* ----------------- News / capability ticker (sparkle dividers) ----------------- */
const TICKER_ITEMS = [
  "Obligations register",
  "Regulatory change",
  "Compliance calendar",
  "Audits & actions",
  "Attestations",
  "Board reporting",
  "Data sovereignty",
  "ISO 37301",
];

export function NewsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative shrink-0 overflow-hidden border-t border-ink-200/70 bg-white/55 backdrop-blur-sm [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center py-2.5 sm:py-3">
        {items.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
              {t}
            </span>
            <Icon.spark className="size-3 shrink-0 text-brand-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------- Hero bento grid (2026 SaaS protagonist) ----------------- */
function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function HeroBento() {
  const obligations = [
    { name: "Privacy Act attestation", owner: "Risk & Governance", tone: "ok" as const, label: "On track" },
    { name: "WHS audit - Depot", owner: "Safety", tone: "due" as const, label: "Due 3d" },
    { name: "NDIS evidence pack", owner: "Care Services", tone: "due" as const, label: "Due 5d" },
  ];
  const frameworks = ["ISO 37301", "ISO 27001", "Privacy Act", "APRA CPS 230", "NDIS", "Aged Care", "Local Gov Act"];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-4 lg:grid-rows-2">
      {/* A - Compliance posture (featured) */}
      <BentoCard className="col-span-2 flex flex-col lg:row-span-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
              Compliance posture
            </p>
            <p className="mt-1 text-sm text-ink-500">Live across all entities</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
            <Icon.shield className="size-3.5" />
            Audit-ready
          </span>
        </div>

        <div className="mt-5 flex items-center gap-5">
          {/* score ring */}
          <div
            className="relative grid size-28 shrink-0 place-items-center rounded-full sm:size-32"
            style={{
              background:
                "conic-gradient(var(--color-brand-600) 0% 98%, var(--color-ink-100) 98% 100%)",
            }}
          >
            <div className="absolute inset-[10px] grid place-items-center rounded-full bg-white">
              <div className="text-center">
                <p className="font-display text-3xl font-extrabold text-ink-900">98%</p>
                <p className="text-[10px] font-medium text-ink-500">compliant</p>
              </div>
            </div>
          </div>
          {/* mini stats */}
          <div className="grid flex-1 gap-2.5">
            {[
              { k: "On track", v: "248", tone: "text-brand-600" },
              { k: "Due this week", v: "12", tone: "text-accent-600" },
              { k: "Overdue", v: "0", tone: "text-ink-900" },
            ].map((s) => (
              <div key={s.k} className="flex items-center justify-between rounded-lg bg-ink-50/70 px-3 py-2">
                <span className="text-xs text-ink-500">{s.k}</span>
                <span className={`font-display text-base font-bold ${s.tone}`}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* mini trend */}
        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-ink-600">Obligations met by month</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
              <Icon.chart className="size-3.5" /> +18%
            </span>
          </div>
          <div className="mt-2.5 flex h-12 items-end gap-1.5">
            {[44, 58, 50, 70, 62, 80, 74, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </BentoCard>

      {/* B - Live obligations */}
      <BentoCard className="col-span-2">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-bold text-ink-900">Obligations register</p>
          <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
            312 active
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {obligations.map((r) => (
            <div key={r.name} className="flex items-center justify-between gap-2 rounded-lg border border-ink-100 px-2.5 py-2">
              <div className="flex min-w-0 items-center gap-2">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-600">
                  <Icon.register className="size-3" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-semibold leading-tight text-ink-900">{r.name}</p>
                  <p className="truncate text-[10px] text-ink-400">{r.owner}</p>
                </div>
              </div>
              <StatusPill tone={r.tone}>{r.label}</StatusPill>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* C - Frameworks */}
      <BentoCard className="col-span-1">
        <span className="grid size-9 place-items-center rounded-lg bg-ink-900 text-brand-300">
          <Icon.map className="size-4.5" />
        </span>
        <p className="mt-3 font-display text-sm font-bold text-ink-900">Mapped to AU standards</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {frameworks.map((f) => (
            <span key={f} className="rounded-md bg-ink-50 px-2 py-1 text-[10px] font-semibold text-ink-600">
              {f}
            </span>
          ))}
        </div>
      </BentoCard>

      {/* D - Data residency */}
      <BentoCard className="col-span-1 flex flex-col">
        <span className="grid size-9 place-items-center rounded-lg bg-accent-50 text-accent-600">
          <Icon.globe className="size-4.5" />
        </span>
        <p className="mt-3 font-display text-sm font-bold text-ink-900">Hosted in Australia</p>
        <p className="mt-1 text-[11px] leading-5 text-ink-500">
          Government-certified, sovereign data centres.
        </p>
        <div className="relative mt-auto flex items-center justify-center pt-3">
          <AustraliaMark />
        </div>
      </BentoCard>
    </div>
  );
}

/* stylised Australia silhouette with a sovereignty pin */
function AustraliaMark() {
  return (
    <div className="relative">
      <svg viewBox="0 0 100 90" className="h-16 w-auto text-accent-200" aria-hidden>
        <path
          fill="currentColor"
          d="M33 8c5-3 11 2 16 1s9-5 14-2c4 2 3 8 7 10s10 0 13 5-2 11 1 16 8 7 6 13-9 4-12 9-2 12-8 14-11-4-17-3-10 6-16 4-6-9-11-12-12-2-15-8 3-10 1-16-8-8-6-14 9-4 12-9 1-9 5-12 7 1 10-1z"
        />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-accent-600 ring-2 ring-white" />
        </span>
      </span>
    </div>
  );
}

/* ------------------------------ Logo marquee ------------------------------ */
export function LogoMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((c, i) => {
          const I = Icon[c.icon];
          return (
            <div key={`${c.name}-${i}`} className="flex shrink-0 items-center gap-2 text-ink-400">
              <I className="size-5 shrink-0" />
              <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight">
                {c.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------- Ecosystem hub ----------------------------- */
export function EcosystemDiagram() {
  const satellites = [
    { icon: "risk" as const, label: "Risk" },
    { icon: "incident" as const, label: "Incidents" },
    { icon: "safety" as const, label: "Safety" },
    { icon: "target" as const, label: "Strategy" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* connector rings */}
      <div className="absolute inset-6 rounded-full border border-dashed border-ink-200" />
      <div className="absolute inset-16 rounded-full border border-dashed border-ink-200" />

      {/* center */}
      <div className="absolute left-1/2 top-1/2 z-10 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow">
        <div className="text-center">
          <Icon.shield className="mx-auto size-7" />
          <p className="mt-1.5 font-display text-xs font-bold leading-tight">
            Compliance
            <span className="block font-normal text-brand-100">hub</span>
          </p>
        </div>
      </div>

      {/* satellites */}
      {satellites.map((s, i) => {
        const pos = [
          "left-1/2 top-0 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "left-1/2 bottom-0 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
        ][i];
        const I = Icon[s.icon];
        return (
          <div key={s.label} className={`absolute ${pos} z-10`}>
            <div className="flex flex-col items-center gap-1.5">
              <span className="grid size-14 place-items-center rounded-2xl border border-ink-100 bg-white text-brand-600 shadow-card">
                <I className="size-6" />
              </span>
              <span className="text-[11px] font-semibold text-ink-600">{s.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------- Logo cloud ------------------------------- */
const CLIENTS = [
  { name: "Riverina Shire", icon: "building" as const },
  { name: "Metro Health District", icon: "heart" as const },
  { name: "Statewide TAFE", icon: "cap" as const },
  { name: "Coastal City Council", icon: "gov" as const },
  { name: "Carewell Group", icon: "safety" as const },
  { name: "Northern University", icon: "cap" as const },
];

export function LogoCloud() {
  return (
    <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
      {CLIENTS.map((c) => {
        const I = Icon[c.icon];
        return (
          <div
            key={c.name}
            className="flex items-center gap-2 text-ink-400 grayscale transition hover:text-ink-600"
            title={c.name}
          >
            <I className="size-6 shrink-0" />
            <span className="font-display text-sm font-bold leading-tight tracking-tight">
              {c.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
