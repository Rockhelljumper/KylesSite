# Principal-design controls

## Baseline captured from localhost:3002

Measured at a 2540 × 1345 viewport on 2026-08-31:

| Control | Baseline | Required outcome |
| --- | ---: | ---: |
| Primary navigation links visible on desktop | 4 | 8: Home, Work, About, Life, Community, Résumé, Contact, GitHub |
| Content-shell width | 1216px | ≥ 1400px at 2540px viewport |
| Hero heading | 60px | ≥ 88px at 2540px viewport |
| Hero portrait | 238px | ≥ 336px at 2540px viewport |
| Supporting body copy floor | inconsistent, as low as 12px | ≥ 18px for readable content; labels are the only exception |
| Navigation and action copy | 16px | ≥ 18px |
| Motion | 6px float over 8s | visible decorative movement plus hover response; all suppressed for reduced motion |
| Homepage visible section headings | 3 | 3–4 only; no capability catalogue or metric wall |

## Design contract

1. **Read at a distance.** Desktop type uses a generous floor: 18px readable
   copy, 18px navigation/actions, and a hero that owns the viewport rather
   than a small column in it.
2. **Every public route is discoverable.** Desktop navigation exposes Home,
   Work, About, Life, Community, Résumé, Contact, and GitHub. The mobile menu
   exposes the same links in a comfortable touch layout.
3. **Movement earns its place.** The hero uses a non-semantic kinetic backdrop,
   visible portrait motion, and responsive image/card feedback. Motion never
   carries information and is disabled by `prefers-reduced-motion`.
4. **One thought per section.** The home page is limited to an introduction,
   selected work, a personal interlude, and a closing invitation. Details live
   on route pages.
5. **Designers control the system, not one-off pages.** Typography, shell
   widths, motion, and route coverage are governed by CSS tokens plus
   Playwright measurements. A change that falls below a threshold fails CI.

## Page-level behavior contract

1. **Every route earns its movement.** Home keeps its editorial orbit; work
   and case studies use moving system signals; About, Life, Community, Contact,
   and Résumé use a small contextual kinetic motif. These elements are
   decorative, never carry information, and stop under reduced-motion.
2. **Actions look actionable.** Primary actions use a filled, elevated button;
   secondary actions use a high-contrast tinted surface and two-pixel border;
   inline links are consistently underlined. Interactive actions are at least
   44px tall.
3. **Project media has a job.** A wide, product-specific banner introduces a
   case study. Mobile app screens are secondary evidence in an accessible,
   user-controlled carousel—never the case-study hero.

## Automated checks

- `npm run check:design` checks the documented CSS design tokens and the
  required public-route inventory.
- `npm run control-plane:refresh` updates the control-plane verification
  manifest and map timestamps for a reviewable current-state artifact.
- Playwright measures navigation coverage, desktop typography/shell/image
  thresholds, page-level motion, action hierarchy, mobile overflow, and
  reduced-motion behavior. It also checks the Bathroom Buddy banner and
  carousel controls.
- The GitHub workflow runs these on every PR and feature-branch update, and
  uploads the refreshed control-plane artifact for review.

## Current verification

The motion-enabled dark localhost capture at 2540 × 1345 measured the
following values after this change:

| Control | Before | Now | Change |
| --- | ---: | ---: | ---: |
| Desktop navigation destinations | 4 | 8 | +100% |
| Content-shell width | 1216px | 1408px | +192px / 15.8% |
| Hero heading | 60px | 88px | +28px / 46.7% |
| Hero portrait | 238px | 384px | +146px / 61.3% |
| Hero movement | 6px over 8s | 15px over 5.5s, plus three kinetic forms | visibly active; reduced-motion safe |

The page-level control pass adds these independently checked outcomes:

| Control | Required outcome | Current outcome |
| --- | --- | --- |
| Contextual page motion | Every content route has relevant decorative movement | 9 non-home public/case-study routes have their own kinetic motif; the home hero retains its orbit |
| Action hierarchy | Primary and secondary actions read as controls, not prose | Filled/elevated primary actions, tinted two-pixel secondary actions, and underlined inline links; project actions are tested at ≥44px |
| Bathroom Buddy hero media | Wide product visual, not a mobile screen | A 1200×720 map-results banner introduces the case study |
| Bathroom Buddy mobile proof | User-controlled app-screen walkthrough | 3 labelled mobile screens with previous/next and direct slide controls |

The same browser check confirms every public route and case study loads without
horizontal overflow at 320px and 1440px. Screenshot evidence is deliberately
an artifact for human review, not an automatically accepted visual baseline.
