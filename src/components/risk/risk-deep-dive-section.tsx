"use client";

import { useEffect, useState } from "react";
import {
  FRAMEWORKS,
  LINKS,
  REGISTER_BULLETS,
  REPORTING_BULLETS,
  TREATMENT_BULLETS,
} from "@/lib/risk-content";
import { Icon } from "@/components/icons";
import { Container, InlineLink, SectionHeading } from "@/components/ui";

const TABS = [
  { id: "register", label: "Risk register & assessment" },
  { id: "treatment", label: "Treatment & controls" },
  { id: "reporting", label: "Board reporting" },
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

function RegisterMockup() {
  const levels = [3, 2, 4, 1, 2, 2, 3, 4, 2, 1, 1, 2, 3, 2, 4, 0, 1, 2, 3, 1] as const;
  const tones = ["bg-ink-50", "bg-brand-100", "bg-brand-300", "bg-brand-500", "bg-brand-700"];
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Risk heat map · March 2026</p>
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {levels.map((l, i) => (
          <span key={i} className={`aspect-square rounded-md ${tones[l]}`} />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {[
          { n: "Cyber security breach", r: "High" },
          { n: "Service provider failure", r: "Medium" },
          { n: "Reputational – social media", r: "Low" },
        ].map((row) => (
          <div
            key={row.n}
            className="flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2"
          >
            <span className="text-xs font-medium text-ink-800">{row.n}</span>
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              {row.r}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TreatmentMockup() {
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Treatment plan · RSK-012</p>
      <div className="mt-4 space-y-3">
        {[
          { t: "Implement MFA across all systems", o: "IT Director", s: "Due 5d" },
          { t: "Quarterly penetration testing", o: "CISO", s: "On track" },
          { t: "Update incident response playbook", o: "Risk Manager", s: "Scheduled" },
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

function ReportingMockup() {
  const bars = [42, 58, 48, 72, 64, 88, 76, 92, 68, 84];
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold text-ink-700">Executive risk dashboard</p>
      <div className="mt-4 flex h-24 items-end gap-1.5">
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
          { l: "Strategic", v: "12" },
          { l: "Operational", v: "89" },
          { l: "Compliance", v: "34" },
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
    register: {
      title: "Centralised register with visual heat maps",
      body: "Manage strategic, operational, safety, cyber and environmental risks in one register. Configurable matrices, inherent and residual scoring, and ownership across every level.",
      mockup: <RegisterMockup />,
      bullets: REGISTER_BULLETS,
    },
    treatment: {
      title: "Treatment plans with control assurance",
      body: "Track what is being done about each risk: treatment owners, due dates, control effectiveness and automated escalations when ratings exceed appetite.",
      mockup: <TreatmentMockup />,
      bullets: TREATMENT_BULLETS,
    },
    reporting: {
      title: "Board-ready reporting without the spreadsheet grind",
      body: "Live dashboards and automated packs give leadership and audit committees defensible visibility: trend analysis, category breakdowns and exportable registers.",
      mockup: <ReportingMockup />,
      bullets: REPORTING_BULLETS,
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

export function RiskDeepDiveSection() {
  const [tab, setTab] = useState<TabId>("register");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "treatment" || hash === "reporting") setTab(hash);
  }, []);

  return (
    <section id="risk-workflow" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From identification to board assurance"
          subtitle="Three connected workflows: register and assess, treat and assure, then report with confidence."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
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
