"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Gem,
  Users,
  Eye,
  HeartHandshake,
  ExternalLink,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Rocket,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    text: "We keep adopting new tools and workflows to make every service faster and easier.",
    glow: "from-cyan-400/20 to-transparent text-cyan-300",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Every document and detail you share with us is handled with care and confidentiality.",
    glow: "from-blue-400/20 to-transparent text-blue-300",
  },
  {
    icon: Gem,
    title: "Quality",
    text: "We double-check every form, print and file so it's right the first time, every time.",
    glow: "from-purple-400/20 to-transparent text-purple-300",
  },
  {
    icon: Users,
    title: "Teamwork",
    text: "Our team works together closely so no customer is ever left waiting or unattended.",
    glow: "from-cyan-400/20 to-transparent text-cyan-300",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear pricing and honest timelines — no hidden charges, no confusing processes.",
    glow: "from-blue-400/20 to-transparent text-blue-300",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    text: "Every process we build starts and ends with what's easiest and most useful for you.",
    glow: "from-purple-400/20 to-transparent text-purple-300",
  },
];

const team = [
  {
    name: "Vikas Sharma",
    role: "Founder & Owner",
    quote:
      "I started Max Point so people in our neighbourhood wouldn't have to run from office to office for simple paperwork.",
    responsibility:
      "Overall vision, business operations and community partnerships.",
    initials: "VS",
  },
  {
    name: "Priya Sharma",
    role: "Customer Relations",
    quote:
      "Most people who walk in are confused about forms and fees. I make sure they leave with clear answers.",
    responsibility:
      "Front desk support, customer guidance and appointment handling.",
    initials: "PS",
  },
  {
    name: "Amit Verma",
    role: "Documentation Specialist",
    quote:
      "Government forms don't forgive small mistakes. I take the time to get every field right.",
    responsibility:
      "Government & exam forms, document uploads and verification.",
    initials: "AV",
  },
  {
    name: "Neha Gupta",
    role: "Digital Services Lead",
    quote:
      "Whether it's a poster or a website, I want every customer's work to look genuinely professional.",
    responsibility:
      "PDF editing, printing, design, branding and web projects.",
    initials: "NG",
  },
  {
    name: "Rohit Malhotra",
    role: "Technical Support",
    quote:
      "Automation should save people time, not add more steps. That's what I build toward.",
    responsibility:
      "AEPS, money transfer systems and WhatsApp automation.",
    initials: "RM",
  },
];

const journey = [
  {
    year: "2019",
    title: "Founded",
    text: "Started as a small cyber cafe in Nehru Vihar with a single desk and a printer.",
  },
  {
    year: "2021",
    title: "First Milestone",
    text: "Added government form filling and AEPS services as demand grew in the area.",
  },
  {
    year: "2023",
    title: "Digital Growth",
    text: "Expanded into design, website building and WhatsApp automation for local businesses.",
  },
  {
    year: "2026",
    title: "Today",
    text: "A trusted one-stop digital service point for hundreds of families and businesses.",
  },
];

const numbers = [
  { value: "5+", label: "Team Members" },
  { value: "15+", label: "Services Offered" },
  { value: "1000+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction" },
  { value: "6+", label: "Years Experience" },
  { value: "3+", label: "Areas Served" },
];

const reasons = [
  "Experienced, friendly team",
  "Quick & reliable turnaround",
  "Transparent, upfront pricing",
  "Customer-first approach",
  "One-stop digital solutions",
  "Trusted across the neighbourhood",
];

/* =========================================================
   SHARED BACKGROUND
========================================================= */

function BackgroundField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="absolute -left-[260px] -top-[220px] h-[620px] w-[620px] rotate-[18deg] rounded-[35%] border border-cyan-300/[0.10] bg-gradient-to-br from-cyan-400/[0.12] via-blue-500/[0.06] to-transparent blur-[1px]" />
      <div className="absolute -left-[180px] -top-[130px] h-[520px] w-[520px] animate-pulse rounded-full bg-cyan-500/[0.12] blur-[150px] [animation-duration:6s]" />

      <div className="absolute -right-[280px] -top-[170px] h-[600px] w-[600px] rotate-[-22deg] rounded-[40%] border border-violet-400/[0.10] bg-gradient-to-bl from-violet-500/[0.14] via-purple-500/[0.06] to-transparent" />
      <div className="absolute -right-[150px] top-[40px] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/[0.13] blur-[160px] [animation-duration:8s]" />

      <div className="absolute left-1/2 top-[26%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[180px]" />

      <div className="absolute left-[8%] top-[62%] h-[420px] w-[420px] rotate-[30deg] rounded-[35%] border border-blue-400/[0.06] bg-blue-500/[0.025]" />
      <div className="absolute right-[6%] top-[80%] h-[480px] w-[480px] rotate-[-16deg] rounded-[38%] border border-cyan-300/[0.08] bg-gradient-to-tl from-cyan-500/[0.1] via-transparent to-transparent" />

      <div className="absolute -bottom-[300px] -left-[200px] h-[650px] w-[650px] rotate-[-20deg] rounded-[40%] border border-purple-400/[0.08] bg-gradient-to-tr from-purple-600/[0.09] via-blue-600/[0.04] to-transparent" />
      <div className="absolute bottom-[-200px] left-[5%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.10] blur-[160px]" />
      <div className="absolute -bottom-[250px] -right-[150px] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />
    </div>
  );
}

