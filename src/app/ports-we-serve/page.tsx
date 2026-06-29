import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ports, SITE } from "@/lib/siteData";
import SectionHeading from "@/components/SectionHeading";
import HeroBanner from "@/components/UI/HeroBanner/HeroBanner";
import CallToAction from "@/components/UI/CTA/CallToActionProps";

export const metadata: Metadata = {
  title: "Ports We Serve",
  description:
    "Astra Titan Arabia delivers marine supplies and services to major ports along Saudi Arabia's Eastern coast, including Dammam, Jubail, Ras Tanura, and Khalifa Bin Salman Port.",
  alternates: { canonical: "/ports-we-serve" },
};

export default function PortsPage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/hero/port1.jpg"
        description="Located along Saudi Arabia&apos;s East coast, we provide fast,
            reliable marine supply and delivery to vessels at the region&apos;s
            major ports."
        title={
          <>
            <span className="block text-7xl font-black sm:text-1xl lg:text-9xl">
              WE SERVE
            </span>

            <span className="block text-5xl uppercase">
              COVERAGE ACROSS THE EASTERN PROVINCE
            </span>
          </>
        }
      />

      {/* Ports Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          title="Key Ports Along the Eastern Province"
          description="From Ras Tanura to Khalifa Bin Salman Port, our procurement and delivery network covers the region's most important shipping hubs."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {ports.map((port) => (
            <div key={port.name} className="rounded-xl overflow-hidden border border-slate-200">
              <div className="relative h-56 w-full bg-slate-200">
                <Image
                  src={port.image}
                  alt={port.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">{port.name}</h2>
                <p className="text-slate-600 leading-7">{port.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Need Delivery to Another Port?"
        description="Get in touch &mdash; our procurement team coordinates delivery across the Eastern Province and beyond."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Chat on WhatsApp"
        secondaryButtonHref={SITE.whatsapp}
      />
    </>
  );
}
