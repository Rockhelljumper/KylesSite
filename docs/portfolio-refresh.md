# Portfolio leadership refresh

## Design assessment

The design direction came from reviewing the [developer-portfolios collection](https://github.com/emmabostian/developer-portfolios) and sampling 22 senior, staff, backend, SRE, and leadership portfolios. The useful recurring pattern was concise positioning followed by evidence, rather than a large technology cloud or generic SaaS-style sections.

This implementation uses an editorial layout: a compact primary navigation, thin rules, type-led hierarchy, one restrained teal/rust accent system, evidence rows, and detailed case-study routes. It intentionally avoids gradient text, animated counters, dashboard hero imagery, glass panels, and uniform card grids.

The person-first follow-up keeps that restraint while returning some needed
character: a genuine portrait, compact personal and community context, public
podcast artwork, and gentle non-essential movement that yields entirely to
`prefers-reduced-motion`. The home page now deliberately stops after a small
set of work, a personal interlude, and a human invitation—details belong on
their own routes.

## Information architecture

- `/` — executive summary: role, verified proof points, selected work, capability evidence, and AI discipline.
- `/projects` — a curated project index with an explicit capability taxonomy.
- `/projects/[slug]` — case studies with problem, role, sanitized architecture, decisions, operations, and lessons.
- `/about` — leadership story, working domains, and personal context.
- `/resume` — role-oriented resume variants served by the existing API.
- `/contact` — public contact surface.

`/now` is now labeled **Life** in primary navigation, while `/community`
remains a supporting route for teaching, mentoring, and the hobby podcast.

`/now` and `/community` remain available but are secondary navigation, not competing primary journeys.

## Featured work

| Classification | Project | Why |
| --- | --- | --- |
| Featured | Bathroom Buddy | A real public product that demonstrates cross-platform delivery, data freshness, moderation, and operations. |
| Featured | Reliable Financial Integration & Transfer Architecture | A public synthetic reference that makes integration, failure-mode, security-boundary, and test decisions inspectable. |
| Featured | AI Engineering Workflow Lab | A candid engineering-lab feature showing staged AI assistance and human quality gates. |
| Supporting | Platform Engineering Lab | Evidence of safe infrastructure automation and observability exploration without publishing topology. |
| Supporting | Regulated Platform Modernization | Confidential professional work, kept deliberately high level. |
| Supporting | Into the Nerdverse | Community communication and mentoring, not a substitute for technical work. |
| Archive | This site and its backend API | Small implementation notes, intentionally not portfolio flagships. |

## Safety and confidentiality choices

- Removed `public/images/GrafanaProd.png`; it included internal hostnames, operating telemetry, and infrastructure details.
- Bathroom Buddy uses only verified public links and one public product screenshot. It does not link private repositories or disclose infrastructure, admin paths, keys, providers, network topology, or specific security controls.
- The financial integration project is consistently labelled a **synthetic reference implementation**, not production financial work.
- The AI workflow is consistently labelled an **engineering lab**, not an autonomous production platform.
- Into the Nerdverse is represented only with a verified Spotify link and
  public-facing artwork. It is a community/personal surface, not a flagship
  technical case study.
- Personal interests are bounded descriptions based on existing site data; no
  private home-lab data, schedule, specific current reading/watch lists, or
  unverified hobby projects are published.

## Verification commands

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

The pull-request workflow runs these commands for every PR. `npm run test:e2e` includes an automated axe scan of the homepage alongside navigation and case-study checks.

## Deferred items

- Current source résumé PDFs were not present in the frontend public assets or supplied backend tree. Confirm their contents and filenames before changing PDF source files.
- Quantified professional résumé claims are visible only through the claims registry and need final source-PDF confirmation from Kyle before merge.
- Production performance measurements and a real-device accessibility review should be collected in the deployment environment before release.
- The Into the Nerdverse site returned HTTP 502 during link verification, so its public-site link was intentionally removed; the verified Spotify link remains.
- The remaining dependency-audit findings require a framework-major upgrade beyond this focused portfolio refresh; see `docs/claims-review.md` for the review boundary.
