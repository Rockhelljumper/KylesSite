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
};

export type ResumeData = {
  variants: {
    [key: string]: ResumeVariant;
  };
};

export const resumeData: ResumeData = {
  variants: {
    engineeringLeader: {
      label: "Engineering Leader",
      slug: "engineering-leader",
      summary:
        "Experienced engineering leader with a proven track record of scaling teams and delivering high-impact projects in crypto and fintech. Adept at balancing technical excellence with business goals while fostering a culture of innovation and continuous improvement.",
      experience: [
        {
          company: "Blockchain Financial",
          position: "Engineering Director",
          duration: "Jan 2020 - Present",
          location: "San Francisco, CA",
          description:
            "Leading a team of 25+ engineers across multiple product lines, responsible for technical strategy and execution.",
          achievements: [
            "Scaled engineering team from 8 to 25+ while maintaining high code quality and team satisfaction",
            "Spearheaded migration to microservices architecture, resulting in 40% improved deployment velocity",
            "Implemented agile development practices that increased delivery predictability by 65%",
            "Reduced production incidents by 70% through enhanced testing and monitoring strategies",
            "Led integration of ML capabilities into core financial products, driving $2M in additional revenue",
          ],
        },
        {
          company: "FinTech Innovations",
          position: "Engineering Manager",
          duration: "Mar 2017 - Dec 2019",
          location: "Seattle, WA",
          description:
            "Managed a team of 12 engineers developing distributed payment processing systems.",
          achievements: [
            "Delivered high-throughput payment processing system handling $500M in daily transactions",
            "Established engineering excellence program that improved code quality metrics by 45%",
            "Reduced onboarding time for new engineers from 4 weeks to 1 week through documentation improvements",
            "Implemented CI/CD pipeline reducing deployment time from days to minutes",
            "Mentored 5 engineers who were promoted to senior positions within the organization",
          ],
        },
        {
          company: "Tech Solutions Inc.",
          position: "Senior Software Engineer",
          duration: "Jun 2014 - Feb 2017",
          location: "Boston, MA",
          description:
            "Led backend development for financial reporting platform serving enterprise clients.",
          achievements: [
            "Designed and implemented RESTful API serving 50+ million requests daily",
            "Reduced database query times by 75% through optimization and caching strategies",
            "Built automated testing framework that caught 90% of regression issues before production",
            "Introduced GraphQL for flexible data fetching, reducing frontend-backend iterations by 40%",
            "Contributed to open source libraries used by the company, increasing company visibility in tech community",
          ],
        },
      ],
      skills: {
        technical: [
          "System Architecture",
          "Microservices",
          "Distributed Systems",
          "API Design",
          "Database Design",
          "Cloud Infrastructure",
          "DevOps",
          "Security",
        ],
        tools: [
          "AWS",
          "Kubernetes",
          "Docker",
          "Terraform",
          "Jenkins",
          "GitHub Actions",
          "DataDog",
          "Grafana",
          "Prometheus",
        ],
        softSkills: [
          "Team Leadership",
          "Strategic Planning",
          "Project Management",
          "Cross-functional Collaboration",
          "Mentoring",
          "Technical Communication",
          "Stakeholder Management",
        ],
        languages: ["Go", "Python", "TypeScript", "Java", "SQL"],
      },
      education: [
        {
          institution: "Massachusetts Institute of Technology",
          degree: "M.S. Computer Science",
          duration: "2012 - 2014",
          location: "Cambridge, MA",
          relevantCourses: [
            "Distributed Systems",
            "Advanced Algorithms",
            "Machine Learning",
          ],
        },
        {
          institution: "University of California, Berkeley",
          degree: "B.S. Computer Science",
          duration: "2008 - 2012",
          location: "Berkeley, CA",
          relevantCourses: [
            "Data Structures",
            "Operating Systems",
            "Database Management",
            "Software Engineering",
          ],
        },
      ],
      certifications: [
        {
          name: "AWS Solutions Architect Professional",
          issuer: "Amazon Web Services",
          date: "2021",
          link: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
        },
        {
          name: "Certified Kubernetes Administrator",
          issuer: "Cloud Native Computing Foundation",
          date: "2020",
          link: "https://www.cncf.io/certification/cka/",
        },
        {
          name: "Professional Scrum Master I",
          issuer: "Scrum.org",
          date: "2019",
          link: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-i-certification",
        },
      ],
    },
    backendIC: {
      label: "Backend Engineer (IC)",
      slug: "backend-engineer",
      summary:
        "Seasoned backend engineer with deep expertise in Go, high-performance APIs, and cloud-native architectures. Passionate about building scalable, resilient systems with a focus on code quality and observability.",
      experience: [
        {
          company: "Data Processing Technologies",
          position: "Senior Backend Engineer",
          duration: "Mar 2019 - Present",
          location: "Seattle, WA",
          description:
            "Building high-throughput data processing systems and APIs for financial data analytics.",
          achievements: [
            "Designed and implemented Go microservices processing 10TB of data daily with sub-second latency",
            "Reduced infrastructure costs by 35% through service optimization and efficient resource utilization",
            "Created comprehensive observability framework with custom metrics and automated alerting",
            "Implemented event-driven architecture using Kafka that increased system resilience during traffic spikes",
            "Mentored junior engineers on backend best practices and conducted 50+ code reviews monthly",
          ],
        },
        {
          company: "Cloud Infrastructure Inc.",
          position: "Backend Engineer",
          duration: "Jun 2016 - Feb 2019",
          location: "Portland, OR",
          description:
            "Developed backend services for cloud infrastructure management platform.",
          achievements: [
            "Built authentication and authorization system supporting 1M+ users and OAuth 2.0/OIDC protocols",
            "Optimized PostgreSQL databases improving query performance by 60% for critical user flows",
            "Implemented robust error handling and retry mechanisms reducing system failures by 75%",
            "Integrated multiple third-party APIs with fault-tolerant design patterns",
            "Created internal Go libraries now used across 15+ internal projects",
          ],
        },
        {
          company: "Enterprise Solutions",
          position: "Software Engineer",
          duration: "Aug 2014 - May 2016",
          location: "Austin, TX",
          description:
            "Worked on backend services and API development for enterprise resource planning software.",
          achievements: [
            "Developed RESTful APIs for inventory management system used by Fortune 500 clients",
            "Migrated legacy monolithic application to microservices architecture",
            "Implemented comprehensive test strategy with 90%+ code coverage",
            "Reduced API response times by 70% through caching and query optimization",
            "Created developer documentation and API specifications that decreased integration time by 50%",
          ],
        },
      ],
      skills: {
        technical: [
          "API Development",
          "Microservices",
          "Database Design",
          "Performance Optimization",
          "Concurrency Patterns",
          "Message Queues",
          "RESTful Services",
          "gRPC",
          "GraphQL",
        ],
        tools: [
          "Docker",
          "Kubernetes",
          "AWS",
          "GCP",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Kafka",
          "Elasticsearch",
          "Prometheus",
          "Grafana",
        ],
        softSkills: [
          "Technical Documentation",
          "Problem Solving",
          "System Design",
          "Mentoring",
          "Communication",
          "Time Management",
        ],
        languages: ["Go", "Python", "TypeScript", "SQL", "Rust"],
      },
      education: [
        {
          institution: "Georgia Institute of Technology",
          degree: "M.S. Computer Science",
          duration: "2012 - 2014",
          location: "Atlanta, GA",
          relevantCourses: [
            "Distributed Computing",
            "Advanced Operating Systems",
            "Database Systems",
          ],
        },
        {
          institution: "University of Texas",
          degree: "B.S. Computer Science",
          duration: "2008 - 2012",
          location: "Austin, TX",
          relevantCourses: [
            "Algorithms",
            "Data Structures",
            "Software Engineering",
            "Computer Networks",
          ],
        },
      ],
      certifications: [
        {
          name: "Google Cloud Professional Cloud Architect",
          issuer: "Google Cloud",
          date: "2021",
          link: "https://cloud.google.com/certification/cloud-architect",
        },
        {
          name: "HashiCorp Certified: Terraform Associate",
          issuer: "HashiCorp",
          date: "2020",
          link: "https://www.hashicorp.com/certification/terraform-associate",
        },
        {
          name: "AWS Certified Developer - Associate",
          issuer: "Amazon Web Services",
          date: "2019",
          link: "https://aws.amazon.com/certification/certified-developer-associate/",
        },
      ],
    },
    strategist: {
      label: "Crypto Strategy",
      slug: "crypto-strategist",
      summary:
        "Product-minded engineer specializing in cryptocurrency and DeFi systems. Combining deep technical knowledge with strong financial acumen to design and scale Web3 applications and infrastructure.",
      experience: [
        {
          company: "DeFi Protocol",
          position: "Lead Blockchain Strategist",
          duration: "May 2019 - Present",
          location: "Remote",
          description:
            "Directing technical strategy for a decentralized lending platform with $500M+ TVL.",
          achievements: [
            "Led development of innovative yield-generating strategies increasing protocol revenue by 40%",
            "Designed tokenomics model that balanced sustainability with user incentives",
            "Implemented cross-chain functionality expanding protocol reach to 5 additional blockchains",
            "Coordinated with security firms to ensure protocol safety, achieving zero exploits",
            "Advised executive team on market trends and competitive positioning, leading to 65% market share growth",
          ],
        },
        {
          company: "Blockchain Ventures",
          position: "Technical Product Strategist",
          duration: "Jan 2017 - Apr 2019",
          location: "New York, NY",
          description:
            "Developed technical product strategies for portfolio companies in the blockchain space.",
          achievements: [
            "Created technical assessment framework for evaluating investment opportunities",
            "Advised 12+ portfolio companies on blockchain integration and technical architecture",
            "Developed proof-of-concepts for novel consensus mechanisms increasing TPS by 300%",
            "Led technical due diligence resulting in $25M successful investments",
            "Built internal tools for analyzing on-chain data and market trends",
          ],
        },
        {
          company: "Financial Technology Corp",
          position: "Senior Developer - Blockchain",
          duration: "Mar 2015 - Dec 2016",
          location: "San Francisco, CA",
          description:
            "Worked on integrating blockchain technologies into traditional financial systems.",
          achievements: [
            "Developed smart contracts for tokenized securities compliant with regulatory requirements",
            "Created private blockchain implementation for interbank settlement reducing clearing time from days to minutes",
            "Built API bridges between traditional banking systems and multiple blockchain networks",
            "Implemented cryptographic security measures for digital asset custody",
            "Authored technical whitepapers on blockchain integration strategies",
          ],
        },
      ],
      skills: {
        technical: [
          "Blockchain Architecture",
          "Smart Contract Development",
          "Tokenomics",
          "DeFi Protocols",
          "Consensus Mechanisms",
          "Layer 2 Scaling",
          "Zero-knowledge Proofs",
          "Cryptographic Security",
        ],
        tools: [
          "Ethereum",
          "Solidity",
          "Web3.js",
          "Hardhat",
          "Truffle",
          "The Graph",
          "IPFS",
          "MetaMask",
          "OpenZeppelin",
          "Chainlink",
        ],
        softSkills: [
          "Strategic Planning",
          "Financial Analysis",
          "Product Strategy",
          "Technical Writing",
          "Public Speaking",
          "Community Engagement",
          "Risk Assessment",
        ],
        languages: [
          "Solidity",
          "JavaScript/TypeScript",
          "Rust",
          "Go",
          "Python",
        ],
      },
      education: [
        {
          institution: "Stanford University",
          degree: "M.S. Financial Engineering",
          duration: "2013 - 2015",
          location: "Stanford, CA",
          relevantCourses: [
            "Financial Mathematics",
            "Computational Finance",
            "Risk Management",
            "Blockchain Economics",
          ],
        },
        {
          institution: "Cornell University",
          degree: "B.S. Computer Science",
          duration: "2009 - 2013",
          location: "Ithaca, NY",
          relevantCourses: [
            "Cryptography",
            "Distributed Systems",
            "Game Theory",
            "Algorithms",
          ],
        },
      ],
      certifications: [
        {
          name: "Certified Bitcoin Professional",
          issuer: "CryptoCurrency Certification Consortium (C4)",
          date: "2021",
          link: "https://cryptoconsortium.org/certifications/cbp",
        },
        {
          name: "Ethereum Developer Certification",
          issuer: "ConsenSys Academy",
          date: "2020",
          link: "https://consensys.net/academy/",
        },
        {
          name: "Chartered Financial Analyst (CFA) Level II",
          issuer: "CFA Institute",
          date: "2019",
          link: "https://www.cfainstitute.org/",
        },
      ],
    },
  },
};
