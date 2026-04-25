import Link from "next/link";
import { areas } from "@/data/areas";

export default function AreasServed() {
  return (
    <section id="areas" className="bg-white text-neutral-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Gravel delivery around Hot Springs and nearby towns.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-area/${area.slug}`}
              className="border rounded-xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="text-xl font-bold">{area.name}</h3>
              <p className="mt-3 text-neutral-600">{area.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}