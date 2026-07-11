import { LINKS } from "@/lib/content";

const COMPLIANCE = LINKS.solutions.compliance;

export type IndustrySlug =
  | "local-government"
  | "state-government"
  | "education"
  | "aged-care"
  | "disability-services";

export type IndustryPageContent = {
  slug: IndustrySlug;
  path: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  highlights: string[];
  cloudName: string;
  complianceLinkLabel: string;
  relatedIndustryHref: string;
  relatedIndustryLabel: string;
};

export const INDUSTRY_PAGES: IndustryPageContent[] = [
  {
    slug: "local-government",
    path: "/industries/local-government/",
    title: "Compliance Management Software for Local Government & Councils | Skefto",
    metaDescription:
      "Council compliance management software with GovCloud registers, delegations, audit workflows and Local Government Act alignment. Australian-hosted for councils and shires.",
    eyebrow: "Local government",
    headline: "Council compliance management software built for Australian LGAs",
    intro:
      "Councils juggle hundreds of statutory obligations across delegations, returns, audits, declarations and regulatory change. Skefto GovCloud gives you preconfigured registers and workflows mapped to local government legislation - not a blank enterprise template.",
    highlights: [
      "GovCloud registers for delegations, returns, declarations and breaches",
      "Compliance calendar with automated reminders and escalations",
      "Audit planning, findings and corrective actions in one workflow",
      "Australian sovereign hosting in government-certified data centres",
    ],
    cloudName: "GovCloud",
    complianceLinkLabel: "Explore compliance management software for councils",
    relatedIndustryHref: LINKS.industries.stateGov,
    relatedIndustryLabel: "State government agencies",
  },
  {
    slug: "state-government",
    path: "/industries/state-government/",
    title: "Government Compliance Management Software | Skefto",
    metaDescription:
      "Government compliance management software for state and federal agencies. Obligations registers, policy governance, audit workflows and sovereign Australian hosting.",
    eyebrow: "State & federal government",
    headline: "Government compliance management software for public sector agencies",
    intro:
      "Agencies need defensible obligation tracking, policy governance and audit-ready evidence across business units. Skefto connects compliance registers to risk, incidents and board reporting on a sovereign-ready Australian platform.",
    highlights: [
      "Central obligations library with accountable owners and evidence",
      "Policy lifecycle management with review cycles and approvals",
      "Regulatory change impact assessment and action routing",
      "Role-based access, audit trails and executive dashboards",
    ],
    cloudName: "GovCloud",
    complianceLinkLabel: "See government compliance management software",
    relatedIndustryHref: LINKS.industries.localGov,
    relatedIndustryLabel: "Councils and local government",
  },
  {
    slug: "education",
    path: "/industries/education/",
    title: "Education Compliance Management Software | Skefto",
    metaDescription:
      "Compliance management software for schools, colleges and education providers. Policy reviews, privacy breaches, governance workflows and EducationCloud templates.",
    eyebrow: "Education",
    headline: "Education compliance management software for schools and providers",
    intro:
      "Education providers manage policy reviews, privacy obligations, conflicts of interest and regulatory self-assessments across campuses and faculties. EducationCloud streamlines governance workflows designed for Australian schools, TAFEs and universities.",
    highlights: [
      "Policy review register with owners, approvals and version history",
      "Privacy and data breach workflows with auditable evidence",
      "Self-assessment tools for regulatory audits and attestations",
      "Compliance calendar shared across faculties and business units",
    ],
    cloudName: "EducationCloud",
    complianceLinkLabel: "Explore education compliance management software",
    relatedIndustryHref: LINKS.industries.localGov,
    relatedIndustryLabel: "Government education agencies",
  },
  {
    slug: "aged-care",
    path: "/industries/aged-care/",
    title: "Aged Care Compliance Management Software | Skefto",
    metaDescription:
      "Aged care compliance management software aligned to Aged Care Quality Standards. CareCloud registers, attestations, audit workflows and Australian data residency.",
    eyebrow: "Aged care",
    headline: "Aged care compliance management software aligned to Quality Standards",
    intro:
      "Aged care providers must demonstrate continuous compliance with Quality Standards, accreditation cycles and executive attestations. CareCloud maps obligations, audits and evidence to the standards regulators expect - with Australian hosting for sensitive resident and workforce data.",
    highlights: [
      "Registers mapped to Aged Care Quality Standards requirements",
      "Executive attestations and compliance statements with evidence",
      "Audit schedules, findings and remediation in one connected workflow",
      "Complaints, breaches and restrictive practices tracking",
    ],
    cloudName: "CareCloud",
    complianceLinkLabel: "See aged care compliance management software",
    relatedIndustryHref: LINKS.industries.disability,
    relatedIndustryLabel: "Disability and NDIS providers",
  },
  {
    slug: "disability-services",
    path: "/industries/disability-services/",
    title: "NDIS Compliance Management Software | Skefto",
    metaDescription:
      "NDIS compliance management software for disability service providers. NDIS Practice Standards registers, incident linkage, attestations and CareCloud workflows.",
    eyebrow: "Disability & NDIS",
    headline: "NDIS compliance management software for disability service providers",
    intro:
      "NDIS providers face Practice Standards obligations, incident reporting, restrictive practices documentation and quality audits across multiple sites. Skefto CareCloud gives providers a single obligations register with clear ownership and audit-ready evidence.",
    highlights: [
      "NDIS Practice Standards mapped to registers and controls",
      "Provider compliance attestations and executive sign-off workflows",
      "Incident and breach registers linked to obligations and actions",
      "Multi-site visibility for quality, safety and governance teams",
    ],
    cloudName: "CareCloud",
    complianceLinkLabel: "Explore NDIS compliance management software",
    relatedIndustryHref: LINKS.industries.agedCare,
    relatedIndustryLabel: "Aged care providers",
  },
];

export const INDUSTRY_PAGE_BY_SLUG = Object.fromEntries(
  INDUSTRY_PAGES.map((page) => [page.slug, page]),
) as Record<IndustrySlug, IndustryPageContent>;

export const COMPLIANCE_CANONICAL_PATH = "/solutions/compliance-management-software/";
