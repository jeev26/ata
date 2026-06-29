import Link from "next/link";

type HeaderActionsProps = {
  whatsapp: string;
};

export default function GroupButton({
  whatsapp,
}: HeaderActionsProps) {
  return (

    // Group Button Section
    <div className="flex items-center gap-3">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
      >
        WhatsApp Us
      </a>

      <Link
        href="/contact"
        className="inline-flex items-center rounded-md bg-[#013D69] px-4 py-2 text-sm font-semibold text-white hover:bg-[#013D69]/90 transition-colors"
      >
        Request a Quote
      </Link>
    </div>
    
  );
}