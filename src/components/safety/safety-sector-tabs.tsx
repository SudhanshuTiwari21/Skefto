"use client";

import { useState } from "react";
import Link from "next/link";
import { LINKS, SECTORS, SECTORS_INTRO } from "@/lib/safety-content";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { SkeftoGeoMark } from "@/components/skefto-geo-icons";

export function SafetySectorTabs() {
  const [active, setActive] = useState(0);
  const sector = SECTORS[active]!;
  const I = Icon[sector.icon as IconName];

  return (
    <section id="sectors" className="safety-cut-inv relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 safety-hatch opacity-[0.35]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.22),transparent_65%)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Built for your sector"
          title="Safety software that understands your regulatory environment"
          subtitle={SECTORS_INTRO}
          invert
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {SECTORS.map((s, i) => {
            const TabIcon = Icon[s.icon as IconName];
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  i === active
                    ? "bg-white text-ink-900 shadow-lg"
                    : "border border-white/15 bg-white/5 text-ink-200 hover:bg-white/10"
                }`}
              >
                <TabIcon className="size-4 shrink-0" />
                <span>
                  {s.title}
                  <span className={`mt-0.5 block text-[11px] font-medium ${i === active ? "text-ink-500" : "text-ink-400"}`}>
                    {s.id === "local-government"
                      ? "Councils & shires"
                      : s.id === "state-government"
                        ? "Agencies"
                        : "Regulated sector"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="border-b border-white/10 bg-white/5 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-900 px-3 py-1 text-xs font-semibold">
                <SkeftoGeoMark shape={sector.geoShape} />
                {sector.title}
              </span>
              <p className="text-sm text-ink-300">{sector.body}</p>
            </div>
          </div>
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Supports</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {sector.supports.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-ink-200"
                  >
                    <Icon.check className="mt-0.5 size-4 shrink-0 text-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={sector.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors hover:text-white"
              >
                {sector.linkLabel}
                <Icon.arrow className="size-4" />
              </Link>
            </div>
            <div className="hidden size-16 items-center justify-center rounded-2xl bg-white/10 text-accent-300 lg:grid">
              <I className="size-8" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href={LINKS.demo} variant="white" size="lg" showArrow>
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
