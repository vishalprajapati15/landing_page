export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://your-domain.com/#business",

    name: "MAX POINT Cyber Cafe",

    description:
      "MAX POINT Cyber Cafe provides government form filling, digital services, tax filing, printing, PDF editing, website design, WhatsApp automation and other online services in Nehru Vihar, Delhi.",

    url: "https://your-domain.com",

    telephone: "+91-YOUR-PHONE",

    image: "https://your-domain.com/og-image.jpg",

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