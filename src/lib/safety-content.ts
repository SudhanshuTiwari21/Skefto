import type { IconName } from "@/components/icons";
import { LINKS } from "@/lib/content";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";

export { CUSTOMER_LOGOS } from "@/lib/content";
export { LINKS };

const SITE = "https://skefto.com";

export const SAFETY_CANONICAL_PATH = "/solutions/safety-software/" as const;
export const RISK_CANONICAL_PATH = "/solutions/risk-management-software/" as const;

/** First mention for international SEO; use ISO_45001_SHORT thereafter */
export const ISO_45001_FIRST = "ISO 45001 (AS/NZS ISO 45001 in Australia)" as const;
export const ISO_45001_SHORT = "ISO 45001" as const;

export const HOSTING_AU = "Australian government-certified data centres" as const;
export const HOSTING_FAQ_NOTE =
  "Primary hosting is in Australian government-certified data centres with onshore options for regulated buyers. Regional hosting options are available for organisations outside Australia.";

export const HERO_TRUST_TOKENS = [
  ISO_45001_FIRST,
  HOSTING_AU,
  "Mobile & offline field capture",
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
    body: "Capture physical and psychosocial hazards early, run configurable risk assessments, and assign controls with owners and due dates.",
    icon: "risk",
  },
  {
    title: "Audits & inspections",
    body: "Mobile and offline-ready inspections and safety audits with checklists, reminders and corrective action tracking.",
    icon: "audit",
  },
  {
    title: "Injuries, claims & return to work",
    body: "Record injuries and illness, manage claims evidence, and track return-to-work plans in one secure workflow.",
    icon: "heart",
  },
  {
    title: "Safety registers & records",
    body: "Centralise policies, training logs, certifications, contractor SWMS and WHS documents with version history.",
    icon: "register",
  },
  {
    title: "Corrective actions & accountability",
    body: "Turn findings into owned actions with escalations, evidence capture and dashboards that close the loop.",
    icon: "workflow",
  },
  {
    title: "WHS reporting & visibility",
    body: "Give boards, HSRs and WHS committees live posture: open hazards, overdue actions, injury trends and audit status.",
    icon: "chart",
  },
];

export const FIELD_FEATURES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Offline field capture",
    body: "Depot and remote crews keep reporting when signal drops. Records sync when connectivity returns.",
    icon: "bolt",
  },
  {
    title: "Photo, location and GPS",
    body: "Attach evidence at the worksite so hazards and inspections are specific, not vague.",
    icon: "globe",
  },
  {
    title: "Supervisor sign-off",
    body: "Route findings to the right owner with clear due dates and escalation when actions stall.",
    icon: "users",
  },
  {
    title: "Contractor & SWMS visibility",
    body: "Keep contractor checks and SWMS evidence in the same action trail as your own workforce.",
    icon: "building",
  },
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
  "Mobile and offline inspection and audit forms",
  "Pre-built and custom checklists by site or role",
  "Automated reminders for scheduled inspections",
  "Findings linked to corrective actions and evidence",
  "Contractor and SWMS audit trails for councils and sites",
];

export const INJURY_BULLETS = [
  "Injury and illness reporting workflows",
  "Notifiable incident escalation pathways for PCBUs",
  "Claims documentation and status tracking",
  "Return-to-work plans with accountable owners",
  "Privacy-aware access for sensitive records",
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
  "Sector-ready WHS workflows for Australian councils, agencies, schools and care providers that need more than a checklist app.";

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
    href: `${SITE}${RISK_CANONICAL_PATH}`,
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
    href: `${SITE}${COMPLIANCE_CANONICAL_PATH}`,
  },
  {
    title: "Strategy & planning",
    body: "Align safety objectives with organisational strategy and reporting.",
    icon: "target" as IconName,
    href: LINKS.solutions.strategy,
  },
];

