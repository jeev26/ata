import {ports} from "@/lib/siteData";
import Image from "next/image";

export default function Port() {
  return(
    <section className=" py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold tracking-tight text-[#013d69] sm:text-5xl">
        PORTS WE SERVE
      </h2>
      <p className="mt-4 text-lg text-[#013d69]">
        Comprehensive marine and industrial solutions tailored to your operational needs.
      </p>
    </div>

    <div className="mt-12 overflow-x-auto hide-scrollbar">
  <div className="flex gap-8 snap-x snap-mandatory pb-4">
    {ports.map((port) => (
      <article
        key={port.slug}
        className="group relative min-w-[340px] max-w-[340px] overflow-hidden rounded-2xl bg-white snap-start"
      >
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src={port.image}
            alt={port.name}
            fill
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-transform duration-500 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:-translate-y-4">
              {port.name}
            </h3>

            <p className="mt-3 text-sm text-slate-200 opacity-0 transition-transform duration-500 group-hover:opacity-100">
              {port.description}
            </p>

            <button className="mt-4 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#013D69] opacity-0 transition-transform duration-500 group-hover:opacity-100">
              Learn More
            </button>
          </div>
        </div>
      </article>
    ))}
  </div>
</div>
  </div>
</section>
  )
}