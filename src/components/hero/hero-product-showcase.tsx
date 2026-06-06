import type { CSSProperties } from "react";
import Image from "next/image";
import { PRODUCT_SCREENSHOTS } from "@/lib/content";
import { Icon } from "@/components/icons";

function PanelChrome({ title }: Readonly<{ title: string }>) {
  const LockIcon = Icon.lock;
  return (
    <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <span className="size-2.5 rounded-full bg-ink-300" />
      <Image
        src="/skefto-logo.svg"
        alt=""
        width={88}
        height={19}
        className="ml-1 h-4 w-auto shrink-0"
        aria-hidden
      />
      <span className="ml-2 inline-flex min-w-0 items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-500 ring-1 ring-ink-100">
        <LockIcon className="size-3 shrink-0 text-brand-500" aria-hidden />
        <span className="truncate">app.skefto.com</span>
      </span>
      <span className="ml-auto shrink-0 text-[11px] font-semibold text-ink-400">
        {title}
      </span>
    </div>
  );
}

function ScreenshotPanel({
  title,
  src,
  alt,
  imageClassName = "max-h-[22rem] object-cover object-left-top sm:max-h-[24rem]",
}: Readonly<{
  title: string;
  src: string;
  alt: string;
  imageClassName?: string;
}>) {
  return (
    <div className="bg-white">
      <PanelChrome title={title} />
      <div className="overflow-hidden bg-ink-50/40">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className={`h-auto w-full ${imageClassName}`}
          priority={title === "Compliance overview"}
        />
      </div>
    </div>
  );
}

export function HeroProductShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(141,61,151,0.10),transparent_68%)]"
      />

      <div className="animate-hero-screen relative">
        <div className="border-beam border-beam--panel relative overflow-hidden rounded-2xl bg-white shadow-[0_28px_90px_-44px_rgba(45,50,62,0.45),0_0_0_1px_rgba(255,255,255,0.9)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.10)_44%,transparent_58%)] [background-size:240%_100%] animate-gradient-text"
            style={{ "--bg-size": "240%" } as CSSProperties}
          />

          <ScreenshotPanel
            title="Compliance overview"
            src={PRODUCT_SCREENSHOTS.dashboard}
            alt="Skefto compliance dashboard with charts and obligation tracking"
          />
        </div>

        <div className="pointer-events-none absolute -right-5 top-10 hidden w-[21.5rem] lg:block">
          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-[0_24px_70px_-40px_rgba(45,50,62,0.35)]">
            <div className="origin-top-left scale-[0.86]">
              <ScreenshotPanel
                title="Compliance calendar"
                src={PRODUCT_SCREENSHOTS.calendar}
                alt="Skefto compliance calendar with due dates and ratings"
                imageClassName="max-h-[14rem] object-cover object-left-top"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-5 bottom-10 hidden w-[21.5rem] lg:block">
          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-[0_24px_70px_-40px_rgba(45,50,62,0.35)]">
            <div className="origin-top-left scale-[0.86]">
              <ScreenshotPanel
                title="Obligations register"
                src={PRODUCT_SCREENSHOTS.register}
                alt="Skefto obligations register with compliance actions and ratings"
                imageClassName="max-h-[14rem] object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