/** Procurement-friendly comparison matrix */
export const COMPARISON_ROWS = [
  {
    criterion: "Scope",
    checklist: "Stops at the inspection form",
    skefto: "Hazards, audits, injuries, registers and corrective actions",
  },
  {
    criterion: "Connected GRC",
    checklist: "Safety data siloed from risk and compliance",
    skefto: "Native links to risk, incidents and compliance",
  },
  {
    criterion: "Field use",
    checklist: "Often web-only or weak offline",
    skefto: "Mobile and offline capture with photo and GPS evidence",
  },
  {
    criterion: "Hosting",
    checklist: "Unclear data residency",
    skefto: HOSTING_AU,
  },
  {
    criterion: "Expertise",
    checklist: "Software-only vendors",
    skefto: "Platform plus advisory and training in-house",
  },
];

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

export const NAMED_PROOF = {
  org: "City of Belmont",
  headline: "Australian councils already run Skefto for connected GRC",
  body: "City of Belmont centralised council compliance on Skefto with measurable audit-prep gains. The same platform extends to WHS hazards, inspections and injuries for organisations that want one system.",
  metrics: [
    { v: "90%", l: "less audit prep time at City of Belmont" },
    { v: "60+", l: "government organisations on Skefto" },
  ],
};

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

export const GO_LIVE_TIMELINE = "4-8 weeks" as const;

export const TESTIMONIAL = {
  quote:
    "We finally have one place for hazards, inspections and injuries. Corrective actions no longer disappear into email threads.",
  name: "WHS Manager",
  org: "Regional Council, VIC",
};

export const RELATED_ARTICLES = [
  {
    title: "Psychosocial hazards in the workplace",
    href: `${SITE}/blog/psychosocial-hazards-in-the-workplace/`,
  },
  {
    title: "Workplace hazards: types and examples",
    href: `${SITE}/blog/workplace-hazards-types-examples/`,
  },
  {
    title: "What is a safety management system?",
    href: `${SITE}/blog/safety-management-system/`,
  },
];

export const FAQS = [
  {
    q: "What is WHS software?",
    a: "WHS software (also called health and safety or OHS software) helps organisations identify hazards, assess risk, run inspections and audits, manage injuries and claims, and keep audit-ready records. Skefto centralises that work so Australian regulated teams can prove due diligence and prevent incidents instead of chasing paperwork.",
  },
  {
    q: "How is Skefto different from inspection-only safety apps?",
    a: "Inspection apps excel at checklists. Skefto is WHS inside a connected GRC platform: hazards link to risk and controls, findings become owned actions, injuries connect to return-to-work workflows, and safety data sits alongside compliance and incident management.",
  },
  {
    q: `Does Skefto support ${ISO_45001_SHORT}?`,
    a: `Yes. Skefto supports organisations operating to ${ISO_45001_FIRST}, including hazard identification, risk assessment, operational control, performance monitoring and continual improvement workflows.`,
  },
  {
    q: "Does it support notifiable incident reporting?",
    a: "Yes. Skefto supports injury and incident workflows with escalation pathways so PCBUs and officers can meet notifiable incident duties under WHS Acts, with evidence retained for regulators and insurers. Exact notification to WorkSafe or SafeWork remains an organisational duty; Skefto provides the system of record and action trail.",
  },
  {
    q: "Can it manage psychosocial hazards and contractor SWMS?",
    a: "Yes. Psychosocial hazards can be captured, assessed and controlled alongside physical hazards. Contractor checks and SWMS evidence can sit in the same registers and action trails used by your own workforce.",
  },
  {
    q: "How does pricing work?",
    a: "Skefto is typically priced by organisation scope (sites, modules and user roles), not a one-size consumer subscription. Most buyers start with a scoped WHS or GRC package. Indicative bands are provided on request after a short discovery so quotes match your operating model.",
  },
  {
    q: "Where is our WHS data stored?",
    a: HOSTING_FAQ_NOTE,
  },
];
