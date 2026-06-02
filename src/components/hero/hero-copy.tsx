import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/content";
import { BeamButton } from "@/components/ui";

function CopyBlock({
  index,
  children,
  className = "",
}: {
  index: number;
  children: ReactNode;
  className?: string;
}) {
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
          Compliance management · Australia
        </p>
      </CopyBlock>

      <CopyBlock index={1} className="mt-4">
        <h1 className="font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink-900 sm:text-[2.65rem] lg:text-[2.85rem]">
          Compliance management software for{" "}
          <span className="text-brand-600">regulated</span> Australian
          organisations
        </h1>
      </CopyBlock>

      <CopyBlock index={2} className="mt-5">
        <p className="max-w-[32rem] text-pretty text-base leading-7 text-ink-600 sm:text-[1.0625rem] sm:leading-8">
          Track obligations, standards, audits and evidence in one register -
          built for councils, government, healthcare and education.
        </p>
      </CopyBlock>

      <CopyBlock index={3} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BeamButton href={LINKS.demo} fill="brand" size="lg" hero>
            Book a demo
          </BeamButton>
          <Link
            href={LINKS.contact}
            className="inline-flex h-12 items-center justify-center text-sm font-semibold text-ink-700 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
          >
            Talk to a specialist
          </Link>
        </div>
      </CopyBlock>

      {/* Trust & standards list removed per request */}
    </div>
  );
}
