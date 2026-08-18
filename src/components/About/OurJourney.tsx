"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./AboutShared";
import { journey } from "./aboutData";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OurJourney() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center"
        >
          <Eyebrow color="blue">Our Journey</Eyebrow>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="relative mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent lg:block" />

          {journey.map((step) => (
            <motion.div key={step.year} variants={stepItem} className="relative">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}