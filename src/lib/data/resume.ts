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

export const resumeData: ResumeData = {
  variants: {
    engineeringLeader: {
      label: "Director of Engineering",
      slug: "engineering-leader",
      pdfFileName: "Kyle_Simmons_Director_of_Engineering_Resume.pdf",
      summary:
        "Strategic and results-driven Director of Engineering with 15+ years of experience scaling high-availability platforms, leading DevOps transformations, and building secure, distributed systems. Proven ability to grow high-performance teams, streamline engineering operations, and deliver multi-million-dollar outcomes through platform modernization, infrastructure automation, and API lifecycle management. Experienced in collaborating with executives to align technology with strategic business objectives.",
      experience: [
        {
          company: "USIO",
          position: "Platform Engineering Manager (Progressive Roles)",
          duration: "2021 - Present",
          location: "Austin, TX",
          description:
            "Built and led a high-performance platform engineering function; directly managed 3 engineers and influenced 30+ cross-functionally across multiple technical and non-technical teams.",
          achievements: [
            "Re-architected Core API authentication and authorization flows without service disruption",
            "Rebuilt server infrastructure post-ransomware in under two weeks, restoring secure operations while maintaining day to day operations were completed with minimal downtime",
            "Collaborated with CEO, CTO, and CPO to prioritize tech debt, observability improvements, and platform-wide process modernization and automation",
            "Designed and implemented GitHub CI/CD pipelines to VM hosts, Container Apps, and Azure App Services reducing deployment time by 40%",
            "Integrated ticketing best practices and created new self-service and automation features, cutting resolution times by 90% and customer wait times by 80%",
            "Reduced Azure cloud spend by 20% while improving scalability through cost-optimization strategies and architectural improvements",
            "Led recruitment and onboarding for multiple engineering roles; implemented mentoring initiatives enhancing retention and team impact",
          ],
        },
        {
          company: "Arcadium Technologies",
          position: "Software Support & Security Engineer",
          duration: "2019 - 2021",
          location: "North Richland Hills, TX",
          description:
            "Led security and support initiatives while developing critical business tools and automation solutions.",
          achievements: [
            "Developed and secured CRM tools with C# and T-SQL, cutting inventory processing time by 25%",
            "Automated billing and tax document generation workflows, reducing preparation time by 60%",
            "Led network security protocol implementation and system monitoring post-ransomware, ensuring long-term stability",
            "Enhanced reporting infrastructure via SSRS and TSQL optimization, reducing report generation from minutes to seconds",
          ],
        },
        {
          company: "Simmons & Son Trucking LLC",
          position: "VP of Operations & IT (Part-Time)",
          duration: "2010 - 2019",
          location: "Canyon Lake, TX",
          description:
            "Managed operations and IT infrastructure while modernizing systems and processes.",
          achievements: [
            "Modernized dispatch and logistics via FleetManager and QuickBooks, improving operational efficiency",
            "Built and deployed 3D-printed parts and multi-channel communications to enhance fleet performance nationwide",
            "Automated CRM and accounting workflows with custom C# and JavaScript tools, increasing productivity and visibility",
          ],
        },
      ],
      skills: {
        technical: [
          "Strategic Planning",
          "DevOps & SRE",
          "CI/CD",
          "Disaster Recovery",
          "Incident Management",
          "Automation",
          "Performance Tuning",
          "Security Audits",
          "Card Issuing",
          "Network Transaction Processing",
          "ACH Processing",
          "NACHA file format",
          "PCI Security",
        ],
        tools: [
          "Azure",
          "Docker",
          "Kubernetes",
          "Git",
          "New Relic",
          "Cronitor",
          "Zendesk",
          "GitHub",
          "Agile",
          "Kanban",
          "Scrum",
        ],
        softSkills: [
          "Technical Leadership",
          "Mentoring",
          "Stakeholder Engagement",
          "Team Building",
          "Risk Management",
          "Business Development",
          "ROI Assessment",
          "Process Development",
          "Budget Management",
        ],
        languages: [
          "Go",
          "C#",
          "Python",
          "PowerShell",
          "SQL",
          "JavaScript",
          "React",
          "Node.js",
          "Next.js",
        ],
      },
      education: [],
      certifications: [
        {
          name: "PCIP Certification - Cert ID 1008-350",
          issuer: "PCI Security Standards Council",
          date: "2024",
          link: "https://www.pcisecuritystandards.org/assessors_and_solutions/professionals_lookup/",
        },
      ],
    },
    backendIC: {
      label: "Senior Software Engineer",
      slug: "backend-engineer",
      pdfFileName: "Senior_Software_Engineering_Resume_Kyle_Simmons.pdf",
      summary:
        "Senior Software Engineer with deep expertise in full-stack development, cloud architecture, and performance optimization. Proven leader delivering scalable, high-reliability solutions that align technical decisions with business goals.",
      experience: [
        {
          company: "USIO",
          position: "Platform Engineering Manager (Progressive Roles)",
          duration: "2021 - Present",
          location: "Austin, TX",
          description:
            "Led platform engineering initiatives focusing on API integrations, performance optimization, and modernization efforts.",
          achievements: [
            "Streamlined API integrations for 50+ partners, reducing onboarding time by 40%",
            "Developed robust web applications with Azure App Services, achieving 99% uptime",
            "Implemented query optimization in T-SQL and MySQL, resulting in 80% performance improvement",
            "Led disaster recovery planning, reducing recovery time by 50%",
            "Refactored legacy code from VB 2 and ASPX to modern languages (Golang, C#, Blazor, Next.js), reducing runtime from days to hours",
            "Refactored a C# Core API authentication flow without disrupting users",
            "Automated index creation in SQL databases, improving performance",
            "Maintained platform stability with 99.999% uptime",
            "Built CI/CD pipelines, reducing deployment time by 40%",
            "Led a high-performing engineering team, defining roles and mentoring members",
            "PCI Automated Test Suite – Implemented automated testing for compliance verification",
            "Power BI – Developed data visualization and reporting tools for cardholder analytics",
          ],
        },
        {
          company: "Arcadium Technologies",
          position: "Software Support Engineer",
          duration: "2019 - 2021",
          location: "North Richland Hills, TX",
          description:
            "Developed and maintained custom software solutions for CRM systems and automation.",
          achievements: [
            "Developed custom scripts in JavaScript, C#, and T-SQL for CRM systems",
            "Automated document creation for vehicle sales processes",
            "Automated report building for multiple partners",
          ],
        },
        {
          company: "Simmons & Son Trucking LLC",
          position: "VP of IT",
          duration: "2010 - 2019",
          location: "Canyon Lake, TX",
          description:
            "Managed IT infrastructure and developed custom solutions for trucking operations.",
          achievements: [
            "Engineered IT solutions for trucking operations, enhancing communication networks",
            "Developed custom 3D-printed components, reducing maintenance costs by 15%",
            "Digitized hard copy records",
            "Modified Microsoft Access based accounting software to extend functionality",
            "Managed internal hardware requirements and lifecycle and budget",
          ],
        },
      ],
      skills: {
        technical: [
          "Full-stack Development",
          "Cloud Architecture",
          "Performance Optimization",
          "High-availability Architecture",
          "Load Balancing",
          "Index Automation",
          "Code Refactoring",
          "Documentation Automation",
          "PCI DSS",
          "PGP",
          "RSA",
          "AES256",
          "GDPR",
          "CCPA",
          "Card Issuing",
          "Network Transaction Processing",
          "ACH Processing",
          "NACHA File Format",
        ],
        tools: [
          "Azure",
          "Kubernetes",
          "Docker",
          "Git",
          "New Relic",
          "Cronitor",
          "Selenium",
          "Postman",
          "MongoDB",
          "MySQL",
          "MSSQL",
          "Azure SQL",
          "PostgreSQL",
          "Power BI",
          "Azure App Services",
        ],
        softSkills: [
          "Tech Debt Prioritization",
          "Incident Management",
          "Outage First Call",
          "Mentorship",
          "Skill Training",
          "Hiring and Interviewing",
          "Culture Club Founder",
          "Cross-functional Leadership",
          "Stakeholder Engagement",
          "ROI Assessment",
          "Process Development",
          "Budget Management",
        ],
        languages: [
          "Go",
          "C#",
          "SQL",
          "JavaScript",
          "Python",
          "TSQL",
          "React",
          "React Native",
          "Blazor",
          "Next.js",
          "Node.js",
        ],
      },
      education: [],
      certifications: [
        {
          name: "PCIP Certification - Cert ID 1008-350",
          issuer: "PCI Security Standards Council",
          date: "2024",
          link: "https://www.pcisecuritystandards.org/assessors_and_solutions/professionals_lookup/",
        },
      ],
    },
    sreEngineer: {
      label: "Site Reliability Engineer",
      slug: "site-reliability-engineer",
      pdfFileName: "Site_Reliability_Engineer_Resume_Kyle_Simmons.pdf",
      summary:
        "Site Reliability Engineer with deep expertise in uptime and performance monitoring, cloud architecture, and performance optimization. Proven leader delivering scalable, high-reliability solutions that align technical decisions with business goals.",
      experience: [
        {
          company: "USIO",
          position: "Platform Engineering Manager (Progressive Roles)",
          duration: "2021 - Present",
          location: "Austin, TX",
          description:
            "Led platform engineering initiatives with focus on site reliability, monitoring, and performance optimization.",
          achievements: [
            "Streamlined Restful API integrations for 50+ partners, reducing onboarding time by 40%",
            "Implemented Cronitor application monitoring solution after POC for CTO and VP of Engineering",
            "Implemented query optimization in T-SQL and MySQL, resulting in 80% performance improvement",
            "Led disaster recovery planning, reducing recovery time by 50%",
            "Refactored legacy code from VB 2 and ASPX to modern languages (Golang, C#, Blazor, Next.js), reducing runtime from multiple days to hours",
            "Refactored a C# Core API authentication flow without disrupting users",
            "Automated index creation in T-SQL databases, improving performance",
            "Maintained platform stability with 99.999% uptime",
            "Built CI/CD pipelines, reducing deployment by 40%",
            "Led a high-performing platform engineering team, defining roles and mentoring members",
            "PCI Automated Test Suite in Python– Implemented automated testing for compliance verification",
            "Power BI – Developed data visualization and reporting tools for cardholder analytics",
            "Lead efforts to convert existing code to containerized code for Azure Container Apps and Azure App Services",
            "Tested and reviewed multiple APM services (New Relic, Dynatrace, DataDog, etc) and formed and assisted in executing implementation plan for New Relic",
            "Wrote multiple outage playbooks and cyber attack response playbooks",
            "First touch point for all outages, critical issues, and other emergency technical notifications",
            "Maintained and built USIO status page",
            "Created automated testing applications and scripts for multiple frontend and backend applications using Python, JavaScript, and Postman",
            "Resolve and manage all SQL notifications from Azure including Security scans, Vulnerability scans, and Performance Scans",
          ],
        },
        {
          company: "Arcadium Technologies",
          position: "Software Support Engineer",
          duration: "2019 - 2021",
          location: "North Richland Hills, TX",
          description:
            "Developed and maintained software solutions with focus on system reliability and automation.",
          achievements: [
            "Developed custom scripts in JavaScript, C#, and T-SQL for CRM systems",
            "Automated document creation for vehicle sales processes using Javascript & SSRS",
            "Automated report building for multiple partners using SSRS",
            "Developed POC for Replacing SSRS with Power BI",
            "Lead COLO to Azure overnight migration efforts for Linux and Windows VMs and MSSQL Cluster migration",
          ],
        },
        {
          company: "Simmons & Son Trucking LLC",
          position: "VP of IT",
          duration: "2010 - 2019",
          location: "Canyon Lake, TX",
          description:
            "Managed IT infrastructure and operations with focus on reliability and efficiency.",
          achievements: [
            "Engineered IT solutions for trucking operations, enhancing communication networks",
            "Developed custom 3D-printed components, reducing maintenance costs by 15%",
            "Digitized hard copy records",
            "Modified Microsoft Access based accounting software to extend functionality",
            "Managed internal hardware requirements and lifecycle and budget",
          ],
        },
      ],
      skills: {
        technical: [
          "CI/CD pipelines",
          "GitHub Actions",
          "Monitoring (New Relic, Cronitor)",
          "Automated Testing (Selenium, Postman)",
          "Disaster Recovery",
          "Incident Management",
          "Azure Devops",
          "Microservices",
          "REST APIs",
          "High-availability systems",
          "Load Balancing",
          "Index Optimization",
          "Legacy Code Refactoring",
          "PCI DSS",
          "GDPR",
          "CCPA",
          "PGP",
          "RSA",
          "AES-256",
          "Security Audit BP",
          "3DES",
          "Card Issuing",
          "ACH/NACHA",
          "Network Transaction Processing",
          "PCI Security Best Practices",
        ],
        tools: [
          "Azure (App Services, Functions, Containers)",
          "Kubernetes",
          "Docker",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "MSSQL",
          "Azure SQL",
          "New Relic",
          "Cronitor",
          "Dynatrace",
          "DataDog",
          "Selenium",
          "Postman",
          "Power BI",
          "SSRS",
          "Zendesk",
        ],
        softSkills: [
          "Scrum",
          "Kanban",
          "Cross-functional Team Leadership",
          "Stakeholder Engagement",
          "Mentorship",
          "Hiring",
          "Team Budgeting",
          "Mentor of monthly SQL training",
          "README Automation",
          "RCA Authoring",
          "Zendesk Reporting",
          "SOP/R&R Authoring",
          "Tech Debt Prioritization",
          "Risk Management",
          "Strategic Planning",
          "Culture Initiatives",
          "First Responder for Outages",
        ],
        languages: [
          "Go",
          "C# (Version 5-8)",
          ".Net",
          "ASP.Net",
          "Python 3.14",
          "JavaScript",
          "TypeScript",
          "SQL",
          "T-SQL",
          "React 19",
          "React Native",
          "Blazor",
          "Next.js 15",
          "Node.js",
          "HTML5",
          "CSS3",
        ],
      },
      education: [],
      certifications: [
        {
          name: "PCIP Certified — Payment Card Industry Professional (PCI Compliance)",
          issuer: "PCI Security Standards Council",
          date: "2024",
          link: "https://www.pcisecuritystandards.org/assessors_and_solutions/professionals_lookup/",
        },
      ],
    },
    cyberSecurity: {
      label: "Cyber Security Engineer",
      slug: "cyber-security-engineer",
      pdfFileName: "Cyber_Security_Engineer_Resume_Kyle_Simmons.pdf",
      summary:
        "Cyber Security Engineer with deep expertise in network topology, cloud architecture, and security optimization. Proven leader delivering scalable, high-reliability solutions that align technical decisions with business goals.",
      experience: [
        {
          company: "USIO",
          position: "Platform Engineering Manager (Progressive Roles)",
          duration: "2021 - Present",
          location: "Austin, TX",
          description:
            "Led platform engineering initiatives with focus on cybersecurity, threat detection, and security optimization.",
          achievements: [
            "Streamlined Restful API integrations for 50+ partners, reducing onboarding time by 40%",
            "Implemented Cronitor application monitoring solution after POC for CTO and VP of Engineering",
            "Implemented query optimization in T-SQL and MySQL, resulting in 80% performance improvement",
            "Led disaster recovery planning, reducing recovery time by 50%",
            "Refactored a C# Core API authentication flow without disrupting users",
            "Automated index creation in T-SQL databases, improving performance",
            "Maintained platform stability with 99.999% uptime",
            "Built CI/CD pipelines, reducing deployment by 40%",
            "Led a high-performing platform engineering team, defining roles and mentoring members",
            "PCI Automated Test Suite in Python and PCIP technical lead on PCI Audits",
            "Power BI – Developed data visualization and reporting for bad actor and attacker identification",
            "Lead efforts to convert existing code to containerized code for Azure Container Apps and Azure App Services",
            "Authored multiple outage playbooks and cyber-attack response playbooks",
            "First touch point for all outages, critical issues, and other emergency technical notifications",
            "Maintained and built USIO status page",
            "Resolve and manage all SQL notifications from Azure including Security scans, Vulnerability scans, and Performance Scans",
            "Designed the system architecture for centralized AuthN and AuthZ application to handle frontend and backend authentication with minimal to no disruption to existing applications",
            "Refactored 10-year-old bug in Golang Encryption/Decryption inhouse package to use correct PKCS7 vs PKCS5",
            "Refactored all code using old 3DES encryption to AES256 algorithm using RSA4096 KEK",
            "Performed counter-hacking to active intrusion attempts from various inputs (API, DDOS of WP site, IP spoofing identification, etc.)",
            "Worked with infra team to develop network segmentation rules with VPN access and pen testing",
            "Pattern recognition automation of red flag events, and anomaly detection",
          ],
        },
        {
          company: "Arcadium Technologies",
          position: "Software Support Engineer",
          duration: "2019 - 2021",
          location: "North Richland Hills, TX",
          description:
            "Developed and maintained software solutions with focus on security and system reliability.",
          achievements: [
            "Developed custom scripts in JavaScript, C#, and T-SQL for CRM systems",
            "Automated document creation for vehicle sales processes using Javascript & SSRS",
            "Automated report building for multiple partners using SSRS",
            "Developed POC for Replacing SSRS with Power BI",
            "Lead COLO to Azure overnight migration efforts for Linux and Windows VMs and MSSQL Cluster migration",
          ],
        },
        {
          company: "Simmons & Son Trucking LLC",
          position: "VP of IT",
          duration: "2010 - 2019",
          location: "Canyon Lake, TX",
          description:
            "Managed IT infrastructure and security operations for trucking operations.",
          achievements: [
            "Engineered IT solutions for trucking operations, enhancing communication networks",
            "Developed custom 3D-printed components, reducing maintenance costs by 15%",
            "Digitized hard copy records",
            "Modified Microsoft Access based accounting software to extend functionality",
            "Managed internal hardware requirements and lifecycle and budget",
          ],
        },
      ],
      skills: {
        technical: [
          "Network Topology",
          "Cloud Architecture",
          "Security Optimization",
          "PCI DSS",
          "GDPR",
          "CCPA",
          "PGP",
          "RSA",
          "AES-256",
          "Security Audit BP",
          "3DES",
          "Encryption/Decryption",
          "AuthN and AuthZ",
          "Counter-hacking",
          "Threat Detection",
          "Vulnerability Assessment",
          "Network Segmentation",
          "VPN Access",
          "Penetration Testing",
          "Pattern Recognition",
          "Anomaly Detection",
          "Incident Response",
          "Disaster Recovery",
          "Security Monitoring",
        ],
        tools: [
          "Azure (App Services, Functions, Containers)",
          "Kubernetes",
          "Docker",
          "New Relic",
          "Cronitor",
          "GitHub Actions",
          "Azure Devops",
          "Selenium",
          "Postman",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "MSSQL",
          "Azure SQL",
          "Power BI",
          "SSRS",
          "Zendesk",
        ],
        softSkills: [
          "Tech Debt Prioritization",
          "Risk Management",
          "Strategic Planning",
          "Culture Initiatives",
          "First Responder for Outages",
          "Mentorship",
          "Cross-functional Team Leadership",
          "Stakeholder Engagement",
          "Hiring",
          "Team Budgeting",
          "Mentor of monthly SQL training",
          "README Automation",
          "RCA Authoring",
          "Zendesk Reporting",
          "SOP/R&R Authoring",
          "Scrum",
          "Kanban",
        ],
        languages: [
          "Go",
          "C# (Version 5-8)",
          ".Net",
          "ASP.Net",
          "Python 3.14",
          "JavaScript",
          "TypeScript",
          "SQL",
          "T-SQL",
          "React 19",
          "React Native",
          "Blazor",
          "Next.js 15",
          "Node.js",
          "HTML5",
          "CSS3",
        ],
      },
      education: [],
      certifications: [
        {
          name: "PCIP Certified — Payment Card Industry Professional (PCI Compliance)",
          issuer: "PCI Security Standards Council",
          date: "2024",
          link: "https://www.pcisecuritystandards.org/assessors_and_solutions/professionals_lookup/",
        },
      ],
    },
  },
};
