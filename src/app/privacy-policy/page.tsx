"use client";

import { motion, type Variants } from "framer-motion";
import PageBackground from "@/components/common/Background";

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

const sections = [
  {
    title: "1. Information We Collect",
    text: "We collect the personal and document information you share with us to complete a requested service, such as your name, contact details, government IDs and uploaded documents.",
  },
  {
    title: "2. How We Use Your Information",
    text: "Your information is used only to process the service you've requested — filling forms, submitting applications, printing or completing transactions on your behalf.",
  },
  {
    title: "3. Data Storage & Security",
    text: "We take reasonable precautions to keep your documents and data secure and do not sell or share your information with unrelated third parties.",
  },
  {
    title: "4. Third-Party Portals",
    text: "Where a service requires submission to a government or third-party portal, your data is shared only as necessary to complete that submission.",
  },
  {
    title: "5. Your Rights",
    text: "You may request details of the information we hold about you or ask us to delete records that are no longer required, subject to any legal retention requirements.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c17] text-white">
      <PageBackground />

      <section className="relative">
        <div className="mx-auto max-w-[1000px] px-6 py-28 sm:px-10 lg:px-20 lg:py-36">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
                Legal
              </span>
            </div>

            <h1 className="max-w-[700px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-white/45">
              Your trust matters to us. This page explains what information
              we collect and how it&apos;s used when you use a Max Point service.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-16 space-y-6"
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.08] bg-[#0b0f1f] p-7 sm:p-9"
              >
                <h2 className="text-lg font-medium tracking-[-0.01em] text-white">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/40">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}