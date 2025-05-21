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
      title: "How to Build a Desktop Computer",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about all of the components that make up a desktop computer, what they do, how they work, and how to build one.",
      years: "2023",
    },
    {
      title: "What is Docker?",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about Docker, what it is, how it works, and how to use it.",
      years: "2023",
    },
    {
      title: "AI ~ The Buzz Word of Today",
      subtitle: "Tye Preston Memorial Library - Makerspace",
      description:
        "A presentation to the public about AI, what it is, how it works, and how to use it. LLMs vs Machine Learning, what's the difference?",
      years: "2023",
    },
  ],

  mentoring: [
    {
      title: "Friends & Family",
      subtitle: "Technical Mentor",
      description:
        "Guided teams of junior developers in building applications that we agreed upon as a starting point, focusing on technical architecture, agile methodologies, and best practices.",
      years: "2019-Present",
    },
    {
      title: "Women Who Code",
      subtitle: "Career Coach",
      description:
        "Provided one-on-one mentoring sessions for women transitioning into tech careers or advancing to senior technical roles.",
      years: "2022-2025",
    },
  ],

  writing: [],

  openSource: [],

  leadership: [
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Technical Mentor",
      description:
        "Working weekly with the local makerspace to help others learn and grow in their technical careers, help the community, and build a better future by providing insights into software development, hardware, and more.",
      years: "2022-Present",
    },
    {
      title: "Tye Preston Memorial Library - Makerspace",
      subtitle: "Presenter",
      description:
        "Building programs to present to the public about the benefits of software development, docker containerization, AI, security best practices, networking, hardware, and more.",
      years: "2023-Present",
    },
  ],
};
