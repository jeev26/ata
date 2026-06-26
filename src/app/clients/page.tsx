import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clients, SITE } from "@/lib/siteData";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Astra Titan Arabia is trusted by leading marine and offshore companies operating in Saudi Arabia, including Rawabi Vallianz Offshore Services, GAC, and Seacor Marine.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
            Our Network
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Trusted by Leading Marine Companies
          </h1>
          <p className="mt-4 max-w-xl text-slate-300 leading-7">
            A glimpse at some of the customers who&apos;ve trusted Astra Titan
            Arabia for marine and industrial supply across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3 divide-x divide-slate-200 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">{clients.length}+</p>
            <p className="mt-1 text-sm text-text-secondary">Partner Companies</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">{SITE.founded}</p>
            <p className="mt-1 text-sm text-text-secondary">Serving Since</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="mt-1 text-sm text-text-secondary">Sectors Covered</p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          title="Our Partner Network"
          description="Organizations across offshore support, shipping, and marine logistics that rely on us for fast, dependable supply."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              tabIndex={0}
              className="group relative isolate flex h-44 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus:-translate-y-1 focus:border-primary focus:shadow-lg focus:outline-none"
            >
              {/* Logo */}
              <div className="relative z-0 h-16 w-full transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  sizes="200px"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1 rounded-xl bg-primary px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none">
                <p className="text-sm font-semibold leading-tight">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="heading-secondary mb-4">
            Become Our Next Trusted Partner
          </h2>
          <p className="text-body mb-8 max-w-xl mx-auto">
            Looking for a dependable marine and industrial supply partner in
            Saudi Arabia? Let&apos;s talk about your operational needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Request a Quote
            </Link>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}