"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Eyebrow } from "./AboutShared";
import { reasons } from "./aboutData";

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
    visible: { transition: { staggerChildren: 0.07 } },
};

const reasonItem: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function WhyChooseUs() {
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
                    <Eyebrow color="cyan">Why Work With Us?</Eyebrow>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2"
                >
                    {reasons.map((reason) => (
                        <motion.div
                            key={reason}
                            variants={reasonItem}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0b0f1f] px-12 py-8 transition-colors duration-300 hover:border-white/[0.16]"
                        >
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400/80" strokeWidth={1.75} />
                            <span className="text-lg text-white/70">{reason}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}