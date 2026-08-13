import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
} from "lucide-react";

const services = [
    {
        name: "Government & Exam Forms",
        href: "/services/government-form-filling",
    },
    {
        name: "AEPS & Money Transfer",
        href: "/services/aeps-money-transfer",
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
        name: "Printing & PDF Editing",
        href: "/services/printing",
    },
    {
        name: "Website Design",
        href: "/services/website-design",
    },
    {
        name: "WhatsApp Automation",
        href: "/services/whatsapp-automation",
    },
    {
        name: "SEO Services",
        href: "/services/seo",
    },
];

const quickLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "About Us",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const whatsappNumber = "919354059422";
const phoneNumber = "+91 8929279990";
const email = "rahulmaxpoint@gmail.com";

export default function Footer() {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <footer className="border-t border-white/5 bg-[#030712] text-[#f8fafc]">
            <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-[120px]">

                {/* Main Footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                            aria-label="MAX POINT Cyber Cafe - Home"
                        >
                            <span
                                className="h-3 w-3 rounded-[3px] bg-[#0066ff]"
                                aria-hidden="true"
                            />

                            <span className="font-[Outfit] text-2xl font-extrabold tracking-tight">
                                MAX POINT
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[#94a3b8]">
                            Your trusted cyber cafe and digital service center
                            in Nehru Vihar, Delhi. We help individuals and
                            businesses with government forms, tax services,
                            printing, digital solutions, website design and
                            business automation.
                        </p>

                        {/* Location */}
                        <address className="mt-6 not-italic">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=MAX+POINT+Cyber+Cafe+Nehru+Vihar+Delhi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 text-sm text-[#94a3b8] transition-colors hover:text-white"
                            >
                                <MapPin
                                    className="mt-1 h-4 w-4 shrink-0 text-[#0066ff]"
                                    aria-hidden="true"
                                />

                                <span>
                                    MAX POINT Cyber Cafe
                                    <br />
                                    Nehru Vihar, Delhi, India
                                </span>

                                <ArrowUpRight
                                    className="mt-1 h-4 w-4 shrink-0"
                                    aria-hidden="true"
                                />
                            </a>
                        </address>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Our Services
                        </h2>

                        <nav
                            aria-label="Services"
                            className="mt-5"
                        >
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.href}>
                                        <Link
                                            href={service.href}
                                            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h2>

                        <nav
                            aria-label="Footer navigation"
                            className="mt-5"
                        >
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}

                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-sm text-[#94a3b8] transition-colors hover:text-white"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/terms"
                                        className="text-sm text-[#94a3b8] transition-colors hover:text-white"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Contact Us
                        </h2>

                        <div className="mt-5 space-y-4">

                            {/* Phone */}
                            <a
                                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 text-sm text-[#94a3b8] transition-colors hover:text-white"
                            >
                                <Phone
                                    className="h-4 w-4 shrink-0 text-[#0066ff]"
                                    aria-hidden="true"
                                />

                                <span>{phoneNumber}</span>
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-3 break-all text-sm text-[#94a3b8] transition-colors hover:text-white"
                            >
                                <Mail
                                    className="h-4 w-4 shrink-0 text-[#0066ff]"
                                    aria-hidden="true"
                                />

                                <span>{email}</span>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#0066ff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0057d9]"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-[#64748b] md:flex-row md:items-center md:justify-between">

                    <p>
                        © {new Date().getFullYear()} MAX POINT Cyber Cafe.
                        All rights reserved.
                    </p>

                    <p>
                        Digital Services in Nehru Vihar, Delhi
                    </p>
                </div>
            </div>
        </footer>
    );
}