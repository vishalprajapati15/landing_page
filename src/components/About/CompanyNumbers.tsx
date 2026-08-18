"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./AboutShared";
import { numbers } from "./aboutData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const numberItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CompanyNumbers() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center"
        >
          <Eyebrow color="purple">Our Impact In Numbers</Eyebrow>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-2 gap-y-14 md:grid-cols-3"
        >
          {numbers.map((stat) => (
            <motion.div key={stat.label} variants={numberItem} className="text-center">
              <div className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}