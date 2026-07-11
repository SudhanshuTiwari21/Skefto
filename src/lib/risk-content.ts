import type { IconName } from "@/components/icons";
import { LINKS } from "@/lib/content";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";

export { CUSTOMER_LOGOS } from "@/lib/content";
export { LINKS };

export const RISKMAT_URL = "https://skefto.com/riskmat/";

export const HERO_TRUST_TOKENS = [
  "AS/ISO 31000 aligned",
  "Government-certified Australian hosting",
  "Designed by risk practitioners",
] as const;

export const SECTOR_PRELOADS = [
  { name: "Local government", href: LINKS.industries.localGov, shape: "hexagon" as const },
  { name: "Education", href: LINKS.industries.education, shape: "triangle" as const },
  { name: "Aged care & NDIS", href: LINKS.industries.agedCare, shape: "circle" as const },
];

export const TRUST_STATS = [
  { v: "60+", k: "government organisations trust Skefto" },
  { v: "20+", k: "years in Australian GRC practice" },
  { v: "F.ISRM", k: "practitioner-led platform design" },
  { v: "100%", k: "Australian-hosted data" },
];

export const PAIN_POINTS = [
  {
    n: "01",
    title: "Spreadsheet overload",
    body: "Risk teams chase actions by email, rebuild board packs from scratch, and maintain registers in spreadsheets with no audit trail or workflow automation.",
  },
  {
    n: "02",
    title: "No single source of truth",
    body: "Risk data lives across shared drives, inboxes and disconnected tools. Boards and executives cannot see exposure in real time - so decisions rely on outdated information.",
  },
  {
    n: "03",
    title: "Unclear accountability",
    body: "When risk owners, control owners and treatment owners are not defined in one system, critical actions slip and exposure builds quietly between reporting cycles.",
  },
];

export const CAPABILITIES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Enterprise risk register",
    body: "Manage strategic, operational, safety, cyber and environmental risks in one register with clear ownership and AS/ISO 31000-aligned structure.",
    icon: "register",
  },
  {
    title: "Risk assessment & heat maps",
    body: "Configurable matrices, inherent and residual scoring, and visual heat maps that help teams prioritise what matters to the board.",
    icon: "risk",
  },
  {
    title: "Treatment & control assurance",
    body: "Track treatment plans, control effectiveness and overdue actions with automated workflow triggers - not email chasing.",
    icon: "workflow",
  },
  {
    title: "Board & executive reporting",
    body: "Live dashboards and automated board packs give leadership defensible visibility without manual spreadsheet assembly.",
    icon: "chart",
  },
  {
    title: "Audit & assurance",
    body: "Plan audits, capture findings and link corrective actions to risks and controls for a complete three-lines-of-defence picture.",
    icon: "audit",
  },
  {
    title: "Business continuity",
    body: "BIA, recovery objectives and crisis workflows connected to your risk environment - aligned to AS/ISO 22301.",
    icon: "shield",
  },
];

export const REGISTER_BULLETS = [
  "Custom risk matrices and consequence criteria",
  "Inherent, current and target scoring with heat maps",
  "Risk ownership across strategic and operational levels",
  "Control effectiveness assurance and treatment tracking",
  "Automated alerts on overdue actions and reviews",
];

export const TREATMENT_BULLETS = [
  "Treatment plans with accountable owners and due dates",
  "Control libraries linked to each risk",
  "Workflow triggers when ratings exceed appetite",
  "Evidence and assurance activities in one audit trail",
  "Escalation paths for overdue or rejected treatments",
];

export const REPORTING_BULLETS = [
  "Executive and board-ready risk dashboards",
  "Trend analysis across categories and business units",
  "Automated reporting packs for audit committees",
  "Exportable registers for regulators and assurance teams",
  "Real-time posture - not quarterly spreadsheet snapshots",
];

