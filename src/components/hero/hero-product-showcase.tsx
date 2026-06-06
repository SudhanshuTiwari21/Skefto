import { Icon } from "@/components/icons";

function PanelChrome({ title }: Readonly<{ title: string }>) {
  const LockIcon = Icon.lock;
  return (
    <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100">
        <LockIcon className="size-3 text-brand-500" aria-hidden />
        app.skefto.com
      </span>
      <span className="ml-auto text-[11px] font-semibold text-ink-400">
        {title}
      </span>
    </div>
  );
}

function MetricTile({
  k,
  v,
  tone,
}: Readonly<{
  k: string;
  v: string;
  tone: "brand" | "accent" | "ink";
}>) {
  const toneClassMap = {
    brand: "text-brand-600",
    accent: "text-accent-600",
    ink: "text-ink-900",
  } as const;
  const toneClass = toneClassMap[tone];
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50/70 p-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500">
        {k}
      </p>
      <p className={`mt-1 font-display text-2xl font-extrabold leading-none ${toneClass}`}>
        {v}
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100">
        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-brand-500/70 to-accent-500/70" />
      </div>
    </div>
  );
}

function EnterpriseDashboardPanel() {
  const ChartIcon = Icon.chart;
  return (
    <div className="bg-white">
      <PanelChrome title="Compliance overview" />
      <div className="space-y-4 p-5">
        <div className="grid grid-cols-3 gap-3">
          <MetricTile k="On track" v="248" tone="brand" />
          <MetricTile k="Due this week" v="12" tone="accent" />
          <MetricTile k="Overdue" v="0" tone="ink" />
        </div>

        <div className="rounded-xl border border-ink-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-700">Compliance by month</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
              <ChartIcon className="size-3.5" aria-hidden />
              +18%
            </span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-2">
            {[42, 60, 48, 72, 66, 88, 80].map((h) => (
              <div
                key={h}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-200 to-brand-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-ink-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink-700">Obligations needing attention</p>
            <span className="text-[11px] font-semibold text-ink-400">Next 30 days</span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { t: "Privacy Act attestation", s: "On track", tone: "brand" as const },
              { t: "WHS audit – depot", s: "Due 3d", tone: "accent" as const },
              { t: "NDIS evidence pack", s: "Due 5d", tone: "accent" as const },
            ].map((r) => (
              <div
                key={r.t}
                className="flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2"
              >
                <p className="text-[12px] font-semibold text-ink-900">{r.t}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    r.tone === "brand"
                      ? "bg-brand-100 text-brand-800"
                      : "bg-accent-100 text-accent-800"
                  }`}
                >
                  {r.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="Compliance calendar" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-700">March 2026</p>
          <div className="flex items-center gap-3 text-[10px] font-medium text-ink-500">
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-brand-400" aria-hidden />
              <span>On track</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-accent-400" aria-hidden />
              <span>Due</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-amber-300" aria-hidden />
              <span>At risk</span>
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
          {"MTWTFSS".split("").map((d) => (
            <span key={`day-${d}`} className="text-[9px] font-semibold uppercase text-ink-400">
              {d}
            </span>
          ))}
          {Array.from({ length: 28 }, (_, i) => i + 1).map((n) => {
            const on = [2, 4, 9, 11, 16, 18, 23].includes(n);
            return (
              <span
                key={n}
                className={`grid aspect-square place-items-center rounded-md text-[10px] font-semibold ${
                  on ? "bg-brand-600 text-white shadow-sm" : "text-ink-500"
                }`}
              >
                {n}
              </span>
            );
          })}
        </div>

        <div className="mt-4 rounded-xl border border-ink-100 bg-ink-50/60 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
            Next deadline
          </p>
          <p className="mt-1 text-sm font-semibold text-ink-800">
            Privacy attestation due in 3 days
          </p>
        </div>
      </div>
    </div>
  );
}

function RegisterPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="Obligations register" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-700">Obligations register</p>
          <span className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-ink-100">
            312 active
          </span>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-ink-100">
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
            <span>Ref</span>
            <span>Obligation</span>
            <span>Status</span>
          </div>
          {[
            { id: "OBL-014", name: "Notifiable Data Breaches", status: "Met", tone: "brand" as const },
            { id: "OBL-027", name: "Local Government annual report", status: "Due 30d", tone: "accent" as const },
            { id: "OBL-039", name: "Child safe standards", status: "Met", tone: "brand" as const },
            { id: "OBL-051", name: "APRA CPS 230 controls", status: "Review", tone: "amber" as const },
          ].map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-ink-100 bg-white px-3 py-2.5"
            >
              <span className="font-mono text-[11px] text-ink-400">{r.id}</span>
              <p className="text-[12px] font-semibold text-ink-900">{r.name}</p>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${(
                  {
                    brand: "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
                    accent: "bg-accent-50 text-accent-700 ring-1 ring-accent-100",
                    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
                  } as const
                )[r.tone]}`}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroProductShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Subtle light theme accent (no “spacey” fog) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(141,61,151,0.10),transparent_68%)]"
      />

      <div className="animate-hero-screen relative">
        {/* Primary panel */}
        <div className="border-beam border-beam--panel relative overflow-hidden rounded-2xl bg-white shadow-[0_28px_90px_-44px_rgba(45,50,62,0.45),0_0_0_1px_rgba(255,255,255,0.9)]">
          {/* Subtle top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          {/* Subtle scan/shine for “marketing” feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.10)_44%,transparent_58%)] [background-size:240%_100%] animate-gradient-text"
            style={{ "--bg-size": "240%" } as React.CSSProperties}
          />

          <EnterpriseDashboardPanel />
        </div>

        {/* Supporting panels (adds depth + “platform” feel) */}
        <div className="pointer-events-none absolute -right-5 top-10 hidden w-[21.5rem] lg:block">
          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-[0_24px_70px_-40px_rgba(45,50,62,0.35)]">
            <div className="scale-[0.86] origin-top-left">
              <CalendarPanel />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -left-5 bottom-10 hidden w-[21.5rem] lg:block">
          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-[0_24px_70px_-40px_rgba(45,50,62,0.35)]">
            <div className="scale-[0.86] origin-top-left">
              <RegisterPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
