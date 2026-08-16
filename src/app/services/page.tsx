"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FileText,
  ShieldCheck,
  Receipt,
  ScanLine,
  Palette,
  MessageCircle,
  Search,
  IdCard,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   SCROLL-REVEAL HOOK
========================================================= */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/* =========================================================
   SERVICES DATA
========================================================= */
const services = [
  {
    number: "01",
    title: "Government & Exam Forms",
    description:
      "Expert assistance with state and central government schemes, competitive exam portals, housing applications, and precise document uploads.",
    icon: FileText,
    glow: "bg-cyan-400/[0.10]",
    ring: "group-hover:border-cyan-300/30 group-hover:text-cyan-300",
  },
  {
    number: "02",
    title: "AEPS & Money Transfer",
    description:
      "Secure Aadhaar Enabled Payment System (AEPS) withdrawals, balance queries, and domestic money transfer services across India.",
    icon: ShieldCheck,
    glow: "bg-blue-500/[0.10]",
    ring: "group-hover:border-blue-300/30 group-hover:text-blue-300",
  },
  {
    number: "03",
    title: "Tax & Compliance",
    description:
      "Income Tax Filing (ITR), GST registration assistance, PAN Card applications, and streamlined TDS refund procedures.",
    icon: Receipt,
    glow: "bg-purple-500/[0.10]",
    ring: "group-hover:border-purple-300/30 group-hover:text-purple-300",
  },
  {
    number: "04",
    title: "Digital Services",
    description:
      "Professional PDF editing, high-resolution document scanning, typing and data entry in English and Hindi, and instant printing.",
    icon: ScanLine,
    glow: "bg-cyan-400/[0.10]",
    ring: "group-hover:border-cyan-300/30 group-hover:text-cyan-300",
  },
  {
    number: "05",
    title: "Design & Branding",
    description:
      "Eye-catching business posters, pamphlets, custom graphics, modern business websites, landing pages, and vector brand elements.",
    icon: Palette,
    glow: "bg-violet-500/[0.10]",
    ring: "group-hover:border-violet-300/30 group-hover:text-violet-300",
  },
  {
    number: "06",
    title: "WhatsApp Automation",
    description:
      "Empower your local business with automated customer responses, transactional broadcasts, and useful client notifications.",
    icon: MessageCircle,
    glow: "bg-emerald-400/[0.10]",
    ring: "group-hover:border-emerald-300/30 group-hover:text-emerald-300",
  },
  {
    number: "07",
    title: "SEO Growth",
    description:
      "Improve local search visibility and help your business reach customers searching for services in your area.",
    icon: Search,
    glow: "bg-blue-500/[0.10]",
    ring: "group-hover:border-blue-300/30 group-hover:text-blue-300",
  },
  {
    number: "08",
    title: "PAN & Aadhaar PVC",
    description:
      "Convert eligible digital documents into durable PVC cards that are easy to carry and suitable for everyday use.",
    icon: IdCard,
    glow: "bg-purple-500/[0.10]",
    ring: "group-hover:border-purple-300/30 group-hover:text-purple-300",
  },
];

