import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import AreasServed from "@/components/sections/AreasServed";
import WhyChoose from "@/components/sections/WhyChoose";
import QuoteForm from "@/components/sections/QuoteForm";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <AreasServed />
      <WhyChoose />
      <QuoteForm />
      <CTA />
    </main>
  );
}