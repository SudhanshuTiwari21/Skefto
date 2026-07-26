"use client";

import { useEffect, useState } from "react";
import {
  FRAMEWORKS,
  HAZARD_BULLETS,
  INJURY_BULLETS,
  INSPECTION_BULLETS,
  LINKS,
  SAFETY_WORKFLOW,
} from "@/lib/safety-content";
import { Icon, type IconName } from "@/components/icons";
import { Container, InlineLink, SectionHeading } from "@/components/ui";

const TABS = [
  { id: "hazards", label: "Hazards & assessments" },
  { id: "inspections", label: "Audits & inspections" },
  { id: "injuries", label: "Injuries & RTW" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2 text-sm leading-6 text-ink-700">
          <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
            <Icon.check className="size-3" />
          </span>
          {b}
        </li>
      ))}
    </ul>
  );
}

function HazardMockup() {
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Hazard register · Live</p>
      <div className="mt-4 space-y-2">
        {[
          { n: "Manual handling, depot", r: "High", c: "Controls due" },
          { n: "Psychosocial, rostering", r: "Medium", c: "Assessment open" },
          { n: "Chemical storage, workshop", r: "Medium", c: "On track" },
        ].map((row) => (
          <div
            key={row.n}
            className="flex items-center justify-between gap-3 rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2.5"
          >
            <div className="min-w-0">
              <span className="block truncate text-xs font-medium text-ink-800">{row.n}</span>
              <span className="text-[10px] text-ink-500">{row.c}</span>
            </div>
            <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              {row.r}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InspectionMockup() {
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Inspection programme</p>
      <div className="mt-4 space-y-3">
        {[
          { t: "Depot plant checklist", o: "Supervisor", s: "Due 3d" },
          { t: "Contractor SWMS audit", o: "WHS Advisor", s: "Scheduled" },
          { t: "Office ergonomics walk", o: "Facilities", s: "Complete" },
        ].map((a) => (
          <div key={a.t} className="rounded-lg border border-ink-100 p-3">
            <p className="text-xs font-semibold text-ink-900">{a.t}</p>
            <div className="mt-2 flex items-center justify-between text-[10px] text-ink-500">
              <span>{a.o}</span>
              <span className="rounded-md bg-accent-100 px-2 py-0.5 font-semibold text-accent-800">{a.s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InjuryMockup() {
  const bars = [42, 58, 48, 72, 64, 88, 76, 92];
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Injury &amp; RTW dashboard</p>
      <div className="mt-4 flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-brand-300 to-brand-600"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          { l: "Open cases", v: "9" },
          { l: "RTW plans", v: "6" },
          { l: "Claims", v: "4" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-ink-50 px-2 py-2">
            <p className="font-display text-lg font-bold text-brand-600">{s.v}</p>
            <p className="text-[10px] text-ink-500">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({ tab }: Readonly<{ tab: TabId }>) {
  const copy = {
    hazards: {
      title: "Identify hazards early and assign real controls",
      body: "Capture physical and psychosocial hazards, run configurable risk assessments, and keep a live register with owners and review dates.",
      mockup: <HazardMockup />,
      bullets: HAZARD_BULLETS,
    },
    inspections: {
      title: "Inspections and audits that close the loop",
      body: "Schedule mobile and offline inspections, capture photo evidence, and turn contractor or site findings into owned corrective actions with escalations.",
      mockup: <InspectionMockup />,
      bullets: INSPECTION_BULLETS,
    },
    injuries: {
      title: "Injuries, claims, RTW and notifiable pathways",
      body: "Record injuries and illness, escalate notifiable incidents for PCBU due diligence, manage claims documentation and track return-to-work with privacy-aware access.",
      mockup: <InjuryMockup />,
      bullets: INJURY_BULLETS,
    },
  }[tab];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-lg font-bold text-ink-900 sm:text-xl">{copy.title}</h3>
        <p className="mt-2 text-pretty text-sm leading-6 text-ink-600">{copy.body}</p>
        <p className="mt-4">
          <InlineLink href={LINKS.demo}>
            See it in a live demo
            <Icon.arrow className="size-4" />
          </InlineLink>
        </p>
      </div>
      <BulletList items={copy.bullets} />
      {copy.mockup}
    </div>
  );
}

function WorkflowStrip() {
  return (
    <ol className="mt-10 grid gap-3 sm:grid-cols-5">
      {SAFETY_WORKFLOW.map((step, i) => {
        const I = Icon[step.icon as IconName];
        return (
          <li
            key={step.title}
            className="relative rounded-2xl border border-ink-900/8 bg-white p-4"
          >
            <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-brand-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-3 grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
              <I className="size-4" />
            </span>
            <h3 className="mt-3 font-display text-sm font-bold text-ink-900">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-5 text-ink-600">{step.body}</p>
          </li>
        );
      })}
    </ol>
  );
}

export function SafetyDeepDiveSection() {
  const [tab, setTab] = useState<TabId>("hazards");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "inspections" || hash === "injuries") setTab(hash);
  }, []);

  return (
    <section id="safety-workflow" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From hazard to board assurance"
          subtitle="Identify, assess, inspect, respond and report: five connected steps that keep WHS due diligence visible."
        />

        <WorkflowStrip />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.id
                  ? "bg-ink-900 text-white shadow-sm"
                  : "border border-ink-200 bg-white text-ink-700 hover:border-brand-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-ink-900/8 bg-sand-50/40 p-6 sm:p-8">
          <Panel tab={tab} />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FRAMEWORKS.map((f) => (
            <span
              key={f}
              className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-700"
            >
              {f}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
