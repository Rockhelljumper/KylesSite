/**
 * About page data.
 *
 * This file contains all the content for the About page. Edit the values below to update the content.
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
  /**
   * EDIT THIS: A brief introduction about yourself and your professional background.
   */
  bio: string;

  /**
   * EDIT THIS: URL to your headshot or avatar image.
   * For local images, place them in the public folder and use '/image-name.jpg'.
   */
  headshotUrl: string;

  /**
   * EDIT THIS: Technologies, frameworks, and skills organized by category.
   * Add or remove categories and skills as needed.
   */
  techStack: TechCategory[];

  /**
   * EDIT THIS: Your leadership philosophy or mission statement.
   */
  philosophy: {
    title: string;
    description: string;
  };

  /**
   * EDIT THIS: Fun, human facts about you to add personality.
   * Include an emoji and short text for each fact.
   */
  funFacts: FunFact[];
};

export const aboutData: AboutData = {
  bio: "I'm a passionate Senior Software Engineer with over 8 years of experience building impactful products and leading engineering teams. I specialize in creating elegant solutions to complex problems, using modern technologies and best practices. My approach combines technical expertise with a deep understanding of user needs, resulting in software that's not only functional but also a joy to use. I'm dedicated to continuous learning and sharing knowledge with the broader tech community.",

  headshotUrl: "/images/headshot.jpeg",

  techStack: [
    {
      category: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "GraphQL",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Go",
        "Python",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", ""],
    },
    {
      category: "Leadership",
      skills: [
        "Team Management",
        "Mentoring",
        "Agile/Scrum",
        "Technical Planning",
        "Code Reviews",
      ],
    },
  ],

  philosophy: {
    title: "My Leadership Philosophy",
    description:
      "I believe in leading by example and creating an environment where teams can thrive. Technical excellence matters, but so does empathy, clear communication, and clear expectations. The best software comes from collaborative teams that feel empowered to innovate, take calculated risks, and learn from failures. My goal is to foster a culture of continuous improvement, knowledge sharing, and mutual respect while delivering exceptional value to users.",
  },

  funFacts: [
    {
      emoji: "☕",
      text: "My day doesn't start until I've had my morning coffee from my at home cold brew.",
    },
    {
      emoji: "🧰",
      text: "I volunteer at my local libary in our makerspace, helping with the 3D printers, laser cutters, and even teaching classes on software development, SMB development, and more.",
    },
    {
      emoji: "📚",
      text: "I'm an avid reader and usually have three books going at once: one technical, one fiction, and one on personal growth.",
    },
    {
      emoji: "🚵",
      text: "My wife and I enjoy mountain biking, hiking, and camping. Especially in the mountains of Colorado and at Renfairs.",
    },
    {
      emoji: "🎙️",
      text: "I host a podcast with my wife, where we interview interesting people and discuss their stories, lessons, and advice.",
    },
    {
      emoji: "🎮",
      text: "I'm a casual gamer who enjoys strategy, simulation, and role-playing games that involve complex systems and decision-making.",
    },
  ],
};
