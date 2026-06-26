import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, SITE } from "@/lib/siteData";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// export function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Metadata {
//   const service = services.find((s) => s.slug === params.slug);
//   if (!service) return {};

//   return {
//     title: service.title,
//     description: service.shortDescription,
//     keywords: service.keywords,
//     alternates: { canonical: `/services/${service.slug}` },
//     openGraph: {
//       title: `${service.title} | ${SITE.shortName}`,
//       description: service.shortDescription,
//       url: `${SITE.domain}/services/${service.slug}`,
//     },
//   };
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);
  console.log(service.slug, otherServices.map((s) => s.slug));
  console.log('service')
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[550px] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#013D69]">
                Overview
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Delivering Excellence Across Marine Operations
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-[#013D69]">24/7</h3>
              <p className="mt-2 text-slate-600">Operational Support</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#013D69]">4+</h3>
              <p className="mt-2 text-slate-600">Saudi Ports Covered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#013D69]">100%</h3>
              <p className="mt-2 text-slate-600">Quality Focused</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#013D69]">Fast</h3>
              <p className="mt-2 text-slate-600">Procurement & Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#013D69]">
              Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              What We Provide
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-4">
                  <div className="mt-2 h-3 w-3 rounded-full bg-[#013D69]" />
                  <p className="text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#013D69] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Support Your Operations
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Speak with our team for procurement, supply, and marine support services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#013D69]"
            >
              Request a Quote
            </Link>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#013D69]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Explore Other Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#013D69] hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-[#013D69]">
                  {other.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {other.shortDescription}
                </p>

                <div className="mt-6 font-semibold text-[#013D69]">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
