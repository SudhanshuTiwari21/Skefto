import type { IconName } from "@/components/icons";
import { LINKS } from "@/lib/content";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";

export { CUSTOMER_LOGOS } from "@/lib/content";
export { LINKS };

export const SAFETY_CANONICAL_PATH = "/solutions/safety-software/" as const;
export const RISK_CANONICAL_PATH = "/solutions/risk-management-software/" as const;

/** First mention for international SEO; use ISO_45001_SHORT thereafter */
export const ISO_45001_FIRST = "ISO 45001 (AS/NZS ISO 45001 in Australia)" as const;
export const ISO_45001_SHORT = "ISO 45001" as const;

export const HERO_TRUST_TOKENS = [
  ISO_45001_FIRST,
  "Regional government-certified hosting",
  "Connected to risk & incidents",
] as const;

export const SECTOR_PRELOADS = [
  { name: "Local government", href: LINKS.industries.localGov, shape: "hexagon" as const },
  { name: "Education", href: LINKS.industries.education, shape: "triangle" as const },
  { name: "Aged care & NDIS", href: LINKS.industries.agedCare, shape: "circle" as const },
  { name: "Regulated organisations", href: "#sectors", shape: "hexagon" as const },
];

export const TRUST_STATS = [
  { v: "60+", k: "government organisations trust Skefto" },
  { v: "20+", k: "years in GRC & WHS practice" },
  { v: "Live", k: "hazard, audit and injury registers" },
  { v: "100%", k: "onshore data hosting" },
];

export const PAIN_POINTS: {
  n: string;
  title: string;
  body: string;
  solved: string;
  icon: IconName;
}[] = [
  {
    n: "01",
    title: "Hazards trapped in paperwork",
    body: "Hazard forms sit in inboxes and shared drives. Controls are not linked to owners, and leadership cannot see open risks before an incident happens.",
    solved: "A live hazard register with owned controls and board-level visibility.",
    icon: "document",
  },
  {
    n: "02",
    title: "Inspections without follow-through",
    body: "Checklists get completed, but corrective actions stall. Audit readiness depends on last-minute chasing instead of a live action trail.",
    solved: "Findings become owned actions with escalations and an evidence trail.",
    icon: "audit",
  },
  {
    n: "03",
    title: "Injuries disconnected from risk",
    body: "Injury reports, claims and return-to-work plans live apart from the risk register, so the same hazard can recur without anyone seeing the pattern.",
    solved: "Injuries link back to hazards and risk, so patterns surface early.",
    icon: "heart",
  },
];

export const CAPABILITIES: {
  title: string;
  body: string;
  icon: IconName;
  bullets?: string[];
}[] = [
  {
    title: "Hazard reporting & risk assessments",
    body: "Capture hazards early, run configurable risk assessments, and assign controls with owners and due dates.",
    icon: "risk",
  },
  {
    title: "Audits & inspections",
    body: "Plan mobile-ready inspections and safety audits with checklists, reminders and corrective action tracking.",
    icon: "audit",
  },
  {
    title: "Injuries, claims & return to work",
    body: "Record injuries and illness, manage claims evidence, and track return-to-work plans in one secure workflow.",
    icon: "heart",
  },
  {
    title: "Safety registers & records",
    body: "Centralise policies, training logs, certifications and WHS documents with version history and role-based access.",
    icon: "register",
  },
  {
    title: "Corrective actions & accountability",
    body: "Turn findings into owned actions with escalations, evidence capture and dashboards that close the loop.",
    icon: "workflow",
  },
  {
    title: "WHS reporting & visibility",
    body: "Give boards and WHS committees live posture: open hazards, overdue actions, injury trends and audit status.",
    icon: "chart",
  },
];

