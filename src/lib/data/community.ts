export type SpeakingEngagement = {
  title: string;
  event: string;
  year: number;
  link?: string;
  description: string;
};

export type MentoringProgram = {
  programOrOrg: string;
  role: string;
  description: string;
  years: string; // Could be "2020-Present" or "2018-2020"
};

export type OpenSourceContribution = {
  project: string;
  role: string;
  link?: string;
  description: string;
};

export type CommunityLeadership = {
  org: string;
  title: string;
  years: string;
  description: string;
};

export type CommunityData = {
  intro: string;
  speaking: SpeakingEngagement[];
  mentoring: MentoringProgram[];
  openSource: OpenSourceContribution[];
  leadership: CommunityLeadership[];
};

export const communityData: CommunityData = {
  intro:
    "Technology has given me incredible opportunities to grow, learn, and build. I believe in giving back to the community that supported me by sharing knowledge, mentoring others, and creating spaces where everyone can thrive. My community work is as much a part of my professional identity as my technical skills.",

  speaking: [
    {
      title: "Building Scalable React Applications with State Machines",
      event: "React Conf",
      year: 2023,
      link: "https://example.com/react-conf-talk",
      description:
        "Presented a deep dive into using XState and state machines to create predictable, maintainable React applications that scale well in complex domains.",
    },
    {
      title: "The Future of Web Development: AI Pair Programming",
      event: "Future Web Summit",
      year: 2022,
      link: "https://example.com/future-web-summit",
      description:
        "Explored how AI coding assistants are transforming developer workflows and the implications for team productivity and code quality.",
    },
    {
      title: "Accessible UIs by Default: A Component Library Journey",
      event: "A11y Meetup",
      year: 2022,
      description:
        "Shared lessons learned from building an accessible component library and how to embed accessibility into development workflows.",
    },
    {
      title: "TypeScript: Beyond the Basics",
      event: "TypeScript Conf",
      year: 2021,
      link: "https://example.com/typescript-conf",
      description:
        "Advanced TypeScript techniques for ensuring type safety in complex applications, including generics, conditional types, and mapped types.",
    },
  ],

  mentoring: [
    {
      programOrOrg: "Code For Good",
      role: "Technical Mentor",
      description:
        "Guided teams of junior developers in building applications for nonprofit organizations, focusing on technical architecture and best practices.",
      years: "2021-Present",
    },
    {
      programOrOrg: "Women Who Code",
      role: "Career Coach",
      description:
        "Provided one-on-one mentoring sessions for women transitioning into tech careers or advancing to senior technical roles.",
      years: "2020-2022",
    },
    {
      programOrOrg: "University Capstone Projects",
      role: "Industry Advisor",
      description:
        "Advised computer science students on their final-year projects, helping shape requirements and providing technical guidance throughout development.",
      years: "2019-Present",
    },
    {
      programOrOrg: "Internal Engineering Mentorship",
      role: "Senior Mentor",
      description:
        "Established and led a formal mentorship program within my company, pairing junior engineers with experienced developers.",
      years: "2020-Present",
    },
  ],

  openSource: [
    {
      project: "React Component Library",
      role: "Maintainer",
      link: "https://github.com/yourusername/react-components",
      description:
        "Created and maintained a library of accessible, customizable React components with comprehensive documentation and TypeScript support.",
    },
    {
      project: "NextJS Starter Template",
      role: "Creator",
      link: "https://github.com/yourusername/next-starter",
      description:
        "Developed a production-ready starter template for NextJS applications with TypeScript, testing setup, and CI/CD configuration.",
    },
    {
      project: "TypeScript ESLint",
      role: "Contributor",
      link: "https://github.com/typescript-eslint/typescript-eslint",
      description:
        "Contributed rules and bug fixes to improve TypeScript linting and code quality automation.",
    },
    {
      project: "Open AI Documentation",
      role: "Documentation Contributor",
      link: "https://github.com/openai/openai-cookbook",
      description:
        "Contributed examples and tutorials to help developers effectively use AI models in production applications.",
    },
  ],

  leadership: [
    {
      org: "JavaScript Developers Association",
      title: "Chapter Lead",
      years: "2021-Present",
      description:
        "Founded and grew the local chapter to 500+ members, organizing monthly meetups, workshops, and an annual conference featuring industry experts.",
    },
    {
      org: "Tech Diversity Initiative",
      title: "Board Member",
      years: "2020-Present",
      description:
        "Helped establish scholarship programs and inclusive hiring practices to increase representation of underrepresented groups in tech.",
    },
    {
      org: "Hackathon for Social Good",
      title: "Organizer",
      years: "2019-2022",
      description:
        "Co-organized an annual hackathon focused on creating technology solutions for local nonprofits and community organizations.",
    },
    {
      org: "DevOps Community Forum",
      title: "Community Manager",
      years: "2018-2020",
      description:
        "Moderated an online community of 10,000+ DevOps professionals, curating educational content and facilitating knowledge sharing.",
    },
  ],
};
