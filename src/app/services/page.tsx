import type { Metadata } from "next";
import { services } from "@/lib/siteData";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/PortCard";
import ServiceGridCard from "@/components/ServiceGridCard";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Astra Titan Arabia's marine and industrial supply services: safety & firefighting equipment, marine equipment, ship provisions, medical supplies, chemicals & lubricants, and vessel inspection services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        eyebrow="What We Offer"
        title="Marine & Industrial Supply Services"
        description="From port to vessel, Astra Titan Arabia provides end-to-end logistics support across machinery spares, oils & lubricants, equipment, provisions, and inspection services."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceGridCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
