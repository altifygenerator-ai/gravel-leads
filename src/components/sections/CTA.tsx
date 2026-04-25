import { siteData } from "@/data/site";

export default function CTA() {
  return (
    <section className="bg-orange-500 text-black py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">

        <h2 className="text-3xl md:text-5xl font-bold">
          Need gravel delivered?
        </h2>

        <p className="mt-5 text-lg">
          Call now if you need it handled quick, or send a quote request and we’ll get back to you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href={`tel:${siteData.phone}`}
            className="bg-black text-white px-6 py-4 rounded-md font-bold"
          >
            Call {siteData.phone}
          </a>

          <a
            href="#quote"
            className="bg-white px-6 py-4 rounded-md font-bold"
          >
            Get a Quick Quote
          </a>

        </div>

        <p className="mt-4 text-sm">
          Calling is usually the fastest way to get scheduled.
        </p>

      </div>
    </section>
  );
}