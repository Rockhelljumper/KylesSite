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

export type MakerspacePresentation = CommunityItem & {
  slug: string;
  slides: number;
  thumbnail?: string;
  thumbnailAlt?: string;
  slideImageDirectory: string;
};

export type CommunityData = {
  intro: string;
  mentoring: CommunityItem[];
  speaking: CommunityItem[];
  presentations: MakerspacePresentation[];
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

  presentations: [
    {
      title: "How to Build a Desktop Computer",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A practical tour of desktop components, how they work together, and what to consider when building a computer.",
      years: "2023",
      slug: "computer-building-2023",
      slides: 16,
      thumbnail: "/images/community/presentations/computer-building-2023.jpeg",
      thumbnailAlt: "Thumbnail from the Computer Building 2023 presentation",
      slideImageDirectory: "/images/community/presentations/computer-building-2023/slides",
    },
    {
      title: "What Is Docker?",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A beginner-friendly introduction to containers: what Docker is, how it works, and how to start using it.",
      years: "2023",
      slug: "what-is-docker",
      slides: 10,
      thumbnail: "/images/community/presentations/what-is-docker.jpeg",
      thumbnailAlt: "Thumbnail from the What Is Docker presentation",
      slideImageDirectory: "/images/community/presentations/what-is-docker/slides",
    },
    {
      title: "AI for Makers: From Prompt to Prototype",
      subtitle: "Tye Preston Memorial Library · Makerspace",
      description:
        "A workshop on how AI and LLMs work, practical prompting, model selection, coding and research uses, safety, and local AI.",
      years: "2026",
      slug: "ai-for-makers-workshop-2026-08-17",
      slides: 27,
      slideImageDirectory: "/images/community/presentations/ai-for-makers-workshop-2026-08-17/slides",
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

export function getMakerspacePresentation(slug: string): MakerspacePresentation | undefined {
  return communityData.presentations.find((presentation) => presentation.slug === slug);
}
