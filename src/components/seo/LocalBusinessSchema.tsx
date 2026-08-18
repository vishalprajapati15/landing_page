export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://maxpointdev-mu.vercel.app/",
    "@type": "LocalBusiness",
    "@id": "https://maxpointdev-mu.vercel.app/#services",

    name: "MAX POINT Cyber Cafe",

    description:
      "MAX POINT Cyber Cafe provides government form filling, digital services, tax filing, printing, PDF editing, website design, WhatsApp automation and other online services in Nehru Vihar, Delhi.",

    url: "https://maxpointdev-mu.vercel.app/",

    telephone: "+91 9354059422",

    image: "https://maxpointdev-mu.vercel.app/",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Nehru Vihar",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "YOUR_PINCODE",
      addressCountry: "IN",
    },

    areaServed: [
      "Nehru Vihar",
      "Delhi",
    ],

    priceRange: "₹₹",

    serviceType: [
      "Cyber Cafe Services",
      "Government Form Filling",
      "Exam Form Filling",
      "ITR Filing",
      "GST Registration",
      "TDS Refund",
      "AEPS",
      "Money Transfer",
      "Printing Services",
      "PDF Editing",
      "Website Design",
      "WhatsApp Automation",
      "SEO Services",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}