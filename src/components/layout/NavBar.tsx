"use client";

import Link from "next/link";
import { useState } from "react";
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

const whatsappNumber = "9354059422";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#030712]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-[120px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="MAX POINT Cyber Cafe - Home"
        >
          <span
            className="h-3 w-3 rounded-[3px] bg-[#0066ff]"
            aria-hidden="true"
          />

          <span className="font-[Outfit] text-[22px] font-extrabold tracking-tight text-[#f8fafc]">
            MAX POINT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop WhatsApp CTA */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact MAX POINT Cyber Cafe on WhatsApp"
          className="hidden items-center gap-2 rounded-lg bg-[#0066ff] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0057d9] md:flex"
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
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#f8fafc] transition-colors cursor-pointer hover:bg-white/5 md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/5 bg-[#030712] md:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-medium text-[#94a3b8] transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#0066ff] px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone
                className="h-4 w-4"
                aria-hidden="true"
              />

              WhatsApp Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}