export const projectCapabilities = [
  "product",
  "backend",
  "frontend",
  "mobile",
  "architecture",
  "platform",
  "sre",
  "devops",
  "security",
  "ai",
  "data",
  "etl",
  "integrations",
  "testing",
  "leadership",
  "community",
] as const;

export type ProjectCapability = (typeof projectCapabilities)[number];
export type ProjectClassification = "featured" | "supporting" | "archive";
export type ProjectPortfolioLane = "leadership-case-study" | "public-product" | "technical-reference" | "community" | "archive";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "product" | "app-store" | "play-store" | "repository" | "article";
};

export type EngineeringDecision = {
  title: string;
  context: string;
  options: string;
  decision: string;
  tradeoff: string;
  result: string;
};

export type ProjectCaseStudy = {
  problem: string;
  responsibilities: string[];
  architecture: {
    summary: string;
    layers: Array<{ label: string; detail: string }>;
  };
  decisions: EngineeringDecision[];
  operatingModel: string[];
  lessons: string[];
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  presentation?: "cover" | "contain";
  fullSize?: {
    href: string;
    label: string;
  };
};

export type ProjectScreenshot = ProjectMedia & {
  title: string;
  description: string;
};

export type ProjectGallery = {
  title: string;
  introduction: string;
  screenshots: readonly ProjectScreenshot[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  classification: ProjectClassification;
  portfolioLane: ProjectPortfolioLane;
  status: string;
  role: string;
  period?: string;
  overview: string;
  technologies: string[];
  capabilities: ProjectCapability[];
  outcomes: Array<{ value: string; label: string; claimId?: string }>;
  publicLinks?: ProjectLink[];
  confidentialityNote?: string;
  caseStudy?: ProjectCaseStudy;
  banner?: ProjectMedia;
  gallery?: ProjectGallery;
};

export type ProjectCategory = {
  id: "all" | ProjectCapability;
  name: string;
};

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "All work" },
  { id: "leadership", name: "Leadership" },
  { id: "platform", name: "Platform" },
  { id: "sre", name: "SRE & operations" },
  { id: "architecture", name: "Architecture" },
  { id: "integrations", name: "Integrations & data" },
  { id: "ai", name: "AI engineering" },
  { id: "testing", name: "Quality engineering" },
];

