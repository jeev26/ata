type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} mb-10`}>
      <h2 className="mb-2 text-4xl font-semibold uppercase text-[#013D69]">{title}</h2>
      {description && <p className="text-slate-600 leading-7">{description}</p>}
    </div>
  );
}
