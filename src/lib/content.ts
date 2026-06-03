import type { IconName } from "@/components/icons";

const SITE = "https://skefto.com";

/* ----------------------------------------------------------------------
 * Internal linking map
 * PageRank is passed through contextual, relevant links only. Every link
 * below points to a real Skefto destination and is placed where the
 * surrounding copy makes it genuinely useful for councils, government,
 * education and healthcare buyers.
 * -------------------------------------------------------------------- */
export const LINKS = {
  demo: `${SITE}/book-a-demo/`,
  contact: `${SITE}/contact-us/`,
  grcGuide: `${SITE}/blog/what-is-grc/`,
  privacy: `${SITE}/privacy-policy/`,
  solutions: {
    risk: `${SITE}/solutions/risk-management-software/`,
    incident: `${SITE}/solutions/incident-management-software/`,
    safety: `${SITE}/solutions/safety-software/`,
    strategy: `${SITE}/solutions/strategic-planning-software/`,
  },
  industries: {
    localGov: `${SITE}/industries/local-government/`,
    stateGov: `${SITE}/industries/state-government/`,
    education: `${SITE}/industries/education/`,
    agedCare: `${SITE}/industries/aged-care/`,
    disability: `${SITE}/industries/disability-services/`,
  },
  services: {
    advisory: `${SITE}/services/risk-advisory/`,
    training: `${SITE}/services/risk-management-training/`,
  },
} as const;

/* ------------------------------ Hero -------------------------------- */
export const TRUST_TOKENS = [
  "Australian-hosted data",
  "Government-certified centres",
  "ISO 27001 aligned",
  "Built to ISO 37301",
];

/** Hero - minimal trust row under CTAs (3 items max) */
export const HERO_TRUST_TOKENS = [
  "Australian-hosted data",
  "Government-certified centres",
  "Built to ISO 37301",
] as const;

/** Sector preloads - key Skefto differentiator vs generic GRC vendors */
export const SECTOR_PRELOADS = [
  { name: "CouncilCloud", href: LINKS.industries.localGov, shape: "hexagon" as const },
  { name: "CareCloud", href: LINKS.industries.agedCare, shape: "circle" as const },
  { name: "EducationCloud", href: LINKS.industries.education, shape: "triangle" as const },
];

/** Customer logos sorted by sector (local government → education → care) */
export const CUSTOMER_LOGOS: {
  name: string;
  src: string;
  sector: "local-government" | "education" | "care";
}[] = [
  { name: "City of Boroondara", src: "/logos/customers/City-of-Boroondara.svg", sector: "local-government" },
  { name: "City of Cockburn", src: "/logos/customers/Logo_of_the_City_of_Cockburn.svg", sector: "local-government" },
  { name: "City of Ballarat", src: "/logos/customers/City-of-Ballarat.png", sector: "local-government" },
  { name: "City of Belmont", src: "/logos/customers/City-of-Belmont-1-e1778156628772.png", sector: "local-government" },
  { name: "Surf Coast Shire", src: "/logos/customers/Surf-Coast-Shire.png", sector: "local-government" },
  { name: "Cardinia Shire Council", src: "/logos/customers/Cardinia-Shire-Council.png", sector: "local-government" },
  { name: "Mitchell Shire Council", src: "/logos/customers/Mitchell-Shire-Council.png", sector: "local-government" },
  { name: "Macedon Ranges Shire", src: "/logos/customers/Macedon-Rangers-Shire-Council.png", sector: "local-government" },
  { name: "Shire of West Arthur", src: "/logos/customers/Shire-of-West-Arthur.png", sector: "local-government" },
  { name: "LG Pro Victoria", src: "/logos/customers/LG-Pro-Victoria-e1778156890544.png", sector: "local-government" },
  { name: "Bacchus Marsh Grammar", src: "/logos/customers/Bacchus-Marsh-Grammar.png", sector: "education" },
  { name: "The Gordon", src: "/logos/customers/The-Gordon.png", sector: "education" },
  { name: "Timboon P-12 School", src: "/logos/customers/Timboon-Heath.png", sector: "education" },
  { name: "Merymead Catholic Care", src: "/logos/customers/header__logo_mcc_stacked.svg", sector: "care" },
];

