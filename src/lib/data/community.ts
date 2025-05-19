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
      programOrOrg: "Friends & Family",
      role: "Technical Mentor",
      description:
        "Guided teams of junior developers in building applications that we agreed upon as a starting point, focusing on technical architecture, agile methodologies, and best practices.",
      years: "2019-Present",
    },
    {
      programOrOrg: "Women Who Code",
      role: "Career Coach",
      description:
        "Provided one-on-one mentoring sessions for women transitioning into tech careers or advancing to senior technical roles.",
      years: "2022-2025",
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
      org: "Tye Preston Memorial Libary - Makerspace",
      title: "",
      years: "2022-Present",
      description:
        "Working weekly with the local makerspace to help others learn and grow in their technical careers, help the community, and build a better future by providing insites into software development, hardware, and more.",
    },
    {
      org: "Tye Preston Memorial Libary - Makerspace",
      title: "Presentor",
      years: "2023-Present",
      description:
        "Building programs to present to the public about the benefits of software development, docker containerization, AI, security best practices, networking, hardware, and more.",
    },
  ],
};
