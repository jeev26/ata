import Link from "next/link"
import { SITE } from "@/lib/siteData"

export default function CTA() {
    return (
        <section className="bg-[#013D69] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Marine Supplies or Inspection Services?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-7">
            Get in touch with our team for a fast, reliable quote. We respond
            promptly and coordinate delivery to your vessel or port location.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#013D69] hover:bg-white/90 transition-colors"
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
    )
}