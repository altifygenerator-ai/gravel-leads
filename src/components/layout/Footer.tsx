import Link from "next/link";
import { siteData } from "@/data/site";
import { areas } from "@/data/areas";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-white font-bold text-lg">{siteData.businessName}</p>

          <p className="mt-3 text-sm leading-relaxed">
            Fast local gravel delivery for driveways, pads, drainage, parking
            areas, and property work around {siteData.serviceArea}.
          </p>
        </div>

        <div>
          <p className="text-white font-bold">Service Areas</p>

          <div className="mt-4 grid gap-2 text-sm">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="hover:text-orange-400 transition"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-bold">Get a Quote</p>

          <div className="mt-4 grid gap-2 text-sm">
            <a href={`tel:${siteData.phone}`} className="hover:text-orange-400">
              {siteData.phone}
            </a>

            <a
              href={`mailto:${siteData.email}`}
              className="hover:text-orange-400"
            >
              {siteData.email}
            </a>

            <a href="/#quote" className="hover:text-orange-400">
              Send quote request
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs">
        <p>
          © {new Date().getFullYear()} {siteData.businessName}. Local gravel
          delivery lead service.
        </p>
      </div>
    </footer>
  );
}