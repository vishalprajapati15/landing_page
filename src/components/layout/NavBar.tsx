"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const whatsappNumber = "919354059422";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= 10) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      }

      // Scrolling up → show
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        showNavbar
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between border-b border-white/5 bg-[#030712]/90 px-6 backdrop-blur-md sm:px-8 lg:px-[120px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="MAX POINT Cyber Cafe - Home"
        >
          <span
            className="h-3 w-3 rounded-[3px] bg-[#0066FF]"
            aria-hidden="true"
          />

          <span className="font-[var(--font-outfit)] text-[22px] font-extrabold tracking-tight text-[#F8FAFC]">
            MAX POINT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:text-[#F8FAFC]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact MAX POINT Cyber Cafe on WhatsApp"
          className="hidden items-center gap-2 rounded-lg bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0057D9] hover:shadow-[0_0_25px_rgba(0,102,255,0.25)] md:flex"
        >
          <Phone
            className="h-4 w-4"
            aria-hidden="true"
          />

          <span>WhatsApp Us</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((open) => !open)
          }
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#F8FAFC] transition-colors hover:bg-white/5 md:hidden"
        >
          {mobileMenuOpen ? (
            <X
              className="h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <Menu
              className="h-6 w-6"
              aria-hidden="true"
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-b border-white/5 bg-[#030712] transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen
            ? "max-h-[400px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-5 sm:px-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="border-b border-white/5 py-4 text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#0066FF] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0057D9]"
          >
            <Phone
              className="h-4 w-4"
              aria-hidden="true"
            />

            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </header>
  );
}