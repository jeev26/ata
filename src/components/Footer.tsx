import Link from "next/link";
import { navLinks, services, SITE } from "@/lib/siteData";
import SocialLinks from "@/components/UI/Button/SocialLink";

export default function Footer() {
  return (

    // Footer Section
    <footer className="bg-[#013D69] text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Astra Titan Arabia</h3>
          <p className="text-sm leading-6 text-slate-400">{SITE.description}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
            <li>
              <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>
              <SocialLinks
                linkedin={SITE.linkedin}
                facebook={SITE.facebook}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Astra Titan Arabia Marine Services. All rights reserved.
      </div>
    </footer>

    
  );
}