/* --------------------------- Capabilities --------------------------- */
export const CAPABILITIES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Obligations register",
    body: "Capture every federal, state and sector obligation in one register, assign accountable owners, and track live status.",
    icon: "register",
  },
  {
    title: "Compliance calendar & tracking",
    body: "Turn recurring obligations into scheduled tasks. Automated reminders and escalations mean deadlines are never missed.",
    icon: "calendar",
  },
  {
    title: "Policy & document management",
    body: "Store, version and approve policies and procedures with a full audit trail and timed review cycles.",
    icon: "document",
  },
  {
    title: "Audit & action management",
    body: "Plan, run and close out compliance audits and corrective actions in one connected workflow.",
    icon: "audit",
  },
  {
    title: "Attestations & workflows",
    body: "Route reviews, sign-offs and attestations to the right officers automatically, with evidence captured at each step.",
    icon: "workflow",
  },
  {
    title: "Compliance reporting",
    body: "Real-time dashboards give boards, executives and councils instant visibility of compliance status and breaches.",
    icon: "chart",
  },
];

/* ---------------------- Obligations & calendar ---------------------- */
export const OBLIGATION_BULLETS = [
  "Due-date tracking with automated reminders and escalations",
  "Clear ownership and accountability for every obligation",
  "Evidence captured against each requirement",
  "Attestation and sign-off workflows for accountable officers",
  "Live status monitoring across teams, sites and entities",
];

/* ----------------------- Regulatory & standards --------------------- */
export const REGULATORY_VALUES: { title: string; body: string; icon: IconName }[] =
  [
    {
      title: "Regulatory change management",
      body: "Monitor changes to laws and standards, then assess the impact on your obligations and controls before they bite.",
      icon: "refresh",
    },
    {
      title: "Obligation mapping",
      body: "Map each requirement to the policies, controls and evidence that demonstrate compliance - no orphaned obligations.",
      icon: "map",
    },
    {
      title: "Attestations & assurance",
      body: "Capture sign-offs from accountable officers to prove obligations are met and give your board defensible assurance.",
      icon: "signature",
    },
  ];

export const STANDARDS = [
  "ISO 37301",
  "ISO 27001",
  "APRA CPS 230",
  "Privacy Act & Notifiable Data Breaches",
  "NDIS Practice Standards",
  "Aged Care Quality Standards",
  "Local Government Act",
];

/* --------------------------- Industries ----------------------------- */
export const INDUSTRIES: {
  id: string;
  label: string;
  icon: IconName;
  title: string;
  body: string;
  points: string[];
  href: string;
  linkLabel: string;
}[] = [
  {
    id: "local-government",
    label: "Local government",
    icon: "building",
    title: "Compliance for councils",
    body: "Meet Local Government Act obligations and statutory reporting with council-ready registers, workflows and audit trails - across every directorate.",
    points: [
      "Statutory obligation and reporting registers",
      "Policy review cycles and delegations",
      "Audit, complaints and breach workflows",
    ],
    href: LINKS.industries.localGov,
    linkLabel: "Local government solutions",
  },
  {
    id: "aged-care",
    label: "Aged care & NDIS",
    icon: "heart",
    title: "Compliance for care providers",
    body: "Stay aligned to the Aged Care Quality Standards and NDIS Practice Standards with sector templates, incident links and evidence built in.",
    points: [
      "Aged Care Quality Standards templates",
      "NDIS Practice Standards obligations",
      "Incident, complaint and evidence capture",
    ],
    href: LINKS.industries.agedCare,
    linkLabel: "Aged care & disability solutions",
  },
  {
    id: "education",
    label: "Education",
    icon: "cap",
    title: "Compliance for education",
    body: "Manage compliance obligations across schools, TAFEs and universities in one place - from child safety to privacy and WHS.",
    points: [
      "Child safe standards and policy controls",
      "Privacy and data breach obligations",
      "WHS and audit scheduling by campus",
    ],
    href: LINKS.industries.education,
    linkLabel: "Education solutions",
  },
  {
    id: "state-government",
    label: "State government",
    icon: "gov",
    title: "Compliance for government agencies",
    body: "Track statutory obligations and regulatory change across agencies, statutory authorities and departments with clear lines of accountability.",
    points: [
      "Statutory and legislative obligation tracking",
      "Regulatory change impact assessments",
      "Board and executive assurance reporting",
    ],
    href: LINKS.industries.stateGov,
    linkLabel: "State government solutions",
  },
];

/* --------------------------- Ecosystem ------------------------------ */
export const ECOSYSTEM: {
  title: string;
  body: string;
  icon: IconName;
  href: string;
}[] = [
  {
    title: "Risk management",
    body: "Connect obligations to your enterprise risk program.",
    icon: "risk",
    href: LINKS.solutions.risk,
  },
  {
    title: "Incident management",
    body: "Link breaches and incidents to the obligations they affect.",
    icon: "incident",
    href: LINKS.solutions.incident,
  },
  {
    title: "Health & safety",
    body: "Manage WHS compliance alongside your safety system.",
    icon: "safety",
    href: LINKS.solutions.safety,
  },
  {
    title: "Strategy & planning",
    body: "Align compliance with organisational strategy and reporting.",
    icon: "target",
    href: LINKS.solutions.strategy,
  },
];

