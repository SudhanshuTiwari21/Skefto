import { LINKS, RISKMAT_URL } from "@/lib/risk-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

export function RiskMatSection() {
  return (
    <section id="riskmat" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-ink-900/8 bg-gradient-to-br from-brand-50/40 via-white to-accent-50/30 p-8 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Free assessment"
              title="Not sure where to start? Benchmark your risk maturity."
              subtitle="RiskMAT is Skefto's free online diagnostic. Benchmark against AS/ISO 31000, identify gaps and get a personalised improvement roadmap in under 20 minutes."
              align="left"
            />
            <ul className="mt-6 space-y-2">
              {[
                "Structured maturity scoring across key risk domains",
                "Immediate personalised report",
                "Clear roadmap before you commit to a demo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                  <Icon.check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BeamButton href={RISKMAT_URL} fill="brand" size="lg">
                Take the RiskMAT assessment
              </BeamButton>
              <BeamButton href={LINKS.demo} fill="ink" size="lg">
                Book a demo
              </BeamButton>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Example maturity score
            </p>
            <div className="mt-6 flex items-end justify-center gap-3">
              <div className="text-center">
                <p className="font-display text-5xl font-extrabold text-brand-600">72</p>
                <p className="mt-1 text-sm text-ink-500">Overall maturity</p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { l: "Governance & culture", v: 78 },
                { l: "Risk identification", v: 71 },
                { l: "Treatment & monitoring", v: 65 },
                { l: "Reporting & assurance", v: 74 },
              ].map((row) => (
                <div key={row.l}>
                  <div className="flex justify-between text-xs font-medium text-ink-600">
                    <span>{row.l}</span>
                    <span>{row.v}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                      style={{ width: `${row.v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
