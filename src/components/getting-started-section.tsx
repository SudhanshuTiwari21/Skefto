import Link from "next/link";
import { GETTING_STARTED, LINKS, SECONDARY_CTA_LABEL } from "@/lib/content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";

export function GettingStartedSection() {
  return (
    <section id="getting-started" className="scroll-mt-20 border-t border-ink-900/6 bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Implementation"
          title="From demo to go-live in weeks"
          subtitle="A clear path for procurement teams — no multi-year GRC programme required."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GETTING_STARTED.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-ink-900/8 bg-sand-50/50 p-5 shadow-soft"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-display text-base font-bold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BeamButton href={LINKS.demo} fill="brand" size="lg">
            Book a demo
          </BeamButton>
          <Link
            href={LINKS.contact}
            className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 px-7 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {SECONDARY_CTA_LABEL}
          </Link>
        </div>
      </Container>
    </section>
  );
}