export const SAFETY_TYPES: { title: string; icon: IconName }[] = [
  { title: "Physical hazards", icon: "incident" },
  { title: "Psychosocial hazards", icon: "users" },
  { title: "Plant & equipment", icon: "sliders" },
  { title: "Chemical & environmental", icon: "globe" },
  { title: "Contractor & third-party", icon: "building" },
  { title: "Site inspections", icon: "audit" },
  { title: "Injury & illness", icon: "heart" },
  { title: "Training & competency", icon: "cap" },
  { title: "Policies & procedures", icon: "document" },
  { title: "Corrective actions", icon: "workflow" },
];

export const SAFETY_WORKFLOW: {
  title: string;
  body: string;
  icon: IconName;
}[] = [
  {
    title: "Identify hazards",
    body: "Report hazards from the field with clear location, severity and evidence.",
    icon: "incident",
  },
  {
    title: "Assess & control",
    body: "Run risk assessments, assign controls and set owners with deadlines.",
    icon: "risk",
  },
  {
    title: "Inspect & audit",
    body: "Schedule inspections and audits, then track findings to closure.",
    icon: "audit",
  },
  {
    title: "Respond to injury",
    body: "Capture injuries, claims and return-to-work actions without spreadsheet chasing.",
    icon: "heart",
  },
  {
    title: "Report & improve",
    body: "Show WHS posture to executives, boards and regulators in one view.",
    icon: "chart",
  },
];

export const HAZARD_BULLETS = [
  "Hazard capture with photos, location and severity",
  "Configurable risk assessment templates",
  "Control libraries with owners and review dates",
  "Psychosocial and physical hazard coverage",
  "Live hazard register across sites and business units",
];

export const INSPECTION_BULLETS = [
  "Mobile-ready inspection and audit forms",
  "Pre-built and custom checklists by site or role",
  "Automated reminders for scheduled inspections",
  "Findings linked to corrective actions",
  "Evidence trail for regulators and insurers",
];

export const INJURY_BULLETS = [
  "Injury and illness reporting workflows",
  "Claims documentation and status tracking",
  "Return-to-work plans with accountable owners",
  "Privacy-aware access controls for sensitive records",
  "Trend reporting for WHS committees and boards",
];

export const FRAMEWORKS = [
  ISO_45001_FIRST,
  "WHS Acts & Regulations (AU)",
  "Safe Work Australia codes",
  "State WHS frameworks",
  "ISO 31000",
  "Privacy Act ready",
];

export const SECTORS_INTRO =
  "Sector-ready WHS workflows for regulated organisations that need more than a checklist app.";

export const SECTORS: {
  id: string;
  title: string;
  icon: IconName;
  geoShape: "hexagon" | "circle" | "triangle";
  body: string;
  supports: string[];
  href: string;
  linkLabel: string;
}[] = [
  {
    id: "local-government",
    title: "Local government",
    icon: "building",
    geoShape: "hexagon",
    body: "Depot, parks, facilities and contractor WHS with council-ready registers and audit trails.",
    supports: [
      "Depot and plant inspections",
      "Contractor safety oversight",
      "Incident and injury linkage",
      "Psychosocial hazard tracking",
      "Executive WHS reporting",
      "Multi-site corrective actions",
    ],
    href: LINKS.industries.localGov,
    linkLabel: "Explore local government",
  },
  {
    id: "state-government",
    title: "State government",
    icon: "building",
    geoShape: "hexagon",
    body: "Agency WHS frameworks with due diligence evidence for PCBUs and officers.",
    supports: [
      "Hazard and risk registers",
      "Inspection programmes",
      "Injury and claims workflows",
      "Training competency logs",
      "Committee packs and dashboards",
      "Policy and procedure control",
    ],
    href: LINKS.industries.stateGov,
    linkLabel: "Explore state government",
  },
  {
    id: "education",
    title: "Education",
    icon: "cap",
    geoShape: "triangle",
    body: "Campus and school WHS covering staff, students, contractors and high-risk activities.",
    supports: [
      "Site hazard reporting",
      "Lab and workshop inspections",
      "Injury and wellbeing workflows",
      "Contractor permit visibility",
      "Training and induction records",
      "Board-ready safety reporting",
    ],
    href: LINKS.industries.education,
    linkLabel: "Explore education",
  },
  {
    id: "aged-care",
    title: "Aged care",
    icon: "heart",
    geoShape: "circle",
    body: "Worker and resident safety with clinical, operational and psychosocial hazard visibility.",
    supports: [
      "Manual handling risk tracking",
      "Facility inspections",
      "Injury and RTW workflows",
      "Psychosocial hazard registers",
      "Training competency evidence",
      "Quality and safety linkage",
    ],
    href: LINKS.industries.agedCare,
    linkLabel: "Explore aged care",
  },
  {
    id: "disability",
    title: "Disability services",
    icon: "heart",
    geoShape: "circle",
    body: "Provider WHS connected to NDIS quality, incidents and high-intensity care oversight.",
    supports: [
      "Worker safety risk assessments",
      "Home and community visit hazards",
      "Restrictive practice adjacent WHS",
      "Injury and claims tracking",
      "Multi-site inspection schedules",
      "Incident escalation workflows",
    ],
    href: LINKS.industries.disability,
    linkLabel: "Explore disability services",
  },
];

