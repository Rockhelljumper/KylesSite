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
};
