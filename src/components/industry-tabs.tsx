"use client";

import { useState } from "react";
import Link from "next/link";
import { INDUSTRIES, LINKS } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";

function IndustryPanel({ current }: Readonly<{ current: (typeof INDUSTRIES)[number] }>) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1">
              <SkeftoGeoMark shape={current.geoShape} />
              <span className="font-display text-sm font-bold text-white">
                {current.product}
              </span>
            </span>
            <span className="text-xs font-medium text-ink-400">{current.sector}</span>
          </div>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-ink-300 sm:text-[0.9375rem]">
            {current.body}
          </p>
          <Link
            href={current.href}
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white"
          >
            {current.linkLabel}
            <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="grid shrink-0 gap-2 sm:max-w-[17rem] sm:gap-2.5">
          {current.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-ink-900/50 px-3 py-2.5 text-xs leading-5 text-ink-200 sm:text-sm sm:leading-6"
            >
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                <Icon.check className="size-2.5" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5">
        {INDUSTRIES.map((ind, i) => {
          const I = Icon[ind.icon as IconName];
          const isActive = i === active;
          return (
            <button
              key={ind.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex min-w-[calc(50%-0.25rem)] flex-1 flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 transition-all sm:min-w-0 sm:px-4 sm:py-3 ${
                isActive
                  ? "bg-white text-ink-900 shadow-card"
                  : "text-ink-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <I className="size-4 shrink-0" />
                <span className="font-display text-sm font-bold">{ind.product}</span>
              </span>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-ink-500" : "text-ink-500/80"
                }`}
              >
                {ind.sector}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 lg:mt-6">
        <IndustryPanel current={current} />
      </div>

      <p className="mt-5 text-center text-sm text-ink-400">
        Also supporting{" "}
        <Link
          href={LINKS.industries.stateGov}
          className="font-semibold text-brand-300 underline decoration-brand-500/40 underline-offset-4 transition-colors hover:text-white"
        >
          state government agencies
        </Link>
        .
      </p>
    </div>
  );
}
