"use client";

import { useEffect, useState } from "react";
import {
  LINKS,
  OBLIGATION_BULLETS,
  REGULATORY_VALUES,
  STANDARDS,
} from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { CalendarMockup, RegisterMockup } from "@/components/visuals";
import { Container, InlineLink, SectionHeading } from "@/components/ui";

const TABS = [
  { id: "obligations", label: "Obligations & deadlines" },
  { id: "standards", label: "Regulatory change" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function RegulatoryCompact({
  item,
}: Readonly<{
  item: (typeof REGULATORY_VALUES)[number];
}>) {
  const I = Icon[item.icon as IconName];
  return (
    <article className="rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft">
      <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <I className="size-5" aria-hidden />
      </div>
      <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p>
    </article>
  );
}

function ObligationsPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-6">
        <RegisterMockup />
        <CalendarMockup />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-display text-xl font-bold text-ink-900">
          Register, calendar &amp; evidence in one place
        </h3>
        <p className="mt-3 text-pretty text-sm leading-7 text-ink-600">
          Centralise federal, state and sector obligations. Assign owners, track
          deadlines, and link evidence - from privacy attestations to WHS audits.
        </p>
        <ul className="mt-5 grid gap-2.5">
          {OBLIGATION_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                <Icon.check className="size-3.5" />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <InlineLink href={LINKS.demo}>
            See it in a live demo
            <Icon.arrow className="size-4" />
          </InlineLink>
        </p>
      </div>
    </div>
  );
}

function RegulatoryPanel() {
  return (
    <div className="space-y-8">
      <p className="max-w-2xl text-pretty text-sm leading-7 text-ink-600">
        Built around the obligations Australian regulators actually hold you to -
        not a generic offshore template.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {REGULATORY_VALUES.map((item) => (
          <RegulatoryCompact key={item.title} item={item} />
        ))}
      </div>
      <div className="rounded-2xl border border-ink-900/8 bg-sand-50/80 px-5 py-6 sm:px-7">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
          Mapped to Australian standards &amp; regulations
        </p>
        <ul className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-2">
          {STANDARDS.map((standard) => (
            <li key={standard}>
              <span className="inline-flex rounded-full border border-ink-900/8 bg-white px-3 py-1.5 text-xs font-semibold text-ink-800">
                {standard}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center text-sm text-ink-500">
          New to the framework?{" "}
          <InlineLink href={LINKS.grcGuide}>GRC explained</InlineLink>
        </p>
      </div>
    </div>
  );
}

function tabFromHash(): TabId {
  if (typeof window === "undefined") return "obligations";
  return window.location.hash === "#standards" ? "standards" : "obligations";
}

export function ComplianceDeepDiveSection() {
  const [active, setActive] = useState<TabId>("obligations");

  useEffect(() => {
    setActive(tabFromHash());
    const onHash = () => setActive(tabFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section
      id="obligations"
      className="scroll-mt-20 bg-sand-50 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Track obligations and stay ahead of regulatory change"
          subtitle="Everything you need to manage deadlines and Australian regulatory requirements - in one place."
        />

        <div className="mt-8 flex flex-wrap gap-2 rounded-2xl border border-ink-900/8 bg-white p-1.5 shadow-soft sm:mt-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-5 sm:py-3 ${
                active === tab.id
                  ? "bg-brand-600 text-white shadow-soft"
                  : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-ink-900/8 bg-white p-6 shadow-soft sm:p-8">
          <div className={active === "obligations" ? "block" : "hidden"}>
            <ObligationsPanel />
          </div>
          <div
            id="standards"
            className={`scroll-mt-24 ${active === "standards" ? "block" : "hidden"}`}
          >
            <RegulatoryPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}
