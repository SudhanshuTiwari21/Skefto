import { GENAI_CAPABILITIES, GENAI_GUARDRAILS, LINKS } from "@/lib/risk-content";
import { Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

export function RiskGenAiSection() {
  const CheckIcon = Icon.check;
  const ShieldIcon = Icon.shield;

  return (
    <section id="ai-compliance" className="scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="AI-powered compliance"
          title="GenAI that reduces compliance workload without reducing control"
          subtitle="Use GenAI for regulatory change intelligence, conversational compliance, and mapping automation while keeping expert oversight in the loop."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {GENAI_CAPABILITIES.map((cap) => {
            const I = Icon[cap.icon as IconName];
            return (
              <article key={cap.title} className="rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <I className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{cap.body}</p>
                <ul className="mt-4 space-y-2">
                  {cap.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-ink-900/8 bg-ink-950 p-6 text-white sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
            Critical guardrails for GenAI in compliance
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {GENAI_GUARDRAILS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink-300">
                <ShieldIcon className="mt-0.5 size-4 shrink-0 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-300">
            Need this integrated with your existing control framework?{" "}
            <InlineLink href={LINKS.services.advisory}>Talk to our risk advisory team</InlineLink>.
          </p>
        </div>
      </Container>
    </section>
  );
}
