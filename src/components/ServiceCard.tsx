"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/siteData";

export default function Service() {
  const [active, setActive] = useState(0);

  return (

    // Service Component
    <section className="bg-[#013D69] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          OUR SERVICES
        </h2>

        <p className="mt-4 text-lg text-white">
          Comprehensive marine and industrial solutions tailored to your operational needs.
        </p>

        {/* <div className="mt-12 flex h-[650px] gap-2 overflow-hidden rounded-3xl">
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
        </div> */}
        
<div className="mt-8 sm:mt-12">

  {/* MOBILE DESIGN */}
  <div className="flex flex-col gap-5 md:hidden">
    {services.map((service, index) => (
      <div
        key={service.slug}
        className="group relative h-[380px] overflow-hidden rounded-2xl"
      >
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Service number */}
        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-sm font-semibold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <div className="mb-3 h-1 w-10 rounded-full bg-orange-500" />

          <h3 className="text-2xl font-bold tracking-tight">
            {service.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-200">
            {service.shortDescription}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
              Our Services
            </span>

            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#013D69] transition hover:bg-orange-500 hover:text-white"
            >
              Explore
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* DESKTOP DESIGN */}
  <div className="hidden h-[550px] gap-2 overflow-hidden rounded-3xl md:flex lg:h-[650px]">
    {services.map((service, index) => {
      const isActive = active === index;

      return (
        <div
          key={service.slug}
          onMouseEnter={() => setActive(index)}
          className={`
            group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl
            transition-all duration-700 ease-out
            ${isActive ? "flex-[4]" : "flex-1"}
          `}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-5 text-white lg:p-8">
            <h3 className="text-2xl font-bold lg:text-3xl">
              {service.title}
            </h3>

            <div
              className={`
                overflow-hidden transition-all duration-500
                ${
                  isActive
                    ? "mt-4 max-h-96 opacity-100 lg:mt-6"
                    : "mt-0 max-h-0 opacity-0"
                }
              `}
            >
              <p className="mb-6 text-sm text-slate-200 lg:text-base">
                {service.shortDescription}
              </p>

              <div className="mb-6 grid grid-cols-1 gap-2 text-sm lg:grid-cols-2 lg:gap-4">
                {service.highlights.slice(0, 4).map((item) => (
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


        
        
      </div>
    </section>
  );
}