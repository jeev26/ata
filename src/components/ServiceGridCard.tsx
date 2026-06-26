import Link from "next/link";
import Image from "next/image";

export default function ServiceGridCard({
  service,
}: {
  service: any;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {service.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {service.shortDescription}
        </p>

        <div className="mt-4 text-[#013D69] font-semibold">
          Learn More →
        </div>
      </div>
    </Link>
  );
}