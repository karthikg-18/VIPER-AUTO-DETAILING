import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIPER AUTO DETAILING | Premium Car Detailing Bangalore",
  description: "Premium Ceramic Coating, Paint Protection Film (PPF), Car Detailing and Bike Detailing Services in Bangalore.",
  keywords: [
    "Car Detailing Bangalore",
    "Ceramic Coating Bangalore",
    "Paint Protection Film Bangalore",
    "PPF Bangalore",
    "Bike Detailing Bangalore",
    "Auto Detailing Bangalore",
    "Premium Car Wash Bangalore",
    "Viper Auto Detailing"
  ],
  openGraph: {
    title: "VIPER AUTO DETAILING | Premium Car Detailing Bangalore",
    description: "Premium Ceramic Coating, Paint Protection Film (PPF), Car Detailing and Bike Detailing Services in Bangalore.",
    url: "https://viperdetailing.in",
    siteName: "VIPER AUTO DETAILING",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://viperdetailing.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "VIPER AUTO DETAILING",
    "image": "https://viperdetailing.in/images/viper-logo.jpg",
    "@id": "https://viperdetailing.in",
    "url": "https://viperdetailing.in",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9715987,
      "longitude": 77.5945627
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:30"
    },
    "sameAs": [
      "https://instagram.com/viperdetailing_bangalore"
    ]
  };

  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        {/* Inject Local Business Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-white">
        {children}
      </body>
    </html>
  );
}
