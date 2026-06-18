"use client";

import { useState } from "react";
import { FAQS, LINKS } from "@/lib/content";
import { InlineLink } from "@/components/ui";

type FaqItem = { q: string; a: string };

export function Faq({ items = FAQS }: Readonly<{ items?: FaqItem[] }>) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((f, i) => {
        const isOpen = i === open;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-bold text-ink-900">{f.q}</span>
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-500 transition-all ${
                  isOpen ? "rotate-45 border-brand-300 bg-brand-50 text-brand-600" : ""
                }`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 sm:px-6">
                <p className="text-pretty leading-7 text-ink-600">
                  {f.q.startsWith("What is compliance") ? (
                    <>
                      Compliance management software centralises your regulatory obligations,
                      policies, deadlines and evidence so you can track, manage and prove compliance
                      from a single source of truth. It is a core part of a wider{" "}
                      <InlineLink href={LINKS.grcGuide}>
                        governance, risk &amp; compliance (GRC)
                      </InlineLink>{" "}
                      approach.
                    </>
                  ) : f.q.startsWith("What is risk management") ? (
                    <>
                      {f.a}{" "}
                      <InlineLink href={LINKS.solutions.compliance}>
                        Explore compliance management
                      </InlineLink>
                      .
                    </>
                  ) : (
                    f.a
                  )}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
