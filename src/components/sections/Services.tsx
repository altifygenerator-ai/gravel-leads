import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            What We Handle
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Gravel and rock delivery for real situations.
          </h2>

          <p className="mt-5 text-neutral-400">
            Driveways, pads, drainage, rough entrances, parking areas — the
            stuff people actually need handled.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition"
            >
              <div className="h-48 overflow-hidden bg-neutral-800">
                <img
                  src={service.image}
                  alt={`${service.title} in Hot Springs Arkansas`}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-neutral-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400">
            Not sure what you need? That’s normal — just send what you’re trying
            to fix.
          </p>
        </div>
      </div>
    </section>
  );
}