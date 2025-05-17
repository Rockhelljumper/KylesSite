"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/lib/data/homeData";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  navLinks: NavLink[];
};

export default function Header({ navLinks }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='text-lg font-bold text-primary transition-colors hover:opacity-80'
          >
            KS
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex md:items-center md:space-x-8'>
            <ul className='flex space-x-8'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className='text-sm font-medium nav-link transition-colors hover:opacity-80 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className='flex items-center md:hidden space-x-2'>
            <ThemeToggle />
            <button
              className='p-2'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className='w-6 flex flex-col items-end justify-center gap-1.5'>
                <span
                  className={`block h-0.5 bg-primary transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-primary transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-primary transition-all duration-300 ease-out ${
                    mobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-x-0 bg-card transition-transform duration-300 ease-in-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100%] opacity-0"
          }`}
        >
          <nav className='px-4 py-6'>
            <ul className='flex flex-col space-y-4'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className='block text-lg font-medium py-2 nav-link transition-colors hover:opacity-80'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
