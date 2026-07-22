# Skefto icon & UI asset pack

For developers rebuilding the **Compliance** and **Risk** landing pages.

This pack contains:
1. Exact SVG icons used on the current Next.js pages (`icons/`)
2. Common UI snippet visuals from capability cards (`ui-snippets/`)
3. Lucide React equivalents if you prefer a library (table below)

Brand accent colours used on the live pages:
- Purple / brand: `#8D3D97`
- Teal / accent: `#0091AE`
- Ink: `#14181F` / `#6B7280`

All line icons use `stroke="currentColor"` so they inherit text colour. Size them with CSS (`width`/`height` or `class="size-5"`).

---

## Quick start options

### Option A — use the SVGs in this zip (recommended for exact match)

```html
<img src="./icons/audit.svg" alt="" width="20" height="20" />
```

Or inline the SVG and set colour via CSS `color`.

### Option B — use Lucide React (fastest for production apps)

```bash
npm install lucide-react
```

```tsx
import { SearchCheck, RefreshCw, Map, Activity } from "lucide-react";

<RefreshCw className="size-5 text-brand-700" strokeWidth={1.7} />
```

Lucide CDN (no install): https://lucide.dev/icons/

---

## Icon inventory (exact files in `/icons`)

| File | Used on | Meaning | Closest Lucide | Lucide URL |
|------|---------|---------|----------------|------------|
| `register.svg` | Compliance + Risk | Obligations / risk register | `book-open-check` or `clipboard-list` | https://lucide.dev/icons/clipboard-list |
| `calendar.svg` | Compliance | Compliance calendar | `calendar-check` | https://lucide.dev/icons/calendar-check |
| `document.svg` | Compliance + Risk | Policy / document | `file-text` | https://lucide.dev/icons/file-text |
| `audit.svg` | Compliance + Risk | Audit / search findings | `search-check` | https://lucide.dev/icons/search-check |
| `workflow.svg` | Compliance + Risk | Attestations / workflow | `git-branch` or `workflow` | https://lucide.dev/icons/git-branch |
| `chart.svg` | Compliance + Risk | Reporting / dashboards | `chart-line` | https://lucide.dev/icons/chart-line |
| `refresh.svg` | Regulatory change | Regulatory change | `refresh-cw` | https://lucide.dev/icons/refresh-cw |
| `map.svg` | Obligation mapping | Obligation mapping | `map` | https://lucide.dev/icons/map |
| `signature.svg` | Attestations & assurance | Sign-offs | `pen-line` or `signature` | https://lucide.dev/icons/pen-line |
| `shield.svg` | Security / BCP | Shield / assurance | `shield-check` | https://lucide.dev/icons/shield-check |
| `incident.svg` | Platform cards | Incident / alert | `triangle-alert` | https://lucide.dev/icons/triangle-alert |
| `safety.svg` | Platform cards | Health & safety / helmet | `hard-hat` | https://lucide.dev/icons/hard-hat |
| `target.svg` | Strategy / strategic risk | Strategy / bullseye | `target` | https://lucide.dev/icons/target |
| `risk.svg` | Risk heat map card | Risk (shield + alert) | `shield-alert` | https://lucide.dev/icons/shield-alert |
| `building.svg` | Industries / GovCloud | Government / council | `building-2` | https://lucide.dev/icons/building-2 |
| `heart.svg` | CareCloud / aged care | Care / health | `heart-pulse` | https://lucide.dev/icons/heart-pulse |
| `cap.svg` | EducationCloud | Education | `graduation-cap` | https://lucide.dev/icons/graduation-cap |
| `gov.svg` | Government | Parliament / gov building | `landmark` | https://lucide.dev/icons/landmark |
| `lock.svg` | Security / cyber | Lock / security | `lock` | https://lucide.dev/icons/lock |
| `globe.svg` | Residency / env risk | Globe | `globe` | https://lucide.dev/icons/globe |
| `sliders.svg` | Platform / project risk | Configure / platform | `sliders-horizontal` | https://lucide.dev/icons/sliders-horizontal |
| `users.svg` | Advisory / ownership | People | `users` | https://lucide.dev/icons/users |
| `sparkles.svg` | AI / reputation | AI / sparkle | `sparkles` | https://lucide.dev/icons/sparkles |
| `check.svg` | Checkmarks / ticks | Check | `check` | https://lucide.dev/icons/check |
| `arrow.svg` | Links / CTAs | Arrow right | `arrow-right` | https://lucide.dev/icons/arrow-right |
| `bolt.svg` | Accents | Lightning (filled) | `zap` | https://lucide.dev/icons/zap |
| `play.svg` | Video | Play (filled) | `play` | https://lucide.dev/icons/play |
| `spark.svg` | Accents | Star (filled) | `star` | https://lucide.dev/icons/star |

---

## Where icons appear on each page

### Compliance page

| Section | Icons |
|---------|-------|
| Capabilities grid | `register`, `calendar`, `document`, `audit`, `workflow`, `chart` |
| Regulatory change cards | `refresh`, `map`, `signature` |
| Connected GRC platform cards | `risk`/`shield`, `incident`, `safety`, `target` |
| Sector clouds | `building`, `heart`, `cap` |
| Security | `shield`, `lock`, `globe` |
| More than software | `sliders`, `users`, `cap` |

### Risk page

| Section | Icons |
|---------|-------|
| Capabilities | `register`, `risk`, `workflow`, `chart`, `audit`, `shield`, `sparkles` |
| Risk types strip | `target`, `workflow`, `chart`, `lock`, `register`, `users`, `sliders`, `safety`, `globe`, `sparkles` |
| Sectors | `building`, `cap`, `heart` |
| Platform / ecosystem | `register`, `incident`, `safety`, `target` |

---

## UI snippets (`/ui-snippets`)

These are the mini in-card visuals from capability cards. They are reference designs (HTML/CSS rebuild is fine):

| File | Used in |
|------|---------|
| `findings-queue.svg` | Audit & action management card |
| `sign-off-path.svg` | Attestations & workflows card |
| `live-compliance-posture.svg` | Compliance reporting (dark) card |
| `calendar-week.svg` | Compliance calendar card |
| `status-pills.svg` | Obligations / policy status chips |
| `risk-heat-map.svg` | Risk assessment / heat map previews |

---

## Feather Icons alternative

If the team already uses Feather: https://feathericons.com/

| Skefto | Feather |
|--------|---------|
| `refresh` | `refresh-cw` |
| `map` | `map` |
| `chart` | `trending-up` |
| `document` | `file-text` |
| `audit` | `search` |
| `shield` | `shield` |
| `incident` | `alert-triangle` |
| `target` | `target` |
| `users` | `users` |
| `lock` | `lock` |
| `globe` | `globe` |
| `check` | `check` |
| `arrow` | `arrow-right` |

---

## Source of truth in the codebase

These SVGs were exported from:

`Skefto/src/components/icons.tsx`

If icons change in that file later, re-export from there.

---

## Package contents

```
skefto-icon-pack/
  README.md                 ← this file
  icons/                    ← 28 line/filled SVG icons
  ui-snippets/              ← 6 card visual SVGs
```

Created for Skefto Compliance + Risk landing page handoff.
