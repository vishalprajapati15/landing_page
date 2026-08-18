"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { Eyebrow, Avatar, getInitials } from "./AboutShared";
import { team } from "./aboutData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MeetOwner() {
  const owner = team[0];

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
          <Eyebrow color="purple">Meet Our Owner</Eyebrow>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mt-16 grid gap-12 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0f1f] p-9 sm:p-14 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:p-16"
        >
          <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/[0.08] blur-[150px]" />

          <div className="relative flex justify-center">
            <Avatar initials={getInitials(owner.name)} size="lg" />
          </div>

          <div className="relative">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              {owner.name}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-400/70">
              {owner.role}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
              {owner.responsibility} With years of hands-on experience
              serving the Nehru Vihar community, he leads Max Point with a
              simple philosophy — treat every customer&apos;s paperwork like it
              matters, because it does.
            </p>

            <div className="mt-8 flex items-start gap-3 border-l-2 border-cyan-400/40 pl-5">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400/60" />
              <p className="max-w-lg text-lg italic leading-relaxed text-white/70">
                &ldquo;{owner.quote}&rdquo;
              </p>
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Connect on LinkedIn
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}