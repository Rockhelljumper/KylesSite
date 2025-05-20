export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
  isExternal?: boolean;
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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/rockhelljumper",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kyle-simmons-tx",
      icon: "linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/kylesimmons",
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
      "This site is constantly evolving, so check back often to see the latest updates!",
    ],
  },
};
