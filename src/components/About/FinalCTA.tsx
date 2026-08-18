"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Rocket } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[40%] border border-blue-400/[0.05] bg-gradient-to-br from-blue-500/[0.04] via-transparent to-purple-500/[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <div className="flex justify-center">
          <Rocket className="h-6 w-6 text-cyan-400/70" strokeWidth={1.75} />
        </div>

        <span className="mt-6 block text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
          Let&apos;s work together
        </span>

        <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
          Let&apos;s build something
          <br />
          <span className="text-white/30">great together.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
          Have an idea, project or digital need in mind? We&apos;d love to hear
          from you and help you move forward.
        </p>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#090c17] transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]"
        >
          Talk to Us
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </section>
  );
}