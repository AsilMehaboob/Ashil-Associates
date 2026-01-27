export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Ashil & Associates",
    image: "https://www.ashilandassociates.com/logo.svg",
    "@id": "https://www.ashilandassociates.com",
    url: "https://www.ashilandassociates.com",
    telephone: "+91-484-406-2030",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Vazhakuthathil Road, Kaloor - Kadavanthara Rd, opposite axis bank",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.988326255578734",
      longitude: "76.29598370145108",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "17:30",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/ashil-and-associates-chartered-accountants",
    ],
    priceRange: "$$",
    description:
      "Ashil & Associates delivers world-class accounting and advisory services with a focus on precision and professional integrity across India and the GCC.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
