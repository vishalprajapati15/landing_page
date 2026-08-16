import Link from "next/link";
import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919354059422";

export default function WhatsAppCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section
      aria-labelledby="whatsapp-cta-title"
      className="px-6 py-[60px] sm:px-8 lg:px-[120px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between overflow-hidden rounded-[20px] border border-[#1E293B] bg-[#0E1526] p-8 sm:p-10 lg:p-12">
        {/* =====================================================
            RIGHT BLUE FLARE
        ====================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[50px] top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-[70px]"
        />

        {/* Additional subtle glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[80px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full bg-[#0066FF]/10 blur-[45px]"
        />

        {/* =====================================================
            TEXT
        ====================================================== */}
        <div className="relative z-10 max-w-[600px]">
          <h2
            id="whatsapp-cta-title"
            className="font-[var(--font-outfit)] text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-[#F8FAFC] sm:text-[32px]"
          >
            Need a digital task done?
          </h2>

          <p className="mt-3 max-w-[600px] text-sm leading-6 text-[#94A3B8] sm:text-base">
            Visit MAX POINT Cyber Cafe in Nehru Vihar or simply
            message us on WhatsApp. We&apos;ll help you with your
            digital task quickly and professionally.
          </p>
        </div>

        {/* =====================================================
            WHATSAPP BUTTON
        ====================================================== */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MAX POINT Cyber Cafe on WhatsApp"
          className="relative z-10 mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0066FF] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0057D9] hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 focus:ring-offset-[#0E1526] sm:text-base lg:mt-0"
        >
          <Phone
            className="h-5 w-5"
            aria-hidden="true"
          />

          <span>Chat on WhatsApp</span>
        </Link>
      </div>
    </section>
  );
}