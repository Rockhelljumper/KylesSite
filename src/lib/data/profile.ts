export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: "github" | "linkedin";
};

/**
 * The canonical public identity used by the site. Route copy may add context,
 * but should not introduce competing titles or role summaries.
 */
export const profile = {
  name: "Kyle Simmons",
  siteUrl: "https://kylesimmons.tech",
  title: "Engineering leader and hands-on platform builder",
  summary:
    "I build reliable software platforms, make production work easier to operate, and help teams turn complicated technical work into repeatable delivery.",
  shortSummary:
    "Engineering leadership with hands-on depth in platform engineering, backend systems, reliability, secure delivery, and data integrations.",
  location: "Austin, Texas",
  headshotUrl: "/images/headshot.jpeg",
  homePortraitUrl: "/images/HomeHeadshot.jpeg",
  email: "kyle7simmons1994@gmail.com",
  navigation: [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Life", href: "/now" },
    { label: "Résumé", href: "/resume" },
  ] satisfies NavLink[],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/rockhelljumper",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kyle-simmons19478/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
} as const;
