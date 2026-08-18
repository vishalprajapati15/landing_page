"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function MeetTeam() {
  const [active, setActive] = useState(0);
  const member = team[active];

  const next = () => setActive((i) => (i + 1) % team.length);
  const prev = () => setActive((i) => (i - 1 + team.length) % team.length);

  return (
    <section className="relative border-y border-white/[0.06] py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-center"
        >
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
        </motion.div>

        {/* Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0f1f] px-8 py-14 text-center sm:px-16 sm:py-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex justify-center">
                <Avatar initials={getInitials(member.name)} size="lg" />
              </div>

              <p className="mx-auto mt-8 max-w-xl text-xl italic leading-relaxed text-white/75 sm:text-2xl">
                &ldquo;{member.quote}&rdquo;
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
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-12 flex items-center justify-center gap-6">
            <motion.button
              onClick={prev}
              aria-label="Previous team member"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            <span className="text-xs tracking-[0.15em] text-white/30">
              {String(active + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
            </span>

            <motion.button
              onClick={next}
              aria-label="Next team member"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
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
        </motion.div>
      </div>
    </section>
  );
}