/**
 * About page data.
 *
 * This file contains all the content for the About page.
 */

export type TechCategory = {
  category: string;
  skills: string[];
};

export type FunFact = {
  emoji: string;
  text: string;
};

export type AboutData = {
  bio: string;
  headshotUrl: string;
  techStack: TechCategory[];
  philosophy: {
    title: string;
    description: string;
  };
  funFacts: FunFact[];
};

export const aboutData: AboutData = {
  bio: "I am a platform engineering manager and hands-on engineer with a background in regulated fintech, developer experience, SRE, DevOps, security, support automation, and operational recovery. My strongest work is at the intersection of reliability, compliance, cloud infrastructure, and engineering enablement: building the paved roads that let teams ship safely without turning every deploy, audit, or outage into a custom project.",

  headshotUrl: "/images/headshot.jpeg",

  techStack: [
    {
      category: "Frontend and Product Surfaces",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "GraphQL",
      ],
    },
    {
      category: "Backend and APIs",
      skills: [
        "Go",
        "C#",
        ".NET",
        "Python",
        "Node.js",
        "MSSQL",
        "PostgreSQL",
        "MySQL",
        "Microservices",
        "REST APIs",
        "AuthN/AuthZ",
      ],
    },
    {
      category: "Platform, SRE, and Cloud",
      skills: [
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "New Relic",
        "Datadog",
        "Cronitor",
        "Grafana",
        "InfluxDB",
        "Incident Response",
        "Disaster Recovery",
      ],
    },
    {
      category: "Security and Compliance",
      skills: [
        "PCIP",
        "PCI DSS",
        "AES-256",
        "RSA",
        "PGP",
        "Secure SDLC",
        "Vulnerability Response",
        "Network Segmentation",
        "Audit Support",
      ],
    },
    {
      category: "Leadership and DXE",
      skills: [
        "Engineering Management",
        "Mentoring",
        "Hiring",
        "Agile/Scrum",
        "Technical Planning",
        "RCA Development",
        "Stakeholder Communication",
        "Process Improvement",
        "Documentation",
        "Training",
        "Developer Enablement",
      ],
    },
  ],

  philosophy: {
    title: "Leadership Philosophy",
    description:
      "I lead by turning ambiguous operational pain into clear systems: ownership boundaries, useful automation, good documentation, better observability, and repeatable delivery paths. I care about technical excellence, but I care just as much about whether engineers can understand the system, recover it under pressure, and improve it without waiting on tribal knowledge.",
  },

  funFacts: [
    {
      emoji: "CO",
      text: "I make cold brew at home and treat the morning cup like a small systems reliability ritual.",
    },
    {
      emoji: "3D",
      text: "I volunteer at a local makerspace helping with 3D printers, laser cutters, software development, small business technology, and technical classes.",
    },
    {
      emoji: "BK",
      text: "I am an avid reader and usually have three books going at once: one technical, one fiction, and one on personal growth.",
    },
    {
      emoji: "MT",
      text: "My wife and I enjoy mountain biking, hiking, camping, Colorado trips, and Renaissance fairs.",
    },
    {
      emoji: "VO",
      text: "I host a podcast where we discuss technology, pop culture, software development, and the lessons people learn through their work.",
    },
    {
      emoji: "GM",
      text: "I enjoy strategy, simulation, and role-playing games that involve complex systems and decision-making.",
    },
  ],
};
