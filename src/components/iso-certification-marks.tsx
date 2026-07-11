import Image from "next/image";
import { ISO_CERTIFICATION_ASSETS } from "@/lib/content";

export function IsoCertificationMarks({
  size = "md",
}: Readonly<{ size?: "sm" | "md" | "lg" }>) {
  const heights = { sm: "h-8", md: "h-9 sm:h-10", lg: "h-11 sm:h-12" } as const;
  const padding = { sm: "px-3 py-2", md: "px-4 py-3", lg: "px-5 py-3.5" } as const;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <div
        className={`flex items-center justify-center rounded-xl border border-ink-900/8 bg-white shadow-sm ${padding[size]}`}
      >
        <Image
          src={ISO_CERTIFICATION_ASSETS.iso27001}
          alt="ISO/IEC 27001 information security management certified"
          width={size === "lg" ? 148 : 128}
          height={size === "lg" ? 56 : 52}
          className={`w-auto object-contain ${heights[size]}`}
        />
      </div>
      <div
        className={`flex items-center justify-center rounded-xl border border-ink-900/8 bg-white shadow-sm ${padding[size]}`}
      >
        <Image
          src={ISO_CERTIFICATION_ASSETS.iso37301}
          alt="ISO 37301:2021 compliance management systems certified"
          width={size === "lg" ? 168 : 148}
          height={size === "lg" ? 56 : 52}
          className={`w-auto object-contain ${heights[size]}`}
        />
      </div>
    </div>
  );
}
