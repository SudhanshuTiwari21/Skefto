import type { CSSProperties } from "react";
import Image from "next/image";

const HERO_IMAGE = {
  src: "/images/hero/hero-main.png",
  alt: "Compliance rules, standards and regulatory documentation illustration",
};

export function HeroProductShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none lg:pl-2">
      <div
        aria-hidden
        className="absolute left-1/2 top-[46%] h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(183,148,246,0.22),transparent_70%)] hero-glow-pulse"
      />

      {/* Orbiting accent dots - subtle, no labels */}
      <div
        aria-hidden
        className="hero-sparkle-ring absolute left-1/2 top-1/2 hidden size-[min(92%,400px)] -translate-x-1/2 -translate-y-1/2 sm:block"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <span
            key={i}
            className="hero-sparkle-dot"
            style={{ "--dot-angle": `${i * 60}deg` } as CSSProperties}
          />
        ))}
      </div>

      <div className="animate-hero-screen relative scale-[1.04] sm:scale-[1.06] lg:scale-105 lg:origin-center">
        <div className="hero-art-clip relative mx-auto aspect-square w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-2xl">
          <div className="hero-image-float relative h-full w-full">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              fill
              priority
              sizes="(max-width: 1024px) 95vw, 55vw"
              className="hero-art-image scale-[1.14] object-contain object-center"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_76%_at_50%_46%,transparent_52%,white_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white via-white/80 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-white via-white/85 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