export const GENAI_CAPABILITIES: {
  title: string;
  body: string;
  icon: IconName;
  points: string[];
}[] = [
  {
    title: "Regulatory change management & horizon scanning",
    body: "GenAI tracks regulatory updates and turns dense legal text into action-ready guidance for your environment.",
    icon: "refresh",
    points: [
      "Automated impact analysis tailored to your business lines",
      "Policy mapping against internal controls, policies and risks",
      "Plain-language summaries for product, operations and sales teams",
      "NLP-based regulatory change mapping to existing obligations",
    ],
  },
  {
    title: "Conversational compliance operations",
    body: "Give teams instant answers and investigation support without hunting through handbook PDFs and email trails.",
    icon: "sparkles",
    points: [
      "Policy chatbots with citation back to internal policy clauses",
      "Investigation support across internal and external evidence sources",
      "Training scenario generation based on real industry violations",
      "Role-specific guidance for frontline managers and risk owners",
    ],
  },
  {
    title: "Automated compliance mapping & assurance response",
    body: "Accelerate cross-framework mapping and audit responses using semantic analysis, similarity scoring and explainability.",
    icon: "map",
    points: [
      "Map ISO 27001, NIST, SOC 2 and regulatory requirements automatically",
      "Clause similarity scores with rationale and traceable evidence",
      "Smart questionnaire responses using historical answers and policies",
      "Inbound policy gap analysis against external drafts and supplier policies",
    ],
  },
];

export const GENAI_GUARDRAILS = [
  "Human-in-the-loop approvals for high-stakes regulatory decisions",
  "Source-cited answers with links to policies, controls and obligations",
  "Role-based access and audit logs for every AI-generated recommendation",
  "Confidence thresholds and escalation workflows for low-certainty outputs",
];

export const FRAMEWORKS = [
  "AS/ISO 31000",
  "APRA CPS 220",
  "APRA CPS 230",
  "APRA CPS 234",
  "AS/ISO 22301",
  "NDIS Quality & Safeguards",
];

export const SECTORS_INTRO =
  "Pre-built risk templates and framework alignments for the regulated sectors Skefto knows best - so your team moves from spreadsheets to a live register faster.";

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
    body: "Council risk registers, strategic and operational risk reporting, and Local Government Act-aligned governance workflows.",
    supports: [
      "Strategic & operational risk registers",
      "Council audit & assurance",
      "Delegations & governance",
      "Business continuity for essential services",
      "Executive attestations",
      "Regulatory reporting templates",
    ],
    href: LINKS.industries.localGov,
    linkLabel: "Explore local government",
  },
  {
    id: "state-government",
    title: "State government",
    icon: "building",
    geoShape: "hexagon",
    body: "Agency risk frameworks aligned to state Treasury requirements, operational resilience and board reporting.",
    supports: [
      "Enterprise risk registers",
      "APRA CPS readiness (where applicable)",
      "Material service provider mapping",
      "Scenario testing & BCP",
      "Three-lines-of-defence reporting",
      "Policy & governance registers",
    ],
    href: LINKS.industries.stateGov,
    linkLabel: "Explore state government",
  },
  {
    id: "education",
    title: "Education",
    icon: "cap",
    geoShape: "triangle",
    body: "Risk management for schools, TAFEs and universities - child safety, governance and regulatory compliance in one view.",
    supports: [
      "Strategic & operational risks",
      "Child safe standards",
      "Policy review workflows",
      "Privacy & data breach registers",
      "WHS & incident linkage",
      "Board & council reporting",
    ],
    href: LINKS.industries.education,
    linkLabel: "Explore education",
  },
  {
    id: "aged-care",
    title: "Aged care",
    icon: "heart",
    geoShape: "circle",
    body: "Quality and safety risk aligned to Aged Care Quality Standards with clinical, operational and governance visibility.",
    supports: [
      "Quality indicator risk tracking",
      "Restrictive practices oversight",
      "Complaints & feedback linkage",
      "Accreditation readiness",
      "Executive compliance statements",
      "Incident & safety integration",
    ],
    href: LINKS.industries.agedCare,
    linkLabel: "Explore aged care",
  },
  {
    id: "disability",
    title: "Disability services",
    icon: "heart",
    geoShape: "circle",
    body: "NDIS Quality and Safeguards alignment with provider risk, incident and compliance registers connected.",
    supports: [
      "NDIS practice standards mapping",
      "High-intensity care oversight",
      "Restrictive practices register",
      "Provider compliance attestations",
      "Incident escalation workflows",
      "Audit & inspection schedules",
    ],
    href: LINKS.industries.disability,
    linkLabel: "Explore disability services",
  },
];

