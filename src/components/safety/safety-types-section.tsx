import { SAFETY_TYPES } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { InViewStagger } from "@/components/safety/safety-motion";

export function SafetyTypesSection() {
  return (
    <section
      id="safety-types"
      className="scroll-mt-20 border-y border-ink-900/6 bg-white py-12 sm:py-14"
    >
      <Container>
        <SectionHeading
          eyebrow="Safety coverage"
          title="Manage every type of workplace safety risk"
          subtitle="One system for the hazard categories WHS teams track every day."
        />
        <InViewStagger
          as="ul"
          step={55}
          className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5 lg:gap-3"
        >
          {SAFETY_TYPES.map((item, i) => {
            const I = Icon[item.icon as IconName];
            return (
              <li
                key={item.title}
                style={{ ["--i" as string]: i }}
                className="magnet-tile group relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-ink-900/8 bg-sand-50/70 px-3 py-3 hover:border-brand-200 hover:bg-white"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 bg-[radial-gradient(ellipse_at_center,rgba(141,61,151,0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="magnet-icon relative grid size-8 shrink-0 place-items-center rounded-lg bg-white text-brand-700 shadow-sm ring-1 ring-ink-900/5 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <I className="size-4" />
                </span>
                <span className="relative text-xs font-semibold leading-snug text-ink-800 sm:text-sm">
                  {item.title}
                </span>
              </li>
            );
          })}
        </InViewStagger>
      </Container>
    </section>
  );
}
