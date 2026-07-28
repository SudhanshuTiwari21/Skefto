import Image from "next/image";
import { Icon } from "@/components/icons";

function PanelChrome({ title }: Readonly<{ title: string }>) {
  const LockIcon = Icon.lock;
  return (
    <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-3 py-2">
      <span className="size-2 rounded-full bg-ink-300" />
      <span className="size-2 rounded-full bg-ink-300" />
      <span className="size-2 rounded-full bg-ink-300" />
      <Image
        src="/skefto-logo.svg"
        alt=""
        width={72}
        height={16}
        className="ml-1 h-3 w-auto shrink-0"
        aria-hidden
      />
      <span className="inline-flex min-w-0 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-ink-500 ring-1 ring-ink-100">
        <LockIcon className="size-2.5 shrink-0 text-accent-600" aria-hidden />
        <span className="truncate">app.skefto.com</span>
      </span>
      <span className="ml-auto shrink-0 text-[10px] font-semibold text-ink-400">{title}</span>
    </div>
  );
}

/** Compact desktop dashboard (secondary, sits behind phone) */
function DeskPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-[0_24px_70px_-40px_rgba(20,24,31,0.55)]">
      <PanelChrome title="WHS overview" />
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: "Hazards", v: "42" },
            { k: "Actions", v: "7" },
            { k: "Due", v: "12" },
          ].map((s) => (
            <div key={s.k} className="rounded-lg bg-accent-50/80 px-2.5 py-2">
              <p className="text-[9px] font-medium uppercase tracking-wider text-accent-700">{s.k}</p>
              <p className="mt-0.5 font-display text-lg font-extrabold text-ink-900">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {["Manual handling, depot", "Psychosocial, rostering", "Contractor SWMS"].map((n) => (
            <div
              key={n}
              className="flex items-center justify-between rounded-md border border-ink-100 bg-ink-50/50 px-2.5 py-1.5"
            >
              <span className="truncate text-[11px] font-semibold text-ink-800">{n}</span>
              <span className="size-1.5 shrink-0 rounded-full bg-accent-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Primary field phone — unique vs compliance/risk twin-window heroes */
function FieldPhone() {
  return (
    <div className="safety-phone-float relative mx-auto w-[min(100%,15.5rem)]">
      <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-ink-900 bg-ink-950 shadow-[0_28px_80px_-28px_rgba(0,145,174,0.45)]">
        <div className="flex items-center justify-between bg-ink-900 px-3.5 py-1.5">
          <span className="text-[9px] font-semibold text-ink-400">9:41</span>
          <span className="h-1 w-8 rounded-full bg-ink-700" />
          <span className="text-[9px] font-semibold text-accent-300">Offline</span>
        </div>
        <div className="space-y-2.5 bg-gradient-to-b from-accent-50 to-white p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-ink-900">New hazard</p>
            <span className="rounded bg-accent-600 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
              Field
            </span>
          </div>
          <div className="rounded-xl border border-accent-200/80 bg-white p-3 shadow-sm">
            <p className="text-[10px] font-semibold text-ink-900">Uneven path, reserve gate</p>
            <div className="mt-2.5 flex gap-2">
              <span className="grid size-12 place-items-center rounded-lg bg-accent-100 text-[9px] font-semibold text-accent-800">
                Photo
              </span>
              <div className="flex-1 space-y-1.5 pt-0.5">
                <div className="h-1.5 rounded-full bg-ink-100" />
                <div className="h-1.5 w-3/4 rounded-full bg-ink-100" />
                <p className="text-[9px] font-medium text-accent-700">GPS pinned · sync later</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-ink-900 px-3 py-2 text-center text-[11px] font-semibold text-white">
            Save report
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Field-first hero visual: phone in front, desk dashboard behind.
 * Intentionally different from compliance/risk twin browser windows.
 */
export function SafetyHeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(0,145,174,0.16),transparent_68%)]"
      />
      <div className="animate-hero-screen relative min-h-[22rem] sm:min-h-[24rem]">
        <div className="absolute left-0 top-6 w-[72%] max-w-[22rem] -rotate-3 opacity-95 sm:top-4 lg:left-2">
          <DeskPanel />
        </div>
        <div className="absolute bottom-0 right-0 z-10 sm:right-2 lg:-right-2">
          <FieldPhone />
        </div>
      </div>
    </div>
  );
}
