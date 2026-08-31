# Portfolio leadership refresh

## Executive summary

Rebuilt the portfolio around one coherent identity: an engineering leader who remains hands-on with platforms, production systems, backend architecture, integrations, and quality engineering. The old generic project-card experience is now an evidence-led case-study system.

## Positioning changes

**Before:** a generic developer portfolio with inconsistent titles, a wide role-target list, technical badges, and a portfolio website as featured work.

**After:** a concise engineering-leadership story that uses specific production, product, integration, and AI-workflow evidence. Platform, SRE, data/integration, security, and AI capabilities are connected to case studies instead of keyword clouds.

## Person-first refresh

This follow-up intentionally reduces the homepage to a short introduction,
selected work, and one personal interlude. It restores the meaningful parts of
the earlier personal site—makerspace work, outdoor life, home projects,
reading, games, and the Into the Nerdverse podcast—without restoring generic
project cards, technology clouds, or a corporate conversion funnel. Primary
navigation now includes **Life**; contact remains available but is no longer a
primary business CTA.

## Page changes

- `/`: new executive-summary homepage, verified impact row, selected work, evidence-led capabilities, AI discipline, and a clear contact CTA.
- `/about`: coherent leadership story and practical working domains.
- `/projects`: explicit typed capability filters and curated project classification.
- `/projects/bathroom-buddy`: flagship public-product case study with a sanitized architecture/data-quality story and verified public links.
- `/projects/reliable-financial-integration`: synthetic financial-integration reference with conservative transfer/failure-mode decisions.
- `/projects/ai-engineering-workflow-lab`: engineering-lab case study for staged AI assistance and human review.
- `/projects/platform-engineering-lab`: supporting infrastructure automation and observability lab.
- `/resume`: retained variants, with source-PDF reconciliation called out for review.

## Featured projects

Bathroom Buddy, the reliable financial integration reference, and the AI workflow lab are featured. The platform lab, confidential regulated platform work, and community work are supporting. The portfolio implementation and its small backend API are archived.

## Bathroom Buddy

The case study uses only verified public product links and public product UI. It describes map discovery, data freshness, review, moderation, and operations at a sanitized boundary level. No private repositories, source excerpts, credentials, topology, or internal control details are linked or published.

## AI, SRE/platform, and data/integration

AI is presented as an engineering force multiplier inside a requirements → architecture → implementation → tests → review → human-approval loop. SRE/platform work is visible in delivery, observability, recovery, and operating-model content. Data/integration work is shown through Bathroom Buddy data lifecycle and the financial demo's reconciliation/freshness design.

## Visual design

The redesign adopts a restrained editorial system: strong type hierarchy, warm neutral surfaces, thin rules, a small accent system, actual product evidence, and varied section layouts. It removes dashboard hero imagery, gradient-heavy styling, and uniform rounded-card grids.

## Testing

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The E2E suite checks homepage → projects navigation, capability filtering, the AI workflow route, Bathroom Buddy public links, and an axe accessibility scan of the homepage.

## Accessibility

Added skip navigation, visible focus styles, semantic landmark/headings, keyboard-operable filters with `aria-pressed`, an accessible mobile-menu state, reduced-motion handling, and an automated axe check. Manual review should still cover actual mobile devices and the Turnstile contact flow.

## Performance and SEO

Added server-first case-study pages, local image sizing, metadata base/canonicals/OpenGraph/Twitter preview, Person/WebSite/CreativeWork JSON-LD, robots, sitemap, and security headers. Production performance metrics are deferred until the deployment environment is available.

## Screenshots

- `docs/screenshots/home-desktop.png`
- `docs/screenshots/home-mobile.png`
- `docs/screenshots/projects-desktop.png`
- `docs/screenshots/bathroom-buddy.png`
- `docs/screenshots/about.png`
- `docs/screenshots/community.png`

## Claims requiring Kyle review

See `docs/claims-review.md`: three résumé-source metrics, current resume PDF artifacts, and exact Bathroom Buddy title/scope require confirmation.

## Deferred improvements

- Current source résumé PDFs and document-generation workflow
- Live deployment performance data and real-device accessibility pass
- A scoped Next.js 16 upgrade to address remaining dependency-audit paths
