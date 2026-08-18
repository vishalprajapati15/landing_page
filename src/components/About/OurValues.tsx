"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "./AboutShared";
import { values } from "./aboutData";

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

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OurValues() {
  return (
    <section className="relative border-y border-white/[0.06] py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <Eyebrow color="blue">What We Stand For</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The principles that
              <br />
              <span className="text-white/30">guide our work.</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardItem}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}