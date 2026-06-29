import type { Metadata } from "next";
import Link from "next/link";
import { clients, SITE } from "@/lib/siteData";
import ClientsPageShowcase from "./component/clientshowcase";


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
      <ClientsPageShowcase />

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
              className="inline-flex items-center rounded-md bg-[#013D69] px-6 py-3 text-sm font-semibold text-white hover:bg-[#013d69]/90 transition-colors"
            >
              Request a Quote
            </Link>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}