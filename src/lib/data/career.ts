export const careerData = {
  availability: "Open to remote-only engineering leadership opportunities.",
  targetRoles: [
    "Platform Engineering Manager",
    "Engineering Manager",
    "Director Opportunities",
    "Software Engineering Team Lead",
    "Platform Engineering Team Lead",
  ],
  positioning: {
    eyebrow: "Remote-only engineering leadership",
    title: "Build the platform. Strengthen the team. Keep critical systems moving.",
    summary:
      "I lead platform and engineering work where reliability, security, delivery speed, and the people doing the work all matter at the same time.",
  },
  proof: [
    { value: "99.999%", label: "platform stability", claimId: "payments-platform-stability" },
    { value: "40%", label: "faster deployments", claimId: "payments-deployment-improvement" },
    { value: "20%", label: "lower Azure spend", claimId: "payments-azure-cost" },
  ],
  trustSignals: [
    { value: "3", label: "engineers managed directly", claimId: "payments-leadership-scope" },
    { value: "30+", label: "cross-functional partners influenced", claimId: "payments-leadership-scope" },
    { value: "PCIP", label: "PCI Professional certified" },
  ],
  linkedinAlignment: {
    headline:
      "Platform Engineering Manager | Engineering Leader | Reliable, compliant systems | Developer platforms, delivery, SRE & DevSecOps",
    aboutOpening:
      "I build and lead platform engineering capabilities for teams that need reliable delivery, clear operational ownership, and security-conscious systems that keep moving.",
  },
} as const;
