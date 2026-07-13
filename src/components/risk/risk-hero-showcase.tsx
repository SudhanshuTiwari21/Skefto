import Image from "next/image";
import { Icon } from "@/components/icons";

function PanelChrome({ title }: Readonly<{ title: string }>) {
  const LockIcon = Icon.lock;
  return (
    <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <Image
        src="/skefto-logo.svg"
        alt=""
        width={88}
        height={19}
        className="ml-1 h-3.5 w-auto shrink-0"
        aria-hidden
      />
      <span className="inline-flex min-w-0 items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100">
        <LockIcon className="size-3 shrink-0 text-brand-500" aria-hidden />
        <span className="truncate">app.skefto.com</span>
      </span>
      <span className="ml-auto shrink-0 text-[11px] font-semibold text-ink-400">{title}</span>
    </div>
  );
}

function HeatMapCell({ level }: Readonly<{ level: 0 | 1 | 2 | 3 | 4 }>) {
  const tones = [
    "bg-ink-50",
    "bg-brand-100",
    "bg-brand-300",
    "bg-brand-500",
    "bg-brand-700",
  ] as const;
  return <span className={`aspect-square rounded-sm ${tones[level]}`} />;
}

/** Primary window: risk overview KPIs + large heat map */
function PrimaryPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="Risk overview" />
      <div className="space-y-4 p-5 sm:p-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "On track", v: "186", tone: "text-brand-600" },
            { k: "Elevated", v: "24", tone: "text-accent-600" },
            { k: "Overdue", v: "3", tone: "text-ink-900" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-ink-100 bg-ink-50/70 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500">{s.k}</p>
              <p className={`mt-1 font-display text-2xl font-extrabold leading-none ${s.tone}`}>{s.v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-ink-100 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-800">Risk heat map</p>
            <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              Live
            </span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-1.5 sm:gap-2">
            {([3, 2, 4, 1, 2, 2, 3, 4, 2, 1, 1, 2, 3, 2, 4, 0, 1, 2, 3, 1, 2, 3, 4, 2, 1] as const).map(
              (level, i) => (
                <HeatMapCell key={i} level={level} />
              ),
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-brand-100" /> Low
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-brand-300" /> Medium
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-brand-500" /> High
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-brand-700" /> Extreme
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Secondary window: compact risk register list */
function RegisterPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="Risk register" />
      <div className="p-4 sm:p-5">
        <div className="overflow-hidden rounded-lg border border-ink-100">
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
            <span>Ref</span>
            <span>Risk</span>
            <span>Rating</span>
          </div>
          {[
            { id: "RSK-012", name: "Cyber security breach", rating: "High", tone: "brand" as const },
            { id: "RSK-028", name: "Third-party service failure", rating: "Medium", tone: "accent" as const },
            { id: "RSK-041", name: "WHS incident, depot", rating: "Low", tone: "ink" as const },
            { id: "RSK-055", name: "Compliance attestation lag", rating: "Medium", tone: "accent" as const },
          ].map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-ink-100 bg-white px-3 py-2.5"
            >
              <span className="font-mono text-[11px] text-ink-400">{r.id}</span>
              <p className="text-[12px] font-semibold text-ink-900">{r.name}</p>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  r.tone === "brand"
                    ? "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                    : r.tone === "accent"
                      ? "bg-accent-50 text-accent-700 ring-1 ring-accent-100"
                      : "bg-ink-50 text-ink-600 ring-1 ring-ink-100"
                }`}
              >
                {r.rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Two-window hero visual (compliance-style):
 * large heat-map primary + smaller register secondary.
 */
export function RiskHeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(141,61,151,0.10),transparent_68%)]"
      />
      <div className="animate-hero-screen relative">
        <div className="border-beam border-beam--panel relative overflow-hidden rounded-2xl bg-white shadow-[0_28px_90px_-44px_rgba(45,50,62,0.45),0_0_0_1px_rgba(255,255,255,0.9)]">
          <PrimaryPanel />
        </div>
        <div className="pointer-events-none absolute -bottom-6 -right-3 w-[min(100%,18.5rem)] sm:-right-4 sm:w-[19.5rem] lg:-right-6 lg:w-[21rem]">
          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-[0_20px_60px_-36px_rgba(45,50,62,0.4)]">
            <div className="origin-top-left scale-[0.92]">
              <RegisterPanel />
            </div>
          </div>
        </div>
      </div>
      {/* Spacer so overlapping register doesn't collide with content below */}
      <div className="h-24 sm:h-28" aria-hidden />
    </div>
  );
}
