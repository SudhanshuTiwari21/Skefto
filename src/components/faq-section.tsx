import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { ProductVideoInline } from "@/components/product-video-inline";

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Questions & overview"
          title="See Skefto in action, then explore FAQs"
          subtitle="Watch a short product overview, then find answers on Australian compliance, data residency, and implementation."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-10 lg:items-start">
          <div className="lg:sticky lg:top-24">
            <ProductVideoInline />
            <p className="mt-3 text-center text-xs text-ink-500 lg:text-left">
              Product overview · Skefto Compliance
            </p>
          </div>
          <Faq />
        </div>
      </Container>
    </section>
  );
}
