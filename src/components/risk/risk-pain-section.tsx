import { PAIN_POINTS } from "@/lib/risk-content";
import { Container, SectionHeading } from "@/components/ui";

export function RiskPainSection() {
  return (
    <section className="border-y border-ink-900/6 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why teams switch"
          title="Three problems every risk team faces. One platform that solves them."
          subtitle="Risk teams outgrow spreadsheets long before boards outgrow their expectations. Skefto closes that gap."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PAIN_POINTS.map((p) => (
            <article
              key={p.n}
              className="relative rounded-2xl border border-ink-900/8 bg-sand-50/50 p-6 sm:p-7"
            >
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-brand-600">{p.n}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