export default function ServicePage() {
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.08);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c17] text-white">
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* =====================================================
            TOP LEFT BLUE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -left-[260px]
            -top-[220px]
            h-[620px]
            w-[620px]
            rotate-[18deg]
            rounded-[35%]
            border
            border-cyan-300/[0.10]
            bg-gradient-to-br
            from-cyan-400/[0.12]
            via-blue-500/[0.06]
            to-transparent
            blur-[1px]
          "
        />

        {/* Blue outer glow */}
        <div
          className="
            absolute
            -left-[180px]
            -top-[130px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/[0.12]
            blur-[150px]
            animate-float-a
          "
        />

        {/* =====================================================
            TOP RIGHT PURPLE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -right-[280px]
            -top-[170px]
            h-[600px]
            w-[600px]
            rotate-[-22deg]
            rounded-[40%]
            border
            border-violet-400/[0.10]
            bg-gradient-to-bl
            from-violet-500/[0.14]
            via-purple-500/[0.06]
            to-transparent
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            -right-[150px]
            top-[40px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.13]
            blur-[160px]
            animate-float-b
          "
        />

        {/* =====================================================
            CENTER BLUE GLOW
        ===================================================== */}
        <div
          className="
            absolute
            left-1/2
            top-[32%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/[0.07]
            blur-[180px]
          "
        />

        {/* =====================================================
            CENTER DECORATIVE DIAMOND
        ===================================================== */}
        <div
          className="
            absolute
            left-[50%]
            top-[42%]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rotate-45
            rounded-[45px]
            border
            border-white/[0.035]
            bg-gradient-to-br
            from-blue-500/[0.035]
            via-transparent
            to-purple-500/[0.04]
          "
        />

        {/* =====================================================
            RIGHT MIDDLE FLOATING SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -right-[180px]
            top-[48%]
            h-[420px]
            w-[420px]
            rotate-[30deg]
            rounded-[35%]
            border
            border-blue-400/[0.06]
            bg-blue-500/[0.025]
          "
        />

        {/* =====================================================
            BOTTOM LEFT PURPLE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -bottom-[300px]
            -left-[200px]
            h-[650px]
            w-[650px]
            rotate-[-20deg]
            rounded-[40%]
            border
            border-purple-400/[0.08]
            bg-gradient-to-tr
            from-purple-600/[0.09]
            via-blue-600/[0.04]
            to-transparent
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.10]
            blur-[160px]
            animate-float-c
          "
        />

        {/* =====================================================
            BOTTOM RIGHT BLUE GLOW
        ===================================================== */}
        <div
          className="
            absolute
            -bottom-[250px]
            -right-[150px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[160px]
            animate-float-a
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[620px]">
        <div className="mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-28 sm:px-10 lg:px-20">
          <div className="relative z-10 max-w-[950px]">
            {/* Eyebrow */}
            <div
              className="
                reveal-up
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.025]
                px-4
                py-2
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-400
                    opacity-75
                  "
                />
                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_18px_rgba(34,211,238,0.9)]
                  "
                />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
                Our services
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="
                reveal-up
                max-w-[1000px]
                text-[52px]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
                xl:text-[116px]
              "
              style={{ animationDelay: "0.08s" }}
            >
              Everything you need,
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-white
                  to-white/35
                  bg-clip-text
                  text-transparent
                "
              >
                under one roof.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                reveal-up
                mt-9
                max-w-[650px]
                text-base
                leading-7
                text-white/45
                sm:text-lg
                sm:leading-8
              "
              style={{ animationDelay: "0.16s" }}
            >
              From government and exam forms to tax filing, printing,
              document services, website design and business automation —
              Max Point brings it all together in one simple place.
            </p>

            {/* Buttons */}
            <div
              className="reveal-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[#090c17]
                  transition-all
                  duration-300
                  hover:shadow-[0_0_45px_rgba(255,255,255,0.15)]
                "
              >
                Talk to us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#services"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.025]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/65
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Browse services
              </a>
            </div>
          </div>

          {/* Hero decorative vertical line */}
          <div
            className="
              absolute
              right-[12%]
              top-[28%]
              hidden
              h-[300px]
              w-px
              bg-gradient-to-b
              from-transparent
              via-cyan-400/20
              to-transparent
              lg:block
            "
          />

          {/* Floating small diamond */}
          <div
            className="
              absolute
              right-[11%]
              top-[42%]
              hidden
              h-16
              w-16
              rotate-45
              rounded-xl
              border
              border-cyan-300/10
              bg-cyan-400/[0.025]
              shadow-[0_0_80px_rgba(34,211,238,0.08)]
              lg:block
              animate-float-c
            "
          />
        </div>
      </section>

      {/* =========================================================
          SERVICES GRID
      ========================================================= */}
      <section
        id="services"
        className="relative border-y border-white/[0.06] py-28 lg:py-36"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
                What we offer
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Digital work,
                <br />
                <span className="text-white/30">made simple.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/35">
              Every service is built to remove friction — clear steps,
              transparent pricing, and dependable turnaround.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-white/[0.16]
                    hover:bg-white/[0.04]
                    ${gridInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: gridInView
                      ? `${(index % 4) * 90 + Math.floor(index / 4) * 120}ms`
                      : "0ms",
                    transitionProperty:
                      "transform, opacity, background-color, border-color",
                  }}
                >
                  {/* Card glow */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-40
                      w-40
                      rounded-full
                      ${service.glow}
                      opacity-0
                      blur-[80px]
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    `}
                  />

                  {/* Number */}
                  <span className="relative text-xs tracking-[0.2em] text-white/25">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      relative
                      mt-6
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/[0.10]
                      bg-white/[0.03]
                      text-white/70
                      transition-all
                      duration-300
                      ${service.ring}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-6">
                    <h3 className="text-lg font-medium leading-snug tracking-[-0.01em] text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-7
                      right-7
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.10]
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        {/* Large CTA background shape */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-12
            rounded-[40%]
            border
            border-blue-400/[0.05]
            bg-gradient-to-br
            from-blue-500/[0.04]
            via-transparent
            to-purple-500/[0.05]
          "
        />

        {/* CTA glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/[0.08]
            blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
            Don&apos;t see what you need?
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-[1]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            We probably
            <br />
            <span className="text-white/30">still can help.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Tell us what you&apos;re trying to get done and we&apos;ll point
            you in the right direction.
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#090c17]
              transition-all
              duration-300
              hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]
            "
          >
            Contact Max Point

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}