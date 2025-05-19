export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type NavLink = {
  name: string;
  path: string;
};

export type HomeData = {
  name: string;
  tagline: string;
  shortBio: string;
  ctaLinks: Array<{
    text: string;
    href: string;
    isPrimary?: boolean;
  }>;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  siteOverview: {
    title: string;
    description: string;
    highlights: string[];
  };
};

export const homeData: HomeData = {
  name: "Kyle Simmons",
  tagline: "Software Engineer & Community Leader",
  shortBio:
    "Building impactful software solutions and empowering tech communities. Specializing in full-stack development with modern technologies.",
  ctaLinks: [
    {
      text: "View Projects",
      href: "/projects",
      isPrimary: true,
    },
    {
      text: "Learn More About Me",
      href: "/about",
    },
  ],
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/community" },
    { name: "Now", path: "/now" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rockhelljumper7",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kyle-simmons19478",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter",
    },
  ],
  siteOverview: {
    title: "Beyond the Traditional Resume",
    description:
      "This site serves as an interactive extension of my professional resume, offering a comprehensive view of my experience, projects, and community involvement. While a traditional resume provides a snapshot, this platform allows me to share the full scope of my technical journey and professional impact.",
    highlights: [
      "Detailed project showcases with technical deep-dives",
      "In-depth look at my community involvement and leadership in tech spaces",
      "Current focus areas and ongoing professional development through the Now page",
      "Comprehensive overview of my technical expertise and professional experience",
      "Multiple resume variants tailored to different roles and opportunities",
    ],
  },
};