export const projects: Project[] = [
  {
    slug: "bathroom-buddy",
    title: "Bathroom Buddy",
    subtitle: "Production restroom discovery across mobile, web, data quality, and operations",
    classification: "supporting",
    portfolioLane: "public-product",
    status: "Public product",
    role: "Hands-on engineering across mobile, web, backend, data workflows, and release readiness",
    period: "Ongoing",
    overview:
      "A cross-platform product for finding public restrooms with map search, community-maintained details, ratings, reports, and accessibility preferences. The challenge is not merely placing points on a map; it is keeping information useful, reviewable, and safe as it changes.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "Rust",
      "PostgreSQL",
      "Maps & location",
      "Automated testing",
    ],
    capabilities: [
      "product",
      "mobile",
      "frontend",
      "backend",
      "architecture",
      "data",
      "etl",
      "testing",
      "security",
      "sre",
    ],
    outcomes: [
      {
        value: "iOS + Android",
        label: "public app releases",
        claimId: "bathroom-buddy-public-release",
      },
      {
        value: "Map + community",
        label: "discovery and feedback loops",
      },
      {
        value: "Refresh + review",
        label: "location data lifecycle",
        claimId: "bathroom-buddy-data-lifecycle",
      },
    ],
    publicLinks: [
      { label: "Visit product site", href: "https://www.bathroombuddy.io/", kind: "product" },
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/bathroom-buddy-find-restrooms/id6769126149?uo=4",
        kind: "app-store",
      },
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.techneighbors.bathroombuddy",
        kind: "play-store",
      },
    ],
    confidentialityNote:
      "Architecture is intentionally shown at a product-boundary level. Private repositories, provider configuration, security controls, admin routes, and operating topology are not published here.",
    banner: {
      src: "/images/bathroom-buddy/bathroom-buddy-press-hero.jpg",
      alt: "Bathroom Buddy approved press hero with the message Know before you go",
      caption: "Approved Bathroom Buddy press hero and product branding.",
    },
    gallery: {
      title: "A few screens from a public product",
      introduction:
        "The app is designed around a fast, informed decision: start quickly, find what is nearby, and filter for the practical details that matter before walking inside.",
      screenshots: [
        {
          src: "/images/bathroom-buddy/mobile-welcome.png",
          alt: "Bathroom Buddy mobile welcome screen",
          title: "Start with the decision, not an account wall",
          description: "A clear entry point for exploring, finding, or contributing without burying the useful path.",
        },
        {
          src: "/images/bathroom-buddy/mobile-map.png",
          alt: "Bathroom Buddy mobile map interface",
          title: "Find nearby options on a map",
          description: "Map-first discovery keeps location, proximity, and the next useful action together.",
        },
        {
          src: "/images/bathroom-buddy/mobile-amenities.png",
          alt: "Bathroom Buddy amenity filter interface",
          title: "Filter for practical needs",
          description: "Amenities and accessibility details turn a generic search result into a more confident choice.",
        },
      ],
    },
    caseStudy: {
      problem:
        "Restroom information is often incomplete, stale, or hard to use when someone needs it. The product needs to support fast map discovery while treating crowdsourced and provider-sourced data as information that must be refreshed, moderated, and reviewed.",
      responsibilities: [
        "Implemented across the mobile, web, backend, data-workflow, and release surfaces.",
        "Built product capabilities around search, location detail, community feedback, and accessible-use preferences.",
        "Contributed data freshness, moderation, test, and operational safeguards without exposing private implementation details.",
      ],
      architecture: {
        summary:
          "A public product surface is separated from application services and restricted operations tooling so discovery, data quality, and review can evolve without making internal controls public.",
        layers: [
          { label: "Mobile and web", detail: "Map discovery, preferences, community feedback, and product flows." },
          { label: "Application services", detail: "API boundaries for product behavior, identity, validation, and domain workflows." },
          { label: "Data lifecycle", detail: "Location refresh, normalization, matching, change detection, and review queues." },
          { label: "Operations", detail: "Restricted tools for moderation, corrections, audit, release, and investigation." },
        ],
      },
      decisions: [
        {
          title: "Treat location data as a lifecycle, not a one-time import",
          context: "Provider records and community information can change, disagree, or become stale.",
          options: "Overwrite records blindly, or retain provider identity and compare incoming changes before publishing them.",
          decision: "Normalize provider identity, track refresh history, score candidates, detect changes, and route uncertain changes to review.",
          tradeoff: "This adds workflow and storage complexity, but prevents freshness from becoming an invisible source of product risk.",
          result: "A controlled refresh and review path that supports data quality without claiming that every record is automatically correct.",
        },
        {
          title: "Make safety checks assist moderation instead of replacing it",
          context: "Community reports and reviews make the product better but also introduce quality and safety concerns.",
          options: "Publish everything immediately, or block all contribution behind manual review.",
          decision: "Use deterministic checks and asynchronous moderation workflows, with operations tooling for review and correction.",
          tradeoff: "The system requires careful operational ownership, but avoids treating automated judgment as the final authority.",
          result: "Useful community contribution with a defined route for follow-up and accountability.",
        },
        {
          title: "Keep public discovery and restricted operations separate",
          context: "Moderation, audits, and incident investigation have different access needs from a customer-facing map experience.",
          options: "Combine product and operations flows, or create distinct boundaries for each audience.",
          decision: "Use separate public product surfaces and restricted operational workflows.",
          tradeoff: "More surface area to maintain, balanced by clearer ownership boundaries and lower accidental exposure risk.",
          result: "A product that can grow community data while preserving room for moderation and operational stewardship.",
        },
      ],
      operatingModel: [
        "Automated and integration test suites cover application and workflow behavior.",
        "Location refresh and moderation workflows make data quality an operational concern, not only a schema concern.",
        "Release safeguards and telemetry are treated as part of shipping a public product.",
      ],
      lessons: [
        "Data quality is a product feature when users need information in the moment.",
        "Responsible automation needs a clear escalation and review path.",
        "A credible product story includes how it is operated, not only how it looks.",
      ],
    },
  },
  {
    slug: "reliable-financial-integration",
    title: "Reliable Financial Integration & Transfer Architecture",
    subtitle: "A synthetic reference implementation for conservative integration design",
    classification: "supporting",
    portfolioLane: "technical-reference",
    status: "Public technical reference",
    role: "Architecture, implementation, test design, and technical documentation",
    overview:
      "A runnable, synthetic interview project that demonstrates financial-data and ACH-transfer integration design. It is deliberately not presented as a live banking system or production client work; its value is the clarity of its failure-mode and quality-engineering decisions.",
    technologies: [
      "Go",
      "Next.js",
      "TypeScript",
      "SQL Server",
      "Docker Compose",
      "OpenAPI",
      "Playwright",
      "n8n",
    ],
    capabilities: [
      "backend",
      "frontend",
      "architecture",
      "integrations",
      "data",
      "etl",
      "security",
      "testing",
    ],
    outcomes: [
      { value: "Synthetic", label: "no real customer or financial data" },
      {
        value: "API + UI",
        label: "automated verification scenarios",
        claimId: "financial-demo-verification",
      },
      { value: "UNKNOWN", label: "explicit ambiguous-transfer state" },
    ],
    publicLinks: [
      {
        label: "View public repository",
        href: "https://github.com/Rockhelljumper/Vantaca-Interview-Project",
        kind: "repository",
      },
    ],
    confidentialityNote:
      "This is a synthetic technical reference implementation, not a production financial integration, banking product, or evidence of customer data processing.",
    banner: {
      src: "/images/projects/vantaca-architecture-overview.svg",
      alt: "Architecture overview showing the Vantaca application boundary, partner adapter, SQL Server, and integration dependencies",
      caption: "Readable runtime overview derived from the public repository’s Mermaid source.",
      presentation: "contain",
      fullSize: {
        href: "/images/projects/vantaca-runtime-architecture.svg",
        label: "Open full architecture diagram",
      },
    },
    caseStudy: {
      problem:
        "Partner integrations create a tension between a responsive product experience and uncertain external state. A transfer request can time out after submission, webhooks can duplicate, and upstream reads can be stale. The system must be safe when it does not know the answer yet.",
      responsibilities: [
        "Designed a Go API, Next.js interface, SQL Server read model, partner mock, and Docker Compose environment.",
        "Documented acceptance criteria, protected-data boundaries, failure behavior, and implementation decisions.",
        "Created deterministic mocks and browser/API verification around the core workflows.",
      ],
      architecture: {
        summary:
          "A tenant-scoped SQL read model supports a responsive experience while background reconciliation handles freshness and external uncertainty. The partner integration is represented by a deterministic mock rather than a live financial service.",
        layers: [
          { label: "Next.js interface", detail: "Presents read-model data and transfer workflow states." },
          { label: "Go service", detail: "Validates requests, preserves durable intent, and coordinates reconciliation." },
          { label: "SQL Server", detail: "Stores tenant-scoped snapshots, deduplication records, and freshness metadata." },
          { label: "Partner adapter and mock", detail: "Exercises failure paths without real financial data or accounts." },
        ],
      },
      decisions: [
        {
          title: "Use a local read model instead of blocking every screen on a partner API",
          context: "Users need a responsive view even when a partner is slow or unavailable.",
          options: "Call the partner synchronously for every read, or preserve a local snapshot with freshness information.",
          decision: "Use a SQL snapshot and asynchronous comparison/reconciliation path.",
          tradeoff: "The UI can show last-known-good information, but must make freshness explicit rather than pretending it is live.",
          result: "A responsive read experience designed around known data freshness boundaries.",
        },
        {
          title: "Model ambiguous transfer submission explicitly",
          context: "A timeout after a transfer is submitted does not prove the transfer failed.",
          options: "Retry automatically, mark it failed, or preserve an unresolved state pending reconciliation.",
          decision: "Store durable intent and use an UNKNOWN state until reconciliation establishes the outcome.",
          tradeoff: "The workflow can require follow-up, but avoids creating a duplicate monetary action through an unsafe retry.",
          result: "Failure behavior is conservative by design rather than hidden behind a generic error message.",
        },
        {
          title: "Treat webhooks as signals to reconcile, not the source of truth",
          context: "External events can be duplicated, delayed, or delivered out of order.",
          options: "Apply each webhook directly, or deduplicate it and reconcile against durable state.",
          decision: "Use a durable inbox/deduplication pattern and reconciliation workflow.",
          tradeoff: "Extra persistence and code paths are required, balanced by clearer event handling.",
          result: "Event processing is designed for repeat delivery and uncertain ordering.",
        },
      ],
      operatingModel: [
        "Structured logging redacts credentials and financial payloads at the boundary.",
        "Health checks, Docker Compose, deterministic mocks, and documented acceptance matrices make the demo reproducible.",
        "Go tests and Playwright API and UI scenarios verify expected and failure paths.",
      ],
      lessons: [
        "The correct answer to an ambiguous money movement is often “not yet known.”",
        "Data freshness belongs in the product model, not only in background infrastructure.",
        "Executable documentation makes integration tradeoffs easier to review.",
      ],
    },
  },
  {
    slug: "ai-engineering-workflow-lab",
    title: "AI Engineering Workflow Lab",
    subtitle: "Reusable AI-assisted delivery patterns with quality gates and human accountability",
    classification: "supporting",
    portfolioLane: "technical-reference",
    status: "Engineering lab",
    role: "Workflow design, harness implementation, and quality-governance patterns",
    overview:
      "A reusable control plane for AI-assisted engineering work. It makes the working loop explicit: triage scope, generate implementation and test artifacts, review against acceptance criteria, and keep architecture, risk acceptance, and deployment decisions with humans.",
    technologies: [
      "Codex",
      "Model routing",
      "Agent harnesses",
      "JSON manifests",
      "Static analysis",
      "Test generation",
      "Code review",
    ],
    capabilities: ["ai", "architecture", "testing", "security", "leadership", "platform"],
    outcomes: [
      { value: "4 stages", label: "feature workflow from triage through review", claimId: "ai-workflow-lab" },
      { value: "Human gates", label: "architecture and production approval remain accountable" },
      { value: "Reusable", label: "maps and manifests narrow the context for each task" },
    ],
    confidentialityNote:
      "This is an engineering lab and workflow-governance feature, not a claim of autonomous production deployment, measured token savings, or a live multi-agent platform.",
    banner: {
      src: "/images/projects/ai-engineering-workflow.svg",
      alt: "Four-stage AI engineering workflow from feature request through triage, implementation, testing, review, and human approval",
      caption: "New-feature workflow rendered from the AI Engineering harness manifest.",
      presentation: "contain",
    },
    caseStudy: {
      problem:
        "AI can accelerate research and implementation, but unbounded context and unreviewed output make correctness, cost, and security harder to control. Teams need a repeatable way to benefit from assistance without delegating accountability.",
      responsibilities: [
        "Defined reusable harnesses for feature work, code review, documentation, bug identification, and usage analysis.",
        "Created a model registry and task-routing rules that distinguish lightweight triage from implementation and review work.",
        "Used functionality and connection maps to give a task only the system context it needs.",
      ],
      architecture: {
        summary:
          "The control plane is intentionally simple: versioned task definitions, maps, a model registry, and artifact manifests. It creates a disciplined handoff between analysis, implementation, testing, and review rather than hiding the workflow behind a black box.",
        layers: [
          { label: "Maps", detail: "Describe repository capabilities, entry points, dependencies, and risk hints." },
          { label: "Harnesses", detail: "Define staged tasks such as triage, scaffold, test generation, and review." },
          { label: "Model registry", detail: "Routes work by task type and expected complexity." },
          { label: "Human review", detail: "Owns requirements, architecture, acceptance, risk, and deployment approval." },
        ],
      },
      decisions: [
        {
          title: "Start with triage instead of a broad implementation prompt",
          context: "Large repositories make it easy for an agent to reason from irrelevant or stale context.",
          options: "Provide the whole repository, or identify affected modules and acceptance criteria first.",
          decision: "Use a short triage stage that scopes modules, selects the task model, and emits a structured spec.",
          tradeoff: "Adds a deliberate up-front step, but prevents aimless implementation and makes the plan reviewable.",
          result: "The implementation stage receives a narrower, explainable context window.",
        },
        {
          title: "Generate tests and review artifacts as explicit stages",
          context: "Generated code can look plausible while missing failure behavior or acceptance criteria.",
          options: "Treat code generation as the end of the task, or require separate test and review outputs.",
          decision: "Model test generation and review as dependent stages with their own inputs and outcomes.",
          tradeoff: "More artifacts to inspect, balanced by a clearer quality gate.",
          result: "AI assistance is framed as a contribution to an engineering loop, not a substitute for it.",
        },
        {
          title: "Keep consequential decisions with people",
          context: "Architecture, risk acceptance, and deployment have business and security consequences beyond a generated patch.",
          options: "Automate approvals, or make human ownership explicit in the workflow.",
          decision: "Require human review and acceptance after static analysis and automated tests.",
          tradeoff: "Less automation theatre, with a more defensible ownership model.",
          result: "Faster research and implementation without blurring accountability.",
        },
      ],
      operatingModel: [
        "Task manifests make expected inputs, models, and generated artifacts visible.",
        "Static analysis, tests, and review are distinct from implementation rather than optional afterthoughts.",
        "The harness writes workflow artifacts; it does not claim to autonomously ship software.",
      ],
      lessons: [
        "Good AI workflows make constraints and review paths more visible, not less.",
        "Requirements and test design are high-leverage human work.",
        "The best route to lower AI waste is often narrower context and clearer acceptance criteria.",
      ],
    },
  },
  {
    slug: "platform-engineering-lab",
    title: "Platform Engineering Lab: Automation & Observability",
    subtitle: "A safe environment for learning operational patterns before recommending them",
    classification: "supporting",
    portfolioLane: "technical-reference",
    status: "Engineering lab",
    role: "Builder and operator",
    overview:
      "An infrastructure-as-code lab for repeatable server setup, inventory discovery, monitoring, backups, validation, and operational automation. It is presented as learning and experimentation—not as a production-hardened or highly available environment.",
    technologies: ["Ansible", "Docker", "Prometheus", "Grafana", "Node Exporter", "Restic", "Infrastructure automation"],
    capabilities: ["platform", "sre", "devops", "security", "testing"],
    outcomes: [
      { value: "IaC", label: "repeatable setup and validation patterns" },
      { value: "Monitoring", label: "metrics and alert-rule exploration" },
      { value: "Backups", label: "retention and recovery practice" },
    ],
    confidentialityNote:
      "This entry intentionally omits hostnames, addresses, inventories, firewall rules, runtime dashboards, and deployment state.",
    caseStudy: {
      problem:
        "Operational tooling is easier to recommend responsibly when the failure modes, setup burden, and recovery paths have been explored hands-on.",
      responsibilities: [
        "Built reusable automation for setup, hardening, monitoring, backup, and validation experiments.",
        "Used inventory discovery and playbook sequencing to practice repeatable operations.",
        "Kept the public story focused on learning patterns rather than publishing topology.",
      ],
      architecture: {
        summary: "A phased automation flow moves from discovery and hardening into core services, monitoring, backup, and validation.",
        layers: [
          { label: "Discovery", detail: "Inventory and environment information for targeting automation." },
          { label: "Automation", detail: "Reusable roles and playbooks for setup and hardening." },
          { label: "Signals", detail: "Monitoring, exporters, and basic alert-rule experiments." },
          { label: "Recovery", detail: "Backup configuration and retention patterns." },
        ],
      },
      decisions: [],
      operatingModel: ["Validate infrastructure changes as a workflow, not only as a manual checklist."],
      lessons: ["A lab is valuable when it creates better questions before production decisions are made."],
    },
  },
  {
    slug: "resilient-platform-recovery",
    title: "Resilient Platform Recovery & Hardening",
    subtitle: "Confidential incident recovery, stability, and operational readiness work",
    classification: "featured",
    portfolioLane: "leadership-case-study",
    status: "Confidential professional work",
    role: "Platform Engineering Manager and incident-recovery leader",
    period: "2021 – Present",
    overview:
      "A sanitized account of leading recovery and hardening work for critical regulated systems after a security incident. The public story focuses on operating decisions, recovery discipline, and team coordination—not customer details, topology, or security controls.",
    technologies: ["Azure", "Infrastructure operations", "New Relic", "Cronitor", "GitHub Actions", "PCI DSS"],
    capabilities: ["leadership", "platform", "sre", "devops", "security", "backend"],
    outcomes: [
      { value: "< 2 weeks", label: "infrastructure recovery", claimId: "payments-recovery" },
      { value: "99.999%", label: "platform stability", claimId: "payments-platform-stability" },
      { value: "Cross-functional", label: "incident and recovery coordination" },
    ],
    confidentialityNote:
      "This case study intentionally removes customer names, attack details, host counts, service identities, recovery tooling, and security architecture. Outcomes are résumé-sourced and describe the scope that can be shared safely.",
    banner: {
      src: "/images/projects/platform-recovery.svg",
      alt: "Abstract recovery path showing assess, restore, validate, and strengthen stages around a resilient platform",
      caption: "A sanitized operating model for recovery and hardening—not a diagram of confidential systems.",
      presentation: "contain",
    },
    caseStudy: {
      problem:
        "A security incident made the recovery path and the operating model just as important as the technology itself. The work had to restore secure service quickly while creating clear ownership, verification points, and a more resilient path forward.",
      responsibilities: [
        "Coordinated recovery priorities across engineering, operations, security, support, and leadership stakeholders.",
        "Led infrastructure rebuild and validation work while keeping the public account free of sensitive technical detail.",
        "Turned recovery lessons into clearer operational ownership, observability, and delivery practices.",
      ],
      architecture: {
        summary: "The shared model is a repeatable operating loop: establish a safe baseline, restore the critical path, validate behavior, and use the resulting signals to harden future operations.",
        layers: [
          { label: "Priorities", detail: "Define critical services, recovery order, stakeholders, and decision owners." },
          { label: "Recovery path", detail: "Rebuild and restore against a controlled baseline without exposing implementation details." },
          { label: "Validation", detail: "Confirm service behavior, access boundaries, monitoring, and operational handoff." },
          { label: "Hardening", detail: "Use lessons, signals, documentation, and rehearsal to strengthen the next response." },
        ],
      },
      decisions: [
        {
          title: "Make the recovery order explicit",
          context: "During an incident, every system can appear urgent and informal priorities create avoidable risk.",
          options: "Restore components opportunistically, or align recovery to critical services, dependencies, and accountable owners.",
          decision: "Used a staged recovery path with named priorities, verification points, and cross-functional communication.",
          tradeoff: "A deliberate sequence can feel slower than parallel improvisation, but it avoids compounding uncertainty.",
          result: "Recovery work stayed anchored to business-critical capability and safe validation rather than a scattered checklist.",
        },
        {
          title: "Treat restoration and validation as separate gates",
          context: "A rebuilt service is not automatically ready for reliable operation.",
          options: "Declare success when systems start, or require observable behavior and operational handoff before closing the work.",
          decision: "Separated restore activities from functional, security, monitoring, and ownership validation.",
          tradeoff: "More explicit handoffs demand coordination, but make readiness visible to the people accountable for it.",
          result: "The team could distinguish a recovered component from an operable platform.",
        },
      ],
      operatingModel: [
        "Use concise incident communication that names the decision, owner, current risk, and next verification point.",
        "Keep monitoring and operational documentation close to the recovery path so the system can be supported after restoration.",
        "Capture lessons as changes to ownership and practices, not only as retrospective notes.",
      ],
      lessons: [
        "Resilience is a team behavior supported by systems, not a property of a dashboard.",
        "A recovery plan earns trust when verification and decision ownership are visible.",
        "The safest public case study can still explain how leaders made tradeoffs under pressure.",
      ],
    },
  },
  {
    slug: "engineering-enablement-operations",
    title: "Engineering Enablement & Support Automation",
    subtitle: "Confidential delivery and support improvements that reduce operational drag",
    classification: "featured",
    portfolioLane: "leadership-case-study",
    status: "Confidential professional work",
    role: "Platform Engineering Manager and hands-on technical contributor",
    period: "2021 – Present",
    overview:
      "A sanitized leadership case study about making delivery and support work easier to operate: clarify ownership, automate repeatable paths, and turn recurring friction into visible engineering work.",
    technologies: ["GitHub Actions", "Azure", "C#", "SQL", "New Relic", "Cronitor", "Service and ticket workflows"],
    capabilities: ["leadership", "platform", "devops", "sre", "backend", "data", "integrations"],
    outcomes: [
      { value: "90%", label: "faster support resolution", claimId: "payments-support-automation" },
      { value: "80%", label: "less customer wait time", claimId: "payments-support-automation" },
      { value: "3 / 30+", label: "direct leadership and influence", claimId: "payments-leadership-scope" },
    ],
    confidentialityNote:
      "The systems, queues, workflow rules, customer data, and internal metrics behind this work are confidential. The case study describes reusable leadership and operating patterns rather than a customer environment.",
    banner: {
      src: "/images/projects/engineering-enablement.svg",
      alt: "Abstract engineering enablement flow connecting developer delivery, observable operations, support feedback, and continuous improvement",
      caption: "A sanitized feedback loop for delivery, operations, and support—not a representation of private tooling.",
      presentation: "contain",
    },
    caseStudy: {
      problem:
        "Recurring delivery and support friction consumes senior engineering attention and makes customers wait. The durable fix is not a one-off script; it is a visible operating loop where teams can find the work, understand ownership, and improve the path together.",
      responsibilities: [
        "Managed and mentored engineers while influencing cross-functional partners across engineering, support, operations, product, security, and leadership.",
        "Identified repeatable delivery and support paths suitable for automation, documentation, and better observability.",
        "Connected technical changes to practical handoffs so the people receiving the work could operate and improve it.",
      ],
      architecture: {
        summary: "The delivery system is treated as a product: developer workflows feed observable runtime behavior, support signals reveal friction, and prioritized improvements return to the teams who own the path.",
        layers: [
          { label: "Delivery", detail: "Repeatable build and release paths with ownership and feedback built in." },
          { label: "Runtime signals", detail: "Operational context that lets teams see service behavior and recurring friction." },
          { label: "Support loop", detail: "Structured intake, automation, and documentation for frequent issues and handoffs." },
          { label: "Prioritization", detail: "Shared decisions that turn recurring signals into accountable engineering improvements." },
        ],
      },
      decisions: [
        {
          title: "Optimize the whole handoff, not an isolated tool",
          context: "Automating a step can move work to another queue if the owner, context, or escalation path is unclear.",
          options: "Ship isolated automation, or define the handoff from request through resolution and learning.",
          decision: "Paired automation with documentation, ownership, and feedback signals across the path.",
          tradeoff: "This asks for collaboration beyond one team, but prevents a local optimization from creating downstream work.",
          result: "The work focused on less waiting and clearer resolution rather than an automation count.",
        },
        {
          title: "Use support signals as product and platform input",
          context: "Support friction often exposes confusing behavior, missing operational context, or weak self-service paths.",
          options: "Treat tickets as a separate service problem, or use trends to improve systems and developer experience.",
          decision: "Made recurring issues visible to the teams that could remove the root cause or make the path more operable.",
          tradeoff: "Trend review takes discipline, balanced by fewer repeat issues and more grounded priorities.",
          result: "Support became a source of engineering insight instead of a terminal queue.",
        },
      ],
      operatingModel: [
        "Measure the outcome people feel—resolution and wait time—alongside delivery and operational activity.",
        "Keep the decision owner, escalation route, and next action visible at each handoff.",
        "Use regular cross-functional review to decide which recurring friction deserves product, platform, or process work.",
      ],
      lessons: [
        "Developer experience and customer experience often share the same hidden handoffs.",
        "Automation matters most when it clarifies responsibility and leaves a useful trail for the next person.",
        "Leadership impact is visible in the operating system a team can sustain without heroics.",
      ],
    },
  },
  {
    slug: "regulated-platform-modernization",
    title: "Regulated Platform Modernization",
    subtitle: "Confidential payment-platform leadership and production ownership",
    classification: "featured",
    portfolioLane: "leadership-case-study",
    status: "Confidential professional work",
    role: "Platform engineering manager and hands-on technical contributor",
    overview:
      "Confidential work across delivery automation, observability, incident response, cloud cost, security-sensitive API modernization, partner integrations, and developer enablement for payment systems. Details are deliberately limited to protect customers and operational security.",
    technologies: ["Azure", "GitHub Actions", "Go", "C#", "SQL", "Docker", "New Relic", "Cronitor", "PCI DSS"],
    capabilities: ["leadership", "platform", "sre", "devops", "security", "backend", "integrations", "data"],
    outcomes: [
      { value: "40%", label: "deployment-time reduction", claimId: "payments-deployment-improvement" },
      { value: "20%", label: "Azure spend reduction", claimId: "payments-azure-cost" },
      { value: "50+", label: "partner integrations supported", claimId: "payments-partner-integrations" },
    ],
    confidentialityNote:
      "Customer names, architecture, code, data, incident details, and internal tools are intentionally omitted. The claims registry identifies résumé-sourced statements that require final source-PDF confirmation.",
    banner: {
      src: "/images/projects/regulated-platform-delivery.svg",
      alt: "Abstract regulated platform delivery model showing secure delivery, reliable runtime, partner boundaries, and measured operations",
      caption: "A sanitized view of the delivery and operations model for regulated platform work.",
      presentation: "contain",
    },
    caseStudy: {
      problem:
        "Regulated payment systems need delivery speed, reliable operations, and careful security boundaries at the same time. The leadership challenge is turning that competing work into a repeatable platform capability without exposing customer or system details.",
      responsibilities: [
        "Set platform priorities and delivery practices while contributing hands-on across automation, observability, integration, and security-sensitive modernization.",
        "Managed three engineers directly and influenced a broader cross-functional group across engineering, product, support, operations, security, and leadership.",
        "Balanced delivery, operational risk, cloud cost, and partner needs in a confidential regulated environment.",
      ],
      architecture: {
        summary: "The public model shows the essential boundaries: repeatable delivery reaches controlled runtime environments, services integrate through managed partner boundaries, and operational signals feed a shared improvement loop.",
        layers: [
          { label: "Engineering delivery", detail: "Build, test, and release paths that make change more repeatable across supported runtimes." },
          { label: "Runtime platforms", detail: "Managed application and service environments with clear deployment and operational responsibilities." },
          { label: "Partner boundaries", detail: "Security-conscious API and data-integration work without publishing customer or protocol details." },
          { label: "Operations", detail: "Signals, incident response, cost stewardship, and feedback that guide reliability work." },
        ],
      },
      decisions: [
        {
          title: "Standardize delivery paths without flattening runtime differences",
          context: "A regulated platform can include different hosting models and service constraints.",
          options: "Force every workload into one deployment shape, or standardize the controls while respecting runtime needs.",
          decision: "Created GitHub-based delivery paths for supported environments with repeatable checks and ownership boundaries.",
          tradeoff: "A shared platform needs deliberate exceptions, but reduces the cost and uncertainty of every release.",
          result: "Résumé-sourced evidence indicates a 40% deployment-time reduction without claiming a single universal architecture.",
        },
        {
          title: "Treat observability and cost as management signals",
          context: "Reliability and cloud spend both need visible feedback rather than after-the-fact explanations.",
          options: "Handle incidents and cost reviews separately, or use operational signals to guide prioritization together.",
          decision: "Connected monitoring, operational review, and cloud stewardship to platform planning.",
          tradeoff: "Shared review creates more coordination work, balanced by clearer investment decisions.",
          result: "Résumé-sourced evidence includes 99.999% stability and a 20% Azure spend reduction.",
        },
      ],
      operatingModel: [
        "Make delivery, runtime, partner, and operational owners visible before an incident or release creates ambiguity.",
        "Use audits, monitoring, and security-sensitive change review as ongoing engineering inputs—not end-of-project gates.",
        "Share only the outcomes and decision patterns that are safe to publish; retain detailed system knowledge within the authorized team.",
      ],
      lessons: [
        "Regulated delivery gets faster when reliable controls are part of the path, not a separate scavenger hunt.",
        "Platform leadership is the work of making good decisions repeatable across teams.",
        "NDA-safe storytelling can be specific about constraints, tradeoffs, and outcomes without exposing systems.",
      ],
    },
  },
  {
    slug: "into-the-nerdverse",
    title: "Into the Nerdverse",
    subtitle: "Community communication, mentoring, and a supporting web presence",
    classification: "supporting",
    portfolioLane: "community",
    status: "Community project",
    role: "Host, technical mentor, and web contributor",
    overview:
      "A technology and culture podcast that also serves as a practical space for mentoring, technical communication, and collaborative web delivery.",
    technologies: ["Blazor", "C#", "Docker", "Audio production"],
    capabilities: ["community", "leadership", "frontend"],
    outcomes: [
      { value: "Public", label: "technical communication practice" },
      { value: "Mentoring", label: "collaborative web-delivery experience" },
    ],
    publicLinks: [
      { label: "Listen on Spotify", href: "https://open.spotify.com/show/3CwC4tH9Yix6RIPuEo640u", kind: "product" },
    ],
  },
  {
    slug: "building-this-site",
    title: "Building This Site",
    subtitle: "The portfolio implementation",
    classification: "archive",
    portfolioLane: "archive",
    status: "Archive",
    role: "Personal project",
    overview: "A Next.js portfolio and résumé implementation. It is retained as a small implementation note rather than featured work.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    capabilities: ["frontend"],
    outcomes: [],
  },
  {
    slug: "portfolio-backend-api",
    title: "Portfolio Backend API",
    subtitle: "Résumé-file delivery service",
    classification: "archive",
    portfolioLane: "archive",
    status: "Archive",
    role: "Personal project",
    overview: "A small .NET resume-file service used by this portfolio. It is not positioned as a flagship engineering case study.",
    technologies: ["C#", ".NET", "Docker", "Swagger"],
    capabilities: ["backend"],
    outcomes: [],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.classification === "featured"
);

export const publishedProjects = projects.filter(
  (project) => project.classification !== "archive"
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug && project.classification !== "archive");
}
