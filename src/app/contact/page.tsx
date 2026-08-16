"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
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

/* =========================================================
   SCROLL-REVEAL HOOK
========================================================= */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

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
  const [shake, setShake] = useState(false);

  const [infoRef, infoInView] = useInView<HTMLDivElement>(0.15);
  const [formRef, formInView] = useInView<HTMLDivElement>(0.15);
  const [stripRef, stripInView] = useInView<HTMLDivElement>(0.15);

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
      setShake(true);
      window.setTimeout(() => setShake(false), 500);
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
      value: "hello@maxpoint.in",
      href: "mailto:hello@maxpoint.in",
      glow: "bg-cyan-400/[0.08]",
    },
    {
      icon: Phone,
      label: "Call us",
      value: "+91 93540 59422",
      href: "tel:+919354059422",
      glow: "bg-blue-500/[0.08]",
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: "New Delhi, India",
      href: "/contact",
      glow: "bg-purple-500/[0.08]",
    },
    {
      icon: Clock3,
      label: "Working hours",
      value: "Mon – Sat, 10am – 7pm",
      href: "/contact",
      glow: "bg-cyan-400/[0.08]",
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
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* =====================================================
            TOP LEFT BLUE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -left-[260px]
            -top-[220px]
            h-[620px]
            w-[620px]
            rotate-[18deg]
            rounded-[35%]
            border
            border-cyan-300/[0.10]
            bg-gradient-to-br
            from-cyan-400/[0.12]
            via-blue-500/[0.06]
            to-transparent
            blur-[1px]
          "
        />

        {/* Blue outer glow */}
        <div
          className="
            absolute
            -left-[180px]
            -top-[130px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/[0.12]
            blur-[150px]
            animate-float-a
          "
        />

        {/* =====================================================
            TOP RIGHT PURPLE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -right-[280px]
            -top-[170px]
            h-[600px]
            w-[600px]
            rotate-[-22deg]
            rounded-[40%]
            border
            border-violet-400/[0.10]
            bg-gradient-to-bl
            from-violet-500/[0.14]
            via-purple-500/[0.06]
            to-transparent
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            -right-[150px]
            top-[40px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.13]
            blur-[160px]
            animate-float-b
          "
        />

        {/* =====================================================
            CENTER BLUE GLOW
        ===================================================== */}
        <div
          className="
            absolute
            left-1/2
            top-[32%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/[0.07]
            blur-[180px]
          "
        />

        {/* =====================================================
            CENTER DECORATIVE DIAMOND
        ===================================================== */}
        <div
          className="
            absolute
            left-[50%]
            top-[42%]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rotate-45
            rounded-[45px]
            border
            border-white/[0.035]
            bg-gradient-to-br
            from-blue-500/[0.035]
            via-transparent
            to-purple-500/[0.04]
          "
        />

        {/* =====================================================
            RIGHT MIDDLE FLOATING SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -right-[180px]
            top-[48%]
            h-[420px]
            w-[420px]
            rotate-[30deg]
            rounded-[35%]
            border
            border-blue-400/[0.06]
            bg-blue-500/[0.025]
          "
        />

        {/* =====================================================
            BOTTOM LEFT PURPLE SHAPE
        ===================================================== */}
        <div
          className="
            absolute
            -bottom-[300px]
            -left-[200px]
            h-[650px]
            w-[650px]
            rotate-[-20deg]
            rounded-[40%]
            border
            border-purple-400/[0.08]
            bg-gradient-to-tr
            from-purple-600/[0.09]
            via-blue-600/[0.04]
            to-transparent
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.10]
            blur-[160px]
            animate-float-c
          "
        />

        {/* =====================================================
            BOTTOM RIGHT BLUE GLOW
        ===================================================== */}
        <div
          className="
            absolute
            -bottom-[250px]
            -right-[150px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[160px]
            animate-float-a
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[620px]">
        <div className="mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-28 sm:px-10 lg:px-20">
          <div className="relative z-10 max-w-[950px]">
            {/* Eyebrow */}
            <div
              className="
                reveal-up
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.025]
                px-4
                py-2
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-400
                    opacity-75
                  "
                />
                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_18px_rgba(34,211,238,0.9)]
                  "
                />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
                Get in touch
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="
                reveal-up
                max-w-[1000px]
                text-[52px]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
                xl:text-[116px]
              "
              style={{ animationDelay: "0.08s" }}
            >
              Let&apos;s make it
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-white
                  to-white/35
                  bg-clip-text
                  text-transparent
                "
              >
                simple, together.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                reveal-up
                mt-9
                max-w-[650px]
                text-base
                leading-7
                text-white/45
                sm:text-lg
                sm:leading-8
              "
              style={{ animationDelay: "0.16s" }}
            >
              Have a question, a project, or just want to say hello? Send us
              a message and our team will get back to you shortly.
            </p>

            {/* Quick contact chips */}
            <div
              className="reveal-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.24s" }}
            >
              <a
                href="mailto:hello@maxpoint.in"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-[#090c17]
                  transition-all
                  duration-300
                  hover:shadow-[0_0_45px_rgba(255,255,255,0.15)]
                "
              >
                Email us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="tel:+919354059422"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.025]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/65
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Call us
              </a>
            </div>
          </div>

          {/* Hero decorative vertical line */}
          <div
            className="
              absolute
              right-[12%]
              top-[28%]
              hidden
              h-[300px]
              w-px
              bg-gradient-to-b
              from-transparent
              via-cyan-400/20
              to-transparent
              lg:block
            "
          />

          {/* Floating small diamond */}
          <div
            className="
              absolute
              right-[11%]
              top-[42%]
              hidden
              h-16
              w-16
              rotate-45
              rounded-xl
              border
              border-cyan-300/10
              bg-cyan-400/[0.025]
              shadow-[0_0_80px_rgba(34,211,238,0.08)]
              lg:block
              animate-float-c
            "
          />
        </div>
      </section>

      {/* =========================================================
          CONTACT INFO + FORM
      ========================================================= */}
      <section className="relative border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 lg:px-20 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* =====================================================
                LEFT — CONTACT INFO
            ===================================================== */}
            <div
              ref={infoRef}
              className={`
                transition-all duration-700 ease-out
                ${
                  infoInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">
                Contact details
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
                Reach us
                <br />
                <span className="text-white/30">however works for you.</span>
              </h2>

              <p className="mt-7 max-w-[420px] text-base leading-7 text-white/40">
                Whether it&apos;s a quick question or a full project brief,
                pick whatever channel suits you best.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        p-6
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-white/[0.16]
                        hover:bg-white/[0.04]
                        ${
                          infoInView
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                        }
                      `}
                      style={{
                        transitionDelay: infoInView
                          ? `${index * 90}ms`
                          : "0ms",
                        transitionProperty:
                          "transform, opacity, background-color, border-color",
                      }}
                    >
                      <div
                        className={`
                          absolute
                          -right-10
                          -top-10
                          h-32
                          w-32
                          rounded-full
                          ${item.glow}
                          opacity-0
                          blur-[70px]
                          transition-opacity
                          duration-700
                          group-hover:opacity-100
                        `}
                      />

                      <div
                        className="
                          relative
                          inline-flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/[0.10]
                          bg-white/[0.03]
                          text-white/70
                          transition-colors
                          duration-300
                          group-hover:border-cyan-300/30
                          group-hover:text-cyan-300
                        "
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <p className="relative mt-5 text-xs uppercase tracking-[0.18em] text-white/30">
                        {item.label}
                      </p>

                      <p className="relative mt-2 text-sm font-medium text-white/80">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                RIGHT — FORM CARD
            ===================================================== */}
            <div
              ref={formRef}
              className={`
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-8
                backdrop-blur-xl
                transition-all duration-700 ease-out
                sm:p-10
                ${
                  formInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.10] blur-[110px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-purple-500/[0.08] blur-[110px]" />

              <div className="relative">
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-purple-400/70">
                  Send a message
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  Tell us what you need.
                </h3>

                <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/40">
                  Fill out the form below and we&apos;ll get back to you as
                  soon as possible.
                </p>

                {/* ================= SUCCESS STATE ================= */}
                {status === "success" ? (
                  <div className="animate-success-pop mt-10 flex flex-col items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.05] px-6 py-14 text-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10">
                      <CheckCircle2 className="h-7 w-7 text-cyan-300" />
                    </span>
                    <h4 className="text-xl font-medium text-white">
                      Message sent!
                    </h4>
                    <p className="max-w-[320px] text-sm leading-6 text-white/45">
                      Thanks for reaching out. Our team will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className={`mt-10 space-y-5 ${
                      shake ? "animate-field-shake" : ""
                    }`}
                  >
                    {/* Name */}
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

                    {/* Email */}
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

                    {/* Subject */}
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

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
                      >
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          updateField("message", e.target.value)
                        }
                        placeholder="Tell us a little more about what you need..."
                        className={`
                          w-full
                          resize-none
                          rounded-2xl
                          border
                          bg-white/[0.02]
                          px-4
                          py-3.5
                          text-sm
                          text-white
                          placeholder:text-white/25
                          outline-none
                          transition-all
                          duration-300
                          focus:bg-white/[0.04]
                          ${
                            errors.message
                              ? "border-red-400/50 focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)]"
                              : "border-white/[0.10] focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                          }
                        `}
                      />
                      {errors.message && (
                        <p className="mt-2 text-xs text-red-400/80">
                          Please enter a message
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="
                        group
                        mt-2
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-white
                        px-6
                        py-3.5
                        text-sm
                        font-medium
                        text-[#090c17]
                        transition-all
                        duration-300
                        hover:shadow-[0_0_45px_rgba(255,255,255,0.15)]
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                        sm:w-auto
                      "
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
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS / STRIP
      ========================================================= */}
      <section
        ref={stripRef}
        className="relative overflow-hidden border-b border-white/[0.06]"
      >
        {/* Background shape */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-0">
            {strip.map((item, index) => (
              <div
                key={item.value}
                className={`
                  border-white/[0.07]
                  px-5
                  transition-all duration-700 ease-out
                  md:border-r
                  md:px-8
                  md:first:pl-0
                  md:last:border-r-0
                  ${
                    stripInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: stripInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <span className="text-xs text-white/20">{item.value}</span>

                <h3 className="mt-4 text-sm font-medium text-white/75">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[210px] text-xs leading-5 text-white/30">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white/50
                transition-colors
                duration-300
                hover:text-white
              "
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
        className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
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
          className={`
            w-full
            rounded-full
            border
            bg-white/[0.02]
            py-3.5
            pl-11
            pr-4
            text-sm
            text-white
            placeholder:text-white/25
            outline-none
            transition-all
            duration-300
            focus:bg-white/[0.04]
            ${
              error
                ? "border-red-400/50 focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)]"
                : "border-white/[0.10] focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
            }
          `}
        />
      </div>

      {error && <p className="mt-2 ml-1 text-xs text-red-400/80">{errorMessage}</p>}
    </div>
  );
}