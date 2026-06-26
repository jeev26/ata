"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/siteData";

export default function Service() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#013D69] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          OUR SERVICES
        </h2>

        <p className="mt-4 text-lg text-white">
          Comprehensive marine and industrial solutions tailored to your operational needs.
        </p>

        <div className="mt-12 flex h-[650px] gap-2 overflow-hidden rounded-3xl">
          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <div
                key={service.slug}
                onMouseEnter={() => setActive(index)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  transition-all duration-700 ease-out cursor-pointer
                  ${isActive ? "flex-[4]" : "flex-1"}
                `}
              >
                <div className="relative h-[680px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                  <h3 className="text-3xl font-bold">
                    {service.title}
                  </h3>

                  <div
                    className={`
                      overflow-hidden transition-all duration-500
                      ${isActive ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="mb-6 text-slate-200">
                      {service.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      {service.highlights
                        .slice(0, 4)
                        .map((item) => (
                          <span key={item}>✓ {item}</span>
                        ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex rounded-full bg-[#013d69] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                      Explore Service
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}