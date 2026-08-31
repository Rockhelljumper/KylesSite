import { profile } from "@/lib/data/profile";

export const homeData = {
  name: profile.name,
  title: profile.title,
  summary: profile.summary,
  roleKeywords: [
    "Engineering leadership",
    "Platform & SRE",
    "Backend architecture",
    "Data integrations",
  ],
  proofPoints: [
    {
      value: "40%",
      label: "deployment-time reduction",
      claimId: "payments-deployment-improvement",
    },
    {
      value: "20%",
      label: "Azure spend reduction",
      claimId: "payments-azure-cost",
    },
    {
      value: "50+",
      label: "partner API integrations supported",
      claimId: "payments-partner-integrations",
    },
  ],
  ctaLinks: [
    { text: "View selected work", href: "/projects", isPrimary: true },
    { text: "View résumé", href: "/resume" },
  ],
  capabilities: [
    {
      eyebrow: "Leadership in practice",
      title: "Set direction, make ownership clear, and remove the friction that slows delivery.",
      body: "I connect technical decisions to business risk, make incidents blameless but accountable, mentor through real work, and document the paths teams need to repeat.",
      evidence: [
        "Technical roadmaps and tradeoff decisions",
        "Incident leadership, RCA, and recovery planning",
        "Mentoring, hiring, and cross-functional execution",
      ],
    },
    {
      eyebrow: "Platform & reliability",
      title: "Treat production ownership as part of the build, not a handoff after it.",
      body: "The work spans delivery paths, observability, incident response, cloud cost, security findings, and the operational detail needed to recover a system under pressure.",
      evidence: [
        "CI/CD, containers, cloud, and automation",
        "Monitoring, alerting, runbooks, and health signals",
        "Security and compliance-sensitive delivery",
      ],
    },
    {
      eyebrow: "Software & integration architecture",
      title: "Build durable service boundaries around the data, failure modes, and people involved.",
      body: "I work across Go, C#, Python, TypeScript, React, React Native, SQL Server, PostgreSQL, APIs, and the integration seams where correctness matters most.",
      evidence: [
        "Backend services and partner adapters",
        "Data lifecycle, reconciliation, and SQL performance",
        "Testing designed around realistic failure states",
      ],
    },
  ],
  aiPractice: {
    title: "AI accelerates implementation; engineering discipline controls correctness.",
    body: "I use AI to narrow research, decompose work, draft implementation and tests, and make review more repeatable. Requirements, architecture, security boundaries, test results, and production approval remain human responsibilities.",
    loop: [
      "Requirements",
      "Architecture",
      "Task decomposition",
      "Implementation and tests",
      "Review and verification",
      "Human approval",
    ],
  },
} as const;
