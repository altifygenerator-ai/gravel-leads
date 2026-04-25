export default function WhyChoose() {
  return (
    <section className="bg-neutral-100 text-neutral-950 py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[420px] rounded-xl overflow-hidden">
          <img
            src="/images/gravel/driveway.webp"
            alt="Fresh gravel driveway in Arkansas"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-orange-600 font-bold">
            Why People Go Through Us
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            You don’t have to chase people down to get gravel.
          </h2>

          <p className="mt-6 text-neutral-600 text-lg">
            Most folks just want a straight answer, a fair price, and someone to
            actually show up. That’s what this is built for.
          </p>

          <div className="mt-8 grid gap-5">
            <div>
              <h3 className="text-xl font-bold">We keep it simple</h3>
              <p className="mt-2 text-neutral-600">
                Tell us what you’re trying to fix and where it’s at. We’ll help
                you figure out the rest.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Fast response matters</h3>
              <p className="mt-2 text-neutral-600">
                Gravel jobs usually aren’t something you want to wait around on.
                Calls and quick quotes are prioritized.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">No guesswork needed</h3>
              <p className="mt-2 text-neutral-600">
                Don’t know how much gravel you need? That’s normal. We help you
                figure it out without overcomplicating it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}