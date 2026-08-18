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

const statsList = [
  { label: "Founded", value: "2019" },
  { label: "Team", value: "5+" },
  { label: "Services", value: "15+" },
  { label: "Customers", value: "1000+" },
];

export default function OurStory() {
  return (
    <section id="our-story" className="relative border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-20 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
              How it all
              <br />
              <span className="text-white/30">started.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
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
              {statsList.map((stat) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}