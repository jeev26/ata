import SectionHeading from "./SectionHeading";
import { clients } from "@/lib/siteData";
import Image from "next/image";


export default function Client() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <SectionHeading
        title="Trusted by Industry Leaders"
        description="A glimpse at some of the organizations that trust Astra Titan Arabia."
      />
      {/* Statistics */}
      <div className="mb-16 mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-[#013D69]">127+</p>
          <p className="mt-2 text-sm text-slate-600">Vessels Served</p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-[#013D69]">5+</p>
          <p className="mt-2 text-sm text-slate-600">Ports Covered</p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-[#013D69]">24/7</p>
          <p className="mt-2 text-sm text-slate-600">Support</p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-[#013D69]">1349+</p>
          <p className="mt-2 text-sm text-slate-600">Orders Delivered</p>
        </div>
      </div>

      {/* Client Logos */}
      <div className="relative overflow-hidden py-8">
        <div className="marquee flex w-max gap-6">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:border-[#013D69] hover:shadow-xl"
            >
              <div className="relative h-12 w-32 grayscale transition-transform duration-300 group-hover:grayscale-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}