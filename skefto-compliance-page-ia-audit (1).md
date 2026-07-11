# Skefto Compliance Page - IA Audit & Implementation Decisions

**Page audited:** Development build (`skefto.vercel.app`)  
**Goal:** International SaaS positioning · shorter scroll · less repetition · keep SEO/GEO entities  
**Primary objective:** Enterprise demo conversion (not Wikipedia-length SEO wall)

---

## What we agreed vs. the original Claude audit

| Claude audit recommendation | Skefto decision | Why |
|---|---|---|
| Remove Product Roadmap entirely | **Keep - compressed** | Client feedback (Items 15–17) requires LexisNexis, Compliance AI, Governance Portal on-page for GEO/entity SEO. Now 3 equal compact cards, not a giant featured panel. |
| Australia-only hero | **Go international** | Strategic shift to global SaaS; Australian proof kept via logos, GovCloud, case study, sovereign security. |
| Merge capabilities + how it works | **Done** | Removed 6-card bento. Single section with **workflow strip** (Map → Assign → Operate → Evidence → Report) + capability tabs. |
| Remove duplicate logo wall | **Done** | Logos only in hero marquee. |
| Merge outcomes into case study | **Done** | Outcome metrics are chips on case study card. |
| Merge ecosystem + why Skefto | **Done** | `PlatformSection` - diagram + GRC links + audit-ready differentiator. |
| Add getting started | **Done** | 4-step implementation strip before FAQ. |
| Remove stats bar training NPS | **Done** | Bar reduced to 2 compliance-relevant stats. |

---

## Final page structure (12 sections)

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero** | Global value prop + CTA + logo marquee (credibility once) |
| 2 | **Trust bar** | 20+ years · ISO aligned (brief, no repetition) |
| 3 | **How it works** (`#capabilities`) | 5-step workflow + tabbed capability deep-dive (screenshots) |
| 4 | **Security** (`#security`) | Sovereign/global residency - said once, ISO logos in banner |
| 5 | **Sector clouds** (`#industries`) | GovCloud / CareCloud / EducationCloud + compliance functions list once |
| 6 | **Connected platform** (`#platform`) | GRC ecosystem + audit-ready differentiator |
| 7 | **Product video** (`#overview`) | Self-serve walkthrough |
| 8 | **Proof** (`#proof`) | Case study + testimonials + compact innovation roadmap |
| 9 | **Getting started** (`#getting-started`) | Demo → config → training → go-live |
| 10 | **FAQ** (`#faq`) | Decision-stage objections (opens on “Why Skefto”) |
| 11 | **Final CTA** | Book a demo · Talk to a specialist |
| 12 | **Footer** | Nav + legal |

**Removed vs. previous build:** Capabilities bento, duplicate logo wall, standalone Why Skefto block, customer outcomes grid, large roadmap panel, full advisory pillars section, redundant ecosystem section.

---

## SEO & GEO preserved (not sacrificed)

Still on-page for crawlers and AI answer engines:

- **H1 entity:** compliance management software  
- **Sector entities:** GovCloud, CareCloud, EducationCloud, councils, government, education, care, hospitals  
- **Framework entities:** ISO 27001, ISO 37301, Privacy Act, GDPR-ready (in security/FAQ)  
- **Innovation entities:** LexisNexis, Compliance AI, Governance Portal, City of Belmont  
- **FAQ schema:** Full `FAQPage` JSON-LD unchanged  
- **SoftwareApplication schema:** `featureList` from capabilities, `areaServed: AU + Worldwide`  
- **Internal links:** Risk, incident, safety, strategy, industry pages, GRC guide, advisory, training  
- **Australian authority signals:** Customer logos, case study, sovereign hosting option, GovCloud

---

## How “How it works” is now different from capabilities

**Before:** Two sections listing the same features (bento grid + tabs).  
**After:** Workflow answers *the process*; tabs answer *the product areas*.

1. Map obligations  
2. Assign ownership  
3. Operate daily  
4. Capture evidence  
5. Report & assure  

Tabs below = explore obligations, regulatory change, policy, audit (with screenshots/mockups).

---

## Competitor context (why this length is right)

Enterprise compliance buyers compare Skefto to:

- **AU:** RiskWare, SurePact, CouncilFirst - sector templates + sovereign hosting  
- **Global GRC:** Hyperproof, LogicGate, SureCloud - connected platform, audit workflows  

They expect: hero → product proof → security → sector fit → platform → social proof → FAQ → CTA.  
They do **not** need: the same ISO claim five times or two logo walls.

Typical competitor page length: **4–6 screens**. This restructure targets ~**5–6 screens** while keeping GEO-rich innovation and sector content.

---

## Files changed (implementation reference)

| Area | File |
|---|---|
| Page order | `src/app/page.tsx` |
| Workflow + tabs | `src/components/compliance-deep-dive-section.tsx` |
| Platform merge | `src/components/platform-section.tsx` |
| Proof + roadmap | `src/components/trust-partner-section.tsx` |
| Getting started | `src/components/getting-started-section.tsx` |
| International copy | `src/lib/content.ts`, `hero-copy.tsx`, `layout.tsx` |
| Security trim | `src/components/security-section.tsx` |
| Industries trim | `src/components/industry-tabs.tsx` |

---

## Optional next passes (not blocking launch)

1. Replace compliance video if thumbnail shows outdated WALGA/branding  
2. Trim each cloud `supports` list to top 8 items (further scroll reduction)  
3. Dedicated `/international/` or `/au/` URLs if you split markets formally  
4. Mirror international positioning on risk page when ready
