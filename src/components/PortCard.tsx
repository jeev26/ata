"use client";
import { useEffect, useRef } from "react";
import { ports } from "@/lib/siteData";
import Image from "next/image";


export default function Port() {

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatic scrolling only on mobile and tablet
      if (window.innerWidth >= 1024) return;

      const container = carouselRef.current;
      if (!container) return;

      const firstCard = container.querySelector("article");
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 16; // gap-4

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: cardWidth + gap,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (

    // Ports component
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

        <div
          ref={carouselRef}
          className="mt-8 sm:mt-12 overflow-x-auto hide-scrollbar scroll-smooth"
        >
          <div className="flex snap-x snap-mandatory gap-4 pb-5 sm:gap-6">
            {ports.map((port, index) => (
              <article
                key={port.slug}
                className="group relative h-[420px] min-w-[85vw] snap-start overflow-hidden rounded-2xl sm:h-[460px] sm:min-w-[340px] sm:max-w-[340px] lg:h-[480px]"
              >
                <Image
                  src={port.image}
                  alt={port.name}
                  fill
                  sizes="(max-width: 640px) 85vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-sm font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-orange-500" />

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {port.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-200">
                    {port.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                      Port Network
                    </span>
                    {/* <span className="text-xl text-white">→</span> */}
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