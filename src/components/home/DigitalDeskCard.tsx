import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DigitalDeskCard() {
  return (
    <article
      aria-labelledby="digital-desk-title"
      className="relative w-full max-w-[440px] overflow-hidden rounded-[20px] border border-[#1E293B] bg-[#0E1526] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-7"
    >
      {/* Subtle blue/purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#0066FF]/10 blur-[70px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#6366F1]/10 blur-[70px]"
      />

      {/* Card top */}
      <div className="relative flex items-center justify-between">
        <span className="rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#818CF8]">
          One-Stop Digital Desk
        </span>

        {/* Open status */}
        <div
          className="flex items-center gap-2"
          aria-label="MAX POINT Cyber Cafe is currently open"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.7)]"
          />

          <span className="text-xs font-medium text-[#10B981]">
            Open Now
          </span>
        </div>
      </div>

      {/* Main heading */}
      <div className="relative mt-7">
        <h2
          id="digital-desk-title"
          className="max-w-[360px] font-[var(--font-outfit)] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#F8FAFC]"
        >
          Everything you need,
          <br />
          <span className="text-[#0066FF]">
            under one roof.
          </span>
        </h2>

        <p className="mt-4 max-w-[370px] text-sm leading-6 text-[#94A3B8]">
          From government forms and tax filing to printing,
          document services, website design and business
          automation — get your digital work done easily.
        </p>
      </div>

      {/* Services */}
      <div className="relative mt-7 grid grid-cols-2 gap-3">
        <ServiceItem
          title="Government Forms"
          description="Application & exam forms"
        />

        <ServiceItem
          title="ITR & GST"
          description="Tax & registration"
        />

        <ServiceItem
          title="Printing & PDF"
          description="Print, scan & edit"
        />

        <ServiceItem
          title="Digital Solutions"
          description="Web, SEO & automation"
        />
      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="my-6 h-px bg-[#1E293B]"
      />

      {/* Bottom CTA */}
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[#64748B]">
            Visit us in
          </p>

          <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">
            Nehru Vihar, Delhi
          </p>
        </div>

        <Link
          href="/services"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] transition-colors hover:text-[#3B82F6]"
        >
          View Services

          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#1E293B] bg-[#030712]/40 p-3.5 transition-colors hover:border-[#0066FF]/30">
      <h3 className="text-xs font-semibold text-[#F8FAFC] sm:text-sm">
        {title}
      </h3>

      <p className="mt-1 text-[11px] leading-4 text-[#64748B] sm:text-xs">
        {description}
      </p>
    </div>
  );
}