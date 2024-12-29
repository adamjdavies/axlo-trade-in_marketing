import { FAQ } from "@/components/sections/faqs";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { Pricing } from "@/components/sections/pricing";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import Hero from "@/components/sections/hp-hero";
import BenefitsSection from "@/components/sections/benefits";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <FeaturesGrid />
        <BenefitsSection />
        <Pricing />
        <FAQ />
        <WaitlistForm />
      </main>
    </div>
  );
}