export const ECOSYSTEM = [
  {
    title: "Compliance management software",
    body: "Obligations registers, regulatory change, audits and evidence linked to your risk register.",
    icon: "register" as IconName,
    href: COMPLIANCE_CANONICAL_PATH,
  },
  {
    title: "Incident management",
    body: "Connect incidents and near-misses to the risks and controls they affect.",
    icon: "incident" as IconName,
    href: LINKS.solutions.incident,
  },
  {
    title: "Health & safety",
    body: "Unify WHS risk with your broader enterprise risk program.",
    icon: "safety" as IconName,
    href: LINKS.solutions.safety,
  },
  {
    title: "Strategy & planning",
    body: "Align risk appetite with strategic objectives and organisational planning.",
    icon: "target" as IconName,
    href: LINKS.solutions.strategy,
  },
];

export const WHY_CHOOSE = [
  {
    title: "Practitioner-led, not software-first",
    body: "Built by Australian risk experts with decades inside regulated sectors - not technologists configuring a generic GRC template.",
    icon: "users" as IconName,
    featured: true,
  },
  {
    title: "Software, advisory & training",
    body: "One team delivers the platform, independent risk advisory, and practical training - the uplift is not outsourced to partners.",
    icon: "cap" as IconName,
  },
  {
    title: "Sector-ready from day one",
    body: "Templates for councils, agencies, education, aged care and NDIS - aligned to AS/ISO 31000 and Australian regulatory frameworks.",
    icon: "building" as IconName,
  },
];

export const COMPARISON = {
  generic: [
    "Software-first vendors with advisory through partners",
    "Generic frameworks - buyer configures to local standards",
    "Module sprawl across disconnected registers",
    "Global hosting with unclear data sovereignty",
  ],
  skefto: [
    "Practitioner-led platform with advisory and training in-house",
    "Out-of-the-box AS/ISO 31000, APRA CPS and NDIS alignment",
    "Risk, compliance, audit, policy and BCP in one stack",
    "Hosted exclusively in government-certified Australian data centres",
  ],
};

