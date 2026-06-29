import type { Metadata } from "next";
import Link from "next/link";
import { clients, SITE } from "@/lib/siteData";
import ClientsPageShowcase from "./component/clientshowcase";
import HeroBanner from "@/components/UI/HeroBanner/HeroBanner";
import CallToAction from "@/components/UI/CTA/CallToActionProps";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Astra Titan Arabia is trusted by leading marine and offshore companies operating in Saudi Arabia, including Rawabi Vallianz Offshore Services, GAC, and Seacor Marine.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/hero/client3.jpg"
        description="A glimpse at some of the customers who&apos;ve trusted Astra Titan
            Arabia for marine and industrial supply across Saudi Arabia."
        title={
          <>
            <span className="block text-7xl font-black sm:text-8xl lg:text-9xl">
              NETWORK
            </span>

            <span className="block text-5xl uppercase">
              Trusted by Leading Marine Companies
            </span>
          </>
        }
      />

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
      <CallToAction
        title="Become Our Next Trusted Partner"
        description="Looking for a dependable marine and industrial supply partner in Saudi Arabia? Let&apos;s talk about your operational needs."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Chat on WhatsApp"
        secondaryButtonHref={SITE.whatsapp}
      />
    </>
  );
}