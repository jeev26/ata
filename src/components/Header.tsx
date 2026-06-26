import Link from "next/link";
import { navLinks, SITE } from "@/lib/siteData";
import logo from "../../public/logo.svg"
import Image from "next/image";
import GroupButton from "./UI/Button/GroupButton";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 p-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
            <Image
              src={logo}
              alt="Astra Titan Arabia Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
           {/* group component   */}
            <GroupButton whatsapp={SITE.whatsapp} />
          </div>

          {/* Mobile nav - simple links, no JS toggle to keep this server component */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-200 bg-white shadow-lg p-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white text-center"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="rounded-md bg-[#013D69] px-3 py-2 text-sm font-semibold text-white text-center"
              >
                Request a Quote
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