function Eyebrow({
  children,
  color = "cyan",
}: {
  children: React.ReactNode;
  color?: "cyan" | "purple" | "blue";
}) {
  const dot = {
    cyan: "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]",
    purple: "bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,0.9)]",
    blue: "bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]",
  }[color];

  const text = {
    cyan: "text-cyan-400/70",
    purple: "text-purple-400/70",
    blue: "text-blue-400/70",
  }[color];

  return (
    <div className="inline-flex items-center gap-3">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`text-[11px] font-medium uppercase tracking-[0.28em] ${text}`}>
        {children}
      </span>
    </div>
  );
}

function Avatar({
  initials,
  size = "md",
}: {
  initials: string;
  size?: "md" | "lg";
}) {
  const dims = size === "lg" ? "h-40 w-40 text-4xl sm:h-48 sm:w-48" : "h-16 w-16 text-lg";

  return (
    <div
      className={`
        relative ${dims} shrink-0 rounded-full
        bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20
        border border-white/[0.10]
        flex items-center justify-center
        font-semibold text-white/85
      `}
    >
      <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.15)]" />
      <span className="relative">{initials}</span>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AboutPage() {
  const [active, setActive] = useState(0);
  const member = team[active];

  const next = () => setActive((i) => (i + 1) % team.length);
  const prev = () => setActive((i) => (i - 1 + team.length) % team.length);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c17] text-white">
      <BackgroundField />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="mx-auto flex min-h-[700px] max-w-[1440px] items-center px-6 py-32 sm:px-10 lg:px-20">
          <div className="relative z-10 max-w-[950px] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
                About Max Point
              </span>
            </div>

            <h1 className="max-w-[1000px] text-[46px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[64px] md:text-[76px] lg:text-[88px]">
              Building something
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
                meaningful, together.
              </span>
            </h1>

            <p className="mt-9 max-w-[650px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Max Point brings digital, government, business and creative
              services together in one place — making everyday digital work
              easier, faster and more accessible for our community.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#090c17] transition-all duration-300 hover:shadow-[0_0_45px_rgba(255,255,255,0.15)]"
              >
                Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/65 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section id="our-story" className="relative border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-20 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-28">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
                How it all
                <br />
                <span className="text-white/30">started.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-[850px] text-2xl leading-[1.45] tracking-[-0.025em] text-white/70 sm:text-3xl lg:text-[36px]">
                We believe technology should make life easier — not more
                complicated.
              </p>

              <p className="mt-9 max-w-[700px] text-base leading-7 text-white/40">
                Max Point began as a small desk in Nehru Vihar with one
                simple idea: help people finish their digital and government
                work without the confusion, queues and repeat visits it
                usually takes. Over the years, that idea grew into a full
                range of services — from form filling and tax compliance to
                design, printing and automation — all built around one
                promise: make it simple.
              </p>

              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
                {[
                  { label: "Founded", value: "2019" },
                  { label: "Team", value: "5+" },
                  { label: "Services", value: "15+" },
                  { label: "Customers", value: "1000+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/35">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="grid overflow-hidden rounded-[28px] border border-white/[0.08] md:grid-cols-2">
            <div className="group relative min-h-[280px] overflow-hidden border-b border-white/[0.07] bg-[#0b0f1f] p-9 transition-colors duration-500 hover:bg-white/[0.02] sm:p-12 md:border-b-0 md:border-r">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/[0.08] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
              <Eyebrow color="cyan">Our Mission</Eyebrow>
              <p className="relative mt-6 max-w-md text-xl font-medium leading-[1.4] tracking-[-0.02em] text-white/85 sm:text-2xl">
                "To make everyday digital, government and business services
                simple and accessible for everyone in our community."
              </p>
              <p className="relative mt-6 max-w-sm text-sm leading-6 text-white/35">
                We focus on solving today's needs — reliable service,
                accurate paperwork and honest guidance, every single visit.
              </p>
            </div>

            <div className="group relative min-h-[280px] overflow-hidden bg-[#0b0f1f] p-9 transition-colors duration-500 hover:bg-white/[0.02] sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-purple-400/[0.08] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
              <Eyebrow color="purple">Our Vision</Eyebrow>
              <p className="relative mt-6 max-w-md text-xl font-medium leading-[1.4] tracking-[-0.02em] text-white/85 sm:text-2xl">
                "To become the most trusted digital service point in every
                neighbourhood we serve."
              </p>
              <p className="relative mt-6 max-w-sm text-sm leading-6 text-white/35">
                We're building toward a future where no one has to feel lost
                navigating digital or government processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE STAND FOR
      ========================================================= */}
      <section className="relative border-y border-white/[0.06] py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow color="blue">What We Stand For</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                The principles that
                <br />
                <span className="text-white/30">guide our work.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f1f] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16]"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.glow} opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100`}
                  />
                  <div className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.03] ${item.glow.split(" ").pop()}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative mt-6 text-lg font-medium tracking-[-0.01em] text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-white/35">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MEET THE OWNER
      ========================================================= */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="text-center">
            <Eyebrow color="purple">Meet Our Owner</Eyebrow>
          </div>

          <div className="relative mt-16 grid gap-12 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0f1f] p-9 sm:p-14 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:p-16">
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/[0.08] blur-[150px]" />

            <div className="relative flex justify-center">
              <Avatar initials={team[0].initials} size="lg" />
            </div>

            <div className="relative">
              <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {team[0].name}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-400/70">
                {team[0].role}
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
                {team[0].responsibility} With years of hands-on experience
                serving the Nehru Vihar community, he leads Max Point with a
                simple philosophy — treat every customer's paperwork like it
                matters, because it does.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l-2 border-cyan-400/40 pl-5">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400/60" />
                <p className="max-w-lg text-lg italic leading-relaxed text-white/70">
                  {team[0].quote}
                </p>
              </div>

              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
                Connect on LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEET OUR TEAM + QUOTE SLIDER
      ========================================================= */}
      <section className="relative border-y border-white/[0.06] py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="text-center">
            <Eyebrow color="cyan">Meet Our Team</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              The people behind
              <br />
              <span className="text-white/30">what we do.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-white/35">
              Different people. Different skills. One team working toward
              the same goal.
            </p>
          </div>

          {/* Slider */}
          <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0f1f] px-8 py-14 text-center sm:px-16 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />

            <div key={active} className="relative animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex justify-center">
                <Avatar initials={member.initials} size="lg" />
              </div>

              <p className="mx-auto mt-8 max-w-xl text-xl italic leading-relaxed text-white/75 sm:text-2xl">
                "{member.quote}"
              </p>

              <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cyan-400/70">
                {member.role}
              </p>

              <p className="mx-auto mt-5 max-w-sm text-xs uppercase tracking-[0.15em] text-white/25">
                Responsibility
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/40">
                {member.responsibility}
              </p>
            </div>

            <div className="relative mt-12 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous team member"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="text-xs tracking-[0.15em] text-white/30">
                {String(active + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
              </span>

              <button
                onClick={next}
                aria-label="Next team member"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-2">
              {team.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${t.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-cyan-400" : "w-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Who does what */}
          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/[0.08]">
            {team.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between border-b border-white/[0.06] px-6 py-4 text-left transition-colors last:border-b-0 hover:bg-white/[0.02] sm:px-8 ${
                  i === active ? "bg-white/[0.03]" : ""
                }`}
              >
                <span className="text-sm font-medium text-white/80">{t.name}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/30">{t.role}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR JOURNEY
      ========================================================= */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="text-center">
            <Eyebrow color="blue">Our Journey</Eyebrow>
          </div>

          <div className="relative mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent lg:block" />

            {journey.map((step, i) => (
              <div key={step.year} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <div className="relative z-10 h-[13px] w-[13px] shrink-0 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)] lg:mb-6" />
                  <span className="text-sm font-medium tracking-[0.1em] text-white/40 lg:hidden">
                    {step.year}
                  </span>
                </div>

                <span className="mt-6 hidden text-sm font-medium tracking-[0.1em] text-white/40 lg:block">
                  {step.year}
                </span>

                <h3 className="mt-2 text-xl font-medium tracking-[-0.01em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[240px] text-sm leading-6 text-white/35">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY BY THE NUMBERS
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-white/[0.06]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-20">
          <div className="text-center">
            <Eyebrow color="purple">Our Impact In Numbers</Eyebrow>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-14 md:grid-cols-3">
            {numbers.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          <div className="text-center">
            <Eyebrow color="cyan">Why Work With Us?</Eyebrow>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0f1f] px-6 py-4 transition-colors duration-300 hover:border-white/[0.16]"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400/80" strokeWidth={1.75} />
                <span className="text-sm text-white/70">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[40%] border border-blue-400/[0.05] bg-gradient-to-br from-blue-500/[0.04] via-transparent to-purple-500/[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center">
            <Rocket className="h-6 w-6 text-cyan-400/70" strokeWidth={1.75} />
          </div>

          <span className="mt-6 block text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
            Let's work together
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Let's build something
            <br />
            <span className="text-white/30">great together.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Have an idea, project or digital need in mind? We'd love to hear
            from you and help you move forward.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#090c17] transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]"
          >
            Talk to Us
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}