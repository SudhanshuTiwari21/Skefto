import Image from "next/image";
import Link from "next/link";
import { ISO_CERTIFICATION_ASSETS, LINKS, MARKET_POSITIONING, SECURITY, TRUST_TOKENS } from "@/lib/content";
import { Container, InlineLink, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

function CertificationMarks() {
  return (
    <div className="mt-5 flex flex-wrap items-stretch gap-3">
      <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-white px-4 py-3 shadow-sm">
        <Image
          src={ISO_CERTIFICATION_ASSETS.iso27001}
          alt="ISO/IEC 27001 information security management certification"
          width={128}
          height={52}
          className="h-9 w-auto object-contain sm:h-10"
        />
      </div>
      <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-white px-4 py-3 shadow-sm">
        <Image
          src={ISO_CERTIFICATION_ASSETS.iso37301}
          alt="ISO 37301:2021 compliance management systems certification"
          width={148}
          height={52}
          className="h-9 w-auto object-contain sm:h-10"
        />
      </div>
    </div>
  );
}

export function SecuritySection() {
  const ShieldIcon = Icon.shield;
  const CheckIcon = Icon.check;

  return (
    <section
      id="security"
      className="relative scroll-mt-20 overflow-hidden bg-sand-50 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.28]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Data sovereignty & security"
          title="Sovereign data controls with global-ready governance"
          subtitle="Region-specific data residency, certified security controls, and privacy-by-design workflows for regulated teams."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-950 p-7 text-white shadow-[0_24px_60px_-28px_rgba(20,24,31,0.5)] sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-dark opacity-[0.12]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 bottom-0 size-56 rounded-full bg-[radial-gradient(circle,rgba(0,145,174,0.22),transparent_70%)]"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-200">
                <ShieldIcon className="size-3.5" />
                Enterprise trust
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                Built for teams who cannot compromise on data sovereignty
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-300">
                Skefto provides region-specific hosting options, including
                Australian sovereign environments, with ISO 27001 certified
                controls and privacy workflows aligned to local regulatory
                obligations.
              </p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                Certified to international standards
              </p>
              <CertificationMarks />

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {TRUST_TOKENS.map((token) => (
                  <li
                    key={token}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-ink-200"
                  >
                    <CheckIcon className="size-4 shrink-0 text-accent-400" />
                    {token}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-ink-400">
                Read our{" "}
                <Link
                  href={LINKS.privacy}
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent-200 hover:decoration-accent-300"
                >
                  data handling and privacy policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {SECURITY.map((s, i) => {
              const I = Icon[s.icon];
              const isoMark =
                s.title === "ISO 27001 certified security"
                  ? ISO_CERTIFICATION_ASSETS.iso27001
                  : null;
              return (
                <article
                  key={s.title}
                  className={`group relative overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-6 shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-brand-200/70 hover:shadow-card ${
                    i === 0 ? "xl:col-span-2" : ""
                  }`}
                >
                  <div className="border-beam absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    {isoMark ? (
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-ink-100 bg-white p-1.5">
                        <Image
                          src={isoMark}
                          alt=""
                          width={40}
                          height={40}
                          aria-hidden
                          className="h-8 w-auto object-contain"
                        />
                      </span>
                    ) : (
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-100 bg-brand-50 text-brand-700">
                        <I className="size-6" />
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-pretty text-sm leading-7 text-ink-600">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-6 text-ink-500">
          {MARKET_POSITIONING.securityFootnote}
        </p>

        <p className="mt-4 text-center text-sm text-ink-500 lg:hidden">
          Read more in our{" "}
          <InlineLink href={LINKS.privacy}>data handling and privacy policy</InlineLink>.
        </p>
      </Container>
    </section>
  );
}
