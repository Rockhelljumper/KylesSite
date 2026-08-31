import Link from "next/link";
import { personalData } from "@/lib/data/personal";
import { profile } from "@/lib/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="site-shell grid gap-10 py-12 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:py-16">
        <div>
          <Link href="/" className="font-semibold tracking-tight text-primary">
            Kyle Simmons<span className="text-brand-primary">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-secondary">A personal home for systems work, maker projects, community teaching, and the occasional side quest.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2">
            {profile.navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-secondary hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/community" className="text-sm text-secondary hover:text-primary">Community</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={personalData.podcast.href} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-primary">Into the Nerdverse</a>
            </li>
            {profile.socialLinks.map((link) => (
              <li key={link.platform}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-primary">
                  {link.platform}
                </a>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-secondary hover:text-primary">Say hello</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-card-border">
        <div className="site-shell py-5 font-mono text-xs text-tertiary">© {currentYear} Kyle Simmons</div>
      </div>
    </footer>
  );
}
