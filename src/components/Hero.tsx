
import Link from "next/link";

export default function Hero() {
    return(
        <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/media/vessel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-wide text-white mb-3">
            Marine & Industrial Supply | Saudi Arabia
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
            Reliable Marine Services Across Saudi Arabia&apos;s Eastern Province
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200 leading-7">
            Astra Titan Arabia supplies ship spares, marine equipment, safety
            gear, provisions, and inspection services &mdash; sourced fast and
            delivered reliably to vessels at Dammam, Jubail, Ras Tanura, and
            beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#013D69] px-6 py-3 text-sm font-semibold hover:bg-[#013D69]/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    )
}