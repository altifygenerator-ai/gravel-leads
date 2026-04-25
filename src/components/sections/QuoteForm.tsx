"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      jobType: formData.get("jobType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-neutral-950 text-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            Quick Quote
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Tell us what you need, we’ll get you a price.
          </h2>

          <p className="mt-5 text-neutral-400 text-lg">
            Most people just send their location and what they’re trying to do.
            It takes about 30 seconds.
          </p>

          <div className="mt-6 text-neutral-400">
            ✔ No pressure
            <br />
            ✔ No confusing process
            <br />✔ Just a quick response
          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="font-bold">Need it soon?</p>
            <a
              href={`tel:${siteData.phone}`}
              className="mt-3 inline-block text-orange-400 text-xl font-bold"
            >
              Call {siteData.phone}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-neutral-950 rounded-xl p-6 grid gap-4"
        >
          <input
            name="name"
            placeholder="Your name"
            required
            className="border p-4 rounded-md"
          />

          <input
            name="phone"
            placeholder="Phone number"
            required
            className="border p-4 rounded-md"
          />

          <input
            name="location"
            placeholder="Where is the gravel going?"
            required
            className="border p-4 rounded-md"
          />

          <select name="jobType" className="border p-4 rounded-md" required>
            <option value="">What do you need?</option>
            <option>Driveway gravel</option>
            <option>Gravel delivery</option>
            <option>Drainage rock</option>
            <option>Pad or parking area</option>
            <option>Not sure yet</option>
          </select>

          <textarea
            name="message"
            placeholder="Anything else about the job?"
            rows={5}
            className="border p-4 rounded-md"
          />

          <button
            disabled={status === "sending"}
            className="bg-orange-500 text-black p-4 rounded-md font-bold hover:bg-orange-400 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Quote Request"}
          </button>

        {status === "success" && (
  <div className="bg-green-100 text-green-800 p-4 rounded-md text-sm">
    <p className="font-bold">Got it — we’ll reach out soon.</p>
    <p className="mt-1">
      If you need it quicker, go ahead and call. That’s usually the fastest way.
    </p>
  </div>
)}

          {status === "error" && (
            <p className="text-sm font-semibold text-red-700">
              Something went wrong. Please call instead.
            </p>
          )}

          <p className="text-xs text-neutral-500">
            No spam. Just a quick follow-up about your gravel quote.
          </p>
        </form>
      </div>
    </section>
  );
}