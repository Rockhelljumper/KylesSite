"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border bg-card/95 backdrop-blur">
      <div className="site-shell flex min-h-[4.5rem] items-center justify-between gap-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary" aria-label="Kyle Simmons home">
          Kyle Simmons<span className="text-brand-primary">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex" data-testid="desktop-navigation">
          {profile.navigation.map((link) => (
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link text-secondary hover:text-primary" data-nav-action>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link text-secondary hover:text-primary" data-nav-action>
                {link.label}
              </Link>
            )
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls={menuId}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-primary"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id={menuId} aria-label="Mobile primary" className="border-t border-card-border bg-card xl:hidden">
          <div className="site-shell flex flex-col py-4">
            {profile.navigation.map((link) => (
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center py-3 text-lg font-medium text-primary" data-nav-action onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center py-3 text-lg font-medium text-primary"
                  data-nav-action
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
