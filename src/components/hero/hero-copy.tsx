import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { LINKS, SECTOR_PRELOADS } from "@/lib/content";
import { BeamButton } from "@/components/ui";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";
import { Icon } from "@/components/icons";

function CopyBlock({
  index,
  children,
  className = "",
}: Readonly<{
  index: number;
  children: ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`hero-copy-enter ${className}`}
      style={{ "--copy-i": index } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function HeroCopy() {
  const CheckIcon = Icon.check;

  return (
    <div className="relative flex flex-col justify-center lg:py-4 xl:max-w-[32rem]">
      <CopyBlock index={0}>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 shadow-soft">
          <SkeftoGeoMark shape="hexagon" />
          Compliance management · Australia
        </span>
      </CopyBlock>

      <CopyBlock index={1} className="mt-4">
        <h1 className="font-display text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 sm:text-[2.75rem] lg:text-[3.05rem]">
          Enterprise compliance for{" "}
          <span className="text-brand-600">Australian</span> councils,
          hospitals &amp; government agencies
        </h1>
      </CopyBlock>

      <CopyBlock index={2} className="mt-5">
        <p className="max-w-[32rem] text-pretty text-base leading-7 text-ink-600 sm:text-[1.0625rem] sm:leading-8">
          Replace spreadsheets with an auditable system for obligations, regulatory
          change, audits and evidence - plus board-ready reporting.
        </p>
      </CopyBlock>

      <CopyBlock index={3} className="mt-6">
        <ul className="grid gap-2.5 text-sm text-ink-700 sm:grid-cols-2">
          {[
            "Obligations mapped to controls and evidence",
            "Regulatory change assessed with clear impact",
            "Audit prep in hours, not weeks",
            "Board-ready reporting for executives",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-50 ring-1 ring-accent-100">
                <CheckIcon className="size-3 text-accent-700" aria-hidden />
              </span>
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      </CopyBlock>

      <CopyBlock index={4} className="mt-7">
        <div className="flex flex-wrap gap-2">
          {SECTOR_PRELOADS.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <SkeftoGeoMark shape={s.shape} />
              {s.name}
            </Link>
          ))}
        </div>
      </CopyBlock>

      <CopyBlock index={5} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
          <Link
            href={LINKS.contact}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-7 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            Talk to a specialist
          </Link>
        </div>
      </CopyBlock>

      {/* Trust & standards list removed per request */}
    </div>
  );
}
