import type { Metadata } from "next";
import { SITE } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/UI/HeroBanner/HeroBanner";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Astra Titan Arabia for marine and industrial supply, equipment sourcing, and vessel inspection services in Saudi Arabia. Reach us via WhatsApp, email, or our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (


    <>
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/images/hero/contact.jpg"
        
        title={
          <>
            <span className="block text-7xl font-black sm:text-1xl lg:text-9xl">
              
            </span>

            <span className="block text-5xl uppercase">
              CONNECT US TO REACH - SUPPLY BEYOND PORTS. LIMITS.
            </span>
          </>
        }
      />



      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#013D69] mb-2">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#013D69] mb-4">Contact Us</h1>
            <p className="text-slate-600 leading-7 mb-8">
              Reach out to Astra Titan Arabia for reliable support on all your
              marine and industrial supply needs. We respond promptly to all
              inquiries.
            </p>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#013D69] mb-6">Our Base</h2>
            <p className="text-slate-600 leading-7 mb-8">
              Located along Saudi Arabia&apos;s East coast, we serve shipping
              and marine operations with dedication.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  Address
                </h3>
                <p className="text-slate-900">{SITE.address}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  Hours
                </h3>
                <p className="text-slate-900">{SITE.hours}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  Contact (WhatsApp & WeChat)
                </h3>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  {SITE.phone}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  Email
                </h3>
                <a href={`mailto:${SITE.email}`} className="text-blue-700 font-medium hover:underline">
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 h-64">
              <iframe
                title="Astra Titan Arabia location map"
                src="https://www.google.com/maps?q=King+Abdulaziz+St,+Al-Mousa+Complex,+Saudi+Arabia&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
