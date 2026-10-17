
interface HeroSkeletonProps {
  height?: string;
}

export default function HeroSkeleton({
  height = "py-20 sm:py-24",
}: HeroSkeletonProps) {
  return (
    <section
      aria-label="Loading page content"
      className="relative isolate animate-pulse overflow-hidden bg-[#013D69] text-white"
    >
      {/* Soft background effects */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Placeholder content */}
      <div
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${height}`}
      >
        <div className="max-w-4xl space-y-6">
          {/* Main title */}
          <div className="h-16 w-3/4 rounded-md bg-white/15 sm:h-24 lg:h-28" />

          {/* Subtitle */}
          <div className="h-10 w-full max-w-2xl rounded-md bg-white/10" />

          {/* Description */}
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full max-w-2xl rounded bg-white/10" />
            <div className="h-4 w-5/6 max-w-xl rounded bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
