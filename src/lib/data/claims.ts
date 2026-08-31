export type ClaimStatus =
  | "verified_from_resume_data"
  | "verified_from_project_implementation"
  | "verified_from_public_artifact"
  | "review_required";

export type PortfolioClaim = {
  id: string;
  statement: string;
  status: ClaimStatus;
  source: string;
  reviewNote?: string;
};

/**
 * A deliberately small registry for quantified and externally meaningful
 * statements. Do not add a metric to public copy without adding its source
 * here first.
 */
export const portfolioClaims: PortfolioClaim[] = [
  {
    id: "payments-platform-stability",
    statement: "Maintained 99.999% platform stability for critical payment-system operations.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Confirm against the current source résumé PDF before merge.",
  },
  {
    id: "payments-deployment-improvement",
    statement: "Reduced deployment time by 40% for payment-platform delivery paths.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Confirm against the current source résumé PDF before merge.",
  },
  {
    id: "payments-azure-cost",
    statement: "Reduced Azure spend by 20% through workload review and architecture changes.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Confirm against the current source résumé PDF before merge.",
  },
  {
    id: "payments-recovery",
    statement: "Rebuilt server infrastructure after a ransomware event in under two weeks while restoring secure operations.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Keep customer, system, and security-sensitive details out of public case studies.",
  },
  {
    id: "payments-support-automation",
    statement: "Reduced support resolution time by 90% and customer wait time by 80% through automation, documentation, and ticketing practices.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Confirm against the current source résumé PDF before merge.",
  },
  {
    id: "payments-leadership-scope",
    statement: "Managed 3 engineers directly and influenced 30+ cross-functional stakeholders across regulated platform work.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — USIO platform experience",
    reviewNote: "Use as professional-scope context, not a claim about organizational headcount.",
  },
  {
    id: "payments-partner-integrations",
    statement: "Supported API integrations for 50+ partners.",
    status: "verified_from_resume_data",
    source: "src/lib/data/resume.ts — backend IC résumé variant",
    reviewNote: "Confirm against the current source résumé PDF before merge.",
  },
  {
    id: "bathroom-buddy-public-release",
    statement: "Bathroom Buddy is publicly available on the web, iOS, and Android.",
    status: "verified_from_public_artifact",
    source: "bathroombuddy.io, Apple App Store, and Google Play listings",
  },
  {
    id: "bathroom-buddy-data-lifecycle",
    statement: "Bathroom Buddy implements location refresh, change review, and deterministic moderation workflows.",
    status: "verified_from_project_implementation",
    source: "Private BathroomBuddy backend: location_refresh and content_moderation modules",
  },
  {
    id: "financial-demo-verification",
    statement: "The financial integration reference implementation includes Go tests and Playwright API and UI scenarios.",
    status: "verified_from_project_implementation",
    source: "Rockhelljumper/Vantaca-Interview-Project test suites",
  },
  {
    id: "ai-workflow-lab",
    statement: "The AI Engineering control plane defines triage, implementation, test-generation, and review stages with explicit human review.",
    status: "verified_from_project_implementation",
    source: "Techneighbors/Ai-Engineering agent harness definitions",
  },
];

export function getClaim(claimId: string): PortfolioClaim | undefined {
  return portfolioClaims.find((claim) => claim.id === claimId);
}
