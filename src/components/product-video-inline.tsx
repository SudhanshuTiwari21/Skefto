import {
  PRODUCT_OVERVIEW_POSTER,
  PRODUCT_OVERVIEW_VIDEO,
} from "@/lib/content";

export function ProductVideoInline() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-950 shadow-soft">
      <video
        controls
        preload="metadata"
        playsInline
        poster={PRODUCT_OVERVIEW_POSTER}
        className="aspect-video w-full bg-ink-900 object-cover"
        aria-label="Skefto Compliance product overview"
      >
        <source src={PRODUCT_OVERVIEW_VIDEO} type="video/mp4" />
        Your browser does not support embedded video.{" "}
        <a
          href={PRODUCT_OVERVIEW_VIDEO}
          className="font-semibold text-brand-600 underline"
        >
          Download the overview
        </a>
        .
      </video>
    </div>
  );
}
