import { notFound } from "next/navigation";
import { areas } from "@/data/areas";
import Services from "@/components/sections/Services";
import QuoteForm from "@/components/sections/QuoteForm";
import CTA from "@/components/sections/CTA";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const area = areas.find((item) => item.slug === slug);

  if (!area) {
    return {
      title: "Service Area",
    };
  }

  return {
    title: `${area.title} | Fast Local Gravel Quotes`,
    description: `Need gravel delivered in ${area.name}? Get a quick quote for driveway gravel, rock delivery, drainage rock, pads, and parking areas.`,
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = areas.find((item) => item.slug === slug);

  if (!area) notFound();

  return (
    <main>
      <section className="bg-neutral-950 text-white pt-36 pb-24">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            Local Gravel Delivery
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-4xl">
            {area.title}
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-300 text-lg">
            Need gravel delivered around {area.name}? Send your location and
            what you’re trying to fix. We’ll help figure out the material,
            delivery, and timing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8702604880"
              className="bg-orange-500 text-black px-6 py-4 rounded-md font-bold text-center"
            >
              Call Now — Fastest Way
            </a>

            <a
              href="#quote"
              className="border border-white/30 px-6 py-4 rounded-md font-bold text-center hover:bg-white hover:text-black transition"
            >
              Get a Quick Quote
            </a>
          </div>
        </div>
      </section>

      <Services />
      <QuoteForm />
      <CTA />
    </main>
  );
}