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

/** Product overview video (public/) */
export const PRODUCT_OVERVIEW_VIDEO = "/Compliance%20Video.mp4";
export const PRODUCT_OVERVIEW_POSTER = "/Compliance%20Dashboard.png";
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

/* --------------------------- Industries / sector clouds ----------------------------- */
export const INDUSTRIES: {
  id: string;
  product: string;
  sector: string;
  icon: IconName;
  geoShape: "hexagon" | "circle" | "triangle";
  body: string;
  points: [string, string];
  href: string;
  linkLabel: string;
}[] = [
  {
    id: "local-government",
    product: "CouncilCloud",
    sector: "Local government",
    icon: "building",
    geoShape: "hexagon",
    body: "Preconfigured compliance registers, obligations, audits and reporting for local government.",
    points: [
      "Local Government Act & statutory reporting templates",
      "Council-ready workflows across directorates",
    ],
    href: LINKS.industries.localGov,
    linkLabel: "Explore CouncilCloud",
  },
  {
    id: "aged-care",
    product: "CareCloud",
    sector: "Aged care, disability & health",
    icon: "heart",
    geoShape: "circle",
    body: "Compliance management aligned to aged care, disability and healthcare requirements.",
    points: [
      "Aged Care Quality & NDIS Practice Standards built in",
      "Incident and evidence linked to obligations",
    ],
    href: LINKS.industries.agedCare,
    linkLabel: "Explore CareCloud",
  },
  {
    id: "education",
    product: "EducationCloud",
    sector: "Schools & education providers",
    icon: "cap",
    geoShape: "triangle",
    body: "Governance, policy and compliance workflows designed for schools, colleges and education providers.",
    points: [
      "Child safe standards and policy controls",
      "Privacy, WHS and campus audit scheduling",
    ],
    href: LINKS.industries.education,
    linkLabel: "Explore EducationCloud",
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
    proof: "Platform",
  },
  {
    title: "Expert advisory",
    body: "Independent guidance from specialists with 20+ years strengthening compliance frameworks for the public sector.",
    icon: "users",
    proof: "Advisory",
    featured: true,
    href: LINKS.services.advisory,
    linkLabel: "Explore risk advisory",
  },
  {
    title: "Practical training",
    body: "Role-based programs that build compliance capability at every level - from frontline staff to boards.",
    icon: "cap",
    proof: "Training",
    href: LINKS.services.training,
    linkLabel: "Explore training",
  },
];

export const SECTOR_DIFFERENTIATOR =
  "Start with industry-specific registers, obligations, controls and frameworks already mapped to your sector.";

/** Top reasons customers choose Skefto over generic compliance vendors */
export const WHY_CHOOSE_SKEFTO: {
  title: string;
  body: string;
  icon: IconName;
  featured?: boolean;
}[] = [
  {
    title: "Sector-specific templates & registers",
    body: "Industry-specific registers for local government, education, aged care and NDIS — obligations, controls and frameworks pre-mapped to your sector, not a blank offshore template.",
    icon: "building",
    featured: true,
  },
  {
    title: "All-in-one GRC ecosystem",
    body: "Compliance connects natively to risk management, incident & safety, business continuity and strategic planning — one Australian platform, not bolted-on modules.",
    icon: "risk",
  },
  {
    title: "Audit-ready automation & visibility",
    body: "Automated workflows, role-based access and immutable change logs replace manual chasing — real-time visibility when boards and auditors ask.",
    icon: "audit",
  },
];

/** Recurring benefits customers report after go-live */
export const CLIENT_OUTCOMES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "End the spreadsheet nightmare",
    body: "One centralised source of truth. Clear ownership of every task — no more emailing department heads for status updates.",
    icon: "register",
  },
  {
    title: "Reactive to proactive",
    body: "Compliance becomes continuous and visible in daily operations — not a once-a-year scramble before attestation or external audit.",
    icon: "chart",
  },
  {
    title: "High adoption, gentle learning curve",
    body: "A clean interface anyone can use — log in, see your obligations and complete tasks without extensive retraining.",
    icon: "workflow",
  },
];

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
    q: "Why should I choose Skefto instead of other compliance software vendors?",
    a: "Generic vendors give you empty registers and offshore templates. Skefto starts with sector-specific registers, obligations, controls and frameworks already mapped to local government, education, aged care and NDIS. Compliance connects natively to risk, incident & safety, business continuity and strategic planning — not disconnected modules. Automated workflows, role-based access and immutable audit logs replace spreadsheet chasing, giving boards and auditors real-time visibility. Customers consistently report one source of truth, a shift from reactive to proactive compliance, and high adoption because the interface is intuitive for non-specialists.",
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
