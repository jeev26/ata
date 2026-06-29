import { ReactNode } from "react";

interface HeroBannerProps {
  backgroundImage: string;
  title: ReactNode;
  description?: string;
  overlayOpacity?: number;
  height?: string;
}

export default function HeroBanner({
  backgroundImage,
  title,
  description,
  overlayOpacity = 0.45,
  height = "py-20 sm:py-24",
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(1,61,105,${overlayOpacity})`,
        }}
      />

      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Content */}
      <div
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${height}`}
      >
        <div className="max-w-4xl">

          <h1>{title}</h1>

          {description && (
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              {description}
            </p>
          )}

        </div>
      </div>

    </section>
  );
}