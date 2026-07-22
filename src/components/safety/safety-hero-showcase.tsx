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

/** Primary window: WHS overview KPIs + open hazards */
function PrimaryPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="WHS overview" />
      <div className="space-y-4 p-5 sm:p-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "Open hazards", v: "42", tone: "text-brand-600" },
            { k: "Overdue actions", v: "7", tone: "text-accent-600" },
            { k: "Inspections due", v: "12", tone: "text-ink-900" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-ink-100 bg-ink-50/70 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500">{s.k}</p>
              <p className={`mt-1 font-display text-2xl font-extrabold leading-none ${s.tone}`}>{s.v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-ink-100 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-800">Hazard register</p>
            <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              Live
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { id: "HAZ-118", name: "Manual handling, depot", rating: "High" },
              { id: "HAZ-124", name: "Psychosocial, rostering", rating: "Medium" },
              { id: "HAZ-131", name: "Slip hazard, foyer", rating: "Low" },
            ].map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-ink-400">{r.id}</p>
                  <p className="truncate text-xs font-semibold text-ink-900">{r.name}</p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-100">
                  {r.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Secondary window: inspections schedule */
function InspectionsPanel() {
  return (
    <div className="bg-white">
      <PanelChrome title="Inspections" />
      <div className="p-4 sm:p-5">
        <div className="overflow-hidden rounded-lg border border-ink-100">
          <div className="grid grid-cols-[1fr_auto] gap-3 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
            <span>Inspection</span>
            <span>Status</span>
          </div>
          {[
            { name: "Depot plant check", status: "Due 3d", tone: "brand" as const },
            { name: "Lab safety walk", status: "Scheduled", tone: "accent" as const },
            { name: "Contractor SWMS audit", status: "Complete", tone: "ink" as const },
            { name: "Office ergonomics", status: "Due 8d", tone: "brand" as const },
          ].map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-ink-100 bg-white px-3 py-2.5"
            >
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
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Two-window hero visual:
 * large WHS overview primary + smaller inspections secondary.
 */
export function SafetyHeroShowcase() {
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
              <InspectionsPanel />
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 sm:h-28" aria-hidden />
    </div>
  );
}
