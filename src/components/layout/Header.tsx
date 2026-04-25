import { siteData } from "@/data/site";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full text-white">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="font-bold text-lg tracking-tight">
          {siteData.businessName}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/#services" className="hover:text-orange-400 transition">
            Services
          </a>

          <a href="/#areas" className="hover:text-orange-400 transition">
            Areas
          </a>

          <a href="/#quote" className="hover:text-orange-400 transition">
            Get Quote
          </a>

          <a
            href={`tel:${siteData.phone}`}
            className="bg-orange-500 text-black px-5 py-3 rounded-md font-bold hover:bg-orange-400 transition"
          >
            Call {siteData.phone}
          </a>
        </nav>

        <a
          href={`tel:${siteData.phone}`}
          className="md:hidden bg-orange-500 text-black px-4 py-2 rounded-md font-bold text-sm"
        >
          Call
        </a>
      </div>
    </header>
  );
}