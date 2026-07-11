"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AUDIT_ACTION_BULLETS,
  COMPLIANCE_WORKFLOW,
  LINKS,
  OBLIGATION_BULLETS,
  POLICY_BULLETS,
  PRODUCT_SCREENSHOTS,
  REGULATORY_EXTRA_BULLETS,
  REGULATORY_VALUES,
  STANDARDS,
} from "@/lib/content";
import { Icon } from "@/components/icons";
import { Container, InlineLink, ShimmerButton } from "@/components/ui";

function WorkflowStrip() {
  return (
    <ol className="mt-10 grid gap-3 border-y border-ink-900/6 py-5 sm:grid-cols-5 sm:gap-2 sm:py-4">
      {COMPLIANCE_WORKFLOW.map((step) => {
        const I = Icon[step.icon];
        return (
          <li key={step.title} className="flex items-start gap-2.5 sm:flex-col sm:items-center sm:text-center">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
              <I className="size-4" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xs font-bold text-ink-900">{step.title}</h3>
              <p className="mt-0.5 text-[11px] leading-4 text-ink-500 sm:mt-1 sm:leading-4">
                {step.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const TABS = [
  { id: "obligations", label: "Obligations & deadlines" },
  { id: "standards", label: "Regulatory change" },
  { id: "policy", label: "Policy management" },
  { id: "audit", label: "Audit & action management" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function RegulatoryCompact({
  item,
}: Readonly<{
  item: (typeof REGULATORY_VALUES)[number];
}>) {
  const I = Icon[item.icon];
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

function ObligationScreenshots() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {(
        [
          { src: PRODUCT_SCREENSHOTS.register, alt: "Skefto obligations register" },
          { src: PRODUCT_SCREENSHOTS.calendar, alt: "Skefto compliance calendar" },
        ] as const
      ).map((shot) => (
        <div
          key={shot.src}
          className="overflow-hidden rounded-xl border border-ink-900/10 bg-ink-50 shadow-soft"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={640}
            height={420}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

function ObligationsPanel() {
  const CheckIcon = Icon.check;
  const ArrowIcon = Icon.arrow;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900 sm:text-xl">
            Register, calendar &amp; evidence in one place
          </h3>
          <p className="mt-2 text-pretty text-sm leading-6 text-ink-600">
            Centralise federal, state and sector obligations. Assign owners, track
            deadlines, and link evidence, from privacy attestations to WHS audits.
          </p>
          <p className="mt-4">
            <InlineLink href={LINKS.demo}>
              See it in a live demo
              <ArrowIcon className="size-4" />
            </InlineLink>
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {OBLIGATION_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-6 text-ink-700">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                <CheckIcon className="size-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <ObligationScreenshots />
    </div>
  );
}

function RegulatoryPanel() {
  const CheckIcon = Icon.check;

  return (
    <div className="space-y-5">
      <p className="max-w-2xl text-pretty text-sm leading-6 text-ink-600">
        Built around the obligations Australian regulators actually hold you to,
        not a generic imported template.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {REGULATORY_VALUES.map((item) => (
          <RegulatoryCompact key={item.title} item={item} />
        ))}
      </div>
      <ul className="grid gap-2 rounded-2xl border border-ink-900/8 bg-sand-50/80 p-4 sm:p-5">
        {REGULATORY_EXTRA_BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-ink-700">
            <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
              <CheckIcon className="size-3" />
            </span>
            {b}
          </li>
        ))}
      </ul>
      <div className="rounded-2xl border border-ink-900/8 bg-sand-50/80 px-4 py-5 sm:px-6">
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
  if (globalThis.window === undefined) return "obligations";
  const hash = globalThis.window.location.hash.replace("#", "");
  if (hash === "standards" || hash === "policy" || hash === "audit") return hash;
  return "obligations";
}

function PolicyPanel() {
  const CheckIcon = Icon.check;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900 sm:text-xl">
            Policy governance with full lifecycle control
          </h3>
          <p className="mt-2 text-pretty text-sm leading-6 text-ink-600">
            Maintain policy libraries with ownership, approvals and review cadences.
            Link each policy to obligations, controls and evidence so compliance is
            always traceable.
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {POLICY_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-6 text-ink-700">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                <CheckIcon className="size-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-ink-900/10 bg-ink-50 p-4 shadow-soft sm:p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { name: "Code of Conduct", status: "Approved", next: "Review in 28d" },
            { name: "Data Privacy Policy", status: "In review", next: "Owner sign-off pending" },
            { name: "Whistleblower Policy", status: "Draft", next: "Legal review queued" },
          ].map((row) => (
            <div key={row.name} className="rounded-lg border border-ink-200 bg-white p-3">
              <p className="text-sm font-semibold text-ink-900">{row.name}</p>
              <p className="mt-1 text-xs text-brand-700">{row.status}</p>
              <p className="mt-2 text-xs text-ink-500">{row.next}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuditActionPanel() {
  const CheckIcon = Icon.check;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-ink-900 sm:text-xl">
            Audit execution and remediation in one workflow
          </h3>
          <p className="mt-2 text-pretty text-sm leading-6 text-ink-600">
            Plan audits, capture findings, and monitor remediation actions with clear
            ownership and deadlines. Keep an auditable chain from finding to closure.
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {AUDIT_ACTION_BULLETS.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-6 text-ink-700">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                <CheckIcon className="size-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-ink-900/10 bg-white p-4 shadow-soft sm:p-5">
        <div className="space-y-2.5">
          {[
            { finding: "Delegations policy exception", severity: "High", action: "Remediation due in 5d" },
            { finding: "Vendor register gap", severity: "Medium", action: "Owner assigned" },
            { finding: "Late attestation evidence", severity: "Low", action: "Closed with evidence" },
          ].map((row) => (
            <div key={row.finding} className="flex items-center justify-between gap-3 rounded-lg border border-ink-100 bg-ink-50/70 px-3 py-2.5">
              <div>
                <p className="text-sm font-semibold text-ink-900">{row.finding}</p>
                <p className="text-xs text-ink-500">{row.action}</p>
              </div>
              <span className="rounded-full bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-800">
                {row.severity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComplianceDeepDiveSection() {
  const [active, setActive] = useState<TabId>("obligations");

  useEffect(() => {
    setActive(tabFromHash());
    const onHash = () => setActive(tabFromHash());
    globalThis.window.addEventListener("hashchange", onHash);
    return () => globalThis.window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section id="explore" className="scroll-mt-20 bg-white py-14 sm:py-16">
      <Container>
        <WorkflowStrip />

        <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
          Explore each capability area
        </p>

        <div className="mt-3 flex flex-wrap gap-2 rounded-2xl border border-ink-900/8 bg-sand-50 p-1.5 shadow-soft">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-5 sm:py-3 ${
                active === tab.id
                  ? "bg-brand-600 text-white shadow-soft"
                  : "text-ink-600 hover:bg-white hover:text-ink-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
          <div className={active === "obligations" ? "block" : "hidden"}>
            <ObligationsPanel />
          </div>
          <div
            id="standards"
            className={`scroll-mt-24 ${active === "standards" ? "block" : "hidden"}`}
          >
            <RegulatoryPanel />
          </div>
          <div
            id="policy"
            className={`scroll-mt-24 ${active === "policy" ? "block" : "hidden"}`}
          >
            <PolicyPanel />
          </div>
          <div
            id="audit"
            className={`scroll-mt-24 ${active === "audit" ? "block" : "hidden"}`}
          >
            <AuditActionPanel />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <ShimmerButton href={LINKS.demo} className="!h-11 !px-6 !text-sm">
            Book a demo
          </ShimmerButton>
        </div>
      </Container>
    </section>
  );
}
