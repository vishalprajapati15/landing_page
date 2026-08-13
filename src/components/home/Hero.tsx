import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroMetrics from "./HeroMetrics";
import DigitalDeskCard from "./DigitalDeskCard";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-[140px] sm:pt-[160px] lg:pt-[180px]"
    >
      {/* Background blue glow — Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[150px] -top-[100px] -z-10 h-[500px] w-[500px] rounded-full bg-[#0066FF]/10 blur-[120px]"
      />

      {/* Background purple glow — Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[100px] top-[80px] -z-10 h-[400px] w-[400px] rounded-full bg-[#6366F1]/10 blur-[100px]"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 pb-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-[120px] lg:pb-[100px]">
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-10">
          <div className="flex w-full flex-col items-start gap-4">
            {/* Local SEO Tag */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#0066FF]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#f8fafc] sm:text-xs">
                Nehru Vihar, Delhi&apos;s Digital Service Hub
              </span>
            </div>

            {/* SEO-friendly H1 */}
            <h1
              id="hero-heading"
              className="max-w-[720px] font-[Outfit] text-[44px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#f8fafc] sm:text-[54px] lg:text-[64px] lg:leading-[72px]"
            >
              Digital services,{" "}
              <span className="text-[#0066FF]">
                simplified.
              </span>
            </h1>

            {/* SEO content */}
            <p className="max-w-[680px] text-base leading-7 text-[#94a3b8] sm:text-lg">
              Your trusted cyber cafe in Nehru Vihar, Delhi for
              government and exam form filling, ITR filing, GST
              registration, printing, PDF editing, website design,
              WhatsApp automation, and other digital services.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0066FF] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0057D9] hover:shadow-[0_0_30px_rgba(0,102,255,0.25)] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#030712] sm:text-base"
            >
              Explore Services

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-[#1e293b] bg-[#0e1526]/20 px-7 py-4 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#334155] hover:bg-[#0e1526] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#030712] sm:text-base"
            >
              Get in Touch
            </Link>
          </div>

          {/* Metrics */}
          <HeroMetrics />
        </div>
        
        <div className="relative flex h-auto min-h-[380px] w-full items-center justify-center lg:h-[420px] lg:w-[520px] lg:shrink-0">
          {/* Purple glow behind card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/15 blur-[90px]"
          />

          <DigitalDeskCard />
        </div>
      </div>
    </section>
  );
}