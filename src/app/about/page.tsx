import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/siteData";
import SectionHeading from "@/components/SectionHeading";
import HeroBanner from "@/components/UI/HeroBanner/HeroBanner";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Astra Titan Arabia, a Saudi Arabia-based marine and industrial supply company founded in 2019, serving the Eastern Province with ship spares, equipment, and inspection services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
    {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/ports/img4.jpg"
        description="Supporting marine, offshore, and industrial operations across Saudi Arabia with dependable supply solutions."
        title={
          <>
            <span className="block text-7xl font-black sm:text-8xl lg:text-9xl">
              BEYOND
            </span>

            <span className="block text-5xl uppercase">
              ports.limits.
            </span>
          </>
        }
      />

      {/* About Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <p className="text-slate-600 leading-7">
              Astra Titan Arabia is a Saudi Arabia-based supplier established
              in {SITE.founded}, specializing in general trading, ship
              supplies, and ship inspection services within the marine sector.
              We act as a comprehensive partner for operational requirements
              &mdash; sourcing, procuring, and delivering efficiently so our
              clients can focus on their core business.
            </p>
            <p className="text-slate-600 leading-7">
              Results are built on reliability, quality, and execution. From
              port to vessel, we provide end-to-end logistics support across
              machinery spares, oils & lubricants, equipment, provisions, and
              inspection services.
            </p>
            <p className="text-slate-600 leading-7">
              We respond promptly, adapt to advancing technologies, and
              provide dependable technical support to ensure that you operate
              with confidence and efficiency &mdash; on every voyage.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/ports/img1.jpg"
              alt="Panoramic view of a Saudi Arabian port with ships docked"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Our Mission"
            title="High-Quality Marine Supplies, Delivered with Integrity"
            description="To deliver high-quality marine supplies and technical services with efficiency and integrity. We are committed to meeting our clients' operational needs through fast procurement, dependable solutions, and continuous adaptation to advancing marine technologies — ensuring smooth, safe, and successful operations at sea and onshore."
          />
        </div>
      </section>
      
      
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div className="rounded-xl border border-slate-200 p-8">
            <p className="text-3xl font-bold text-[#013D69] mb-2">{SITE.founded}</p>
            <p className="text-slate-600">Founded in Saudi Arabia&apos;s Eastern Province</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-8">
            <p className="text-3xl font-bold text-[#013D69] mb-2">6</p>
            <p className="text-slate-600">Core service categories supporting marine operations</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-8">
            <p className="text-3xl font-bold text-[#013D69] mb-2">4+</p>
            <p className="text-slate-600">Major ports serviced along the Eastern coast</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-[#013D69] px-6 py-3 text-sm font-semibold text-white hover:bg-[#013D69]/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
