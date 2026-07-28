import Link from "next/link";
import { CAPABILITIES, LINKS } from "@/lib/safety-content";
import { Icon, type IconName } from "@/components/icons";
import { Container, SectionHeading, ShimmerButton } from "@/components/ui";
import { InViewStagger } from "@/components/safety/safety-motion";

/**
 * Stacked capability rail — distinct from compliance/risk bento grids.
 */
export function SafetyCapabilitiesBento() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-accent-50/40 to-white" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/2 safety-hatch opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Platform capabilities"
          title="WHS software connected to risk, not another checklist app"
          subtitle="Hazard reporting, inspections, injuries, registers and corrective actions in one onshore-hosted system."
        />

        <InViewStagger as="ol" step={90} className="relative mt-12 space-y-3">
          <span
            aria-hidden
            className="absolute left-[1.15rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-accent-400 via-brand-300 to-accent-200 sm:block"
          />
          {CAPABILITIES.map((cap, i) => {
            const I = Icon[cap.icon as IconName];
            const odd = i % 2 === 1;
            return (
              <li
                key={cap.title}
                style={{ ["--i" as string]: i }}
                className={`group relative grid gap-4 rounded-2xl border border-accent-200/60 bg-white/90 p-5 shadow-sm transition-colors hover:border-accent-400 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:p-6 ${
                  odd ? "sm:ml-8 lg:ml-16" : ""
                }`}
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <span className="relative z-10 grid size-10 place-items-center rounded-xl bg-accent-600 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                    <I className="size-[1.1rem]" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">
                    {cap.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-600">{cap.body}</p>
                </div>
              </li>
            );
          })}
        </InViewStagger>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <ShimmerButton href={LINKS.demo} className="!h-11 !px-6 !text-sm">
            Book a demo
          </ShimmerButton>
          <Link
            href="#field"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-800 transition-colors hover:text-accent-950"
          >
            See field capture
            <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
