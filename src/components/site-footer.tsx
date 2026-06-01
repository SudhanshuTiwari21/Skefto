import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/content";

const COLS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Compliance management", href: "/solutions/compliance-management-software/" },
      { label: "Risk management", href: LINKS.solutions.risk },
      { label: "Incident management", href: LINKS.solutions.incident },
      { label: "Health & safety", href: LINKS.solutions.safety },
      { label: "Strategy & planning", href: LINKS.solutions.strategy },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Local government", href: LINKS.industries.localGov },
      { label: "State government", href: LINKS.industries.stateGov },
      { label: "Education", href: LINKS.industries.education },
      { label: "Aged care", href: LINKS.industries.agedCare },
      { label: "Disability services", href: LINKS.industries.disability },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Risk advisory", href: LINKS.services.advisory },
      { label: "Training academy", href: LINKS.services.training },
      { label: "What is GRC?", href: LINKS.grcGuide },
      { label: "Contact us", href: LINKS.contact },
      { label: "Privacy policy", href: LINKS.privacy },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src="/skefto-logo-white.svg"
              alt="Skefto"
              width={130}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-7 text-ink-400">
              Governance, risk and compliance software for regulated Australian
              organisations. Australian-hosted, government-certified, built to
              ISO 37301.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-ink-300 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Skefto. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-400" />
            Data hosted in government-certified Australian data centres
          </p>
        </div>
      </div>
    </footer>
  );
}