/* --------------------------- Why Skefto ----------------------------- */
export const WHY_SKEFTO: {
  title: string;
  body: string;
  icon: IconName;
  proof: string;
  featured?: boolean;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "All-in-one software",
    body: "A single compliance platform that is quick to implement and easy to scale, with ready-made templates for Australian sectors.",
    icon: "sliders",
    proof: "Live in weeks",
  },
  {
    title: "Expert advisory",
    body: "Independent guidance from specialists with 20+ years strengthening compliance frameworks for the public sector.",
    icon: "users",
    proof: "20+ years in GRC",
    featured: true,
    href: LINKS.services.advisory,
    linkLabel: "Explore risk advisory",
  },
  {
    title: "Practical training",
    body: "Role-based programs that build compliance capability at every level - from frontline staff to boards.",
    icon: "cap",
    proof: "85+ training NPS",
    href: LINKS.services.training,
    linkLabel: "Explore training",
  },
];

export const WHY_PROOF = [
  { value: "20+", label: "Years in Australian GRC" },
  { value: "85+", label: "Average training NPS" },
  { value: "1,000s", label: "Public sector staff trained" },
] as const;

/* --------------------------- Social proof --------------------------- */
export const TESTIMONIALS = [
  {
    quote:
      "For the first time we have a single, defensible view of our obligations. Audit preparation that used to take weeks now takes hours.",
    name: "Governance & Risk Lead",
    org: "Regional Council, VIC",
  },
  {
    quote:
      "Skefto gave our board real assurance. Every obligation has an owner, a due date and the evidence to back it up.",
    name: "Company Secretary",
    org: "Statutory Authority, NSW",
  },
];

export const CASE_STUDY = {
  eyebrow: "Local government",
  headline: "A regional council strengthens compliance with Skefto",
  challenge:
    "Obligations were scattered across spreadsheets with no clear owners or deadlines.",
  solution:
    "A single obligations register and compliance calendar with automated reminders and board reporting.",
  result: "90% less time preparing for audits",
  href: LINKS.industries.localGov,
};

/* ----------------------------- Security ----------------------------- */
export const SECURITY: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Australian data residency",
    body: "Your compliance data is hosted in government-certified Australian data centres - it never leaves the country.",
    icon: "globe",
  },
  {
    title: "ISO 27001 aligned security",
    body: "Information security controls aligned to ISO 27001, with role-based access, encryption and full audit logging.",
    icon: "lock",
  },
  {
    title: "Privacy compliant by design",
    body: "Built to meet Australian data sovereignty and privacy obligations, including the Privacy Act and breach notification.",
    icon: "shield",
  },
];

/* ------------------------------- FAQ -------------------------------- */
export const FAQS = [
  {
    q: "What is compliance management software?",
    a: "Compliance management software centralises your regulatory obligations, policies, deadlines and evidence so you can track, manage and prove compliance from a single source of truth instead of scattered spreadsheets and registers.",
  },
  {
    q: "Is Skefto built for Australian regulations?",
    a: "Yes. Skefto is an Australian platform aligned to ISO 37301 and built around Australian obligations including APRA CPS 230, the Privacy Act and Notifiable Data Breaches scheme, NDIS Practice Standards, Aged Care Quality Standards and Local Government Act requirements.",
  },
  {
    q: "Can it track compliance deadlines automatically?",
    a: "Yes. The compliance calendar turns recurring obligations into scheduled tasks and sends automated reminders and escalations, so deadlines for attestations, audits and policy reviews are never missed.",
  },
  {
    q: "Does it handle policies and audits?",
    a: "Yes. You can manage policy versions, approvals and timed reviews, then plan, run and close out compliance audits and corrective actions with a complete audit trail.",
  },
  {
    q: "How does Skefto manage regulatory change?",
    a: "Skefto helps you monitor changes to laws and standards, assess their impact on your obligations and controls, and route the resulting actions to accountable owners - so regulatory change never catches you off guard.",
  },
  {
    q: "Where is our compliance data stored?",
    a: "All data is stored in government-certified Australian data centres, with information security aligned to ISO 27001 and built to meet Australian data sovereignty and privacy obligations.",
  },
  {
    q: "How long does implementation take?",
    a: "Skefto is quick to implement and easy to scale. Ready-made industry templates for councils, government, education and care providers accelerate time to value, with most organisations live in weeks rather than months.",
  },
];
