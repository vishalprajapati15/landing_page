import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Government & Exam Forms",
    description:
      "Expert assistance with state and central government schemes, competitive exam portals, housing applications, and precise document uploads.",
    href: "/services/government-exam-forms",
    icon: "file",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/0f01be90-72d5-4a49-b91e-d58804edf6bc.svg",
  },
  {
    number: "02",
    title: "AEPS & Money Transfer",
    description:
      "Secure Aadhaar Enabled Payment System (AEPS) withdrawals, balance queries, and domestic money transfer services across India.",
    href: "/services/aeps-money-transfer",
    icon: "shield",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/6ae87738-12b4-48e6-bca2-0ced8e7bad12.svg",
  },
  {
    number: "03",
    title: "Tax & Compliance",
    description:
      "Income Tax Filing (ITR), GST registration assistance, PAN Card applications, and streamlined TDS refund procedures.",
    href: "/services/tax-compliance",
    icon: "check",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/288d9d59-0991-43b7-9417-97c88be8d751.svg",
  },
  {
    number: "04",
    title: "Digital Services",
    description:
      "Professional PDF editing, high-resolution document scanning, typing and data entry in English and Hindi, and instant printing.",
    href: "/services/digital-services",
    icon: "star",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/b5bb466f-b55a-4a59-81fd-6c2d1e1f7d09.svg",
  },
  {
    number: "05",
    title: "Design & Branding",
    description:
      "Eye-catching business posters, pamphlets, custom graphics, modern business websites, landing pages, and vector brand elements.",
    href: "/services/design-branding",
    icon: "zap",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/f320d442-04d2-46d7-aaa3-d7059dba6e42.svg",
  },
  {
    number: "06",
    title: "WhatsApp Automation",
    description:
      "Empower your local business with automated customer responses, transactional broadcasts, and useful client notifications.",
    href: "/services/whatsapp-automation",
    icon: "phone",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/585ae6c7-eab2-449c-9534-492a1c6e10ef.svg",
  },
  {
    number: "07",
    title: "SEO Growth",
    description:
      "Improve local search visibility and help your business reach customers searching for services in Nehru Vihar and Delhi.",
    href: "/services/seo",
    icon: "search",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/b65d9d70-1816-41e8-971b-2a68901f7b42.svg",
  },
  {
    number: "08",
    title: "PAN & Aadhaar PVC",
    description:
      "Convert eligible digital documents into durable PVC cards that are easy to carry and suitable for everyday use.",
    href: "/services/pan-aadhaar-pvc",
    icon: "arrow",
    iconSrc:
      "https://www.figma.com/api/mcp/asset/1a6f9565-fe2a-47b6-82a0-75130cfb895f.svg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-6 py-[80px] sm:px-8 sm:py-[90px] lg:px-[120px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}
        <header className="mb-[72px] text-center">
          <p className="font-[var(--font-geist)] text-sm font-semibold uppercase tracking-wide text-[#0066FF]">
            Popular Services
          </p>

          <h2
            id="services-heading"
            className="mt-3 font-[var(--font-outfit)] text-[34px] font-extrabold leading-tight tracking-[-0.025em] text-[#F8FAFC] sm:text-[42px]"
          >
            Everything you need, under one roof
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-sm leading-6 text-[#94A3B8] sm:text-base">
            From government and exam form filling to tax filing,
            printing, document services, website design and
            business automation, MAX POINT Cyber Cafe provides
            convenient digital services in Nehru Vihar, Delhi.
          </p>
        </header>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-xl border border-[#1E293B] bg-[#0E1526] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0066FF]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start gap-5">

                {/* Number + Icon */}
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="font-[var(--font-outfit)] text-xl font-extrabold leading-none text-[#0066FF]">
                    {service.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-[18px] border border-[#0066FF]/20 bg-[#0066FF]/10">
                    <img
                      src={service.iconSrc}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold leading-tight text-[#F8FAFC] sm:text-xl">
                    <Link
                      href={service.href}
                      className="transition-colors duration-200 hover:text-[#0066FF] focus:outline-none focus-visible:text-[#0066FF]"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm leading-[22px] text-[#94A3B8]">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}