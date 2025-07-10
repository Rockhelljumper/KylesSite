"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/lib/data/homeData";
import ThemeToggle from "./ThemeToggle";
import { trackButtonClick } from "@/lib/utils/googleAnalytics";

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
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm font-medium nav-link transition-colors hover:opacity-80 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full'
                    onClick={() =>
                      trackButtonClick(
                        `nav_${link.label.toLowerCase()}`,
                        "header"
                      )
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className='md:hidden flex items-center space-x-2'>
            <ThemeToggle />
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                trackButtonClick("mobile_menu_toggle", "header");
              }}
              aria-label={
                mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              className='p-2 rounded-md hover:bg-card-alt transition-colors'
            >
              {mobileMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 border-t border-card-border'>
            <ul className='space-y-2 pt-4'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='block text-sm font-medium nav-link transition-colors hover:opacity-80 py-2'
                    onClick={() => {
                      trackButtonClick(
                        `nav_${link.label.toLowerCase()}`,
                        "mobile_menu"
                      );
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