export const ECOSYSTEM = [
  {
    title: "Risk management software",
    body: "Link WHS hazards and controls into your enterprise risk register.",
    icon: "risk" as IconName,
    href: RISK_CANONICAL_PATH,
  },
  {
    title: "Incident management",
    body: "Connect near-misses and incidents to hazards, injuries and actions.",
    icon: "incident" as IconName,
    href: LINKS.solutions.incident,
  },
  {
    title: "Compliance management software",
    body: "Tie safety obligations, audits and evidence into your compliance programme.",
    icon: "register" as IconName,
    href: COMPLIANCE_CANONICAL_PATH,
  },
  {
    title: "Strategy & planning",
    body: "Align safety objectives with organisational strategy and reporting.",
    icon: "target" as IconName,
    href: LINKS.solutions.strategy,
  },
];

export const COMPARISON = {
  generic: [
    "Checklist apps that stop at the inspection form",
    "Safety data siloed from risk, incidents and compliance",
    "Spreadsheet injury and claims tracking",
    "Unclear data residency for regulated buyers",
  ],
  skefto: [
    "End-to-end WHS: hazards, audits, injuries and registers",
    "Native links to risk, incidents and compliance",
    "Owned corrective actions with live executive visibility",
    "Regional government-certified onshore hosting",
  ],
};

export const PILLARS = [
  {
    title: "Health & safety software",
    body: "Hazards, inspections, injuries and registers on one platform that connects to risk, incidents and compliance as you grow.",
    icon: "safety" as IconName,
    proof: "Platform",
  },
  {
    title: "Risk & WHS advisory",
    body: "Practitioner workshops, framework reviews and due diligence support from the team that built the platform.",
    icon: "users" as IconName,
    proof: "Advisory",
    href: LINKS.services.advisory,
    linkLabel: "Explore advisory",
  },
  {
    title: "Practical training",
    body: "Role-based enablement for WHS teams, supervisors and risk owners, delivered with public sector partners.",
    icon: "cap" as IconName,
    proof: "Training",
    href: LINKS.services.training,
    linkLabel: "Explore training",
  },
];

export const EXPERT = {
  name: "Pete Gervasoni, F.ISRM",
  role: "Chief Risk Officer, Skefto",
  quote:
    "WHS only works when hazards, controls and injuries connect to organisational risk. Skefto was built so safety is not a silo.",
  badges: [
    "ISO 31000 Specialist",
    "F.ISRM",
    "20+ years government GRC",
    "Public sector training partner",
  ],
};

