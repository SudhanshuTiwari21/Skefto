import type { MetadataRoute } from "next";
import { COMPLIANCE_CANONICAL_PATH, INDUSTRY_PAGES } from "@/lib/industries-content";
import { SAFETY_CANONICAL_PATH } from "@/lib/safety-content";

const SITE = "https://skefto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE}${COMPLIANCE_CANONICAL_PATH}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/solutions/risk-management-software/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}${SAFETY_CANONICAL_PATH}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...INDUSTRY_PAGES.map((page) => ({
      url: `${SITE}${page.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
