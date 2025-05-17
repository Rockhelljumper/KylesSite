export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  impact: string[];
  links?: {
    github?: string;
    demo?: string;
    other?: Array<{
      name: string;
      url: string;
    }>;
  };
  featured?: boolean;
  image?: string;
};

export type ProjectCategory = {
  id: string;
  name: string;
};

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "All Projects" },
  { id: "engineering", name: "Software Engineering" },
  { id: "leadership", name: "Leadership" },
  { id: "community", name: "Community" },
];

// UPDATE THIS ARRAY WITH YOUR PROJECTS
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Enterprise Resource Planning System",
    description:
      "Developed a comprehensive ERP solution for manufacturing businesses to streamline operations, manage inventory, and optimize supply chain processes.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    role: "Tech Lead",
    impact: [
      "Reduced operational costs by 20% through process automation",
      "Improved inventory accuracy from 82% to 99.5%",
      "Decreased order fulfillment time by 35%",
    ],
    links: {
      github: "https://github.com/yourusername/erp-system",
      demo: "https://demo-erp.example.com",
    },
    featured: true,
    image: "/images/projects/erp-system.jpg",
  },
  {
    id: "project-2",
    title: "AI-Powered Customer Service Platform",
    description:
      "Built an intelligent customer service platform that uses machine learning to categorize, prioritize, and route customer inquiries to the appropriate department.",
    technologies: [
      "Python",
      "TensorFlow",
      "Flask",
      "MongoDB",
      "AWS Lambda",
      "React",
    ],
    role: "Engineering Manager",
    impact: [
      "Decreased average response time from 24 hours to 4 hours",
      "Improved customer satisfaction rating by 32%",
      "Reduced customer service operational costs by 40%",
    ],
    links: {
      github: "https://github.com/yourusername/ai-customer-service",
      other: [{ name: "Case Study", url: "https://example.com/case-study" }],
    },
    featured: true,
    image: "/images/projects/customer-service-ai.jpg",
  },
  {
    id: "project-3",
    title: "Open Source Community Development Platform",
    description:
      "Led the development of a community platform for developers to collaborate on open source projects, manage contributions, and track progress.",
    technologies: ["Vue.js", "GraphQL", "Express", "PostgreSQL", "Kubernetes"],
    role: "Project Lead & Community Organizer",
    impact: [
      "Grew community to over 5,000 active developers",
      "Facilitated 200+ successful project collaborations",
      "Implemented mentorship program with 350+ successful pairings",
    ],
    links: {
      github: "https://github.com/yourusername/community-platform",
      demo: "https://community-platform-demo.example.com",
      other: [{ name: "Documentation", url: "https://docs.example.com" }],
    },
    image: "/images/projects/community-platform.jpg",
  },
  {
    id: "project-4",
    title: "Real-time Analytics Dashboard",
    description:
      "Designed and implemented a real-time analytics dashboard for monitoring system performance, user engagement, and business metrics.",
    technologies: [
      "Next.js",
      "Socket.io",
      "D3.js",
      "InfluxDB",
      "Grafana",
      "Docker",
    ],
    role: "Frontend Specialist",
    impact: [
      "Enabled data-driven decision making with 98% accuracy",
      "Reduced incident response time by 65%",
      "Improved system uptime from 99.5% to 99.95%",
    ],
    links: {
      github: "https://github.com/yourusername/analytics-dashboard",
    },
    image: "/images/projects/analytics-dashboard.jpg",
  },
  {
    id: "project-5",
    title: "Developer Community Leadership Program",
    description:
      "Created and led a community leadership program focused on developing speaking, writing, and organizational skills for tech community leaders.",
    technologies: [
      "Community Building",
      "Public Speaking",
      "Technical Writing",
      "Event Management",
    ],
    role: "Program Director",
    impact: [
      "Trained 120+ community leaders across 15 countries",
      "Participants went on to reach 50,000+ developers through events",
      "Created 35+ new local tech communities in underserved areas",
    ],
    links: {
      other: [
        {
          name: "Program Website",
          url: "https://example.com/leadership-program",
        },
      ],
    },
    image: "/images/projects/community-leadership.jpg",
  },
  {
    id: "project-6",
    title: "Secure Financial Transaction System",
    description:
      "Architected a secure, high-throughput financial transaction processing system for a fintech startup handling sensitive payment data.",
    technologies: [
      "Golang",
      "Microservices",
      "Kafka",
      "PostgreSQL",
      "Terraform",
      "AWS",
    ],
    role: "Solutions Architect",
    impact: [
      "Achieved PCI DSS Level 1 compliance in record time",
      "Scaled to handle 10,000+ transactions per second",
      "Zero security incidents over 3 years of operation",
    ],
    featured: true,
    image: "/images/projects/financial-system.jpg",
  },
];
