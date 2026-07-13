import { RISK_TYPES } from "@/lib/risk-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";

export function RiskTypesSection() {
  return (
    <section id="risk-types" className="scroll-mt-20 border-y border-ink-900/6 bg-white py-12 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="Risk coverage"
          title="Manage every type of organisational risk"
          subtitle="One register for the risk categories operational teams track every day."
        />
        <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 lg:gap-3">
          {RISK_TYPES.map((item) => {
            const I = Icon[item.icon as IconName];
            return (
              <li
                key={item.title}
                className="flex items-center gap-2.5 rounded-xl border border-ink-900/8 bg-sand-50/70 px-3 py-3"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-brand-700 shadow-sm">
                  <I className="size-4" />
                </span>
                <span className="text-xs font-semibold leading-snug text-ink-800 sm:text-sm">
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
