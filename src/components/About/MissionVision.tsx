"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./AboutShared";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MissionVision() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid overflow-hidden rounded-[28px] border border-white/[0.08] md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="group relative min-h-[280px] overflow-hidden border-b border-white/[0.07] bg-[#0b0f1f] p-9 transition-colors duration-500 hover:bg-white/[0.02] sm:p-12 md:border-b-0 md:border-r"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/[0.08] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
            <Eyebrow color="cyan">Our Mission</Eyebrow>
            <p className="relative mt-6 max-w-md text-xl font-medium leading-[1.4] tracking-[-0.02em] text-white/85 sm:text-2xl">
              &ldquo;To make everyday digital, government and business services
              simple and accessible for everyone in our community.&rdquo;
            </p>
            <p className="relative mt-6 max-w-sm text-sm leading-6 text-white/35">
              We focus on solving today&apos;s needs — reliable service,
              accurate paperwork and honest guidance, every single visit.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="group relative min-h-[280px] overflow-hidden bg-[#0b0f1f] p-9 transition-colors duration-500 hover:bg-white/[0.02] sm:p-12"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-purple-400/[0.08] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />
            <Eyebrow color="purple">Our Vision</Eyebrow>
            <p className="relative mt-6 max-w-md text-xl font-medium leading-[1.4] tracking-[-0.02em] text-white/85 sm:text-2xl">
              &ldquo;To become the most trusted digital service point in every
              neighbourhood we serve.&rdquo;
            </p>
            <p className="relative mt-6 max-w-sm text-sm leading-6 text-white/35">
              We&apos;re building toward a future where no one has to feel lost
              navigating digital or government processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}