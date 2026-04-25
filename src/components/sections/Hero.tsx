import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gravel/hero.jpg"
          alt="Gravel driveway delivery in Arkansas"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-orange-400">
            {siteData.heroEyebrow}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {siteData.heroTitle}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl">
            {siteData.heroSubtitle}
          </p>

          <p className="mt-4 text-neutral-400">{siteData.heroNote}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteData.phone}`}
              className="bg-orange-500 text-black px-6 py-4 font-bold rounded-md hover:bg-orange-400 transition text-center"
            >
              {siteData.callCTA}
            </a>

            <a
              href="#quote"
              className="border border-white/30 px-6 py-4 font-bold rounded-md hover:bg-white hover:text-black transition text-center"
            >
              {siteData.primaryCTA}
            </a>
          </div>

          <p className="mt-3 text-sm text-neutral-500">
            Calling is usually best if you need it soon.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-300">
            {siteData.trustPoints.map((point: string) => (
              <span key={point}>✔ {point}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}