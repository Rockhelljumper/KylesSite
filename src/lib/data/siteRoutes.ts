export type SiteRoute = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * One source of truth for public navigation. The sitemap, header, footer, and
 * browser route checks all derive from this inventory.
 */
export const publicRoutes: readonly SiteRoute[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Life", href: "/now" },
  { label: "Community", href: "/community" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryNavigation: readonly SiteRoute[] = [
  ...publicRoutes,
  { label: "GitHub", href: "https://github.com/rockhelljumper", external: true },
] as const;
