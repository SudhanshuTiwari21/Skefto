/**
 * Tier 3.3 — off-page SEO tasks for the marketing team.
 * Skefto is not currently listed on major AU software directories; claim profiles
 * before adding public footer badges or review-count claims on-page.
 */
export const REVIEW_PLATFORM_OUTREACH = {
  capterraAu: {
    directoryUrl: "https://www.capterra.com.au/compliance-software/",
    task: "Create a Skefto vendor profile and collect verified reviews from council, care and education customers.",
  },
  softwareAdviceAu: {
    directoryUrl: "https://www.softwareadvice.com.au/compliance/",
    task: "List Skefto compliance with sector screenshots, sovereign hosting proof and implementation timeline.",
  },
} as const;

/** Tier 3.6 — international expansion hypothesis (validate with SERP research before build) */
export const INTERNATIONAL_EXPANSION_HYPOTHESES = {
  nz: {
    status: "hypothesis" as const,
    rationale:
      "NZ councils and education share structurally similar regulated-sector needs; Sentrient treats AU+NZ as one market in the AU SERP.",
    validationStep: "Run NZ SERP check for obligations management and council compliance terms before creating /nz/ pages.",
  },
} as const;
