import { Container, SectionHeading } from "@/components/ui";
import { ProductVideoInline } from "@/components/product-video-inline";

export function RiskProductOverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product overview"
          title="See how Australian organisations manage risk in Skefto"
          subtitle="A short walkthrough of risk registers, heat maps, treatment workflows and board reporting — built for regulated teams."
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <ProductVideoInline />
          <p className="mt-3 text-center text-xs text-ink-500">Product overview · Skefto Risk</p>
        </div>
      </Container>
    </section>
  );
}
