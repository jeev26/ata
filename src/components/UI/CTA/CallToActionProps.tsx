import Link from "next/link";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CallToAction({
  title,
  description,
  primaryButtonText = "Request a Quote",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Chat on WhatsApp",
  secondaryButtonHref,
}: CallToActionProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-body mx-auto mb-8 max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href={primaryButtonHref}
            className="inline-flex items-center rounded-md bg-[#013D69] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#013D69]/90"
          >
            {primaryButtonText}
          </Link>

          {secondaryButtonHref && (
            <a
              href={secondaryButtonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              {secondaryButtonText}
            </a>
          )}

        </div>

      </div>
    </section>
  );
}