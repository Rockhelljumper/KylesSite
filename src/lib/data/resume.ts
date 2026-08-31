export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
};

export type SkillsData = {
  technical: string[];
  tools: string[];
  softSkills: string[];
  languages?: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  relevantCourses?: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export type ResumeVariant = {
  label: string;
  slug: string;
  summary: string;
  experience: ExperienceItem[];
  skills: SkillsData;
  education: EducationItem[];
  certifications: CertificationItem[];
  pdfFileName: string;
};

export type ResumeData = {
  variants: {
    [key: string]: ResumeVariant;
  };
};

const usioPlatformExperience: ExperienceItem = {
  company: "USIO",
  position: "Platform Engineering Manager",
  duration: "2021 - Present",
  location: "Austin, TX",
  description:
    "Built and led platform engineering capabilities for regulated fintech systems, managing 3 engineers directly and influencing 30+ stakeholders across engineering, product, support, operations, security, and executive teams.",
  achievements: [
    "Designed GitHub-based CI/CD paths to VM hosts, Azure App Services, and Azure Container Apps, reducing deployment time by 40%.",
    "Owned platform reliability practices for critical payment systems, including monitoring, alerting, status page operations, incident command, and RCA discipline.",
    "Maintained 99.999% platform stability while supporting API integrations, card issuing, ACH/NACHA workflows, and customer-facing payment operations.",
    "Reduced Azure spend by 20% through cost optimization, workload review, and architecture improvements.",
    "Rebuilt server infrastructure after a ransomware event in under two weeks while restoring secure operations and preserving critical business continuity.",
    "Re-architected core API authentication and authorization flows without customer-disrupting migration windows.",
    "Created support automation, documentation habits, and ticketing practices that reduced resolution time by 90% and customer wait time by 80%.",
    "Partnered with CEO, CTO, CPO, and VP-level stakeholders to prioritize technical debt, platform modernization, developer experience, and compliance-sensitive delivery work.",
  ],
};

const arcadiumExperience: ExperienceItem = {
  company: "Arcadium Technologies",
  position: "Software Support and Security Engineer",
  duration: "2019 - 2021",
  location: "North Richland Hills, TX",
  description:
    "Developed support tooling, reporting automation, migration plans, and security-minded operational improvements for business-critical systems.",
  achievements: [
    "Built CRM automation with C#, JavaScript, SSRS, and T-SQL, cutting inventory processing time by 25%.",
    "Automated billing, tax document, and report generation workflows, reducing preparation time by 60%.",
    "Improved reporting performance through SSRS and T-SQL optimization, reducing report generation from minutes to seconds.",
    "Helped lead colo-to-Azure migration planning for Linux, Windows, and SQL Server workloads.",
    "Implemented monitoring and network security improvements after a ransomware event to improve long-term resilience.",
  ],
};

const truckingExperience: ExperienceItem = {
  company: "Simmons & Son Trucking LLC",
  position: "VP of Operations and IT",
  duration: "2010 - 2019",
  location: "Canyon Lake, TX",
  description:
    "Modernized IT, operations, fleet workflows, hardware lifecycle planning, and business systems for a family logistics business.",
  achievements: [
    "Modernized dispatch, logistics, and accounting workflows with FleetManager, QuickBooks, Microsoft Access, C#, and JavaScript.",
    "Digitized paper-heavy operational records and improved visibility into fleet, accounting, and customer workflows.",
    "Built practical hardware and 3D-printed replacement components that reduced maintenance cost and improved fleet availability.",
    "Managed hardware lifecycle, vendor decisions, budget planning, and internal support needs for distributed operations.",
  ],
};

const pcipCertification: CertificationItem = {
  name: "Payment Card Industry Professional (PCIP) - Cert ID 1008-350",
  issuer: "PCI Security Standards Council",
  date: "2024",
  link: "https://www.pcisecuritystandards.org/assessors_and_solutions/professionals_lookup/",
};

export const resumeData: ResumeData = {
  variants: {
    engineeringLeader: {
      label: "Platform Engineering Manager",
      slug: "platform-engineering-manager",
      pdfFileName: "Kyle_Simmons_Director_of_Engineering_Resume.pdf",
      summary:
        "Platform engineering manager with 15+ years across fintech, software delivery, infrastructure, support automation, and operational leadership. Strong fit for teams that need a hands-on leader who can build developer platforms, improve reliability, reduce cloud cost, mature incident response, and keep compliance-sensitive systems moving. PCIP certified with direct experience in payment systems, API modernization, DevSecOps, Azure, CI/CD, observability, and cross-functional engineering leadership.",
      experience: [usioPlatformExperience, arcadiumExperience, truckingExperience],
      skills: {
        technical: [
          "Platform Engineering",
          "Internal Developer Platforms",
          "Developer Experience",
          "DevOps and SRE",
          "Incident Management",
          "Disaster Recovery",
          "CI/CD Strategy",
          "Cloud Cost Optimization",
          "PCI DSS",
          "Card Issuing",
          "ACH/NACHA",
          "API Lifecycle Management",
          "Security Reviews",
          "Technical Debt Roadmaps",
        ],
        tools: [
          "Azure",
          "Azure App Services",
          "Azure Container Apps",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "New Relic",
          "Cronitor",
          "Postman",
          "Zendesk",
          "Power BI",
          "MSSQL",
          "PostgreSQL",
          "MySQL",
        ],
        softSkills: [
          "Engineering Management",
          "Mentoring",
          "Hiring",
          "Stakeholder Management",
          "Executive Communication",
          "Roadmap Prioritization",
          "Risk Management",
          "Budget Ownership",
          "Incident Command",
          "Process Design",
          "Team Development",
        ],
        languages: [
          "Go",
          "C#",
          "Python",
          "PowerShell",
          "SQL",
          "T-SQL",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
        ],
      },
      education: [],
      certifications: [pcipCertification],
    },
    backendIC: {
      label: "Senior Platform / Backend Engineer",
      slug: "senior-platform-backend-engineer",
      pdfFileName: "Senior_Software_Engineering_Resume_Kyle_Simmons.pdf",
      summary:
        "Senior platform and backend engineer with experience modernizing APIs, automating delivery, tuning SQL workloads, integrating partners, and operating high-availability fintech systems. Comfortable moving between C#/.NET, Go, SQL, Python, TypeScript, Azure, containers, and production support, with enough leadership experience to raise standards across teams without losing hands-on execution.",
      experience: [
        {
          ...usioPlatformExperience,
          position: "Platform Engineering Manager and Senior Engineer",
          description:
            "Led and contributed to backend, API, cloud, and platform modernization work for payment systems and internal engineering workflows.",
          achievements: [
            "Supported and streamlined API integrations for 50+ partners, reducing onboarding friction and improving operational visibility.",
            "Refactored legacy VB/ASPX-era workflows into modern Go, C#, Blazor, Next.js, and service-backed patterns, reducing long-running processes from days to hours.",
            "Implemented T-SQL and MySQL query optimization and index automation, improving performance on critical workflows by up to 80%.",
            "Reworked C# Core API authentication flows without disrupting existing customers or partners.",
            "Built automated compliance and regression testing with Python, Postman, and Selenium-style workflows.",
            "Created Power BI reporting for cardholder analytics, operational visibility, and support decision-making.",
            "Containerized and migrated workloads toward Azure Container Apps and Azure App Services.",
          ],
        },
        arcadiumExperience,
        truckingExperience,
      ],
      skills: {
        technical: [
          "Backend Engineering",
          "REST APIs",
          "Cloud Architecture",
          "High-availability Systems",
          "Performance Optimization",
          "SQL Tuning",
          "Index Automation",
          "Legacy Modernization",
          "Automated Testing",
          "PCI DSS",
          "PGP",
          "RSA",
          "AES-256",
          "ACH/NACHA",
          "Network Transaction Processing",
        ],
        tools: [
          "Azure",
          "Azure SQL",
          "Azure App Services",
          "Azure Container Apps",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "New Relic",
          "Cronitor",
          "Selenium",
          "Postman",
          "MongoDB",
          "MSSQL",
          "MySQL",
          "PostgreSQL",
          "Power BI",
        ],
        softSkills: [
          "Technical Ownership",
          "Mentoring",
          "Code Review",
          "Documentation",
          "Production Support",
          "Incident Response",
          "Partner Collaboration",
          "Backlog Prioritization",
          "Root Cause Analysis",
        ],
        languages: [
          "Go",
          "C#",
          ".NET",
          "Python",
          "SQL",
          "T-SQL",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Blazor",
          "Next.js",
          "Node.js",
        ],
      },
      education: [],
      certifications: [pcipCertification],
    },
    sreEngineer: {
      label: "SRE / DevOps Engineer",
      slug: "sre-devops-engineer",
      pdfFileName: "Site_Reliability_Engineer_Resume_Kyle_Simmons.pdf",
      summary:
        "SRE and DevOps engineer focused on reliable delivery, observable systems, incident response, disaster recovery, and cloud automation. Experience operating fintech systems with 99.999% stability, building deployment pipelines, leading outage response, evaluating APM platforms, improving SQL performance, and turning production pain into repeatable platform capabilities.",
      experience: [
        {
          ...usioPlatformExperience,
          position: "Platform Engineering Manager - SRE and DevOps Focus",
          description:
            "Led reliability, deployment automation, monitoring, incident response, and platform operations for regulated fintech workloads.",
          achievements: [
            "Maintained 99.999% platform stability while acting as a first technical responder for outages, critical incidents, and emergency notifications.",
            "Implemented Cronitor and helped evaluate New Relic, Dynatrace, Datadog, and related APM options for production observability.",
            "Wrote outage playbooks, cyber incident playbooks, RCA templates, and status page practices to standardize response.",
            "Built GitHub Actions pipelines that reduced deployment time by 40% and improved repeatability across VM and Azure-hosted workloads.",
            "Led disaster recovery planning and infrastructure rebuild work, reducing recovery time and improving operational resilience.",
            "Resolved Azure SQL security, vulnerability, and performance findings in partnership with engineering and infrastructure teams.",
            "Created automated testing applications and scripts for frontend and backend systems using Python, JavaScript, and Postman.",
          ],
        },
        arcadiumExperience,
        truckingExperience,
      ],
      skills: {
        technical: [
          "SRE",
          "DevOps",
          "Observability",
          "Incident Management",
          "On-call Response",
          "Disaster Recovery",
          "CI/CD",
          "GitHub Actions",
          "Automated Testing",
          "Cloud Migration",
          "Containerization",
          "High-availability Systems",
          "Load Balancing",
          "SQL Performance",
          "RCA Authoring",
          "PCI DSS",
        ],
        tools: [
          "Azure",
          "Azure DevOps",
          "Azure App Services",
          "Azure Container Apps",
          "Docker",
          "Kubernetes",
          "New Relic",
          "Cronitor",
          "Dynatrace",
          "Datadog",
          "Grafana",
          "InfluxDB",
          "Postman",
          "Selenium",
          "MSSQL",
          "MySQL",
          "PostgreSQL",
          "Zendesk",
        ],
        softSkills: [
          "Incident Command",
          "Clear Communication",
          "Stakeholder Updates",
          "Operational Discipline",
          "Mentoring",
          "Runbook Design",
          "Risk Management",
          "Prioritization",
          "Calm Under Pressure",
        ],
        languages: [
          "Go",
          "C#",
          "Python",
          "PowerShell",
          "SQL",
          "T-SQL",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
        ],
      },
      education: [],
      certifications: [pcipCertification],
    },
    cyberSecurity: {
      label: "DevSecOps / Security Engineer",
      slug: "devsecops-security-engineer",
      pdfFileName: "Cyber_Security_Engineer_Resume_Kyle_Simmons.pdf",
      summary:
        "Security-minded platform engineer with PCIP certification and hands-on experience in PCI, API security, encryption modernization, vulnerability response, incident playbooks, cloud security findings, network segmentation, and secure delivery practices. Strong fit for DevSecOps roles that need practical engineering execution, not just policy.",
      experience: [
        {
          ...usioPlatformExperience,
          position: "Platform Engineering Manager - Security and Compliance Focus",
          description:
            "Led security-sensitive platform work across payment APIs, encryption, vulnerability findings, audit support, monitoring, and incident response.",
          achievements: [
            "Acted as a PCIP-certified technical lead on PCI audit support and compliance automation efforts.",
            "Designed AuthN/AuthZ modernization paths for frontend and backend systems with minimal disruption to existing applications.",
            "Corrected a long-standing Go encryption/decryption bug involving PKCS7 behavior and legacy compatibility.",
            "Migrated sensitive crypto patterns away from legacy 3DES toward AES-256 and RSA-backed key encryption patterns.",
            "Built cyber incident response playbooks and helped coordinate mitigation for suspicious traffic, spoofing, and attack attempts.",
            "Resolved Azure SQL security, vulnerability, and performance findings with practical remediation and tracking.",
            "Worked with infrastructure teams on network segmentation, VPN access patterns, and penetration testing support.",
            "Used Power BI and operational data to improve visibility into bad actor patterns and suspicious activity.",
          ],
        },
        arcadiumExperience,
        truckingExperience,
      ],
      skills: {
        technical: [
          "DevSecOps",
          "PCI DSS",
          "PCIP",
          "API Security",
          "AuthN/AuthZ",
          "Encryption Modernization",
          "RSA",
          "AES-256",
          "PGP",
          "Legacy 3DES Migration",
          "Threat Detection",
          "Vulnerability Remediation",
          "Network Segmentation",
          "VPN Access Patterns",
          "Incident Response",
          "Disaster Recovery",
          "Secure SDLC",
          "Security Monitoring",
        ],
        tools: [
          "Azure",
          "Azure SQL Security Center",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "New Relic",
          "Cronitor",
          "Postman",
          "Selenium",
          "Power BI",
          "SSRS",
          "MSSQL",
          "MySQL",
          "PostgreSQL",
          "Zendesk",
        ],
        softSkills: [
          "Risk Management",
          "Audit Support",
          "Security Communication",
          "Incident Command",
          "Cross-functional Leadership",
          "Technical Mentoring",
          "Policy Translation",
          "Executive Updates",
          "Process Improvement",
        ],
        languages: [
          "Go",
          "C#",
          ".NET",
          "Python",
          "PowerShell",
          "SQL",
          "T-SQL",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
        ],
      },
      education: [],
      certifications: [pcipCertification],
    },
  },
};
