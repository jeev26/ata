import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | Marine & Industrial Supply in Saudi Arabia`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "marine supply Saudi Arabia",
    "ship chandler Dammam",
    "marine equipment supplier Saudi Arabia",
    "ship spares Saudi Arabia",
    "vessel inspection services",
    "Astra Titan Arabia",
  ],
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} | Marine & Industrial Supply in Saudi Arabia`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Marine & Industrial Supply in Saudi Arabia`,
    description: SITE.description,
  },
  alternates: {
    canonical: SITE.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.domain,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: SITE.founded,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Abdulaziz St, Al-Mousa Complex",
      addressCountry: "SA",
      addressRegion: "Eastern Province",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    openingHours: "Sa-Th 07:00-18:00",
    sameAs: [],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
