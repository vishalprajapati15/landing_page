import Link from "next/link";

const services = [
    {
        name: "Government Forms",
        href: "/services/government-form-filling",
    },
    {
        name: "Exam Form Filling",
        href: "/services/exam-form-filling",
    },
    {
        name: "AEPS",
        href: "/services/aeps",
    },
    {
        name: "Money Transfer",
        href: "/services/money-transfer",
    },
    {
        name: "ITR Filing",
        href: "/services/itr-filing",
    },
    {
        name: "GST Registration",
        href: "/services/gst-registration",
    },
    {
        name: "Printing & Scanning",
        href: "/services/printing",
    },
    {
        name: "PDF Editing",
        href: "/services/pdf-editing",
    },
    {
        name: "Website Design",
        href: "/services/website-design",
    },
    {
        name: "SEO Services",
        href: "/services/seo",
    },
    {
        name: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
    },
];

export default function ServicesMarquee() {
    return (
        <section
            aria-label="MAX POINT digital services"
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-[#1E293B] py-4"
        >
            {/* Left fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-transparent to-transparent sm:w-32"
            />

            {/* Right fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-transparent to-transparent sm:w-32"
            />

            {/* Moving viewport */}
            <div className="overflow-hidden">
                <div className="services-marquee-track flex w-max items-center hover:[animation-play-state:paused]">

                    {/* First copy */}
                    <MarqueeItems />

                    {/* Second copy */}
                    <MarqueeItems ariaHidden />

                </div>
            </div>
        </section>
    );
}

function MarqueeItems({
    ariaHidden = false,
}: {
    ariaHidden?: boolean;
}) {
    return (
        <div
            aria-hidden={ariaHidden}
            className="flex shrink-0 items-center"
        >
            {services.map((service) => (
                <div
                    key={`${service.name}-${ariaHidden}`}
                    className="flex shrink-0 items-center"
                >
                    <Link
                        href={service.href}
                        tabIndex={ariaHidden ? -1 : undefined}
                        className="whitespace-nowrap px-5 text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:text-[#F8FAFC] sm:px-7"
                    >
                        {service.name}
                    </Link>

                    <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-[#0066FF]"
                    />
                </div>
            ))}
        </div>
    );
}