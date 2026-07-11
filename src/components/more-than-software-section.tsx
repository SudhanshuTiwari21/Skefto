import { WHY_SKEFTO } from "@/lib/content";
import { Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

export function MoreThanSoftwareSection() {
  return (
    <section id="more-than-software" className="scroll-mt-20 bg-sand-50 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="More than software"
          title="Platform, advisory and training from one team"
          subtitle="Software alone is not enough for regulated organisations. Skefto pairs the platform with practitioners."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {WHY_SKEFTO.map((item) => {
            const I = Icon[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <I className="size-5" />
                  </span>
                  <span className="rounded-full bg-sand-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">{item.body}</p>
                {item.href && item.linkLabel ? (
                  <p className="mt-4">
                    <InlineLink href={item.href}>{item.linkLabel}</InlineLink>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
