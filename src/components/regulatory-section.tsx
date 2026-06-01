import { LINKS, REGULATORY_VALUES, STANDARDS } from "@/lib/content";
import { Icon, type IconName } from "@/components/icons";
import { Container, InlineLink, SectionHeading } from "@/components/ui";

const ACCENT: Partial<Record<IconName, { bar: string; icon: string }>> = {
  refresh: { bar: "border-l-brand-600", icon: "text-brand-600" },
  map: { bar: "border-l-accent-600", icon: "text-accent-600" },
  signature: { bar: "border-l-ink-700", icon: "text-ink-700" },
};

const DEFAULT_ACCENT = { bar: "border-l-ink-300", icon: "text-ink-600" };

export function RegulatorySection() {
  return (
    <section id="standards" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Regulatory change"
          title="Stay ahead of regulatory change, aligned to Australian standards"
          subtitle="Built around the obligations Australian regulators actually hold you to - not a generic offshore template."
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-ink-200/80 bg-sand-50">
          <div className="divide-y divide-ink-200/80 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {REGULATORY_VALUES.map((item) => {
              const I = Icon[item.icon];
              const tone = ACCENT[item.icon] ?? DEFAULT_ACCENT;
              return (
                <article
                  key={item.title}
                  className={`border-l-[3px] px-8 py-9 sm:px-10 sm:py-10 ${tone.bar}`}
                >
                  <I className={`mb-5 size-5 ${tone.icon}`} aria-hidden />
                  <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 border-t border-ink-200 pt-10">
          <p className="text-center text-sm font-medium text-ink-500">
            Mapped to the standards and regulations that matter in Australia
          </p>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-1 gap-y-2 text-center">
            {STANDARDS.map((s, i) => (
              <li key={s} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="mx-2 text-ink-300" aria-hidden>
                    ·
                  </span>
                ) : null}
                <span className="text-sm font-medium text-ink-800">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-ink-500">
            New to the framework?{" "}
            <InlineLink href={LINKS.grcGuide}>
              Governance, risk &amp; compliance (GRC) explained
            </InlineLink>
          </p>
        </div>
      </Container>
    </section>
  );
}
