import type { IconName } from "@/components/icons";

const SITE = "https://skefto.com";

/* ----------------------------------------------------------------------
 * Internal linking map
 * -------------------------------------------------------------------- */
export const LINKS = {
  demo: `${SITE}/book-a-demo/`,
  contact: `${SITE}/contact-us/`,
  grcGuide: `${SITE}/blog/what-is-grc/`,
  privacy: `${SITE}/privacy-policy/`,
  solutions: {
    compliance: `${SITE}/solutions/compliance-management-software/`,
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
  partners: `${SITE}/partners/`,
} as const;

export const ISO_CERTIFIED_PHRASE = "ISO 27001 & 37301 certified" as const;

/* ------------------------------ Hero -------------------------------- */
export const TRUST_TOKENS = [
  "Sovereign cloud data hosting",
  "Government-certified centres",
  ISO_CERTIFIED_PHRASE,
] as const;

export const HERO_TRUST_TOKENS = [
  "Region-specific data residency",
  ISO_CERTIFIED_PHRASE,
  "Sector-ready compliance clouds",
] as const;

export const HERO_SUBHEAD =
  "One platform for obligations, regulatory change, audits, and evidence, for councils, government, education, care, hospitals and regulated industries. Built for organisations managing obligations across multiple teams, sites and entities, with sovereign hosting options including government-certified Australian data centres.";

export const SECONDARY_CTA_LABEL = "Talk to a specialist" as const;

export const MARKET_POSITIONING = {
  heroBadge: "Compliance management",
  logoStripSecondary:
    "20+ years helping regulated organisations prove compliance with confidence.",
} as const;

export const TRUST_BAR_STATS = [
  { v: "20+", k: "years in GRC & compliance" },
  { v: "85+", k: "average training NPS" },
  { v: "1,000s", k: "of public sector staff trained" },
] as const;

export const CLOSING_CTA_TRUST = [
  "Region-specific sovereign hosting",
  "Live in weeks, not months",
  ISO_CERTIFIED_PHRASE,
] as const;

/** Thin How it works connector strip */
export const COMPLIANCE_WORKFLOW: {
  title: string;
  body: string;
  icon: IconName;
}[] = [
  {
    title: "Map obligations",
    body: "Start with your sector's obligations pre-loaded. Nothing built from scratch.",
    icon: "map",
  },
  {
    title: "Assign ownership",
    body: "Every obligation gets a named owner, a deadline and an escalation path.",
    icon: "users",
  },
  {
    title: "Operate daily",
    body: "Reminders, reviews and attestations run on schedule without manual chasing.",
    icon: "workflow",
  },
  {
    title: "Capture evidence",
    body: "Documents and sign-offs attach to obligations as work happens, not in a scramble before the audit.",
    icon: "document",
  },
  {
    title: "Report & assure",
    body: "When the board asks for compliance status, the answer is current, defensible and one click away.",
    icon: "chart",
  },
];

export const GETTING_STARTED: { title: string; body: string }[] = [
  {
    title: "Discovery demo",
    body: "Walkthrough mapped to your sector, frameworks and reporting needs.",
  },
  {
    title: "Sector configuration",
    body: "GovCloud, CareCloud or EducationCloud templates mapped to your legislation.",
  },
  {
    title: "Rollout & training",
    body: "Role-based enablement for compliance owners, business units and executives.",
  },
  {
    title: "Go-live",
    body: "Most organisations are live in weeks, not a multi-year GRC programme.",
  },
];

export const GO_LIVE_PULL_QUOTE =
  "Most organisations are live in weeks, not a multi-year GRC programme.";

export const ISO_CERTIFICATION_ASSETS = {
  iso27001: "/certifications/iso-27001.png",
  iso37301: "/certifications/iso-37301.webp",
} as const;

export const PRODUCT_OVERVIEW_VIDEO = "/Compliance%20Video.mp4";
export const PRODUCT_OVERVIEW_POSTER = "/Compliance%20Dashboard.png";

export const PRODUCT_SCREENSHOTS = {
  register: "/Compliance%20Register.png",
  calendar: "/Compliance%20Calendar.png",
} as const;

/** Live, demo-able integrations only */
export const INTEGRATIONS = [
  { name: "LexisNexis", label: "LexisNexis" },
  { name: "Microsoft Teams", label: "Microsoft Teams" },
  { name: "Power BI", label: "Power BI" },
] as const;

export const SECTOR_PRELOADS = [
  { name: "GovCloud", href: LINKS.industries.localGov, shape: "hexagon" as const },
  { name: "CareCloud", href: LINKS.industries.agedCare, shape: "circle" as const },
  { name: "EducationCloud", href: LINKS.industries.education, shape: "triangle" as const },
];

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

/* --------------------------- Capabilities grid --------------------------- */
export const CAPABILITIES: {
  eyebrow: string;
  title: string;
  body: string;
  icon: IconName;
}[] = [
  {
    eyebrow: "Obligations register",
    title: "One source of truth for every obligation",
    body: "Capture federal, state and sector obligations in a single register, each with a named owner and live status.",
    icon: "register",
  },
  {
    eyebrow: "Compliance calendar & tracking",
    title: "Never miss a compliance deadline",
    body: "Recurring obligations become scheduled tasks with automated reminders and escalation when things slip.",
    icon: "calendar",
  },
  {
    eyebrow: "Policy & document management",
    title: "Policies that stay current",
    body: "Version control, approval workflows and timed review cycles, so no one acts on a superseded document.",
    icon: "document",
  },
  {
    eyebrow: "Audit & action management",
    title: "Audit prep in hours, not weeks",
    body: "Evidence links to each obligation as work happens, so the audit trail builds itself. City of Belmont reports 90% less audit prep time.",
    icon: "audit",
  },
  {
    eyebrow: "Attestations & workflows",
    title: "Sign-offs without the follow-up chasing",
    body: "Attestations route to the right officers automatically, with evidence captured at every step.",
    icon: "workflow",
  },
  {
    eyebrow: "Compliance reporting",
    title: "Answer \"are we compliant?\" in one click",
    body: "Real-time dashboards give boards and executives instant visibility of compliance status and breaches.",
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

export const POLICY_BULLETS = [
  "Policy lifecycle tracking with owners, reviewers and approval stages",
  "Version history and auditable change logs for every update",
  "Direct links from policies to obligations, controls and evidence",
  "Review reminders and escalation workflows before expiry dates",
  "Cross-cloud policy governance for GovCloud, CareCloud and EducationCloud",
];

export const AUDIT_ACTION_BULLETS = [
  "Audit planning, scheduling and scope templates by business unit",
  "Finding capture with severity, owner and remediation due dates",
  "Action tracking with status, evidence and executive escalation",
  "Three-lines-of-defence reporting for boards and assurance committees",
  "Traceability from audit findings to obligations, controls and policies",
];

export const REGULATORY_EXTRA_BULLETS = [
  "Authoritative regulatory content from LexisNexis feeds horizon scanning and obligation updates, traceable from source to register.",
  "Compliance AI with human-in-the-loop guardrails: automated regulatory impact analysis, policy gap mapping and plain-language summaries.",
] as const;

export const REGULATORY_VALUES: { title: string; body: string; icon: IconName }[] =
  [
    {
      title: "Regulatory change management",
      body: "Monitor changes to laws and standards, then assess the impact on your obligations and controls before they bite.",
      icon: "refresh",
    },
    {
      title: "Obligation mapping",
      body: "Map each requirement to the policies, controls and evidence that demonstrate compliance, with no orphaned obligations.",
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
export const INDUSTRIES_INTRO =
  "Built for highly regulated organisations, whether you're a government agency, council, care provider, or education institution. Sector-specific configurations streamline compliance with local legislation, standards, and operational requirements.";

export const GOVCLOUD_SUPPORT_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Registers & calendar",
    items: ["Compliance calendar", "Contracts register", "Delegations"],
  },
  {
    label: "Audit",
    items: [
      "Internal & external audit",
      "Audit schedules",
      "Audit actions",
      "Audit self-assessments",
    ],
  },
  {
    label: "Declarations & conduct",
    items: [
      "Declarations (gifts, conflicts)",
      "Conflicts of interest",
      "Breaches",
      "Whistleblower reporting",
      "Primary & annual returns",
    ],
  },
  {
    label: "Regulatory change",
    items: ["Legal and regulatory change management"],
  },
];

export const GOVERNANCE_PORTAL_HIGHLIGHT =
  "Governance Portal (Australian first): board, committee and elected-member compliance in one portal, including councillor declarations, gifts and conflicts. Built in partnership with the City of Belmont.";

export const INDUSTRIES: {
  id: string;
  product: string;
  sector: string;
  icon: IconName;
  geoShape: "hexagon" | "circle" | "triangle";
  body: string;
  supports: string[];
  supportGroups?: { label: string; items: string[] }[];
  highlight?: string;
  href: string;
  linkLabel: string;
}[] = [
  {
    id: "local-government",
    product: "GovCloud",
    sector: "Councils, state and federal government",
    icon: "building",
    geoShape: "hexagon",
    body: "Preconfigured compliance registers, obligations, audits and reporting for councils, state and federal government, mapped to relevant legislation and operational requirements.",
    supports: [],
    supportGroups: GOVCLOUD_SUPPORT_GROUPS,
    highlight: GOVERNANCE_PORTAL_HIGHLIGHT,
    href: LINKS.industries.localGov,
    linkLabel: "Explore GovCloud",
  },
  {
    id: "aged-care",
    product: "CareCloud",
    sector: "Aged care, disability & health",
    icon: "heart",
    geoShape: "circle",
    body: "Compliance management mapped to aged care, disability and healthcare requirements, including Aged Care Quality Standards and NDIS Practice Standards.",
    supports: [
      "Regulatory & legislative compliance",
      "Audit schedules",
      "Contracts, accreditations & standards",
      "Complaints & feedback",
      "Restrictive practices / high-intensity care",
      "Policy review register",
      "Executive attestations & compliance statements",
      "Compliance calendar",
      "Delegations",
      "Breaches",
      "Declarations (gifts, conflicts)",
      "Audit actions",
      "Conflicts of interest",
      "Breach reporting",
      "Audit self-assessments",
      "Whistleblower reporting",
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
    body: "Governance, policy and compliance workflows designed for schools, colleges and education providers across Australia.",
    supports: [
      "Policy reviews",
      "Staff & student associations",
      "Conflicts of interest",
      "Privacy & data breaches",
      "Self-assessment tools for regulatory audits",
      "Breach of code of conduct",
      "Compliance calendar",
      "Declarations (gifts, conflicts)",
      "Audit actions",
      "Legal and regulatory change management",
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

/* --------------------------- More than software ----------------------------- */
export const WHY_SKEFTO: {
  title: string;
  body: string;
  icon: IconName;
  badge: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    title: "All-in-one software",
    body: "A single compliance platform, quick to implement and easy to scale, with ready-made templates for regulated sectors.",
    icon: "sliders",
    badge: "Live in weeks",
  },
  {
    title: "Expert advisory",
    body: "Independent guidance from specialists with 20+ years strengthening compliance frameworks for the public sector.",
    icon: "users",
    badge: "20+ years in GRC",
    href: LINKS.services.advisory,
    linkLabel: "Explore risk advisory",
  },
  {
    title: "Practical training",
    body: "Role-based programs that build compliance capability at every level, from frontline staff to boards.",
    icon: "cap",
    badge: "85+ training NPS",
    href: LINKS.services.training,
    linkLabel: "Explore training",
  },
];

export const SECTOR_DIFFERENTIATOR =
  "Start with industry-specific registers, obligations, controls and frameworks already mapped to your sector.";

export const WHY_CHOOSE_SKEFTO: {
  title: string;
  body: string;
  icon: IconName;
  featured?: boolean;
}[] = [
  {
    title: "Sector-specific templates & registers",
    body: "Industry-specific registers for councils, state and federal government, education, aged care and NDIS: obligations, controls and frameworks pre-mapped to your sector, not a blank one-size-fits-all template.",
    icon: "building",
    featured: true,
  },
  {
    title: "All-in-one GRC ecosystem",
    body: "Compliance connects natively to risk management, incident & safety, business continuity and strategic planning: one Australian platform, not bolted-on modules.",
    icon: "risk",
  },
  {
    title: "Audit-ready automation & visibility",
    body: "Automated workflows, role-based access and immutable change logs replace manual chasing, with real-time visibility when boards and auditors ask.",
    icon: "audit",
  },
];

/** Belmont case study chips: 90% appears here (authoritative) and on the audit capability card only */
export const BELMONT_OUTCOME_CHIPS: { metric: string; metricLabel: string }[] = [
  { metric: "90%", metricLabel: "less audit prep time (City of Belmont)" },
  { metric: "1", metricLabel: "source of truth for obligations" },
  { metric: "Live", metricLabel: "board-ready compliance status" },
];

/* --------------------------- Social proof --------------------------- */
export const TESTIMONIALS = [
  {
    quote:
      "For the first time we have a single, defensible view of our obligations. Audit preparation that used to take weeks now takes hours.",
    name: "Governance & Risk Lead",
    org: "City of Belmont",
  },
  {
    quote:
      "Skefto gave our board real assurance. Every obligation has an owner, a due date and the evidence to back it up.",
    name: "Company Secretary",
    org: "Statutory Authority, NSW",
  },
];

export const CASE_STUDY = {
  eyebrow: "City of Belmont",
  headline: "City of Belmont centralises council compliance on Skefto",
  challenge:
    "Compliance obligations and governance workflows were spread across registers and manual processes, limiting visibility for audit preparation and elected-member governance.",
  solution:
    "GovCloud registers, a single obligations library, and automated compliance calendar, alongside the Governance Portal programme co-built with City of Belmont for councillor obligations.",
  result: "Clearer ownership and faster audit preparation",
  href: LINKS.industries.localGov,
};

/* ----------------------------- Security ----------------------------- */
export const SECURITY: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Region-specific data residency",
    body: "Choose region-specific data residency to meet local sovereignty requirements, including Australian-hosted environments in government-certified data centres.",
    icon: "globe",
  },
  {
    title: ISO_CERTIFIED_PHRASE,
    body: "Information security and compliance management systems certified to ISO 27001 and ISO 37301, with role-based access, encryption and full audit logging.",
    icon: "lock",
  },
  {
    title: "Privacy compliant by design",
    body: "Supports evolving privacy obligations across jurisdictions, including Privacy Act requirements and GDPR-ready policy mapping workflows.",
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
    a: "Generic vendors give you empty registers and one-size-fits-all templates. Skefto starts with sector-specific registers, obligations, controls and frameworks already mapped to councils, state and federal government, education, aged care and NDIS. Compliance connects natively to risk, incident & safety, business continuity and strategic planning, not disconnected modules. Automated workflows, role-based access and immutable audit logs replace spreadsheet chasing, giving boards and auditors real-time visibility. Customers consistently report one source of truth, a shift from reactive to proactive compliance, and high adoption because the interface is intuitive for non-specialists.",
  },
  {
    q: "Is Skefto built for Australian regulations?",
    a: "Yes. Skefto is an Australian platform, ISO 27001 & 37301 certified, and built around Australian obligations including APRA CPS 230, the Privacy Act and Notifiable Data Breaches scheme, NDIS Practice Standards, Aged Care Quality Standards, and requirements relevant to councils, state and federal government organisations.",
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
    a: "Skefto helps you monitor changes to laws and standards, assess their impact on your obligations and controls, and route the resulting actions to accountable owners, so regulatory change never catches you off guard. Authoritative regulatory content from LexisNexis feeds horizon scanning and obligation updates, traceable from source to register.",
  },
  {
    q: "Where is our compliance data stored?",
    a: "Australian customer data is hosted in government-certified Australian data centres by default, with ISO 27001 & 37301 certified information security and built for Australian data sovereignty and privacy obligations. Region-specific residency options and GDPR-ready governance workflows are available for organisations with cross-border requirements. Teams can work in the tools they already use, including Microsoft Teams and Power BI.",
  },
  {
    q: "How long does implementation take?",
    a: "Skefto is quick to implement and easy to scale. Ready-made industry templates for councils, state and federal government, education and care providers accelerate time to value, with most organisations live in weeks rather than months.",
  },
  {
    q: "How is Skefto priced?",
    a: "Skefto is licensed as a platform subscription, priced on the modules you need and the size of your organisation. Most organisations are live in weeks. Book a demo for a quote tailored to your obligations, sector and team structure.",
  },
];

export const FOOTER_DESCRIPTION =
  "Governance, risk and compliance software for regulated organisations. ISO 27001 & 37301 certified, with sovereign hosting options including government-certified Australian data centres.";

export const FOOTER_HOSTING_LINE =
  "Sovereign hosting options, including government-certified Australian data centres.";