export const PILLARS = [
  {
    title: "Risk management software",
    body: "One integrated platform for risk, compliance, audit, policies and business continuity - scaling as maturity grows without migrating systems.",
    icon: "sliders" as IconName,
    proof: "Platform",
  },
  {
    title: "Risk advisory services",
    body: "Independent workshops, risk appetite development, culture assessments and framework reviews from practitioners who built the platform.",
    icon: "users" as IconName,
    proof: "Advisory",
    featured: true,
    href: LINKS.services.advisory,
    linkLabel: "Explore risk advisory",
  },
  {
    title: "Risk management training",
    body: "Fundamentals, practitioner and leadership pathways - delivered with LG Pro Victoria and IPAA-ACT to thousands of public sector staff.",
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
    "Skefto was designed by risk experts for everyone in your organisation - not just the risk team. It reflects how risk management actually works in Australian regulated sectors.",
  credentials: [
    "Australia's nominated expert to ISO for security and resilience",
    "Contributor to ISO 22336 Organisational Resilience (2024)",
    "Fellow of the Institute of Strategic Risk Management",
    "20+ years in senior risk roles across Australian government",
  ],
};

export const OUTCOMES = [
  {
    title: "End the spreadsheet nightmare",
    body: "One centralised risk register with clear ownership - no more emailing department heads for status before the board meeting.",
    icon: "register" as IconName,
  },
  {
    title: "Board-ready in hours, not weeks",
    body: "Automated dashboards and reporting replace manual pack assembly - leadership sees exposure when it matters.",
    icon: "chart" as IconName,
  },
  {
    title: "Adoption across the organisation",
    body: "A clean interface risk owners actually use - from frontline managers to executives, without extensive retraining.",
    icon: "workflow" as IconName,
  },
];

export const TESTIMONIAL = {
  quote:
    "For the first time we have a single, defensible view of organisational risk. Board reporting that used to take weeks now takes hours.",
  name: "Governance & Risk Lead",
  org: "Regional Council, VIC",
};

export const FAQS = [
  {
    q: "What is risk management software?",
    a: "Risk management software is a centralised platform that helps organisations identify, assess, treat and monitor risks across operational, strategic, safety, cyber and compliance areas. It replaces spreadsheets with a single source of truth - risk registers, controls, treatment plans, audit trails and board-ready reporting - aligned to standards like AS/ISO 31000.",
  },
  {
    q: "Is Skefto aligned with AS/ISO 31000?",
    a: "Yes. Skefto supports organisations aligning with the principles and framework in AS/ISO 31000. Teams maintain risk registers, document controls, monitor treatment actions and apply their own governance methodologies on a practical, scalable platform built for Australian regulated sectors.",
  },
  {
    q: "How is Skefto different from Riskware and Protecht?",
    a: "Skefto is built by Australian risk practitioners and combines software, advisory and training under one team. Riskware and Protecht are software-first platforms where advisory is often delivered through partners. Skefto data is hosted exclusively in government-certified Australian data centres, with sector templates aligned to AS/ISO 31000, APRA CPS 220/230/234, AS/ISO 22301 and NDIS Quality and Safeguards.",
  },
  {
    q: "What is the best risk management software for Australian organisations?",
    a: "The best fit depends on your sector and regulatory environment. Councils need Local Government Act alignment, NDIS providers need Quality and Safeguards compliance, APRA-regulated entities need CPS 230 readiness, and aged care providers need Quality Standards support. Skefto is purpose-built for these regulated Australian sectors with onshore hosting and practitioner-led implementation.",
  },
  {
    q: "Does risk management software help with APRA CPS 230?",
    a: "Yes. APRA CPS 230 requires entities to identify critical operations, manage material service providers, test business continuity and report operational risk to the board. Skefto maintains operational risk registers, maps service providers, supports scenario testing and produces assurance reports - with pre-built CPS 230 templates.",
  },
  {
    q: "What is RiskMAT?",
    a: "RiskMAT is Skefto's free online Risk Maturity Assessment. It benchmarks your organisation against AS/ISO 31000, identifies gaps and produces a personalised improvement roadmap in under 20 minutes - a practical starting point before a product demo.",
  },
  {
    q: "How long does implementation take?",
    a: "Most organisations go live in 4–12 weeks depending on size and data migration complexity. Smaller councils and NDIS providers often move from spreadsheets to a live register in 4–6 weeks. Larger agencies and universities with multiple business units typically need 8–12 weeks. Pre-configured sector templates accelerate time to value.",
  },
  {
    q: "Where is our risk data stored?",
    a: "All data is hosted in government-certified Australian data centres, aligned to data sovereignty requirements under the Privacy Act 1988 and the Australian Government Information Security Manual. Skefto is suitable for Commonwealth, state and local government, NDIS providers, aged care, schools and any organisation requiring onshore hosting.",
  },
  {
    q: "Can AI help with regulatory change management and policy updates?",
    a: "Yes. GenAI can scan regulatory updates, summarise legal text in plain language, map obligations to your existing controls and policies, and flag likely policy gaps. Skefto applies this with source-cited outputs and human review checkpoints for final compliance decisions.",
  },
  {
    q: "How does Skefto use GenAI safely for compliance?",
    a: "Skefto uses a human-in-the-loop architecture for high-stakes workflows. AI-generated recommendations are confidence-scored, source-cited, logged for auditability, and escalated to specialists when certainty is low, so automation improves speed without weakening governance.",
  },
];
