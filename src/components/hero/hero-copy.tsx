import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { HERO_TRUST_TOKENS, LINKS, MARKET_POSITIONING, SECONDARY_CTA_LABEL, SECTOR_PRELOADS } from "@/lib/content";
import { BeamButton } from "@/components/ui";
import { Icon } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";

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
  return (
    <div className="relative flex flex-col justify-center lg:py-4 xl:max-w-[32rem]">
      <CopyBlock index={0}>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 shadow-soft">
          <SkeftoGeoMark shape="hexagon" />
          {MARKET_POSITIONING.heroBadge}
        </span>
      </CopyBlock>

      <CopyBlock index={1} className="mt-4">
        <h1 className="font-display text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink-900 sm:text-[2.75rem] lg:text-[3.05rem]">
          Compliance management software for regulated organisations
        </h1>
      </CopyBlock>

      <CopyBlock index={2} className="mt-5">
        <p className="max-w-[32rem] text-pretty text-base leading-7 text-ink-600 sm:text-[1.0625rem] sm:leading-8">
          One platform for obligations, regulatory change, audits, and evidence — for councils,
          government, education, care, hospitals and regulated industries worldwide. Australian
          sovereign hosting and sector clouds where your jurisdiction requires it.
        </p>
      </CopyBlock>

      <CopyBlock index={3} className="mt-7">
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

      <CopyBlock index={4} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
          <Link
            href={LINKS.contact}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-7 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {SECONDARY_CTA_LABEL}
          </Link>
        </div>
      </CopyBlock>

      <CopyBlock index={5} className="mt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
          {HERO_TRUST_TOKENS.map((token) => (
            <li
              key={token}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-600"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Icon.check className="size-3.5" />
              </span>
              {token}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-[32rem] text-sm leading-6 text-ink-500">
          {MARKET_POSITIONING.heroInternationalNote}
        </p>
      </CopyBlock>
    </div>
  );
}
