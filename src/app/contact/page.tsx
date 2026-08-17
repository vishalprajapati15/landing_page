"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  type Variants,
} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from "lucide-react";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================================================
   FORM STATE
========================================================= */
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, boolean>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const formShakeControls = useAnimationControls();

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  }

  function validate(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nextErrors: FormErrors = {
      name: form.name.trim().length === 0,
      email: !emailPattern.test(form.email.trim()),
      subject: form.subject.trim().length === 0,
      message: form.message.trim().length === 0,
    };
    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) {
      formShakeControls.start({
        x: [0, -8, 8, -8, 8, -4, 4, 0],
        transition: { duration: 0.5 },
      });
      return;
    }

    setStatus("submitting");

    // Simulated submission — wire this up to an API route / email
    // service when the backend is ready.
    await new Promise((resolve) => window.setTimeout(resolve, 1400));

    setStatus("success");
    setForm(initialForm);

    window.setTimeout(() => setStatus("idle"), 4500);
  }

  const contactDetails = [
    {
      icon: Mail,
      label: "Email us",
      value: "rahulmaxpoint@gmail.com",
      href: "mailto:rahulmaxpoint@gmail.com",
      glow: "bg-cyan-400/[0.10]",
    },
    {
      icon: Phone,
      label: "Call us",
      value: "+91 93540 59422",
      href: "tel:+919354059422",
      glow: "bg-blue-500/[0.10]",
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: "C1, C Block, Nehru Vihar, Delhi",
      href: "/contact",
      glow: "bg-purple-500/[0.10]",
    },
    {
      icon: Clock3,
      label: "Working hours",
      value: "Mon – Sat, 10 AM – 9 PM",
      href: "/contact",
      glow: "bg-cyan-400/[0.10]",
    },
  ];

  const strip = [
    {
      value: "01",
      title: "Fast Response",
      text: "We usually reply within one business day.",
    },
    {
      value: "02",
      title: "Real People",
      text: "Talk to someone who actually understands your need.",
    },
    {
      value: "03",
      title: "No Jargon",
      text: "Clear answers, explained simply.",
    },
    {
      value: "04",
      title: "Every Query Matters",
      text: "Big or small, we take every message seriously.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c17] text-white">
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:56px_56px]
            sm:[background-size:80px_80px]
          "
        />

        {/* TOP LEFT BLUE SHAPE */}
        <div
          className="
            absolute -left-[220px] -top-[200px] h-[440px] w-[440px]
            rotate-[18deg] rounded-[35%] border border-cyan-300/[0.16]
            bg-gradient-to-br from-cyan-400/[0.18] via-blue-500/[0.10] to-transparent
            blur-[1px]
            sm:-left-[260px] sm:-top-[220px] sm:h-[620px] sm:w-[620px]
          "
        />

        {/* Blue outer glow — floating */}
        <motion.div
          className="
            absolute -left-[140px] -top-[110px] h-[380px] w-[380px] rounded-full
            bg-cyan-500/[0.18] blur-[110px]
            sm:-left-[180px] sm:-top-[130px] sm:h-[520px] sm:w-[520px] sm:blur-[150px]
          "
          animate={{ x: [0, 24, 0], y: [0, -32, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* TOP RIGHT PURPLE SHAPE */}
        <div
          className="
            absolute -right-[220px] -top-[150px] h-[420px] w-[420px]
            rotate-[-22deg] rounded-[40%] border border-violet-400/[0.16]
            bg-gradient-to-bl from-violet-500/[0.20] via-purple-500/[0.10] to-transparent
            sm:-right-[280px] sm:-top-[170px] sm:h-[600px] sm:w-[600px]
          "
        />

        {/* Purple glow — floating */}
        <motion.div
          className="
            absolute -right-[120px] top-[30px] h-[360px] w-[360px] rounded-full
            bg-purple-600/[0.20] blur-[120px]
            sm:-right-[150px] sm:top-[40px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]
          "
          animate={{ x: [0, -28, 0], y: [0, 26, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* CENTER BLUE GLOW */}
        <div
          className="
            absolute left-1/2 top-[32%] h-[420px] w-[420px] -translate-x-1/2
            rounded-full bg-blue-600/[0.10] blur-[130px]
            sm:h-[650px] sm:w-[650px] sm:blur-[180px]
          "
        />

        {/* CENTER DECORATIVE DIAMOND */}
        <div
          className="
            absolute left-[50%] top-[42%] h-[180px] w-[180px] -translate-x-1/2
            rotate-45 rounded-[32px] border border-white/[0.06]
            bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.06]
            sm:h-[280px] sm:w-[280px] sm:rounded-[45px]
          "
        />

        {/* RIGHT MIDDLE FLOATING SHAPE */}
        <div
          className="
            absolute -right-[140px] top-[48%] h-[300px] w-[300px]
            rotate-[30deg] rounded-[35%] border border-blue-400/[0.09] bg-blue-500/[0.04]
            sm:-right-[180px] sm:h-[420px] sm:w-[420px]
          "
        />

        {/* BOTTOM LEFT PURPLE SHAPE */}
        <div
          className="
            absolute -bottom-[260px] -left-[160px] h-[460px] w-[460px]
            rotate-[-20deg] rounded-[40%] border border-purple-400/[0.12]
            bg-gradient-to-tr from-purple-600/[0.13] via-blue-600/[0.06] to-transparent
            sm:-bottom-[300px] sm:-left-[200px] sm:h-[650px] sm:w-[650px]
          "
        />

        {/* Bottom glow — floating */}
        <motion.div
          className="
            absolute bottom-[-160px] left-[5%] h-[360px] w-[360px] rounded-full
            bg-purple-600/[0.16] blur-[120px]
            sm:bottom-[-200px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]
          "
          animate={{ x: [0, 18, 0], y: [0, 22, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* BOTTOM RIGHT BLUE GLOW — floating */}
        <motion.div
          className="
            absolute -bottom-[200px] -right-[120px] h-[400px] w-[400px] rounded-full
            bg-cyan-500/[0.11] blur-[120px]
            sm:-bottom-[250px] sm:-right-[150px] sm:h-[550px] sm:w-[550px] sm:blur-[160px]
          "
          animate={{ x: [0, 24, 0], y: [0, -32, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="mx-auto flex min-h-[520px] max-w-[1440px] items-center px-5 py-20 sm:min-h-[600px] sm:px-8 sm:py-24 lg:px-20 lg:py-28">
          <motion.div
            className="relative z-10 max-w-[950px]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-xl sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-cyan-400"
                  animate={{ scale: [1, 2.2], opacity: [0.75, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/50 sm:text-[11px] sm:tracking-[0.28em]">
                Get in touch
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-[1000px] text-[38px] font-semibold leading-[1] tracking-[-0.03em] min-[420px]:text-[44px] sm:text-[64px] sm:leading-[0.95] sm:tracking-[-0.045em] md:text-[80px] lg:text-[96px] lg:tracking-[-0.055em] xl:text-[112px]"
            >
              Let&apos;s make it
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/35 bg-clip-text text-transparent">
                simple, together.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[600px] text-sm leading-6 text-white/45 sm:mt-9 sm:max-w-[650px] sm:text-lg sm:leading-8"
            >
              Have a question, a project, or just want to say hello? Send us
              a message and our team will get back to you shortly.
            </motion.p>

            {/* Quick contact chips */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            >
              <motion.a
                href="mailto:hello@maxpoint.in"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#090c17] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(255,255,255,0.15)] sm:px-6 sm:py-3.5"
              >
                Email us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              <motion.a
                href="https://wa.me/919354059422?text=Hello%20Max%20Point%20Cyber%20Cafe%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.025] px-5 py-3 text-sm font-medium text-white/65 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white sm:px-6 sm:py-3.5"
              >
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero decorative vertical line */}
          <div className="absolute right-[12%] top-[28%] hidden h-[300px] w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent lg:block" />

          {/* Floating small diamond */}
          <motion.div
            className="absolute right-[11%] top-[42%] hidden h-16 w-16 rotate-45 rounded-xl border border-cyan-300/10 bg-cyan-400/[0.025] shadow-[0_0_80px_rgba(34,211,238,0.08)] lg:block"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* =========================================================
          CONTACT INFO + FORM
      ========================================================= */}
      <section className="relative border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-20 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* =====================================================
                LEFT — CONTACT INFO
            ===================================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.span
                variants={cardItem}
                className="text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-400/70 sm:text-[11px] sm:tracking-[0.28em]"
              >
                Contact details
              </motion.span>

              <motion.h2
                variants={cardItem}
                className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:mt-6 sm:text-4xl sm:leading-[1] sm:tracking-[-0.045em] lg:text-5xl"
              >
                Reach us
                <br />
                <span className="text-white/30">however works for you.</span>
              </motion.h2>

              <motion.p
                variants={cardItem}
                className="mt-5 max-w-[420px] text-sm leading-6 text-white/40 sm:mt-7 sm:text-base sm:leading-7"
              >
                Whether it&apos;s a quick question or a full project brief,
                pick whatever channel suits you best.
              </motion.p>

              <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      variants={cardItem}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-500 hover:border-white/[0.16] hover:bg-white/[0.04] sm:p-6"
                    >
                      <div
                        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${item.glow} opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100`}
                      />

                      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.03] text-white/70 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </div>

                      <p className="relative mt-4 text-[11px] uppercase tracking-[0.16em] text-white/30 sm:mt-5 sm:text-xs sm:tracking-[0.18em]">
                        {item.label}
                      </p>

                      <p className="relative mt-2 text-sm font-medium text-white/80">
                        {item.value}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT — FORM CARD
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl sm:rounded-[28px] sm:p-8 lg:p-10"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[110px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-purple-500/[0.08] blur-[110px]" />

              <div className="relative">
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-purple-400/70 sm:text-[11px] sm:tracking-[0.28em]">
                  Send a message
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] sm:mt-4 sm:text-2xl lg:text-3xl">
                  Tell us what you need.
                </h3>

                <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/60">
                  Fill out the form below and we&apos;ll get back to you as
                  soon as possible.
                </p>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    /* ================= SUCCESS STATE ================= */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.05] px-6 py-12 text-center sm:mt-10 sm:py-14"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10"
                      >
                        <CheckCircle2 className="h-7 w-7 text-cyan-300" />
                      </motion.span>
                      <h4 className="text-lg font-medium text-white sm:text-xl">
                        Message sent!
                      </h4>
                      <p className="max-w-[320px] text-sm leading-6 text-white/45">
                        Thanks for reaching out. Our team will get back to you
                        shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8 sm:mt-10"
                    >
                      <motion.form
                        onSubmit={handleSubmit}
                        noValidate
                        animate={formShakeControls}
                        className="space-y-5"
                      >
                        <FormField
                          id="name"
                          label="Name"
                          icon={User}
                          value={form.name}
                          onChange={(v) => updateField("name", v)}
                          placeholder="Your full name"
                          error={errors.name}
                          errorMessage="Please enter your name"
                          required
                        />

                        <FormField
                          id="email"
                          type="email"
                          label="Email"
                          icon={Mail}
                          value={form.email}
                          onChange={(v) => updateField("email", v)}
                          placeholder="you@example.com"
                          error={errors.email}
                          errorMessage="Please enter a valid email"
                          required
                        />

                        <FormField
                          id="subject"
                          label="Subject"
                          icon={MessageSquare}
                          value={form.subject}
                          onChange={(v) => updateField("subject", v)}
                          placeholder="What is this about?"
                          error={errors.subject}
                          errorMessage="Please enter a subject"
                          required
                        />

                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-white/60"
                          >
                            Message <span className="text-cyan-400">*</span>
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => updateField("message", e.target.value)}
                            placeholder="Tell us a little more about what you need..."
                            className={`w-full resize-none rounded-2xl border bg-white/[0.02] px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:bg-white/[0.04] ${errors.message
                              ? "border-red-400/50 focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)]"
                              : "border-white/[0.10] focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                              }`}
                          />
                          {errors.message && (
                            <p className="mt-2 text-xs text-red-400/80">
                              Please enter a message
                            </p>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          disabled={status === "submitting"}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full cursor-pointer bg-white px-6 py-3.5 text-sm font-medium text-[#090c17] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(255,255,255,0.15)] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS / STRIP
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-y-12 md:grid-cols-4 md:gap-0"
          >
            {strip.map((item) => (
              <motion.div
                key={item.value}
                variants={cardItem}
                className="border-white/[0.07] px-1 sm:px-5 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-white/20">{item.value}</span>

                <h3 className="mt-3 text-lg font-medium text-white/75 sm:mt-4">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[210px] text-sm leading-5 text-white/30">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-lg font-medium text-white/50 transition-colors duration-300 hover:text-white"
            >
              Or explore what we offer
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   REUSABLE INPUT FIELD
========================================================= */
function FormField({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  error,
  errorMessage,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: boolean;
  errorMessage: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-white/60"
      >
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-full border bg-white/[0.02] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:bg-white/[0.04] ${error
            ? "border-red-400/50 focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)]"
            : "border-white/[0.10] focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
            }`}
        />
      </div>

      {error && <p className="mt-2 ml-1 text-xs text-red-400/80">{errorMessage}</p>}
    </div>
  );
}