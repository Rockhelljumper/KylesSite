# Claim verification and merge review

## Published claim status

| Claim | Status | Evidence | Merge review |
| --- | --- | --- | --- |
| 40% deployment-time reduction | Verified from current résumé data | `src/lib/data/resume.ts` | Confirm against the current source PDF. |
| 20% Azure-spend reduction | Verified from current résumé data | `src/lib/data/resume.ts` | Confirm against the current source PDF. |
| 50+ partner API integrations | Verified from current résumé data | `src/lib/data/resume.ts` | Confirm against the current source PDF. |
| Bathroom Buddy public web, iOS, and Android release | Verified from public artifacts | Product site, Apple App Store, Google Play | No adoption or uptime claim is made. |
| Bathroom Buddy refresh and moderation workflow | Verified from project implementation | Private implementation inspected locally | Do not publish source, provider, topology, or control details. |
| Financial-reference test coverage | Verified from project implementation | Public Vantaca interview project test suites | Keep the synthetic-demo qualifier. |
| AI harness workflow stages | Verified from project implementation | Techneighbors AI-Engineering harness definitions | Do not claim autonomous deployment, optimization results, or savings. |

The canonical machine-readable registry is `src/lib/data/claims.ts`. New numerical or externally meaningful claims must be added there with a source before being used in UI copy.

## Required Kyle confirmation before merge

1. Confirm the three résumé-sourced metrics above against the intended, current résumé PDFs.
2. Confirm exact Bathroom Buddy title, leadership scope, product ownership, and dates. The site currently says only that Kyle made hands-on contributions across the product; it does not claim sole ownership or founder status.
3. Confirm the published resume PDF filenames and any stale wording before regenerating or replacing PDFs.

## Dependency review

This refresh removes unused authentication, OAuth, Node fetch, and mailer dependencies; updates the Next.js, Resend, Tailwind, and related packages within the existing major-version strategy; and adds test tooling.

At audit time, the remaining production audit report contains framework/toolchain advisory paths whose available remediation is a Next.js 16 major upgrade. That upgrade is intentionally deferred because it is a larger compatibility project than this portfolio refresh. Re-run `npm audit --omit=dev` before deployment and schedule the framework upgrade rather than suppressing the findings.