export const OUTCOMES = [
  {
    title: "Close the hazard loop",
    body: "Every hazard gets an owner, control and due date, so findings do not disappear into email threads.",
    icon: "workflow" as IconName,
  },
  {
    title: "Audit-ready without the scramble",
    body: "Inspection evidence, corrective actions and registers stay current for regulators, insurers and boards.",
    icon: "audit" as IconName,
  },
  {
    title: "Adoption beyond the WHS team",
    body: "Supervisors and frontline staff report and close actions in a system designed for non-specialists.",
    icon: "users" as IconName,
  },
];

export const GETTING_STARTED: { title: string; body: string }[] = [
  {
    title: "Discovery demo",
    body: "Walkthrough mapped to your sites, hazard types and reporting needs.",
  },
  {
    title: "Sector configuration",
    body: "Registers, checklists and workflows configured for your operating model.",
  },
  {
    title: "Rollout & training",
    body: "Role-based enablement for WHS teams, supervisors and frontline reporters.",
  },
  {
    title: "Go-live",
    body: "Most organisations are live in weeks, not a multi-year EHS programme.",
  },
];

export const GO_LIVE_PULL_QUOTE =
  "Most organisations are live in weeks, not a multi-year EHS programme.";

export const TESTIMONIAL = {
  quote:
    "We finally have one place for hazards, inspections and injuries. Corrective actions no longer disappear into email threads.",
  name: "WHS Manager",
  org: "Regional Council, VIC",
};

export const FAQS = [
  {
    q: "What is health and safety software?",
    a: "Health and safety software (also called WHS or OHS software) helps organisations identify hazards, assess risk, run inspections and audits, manage injuries and claims, and keep audit-ready records. Skefto centralises that work so teams can prove compliance and prevent incidents instead of chasing paperwork.",
  },
  {
    q: "How is Skefto different from inspection-only safety apps?",
    a: "Inspection apps excel at checklists. Skefto is WHS inside a connected GRC platform: hazards link to risk and controls, findings become owned actions, injuries connect to return-to-work workflows, and safety data sits alongside compliance and incident management. That is the difference for regulated organisations comparing vendors.",
  },
  {
    q: `Does Skefto support ${ISO_45001_SHORT}?`,
    a: `Yes. Skefto supports organisations operating to ${ISO_45001_FIRST}, including hazard identification, risk assessment, operational control, performance monitoring and continual improvement workflows. Teams apply their own WHS management system methods on a practical, scalable platform.`,
  },
  {
    q: "What WHS laws and standards does Skefto support?",
    a: "Skefto supports Work Health and Safety Acts and Regulations across Australian jurisdictions, Safe Work Australia codes of practice, state-based frameworks, and ISO 45001. Sector templates help councils, government agencies, education and care providers operationalise those duties.",
  },
  {
    q: "Can it manage psychosocial hazards?",
    a: "Yes. Psychosocial hazards can be captured in hazard registers, assessed with configurable templates, assigned controls and monitored alongside physical safety risks, so psychosocial due diligence is not stuck in a separate spreadsheet.",
  },
  {
    q: "Does it handle injuries, claims and return to work?",
    a: "Yes. Skefto supports injury and illness reporting, claims documentation, return-to-work tracking and privacy-aware access controls, with dashboards for WHS committees and executives.",
  },
  {
    q: "How long does implementation take?",
    a: "Many organisations go live in 4 to 8 weeks using sector templates and guided onboarding. Larger multi-site rollouts with integrations typically take 8 to 12 weeks, including training for WHS teams and supervisors.",
  },
  {
    q: "Where is our WHS data stored?",
    a: "Data is hosted in regional government-certified data centres with onshore hosting options, supporting data sovereignty expectations for government, education and care buyers. Role-based access protects sensitive injury and claims records.",
  },
  {
    q: "How does safety connect to risk and incident management?",
    a: "Skefto links WHS hazards and controls to enterprise risk registers, and connects incidents and near-misses to the hazards and actions they affect. Safety is not an island: boards see operational risk and WHS posture together.",
  },
];
