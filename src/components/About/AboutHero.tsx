"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-[700px] max-w-[1440px] items-center px-6 py-32 sm:px-10 lg:px-20">
        <motion.div
          className="relative z-10 max-w-[950px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
              About Max Point
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-[1000px] text-[46px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[64px] md:text-[76px] lg:text-[88px]"
          >
            Building something
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
              meaningful, together.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-[650px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
          >
            Max Point brings digital, government, business and creative
            services together in one place — making everyday digital work
            easier, faster and more accessible for our community.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}