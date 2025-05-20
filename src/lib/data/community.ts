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

export type CommunityItem = {
  title: string;
  subtitle: string;
  description: string;
  years?: string;
  link?: string;
};

export type CommunityData = {
  intro: string;
  mentoring: CommunityItem[];
  speaking: CommunityItem[];
  writing: CommunityItem[];
  openSource: CommunityItem[];
  leadership: CommunityItem[];
};

export const communityData: CommunityData = {
  intro:
    "Technology has given me incredible opportunities to grow, learn, and build. I believe in giving back to the community that supported me by sharing knowledge, mentoring others, and creating spaces where everyone can thrive. My community work is as much a part of my professional identity as my technical skills.",

  speaking: [
    {
      title: "Building Scalable React Applications with State Machines",
      subtitle: "React Conf",
      description:
        "Presented a deep dive into using XState and state machines to create predictable, maintainable React applications that scale well in complex domains.",
      years: "2023",
      link: "https://example.com/react-conf-talk"
    },
    {
      title: "The Future of Web Development: AI Pair Programming",
      subtitle: "Future Web Summit",
      description:
        "Explored how AI coding assistants are transforming developer workflows and the implications for team productivity and code quality.",
      years: "2022",
      link: "https://example.com/future-web-summit"
    },
    {
      title: "Accessible UIs by Default: A Component Library Journey",
      subtitle: "A11y Meetup",
      description:
        "Shared lessons learned from building an accessible component library and how to embed accessibility into development workflows.",
      years: "2022"
    },
    {
      title: "TypeScript: Beyond the Basics",
      subtitle: "TypeScript Conf",
      description:
        "Advanced TypeScript techniques for ensuring type safety in complex applications, including generics, conditional types, and mapped types.",
      years: "2021",
      link: "https://example.com/typescript-conf"
    }
  ],

  mentoring: [
    {
      title: "Friends & Family",
      subtitle: "Technical Mentor",
      description:
        "Guided teams of junior developers in building applications that we agreed upon as a starting point, focusing on technical architecture, agile methodologies, and best practices.",
      years: "2019-Present"
    },
    {
      title: "Women Who Code",
      subtitle: "Career Coach",
      description:
        "Provided one-on-one mentoring sessions for women transitioning into tech careers or advancing to senior technical roles.",
      years: "2022-2025"
    }
  ],

  writing: [
    {
      title: "Building Accessible React Applications",
      subtitle: "Medium Publication",
      description: "A comprehensive guide to implementing accessibility best practices in React applications.",
      years: "2023",
      link: "https://medium.com/@yourusername"
    },
    {
      title: "TypeScript Tips and Tricks",
      subtitle: "Dev.to Series",
      description: "A series of articles sharing advanced TypeScript techniques and patterns.",
      years: "2022-2023",
      link: "https://dev.to/yourusername"
    }
  ],

  openSource: [
    {
      title: "React Component Library",
      subtitle: "Maintainer",
      description:
        "Created and maintained a library of accessible, customizable React components with comprehensive documentation and TypeScript support.",
      link: "https://github.com/yourusername/react-components"
    },
    {
      title: "NextJS Starter Template",
      subtitle: "Creator",
      description:
        "Developed a production-ready starter template for NextJS applications with TypeScript, testing setup, and CI/CD configuration.",
      link: "https://github.com/yourusername/next-starter"
    },
    {
      title: "TypeScript ESLint",
      subtitle: "Contributor",
      description:
        "Contributed rules and bug fixes to improve TypeScript linting and code quality automation.",
      link: "https://github.com/typescript-eslint/typescript-eslint"
    },
    {
      title: "Open AI Documentation",
      subtitle: "Documentation Contributor",
      description:
        "Contributed examples and tutorials to help developers effectively use AI models in production applications.",
      link: "https://github.com/openai/openai-cookbook"
    }
  ],

  leadership: [
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Technical Mentor",
      description:
        "Working weekly with the local makerspace to help others learn and grow in their technical careers, help the community, and build a better future by providing insights into software development, hardware, and more.",
      years: "2022-Present"
    },
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Presenter",
      description:
        "Building programs to present to the public about the benefits of software development, docker containerization, AI, security best practices, networking, hardware, and more.",
      years: "2023-Present"
    }
  ]
};
