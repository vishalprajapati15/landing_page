import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxpointdev-mu.vercel.app"),

  title: {
    default: "MAX POINT Cyber Cafe | Digital Services in Nehru Vihar, Delhi",
    template: "%s | MAX POINT Cyber Cafe",
  },

  description:
    "MAX POINT Cyber Cafe in Nehru Vihar, Delhi provides government form filling, exam forms, AEPS, money transfer, ITR, GST registration, TDS refund, PAN & Aadhaar PVC, printing, PDF editing, website design, WhatsApp automation and SEO services.",

  keywords: [
    "cyber cafe in Nehru Vihar",
    "cyber cafe Nehru Vihar Delhi",
    "online form filling Nehru Vihar",
    "government form filling Delhi",
    "government exam form filling",
    "AEPS service Nehru Vihar",
    "money transfer Nehru Vihar",
    "ITR filing Nehru Vihar",
    "GST registration Nehru Vihar",
    "TDS refund",
    "PAN card services",
    "Aadhaar PVC print",
    "PDF editing Nehru Vihar",
    "photo printing Nehru Vihar",
    "website design Delhi",
    "WhatsApp automation Delhi",
    "SEO services Nehru Vihar",
    "MAX POINT Cyber Cafe",
  ],

  authors: [
    {
      name: "MAX POINT Cyber Cafe",
    },
  ],

  creator: "MAX POINT Cyber Cafe",
  publisher: "MAX POINT Cyber Cafe",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
    openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MAX POINT Cyber Cafe",
    title: "MAX POINT Cyber Cafe | Digital Services in Nehru Vihar",
    description:
      "Your trusted one-stop cyber cafe in Nehru Vihar, Delhi for government forms, tax filing, printing, digital services, design and automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAX POINT Cyber Cafe - Digital Services in Nehru Vihar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MAX POINT Cyber Cafe | Nehru Vihar",
    description:
      "Government forms, ITR, GST, printing, digital services, design and WhatsApp automation in Nehru Vihar, Delhi.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },

  category: "business",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
