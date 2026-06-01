"use client";

import { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];
  const CurrentIcon = Icon[current.icon as IconName];

  return (
    <div>
      {/* Desktop: tab bar + panel */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5">
          {INDUSTRIES.map((ind, i) => {
            const I = Icon[ind.icon as IconName];
            const isActive = i === active;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-white text-ink-900 shadow-card"
                    : "text-ink-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <I className="size-4.5" />
                {ind.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-grid size-12 place-items-center rounded-xl bg-brand-600 text-white">
              <CurrentIcon className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-white">
              {current.title}
            </h3>
            <p className="mt-3 text-pretty leading-7 text-ink-300">{current.body}</p>
            <Link
              href={current.href}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white"
            >
              {current.linkLabel}
              <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <ul className="grid gap-3">
            {current.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-900/40 px-4 py-3.5 text-sm text-ink-200"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Icon.check className="size-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="space-y-3 lg:hidden">
        {INDUSTRIES.map((ind, i) => {
          const I = Icon[ind.icon as IconName];
          const isOpen = i === active;
          return (
            <div
              key={ind.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3 font-display text-base font-bold text-white">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-600 text-white">
                    <I className="size-4.5" />
                  </span>
                  {ind.label}
                </span>
                <Icon.arrow
                  className={`size-4 shrink-0 text-ink-400 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isOpen ? (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-7 text-ink-300">{ind.body}</p>
                  <ul className="mt-4 grid gap-2">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-ink-200">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                          <Icon.check className="size-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ind.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300"
                  >
                    {ind.linkLabel}
                    <Icon.arrow className="size-4" />
                  </Link>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
