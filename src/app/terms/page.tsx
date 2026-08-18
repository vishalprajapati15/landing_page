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
    title: "1. Services",
    text: "Max Point provides government form filling, exam form filling, AEPS, money transfer, ITR filing, GST registration, PAN/Aadhaar services, printing, PDF editing, design, website development and WhatsApp automation services on a service-fee basis.",
  },
  {
    title: "2. Accuracy of Information",
    text: "Customers are responsible for providing accurate and complete information and documents. Max Point is not liable for delays or rejections caused by incorrect or incomplete details supplied by the customer.",
  },
  {
    title: "3. Fees & Payments",
    text: "Service charges are communicated before starting any task. Government fees, exam fees and other third-party charges are separate from our service fee and are non-refundable once submitted.",
  },
  {
    title: "4. Turnaround Time",
    text: "While we aim for quick and reliable turnaround, timelines for government and third-party portals depend on those systems and are outside our direct control.",
  },
  {
    title: "5. Limitation of Liability",
    text: "Max Point is not responsible for outcomes determined by government departments, exam bodies, banks or other third parties once a submission has been made correctly on the customer's behalf.",
  },
];

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-white/45">
              Please read these terms carefully before using any Max Point
              service. By availing our services, you agree to the terms
              outlined below.
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