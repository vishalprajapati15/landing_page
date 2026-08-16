"use client";

import Link from "next/link";

export default function AboutPage() {
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
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[850px]">
        <div className="mx-auto flex min-h-[850px] max-w-[1440px] items-center px-6 py-32 sm:px-10 lg:px-20">
          <div className="relative z-10 max-w-[950px]">
            {/* Eyebrow */}
            <div
              className="
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
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_18px_rgba(34,211,238,0.9)]
                "
              />

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
                About Max Point
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="
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
            >
              We make
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
                digital simple.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-9
                max-w-[650px]
                text-base
                leading-7
                text-white/45
                sm:text-lg
                sm:leading-8
              "
            >
              Max Point brings digital, government, business and creative
              services together in one place — making everyday digital work
              easier, faster and more accessible.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
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
                Explore services

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
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
                Talk to us
              </Link>
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
            "
          />
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-20 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-28">
            {/* Label */}
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
                Who we are
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
                More than
                <br />
                <span className="text-white/30">a service center.</span>
              </h2>
            </div>

            {/* Content */}
            <div>
              <p className="max-w-[850px] text-2xl leading-[1.45] tracking-[-0.025em] text-white/70 sm:text-3xl lg:text-[38px]">
                We believe technology should make life easier — not more
                complicated.
              </p>

              <p className="mt-9 max-w-[700px] text-base leading-7 text-white/40">
                Max Point helps individuals, students, professionals and
                businesses handle their digital needs from one convenient
                place. From government forms and documentation to business
                solutions, design, printing and digital services, we make the
                process simple and approachable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES / CARDS
      ========================================================= */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-purple-400/70">
                Our approach
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Simple by
                <br />
                <span className="text-white/30">design.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/35">
              Everything we do is built around making digital services more
              accessible, understandable and useful.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/[0.08] md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Simple",
                description:
                  "We remove unnecessary complexity and make digital processes easy to understand.",
                glow: "bg-cyan-400/[0.08]",
              },
              {
                number: "02",
                title: "Reliable",
                description:
                  "We focus on accurate information, transparent processes and dependable service.",
                glow: "bg-blue-500/[0.08]",
              },
              {
                number: "03",
                title: "Modern",
                description:
                  "We use modern technology to continuously improve the way services are delivered.",
                glow: "bg-purple-500/[0.08]",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  min-h-[360px]
                  overflow-hidden
                  border-b
                  border-white/[0.07]
                  bg-[#090c17]
                  p-8
                  transition-all
                  duration-500
                  last:border-b-0
                  hover:bg-white/[0.018]
                  md:border-b-0
                  md:border-r
                  md:last:border-r-0
                "
              >
                {/* Card glow */}
                <div
                  className={`
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    ${item.glow}
                    opacity-0
                    blur-[100px]
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  `}
                />

                <span className="relative text-xs tracking-[0.2em] text-white/25">
                  {item.number}
                </span>

                <div className="relative mt-32">
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[300px] text-sm leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-8
                    right-8
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS / DIGITAL STRIP
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-white/[0.06]">
        {/* Background shape */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-0">
            {[
              {
                value: "01",
                title: "Customer First",
                text: "Every service starts with the customer's needs.",
              },
              {
                value: "02",
                title: "Digital",
                text: "Modern solutions for modern requirements.",
              },
              {
                value: "03",
                title: "Accessible",
                text: "Technology made easier for everyone.",
              },
              {
                value: "04",
                title: "Always Growing",
                text: "Constantly improving our services and tools.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="
                  border-white/[0.07]
                  px-5
                  md:border-r
                  md:px-8
                  md:first:pl-0
                  md:last:border-r-0
                "
              >
                <span className="text-xs text-white/20">
                  {item.value}
                </span>

                <h3 className="mt-4 text-sm font-medium text-white/75">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[210px] text-xs leading-5 text-white/30">
                  {item.text}
                </p>
              </div>
            ))}
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
            Let's work together
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
            Have a digital need?
            <br />
            <span className="text-white/30">Let's make it simple.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            From online services to business solutions, Max Point is here to
            help you move forward.
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

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}