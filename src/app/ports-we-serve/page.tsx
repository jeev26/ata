import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ports, SITE } from "@/lib/siteData";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Ports We Serve",
  description:
    "Astra Titan Arabia delivers marine supplies and services to major ports along Saudi Arabia's Eastern coast, including Dammam, Jubail, Ras Tanura, and Khalifa Bin Salman Port.",
  alternates: { canonical: "/ports-we-serve" },
};

export default function PortsPage() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-2">
            Coverage
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">Ports We Serve</h1>
          <p className="mt-4 max-w-xl text-slate-300 leading-7">
            Located along Saudi Arabia&apos;s East coast, we provide fast,
            reliable marine supply and delivery to vessels at the region&apos;s
            major ports.
          </p>
        </div>
      </section>

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

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Delivery to Another Port?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-7">
            Get in touch &mdash; our procurement team coordinates delivery
            across the Eastern Province and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
