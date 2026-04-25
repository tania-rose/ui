import { Nav } from "@/components/sections/Nav";
import { HeroTA } from "@/components/sections/ta/HeroTA";
import { WhyNowTA } from "@/components/sections/ta/WhyNowTA";
import { InsideTA } from "@/components/sections/ta/InsideTA";
import { CurriculumTA } from "@/components/sections/ta/CurriculumTA";
import { PricingTA } from "@/components/sections/ta/PricingTA";
import { PullQuote } from "@/components/sections/PullQuote";
import { Anthony } from "@/components/sections/Anthony";
import { WhoIsAoB } from "@/components/sections/WhoIsAoB";
import { Testimony } from "@/components/sections/Testimony";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Transforming Anxiety With Breathwork — Alchemy of Breath",
  description:
    "Release the burden of anxiety and create an inner oasis of calm. A 10-day online course of breath practices, video training, and a workbook from Alchemy of Breath.",
};

export default function TransformingAnxietyPage() {
  return (
    <main className="relative">
      <Nav />
      <HeroTA />
      <WhyNowTA />
      <PullQuote
        small="Words to breathe with"
        text="Worry is largely deceit of the mind. More than 91% of the things people worry about never actually happen."
      />
      <InsideTA />
      <PullQuote
        small="A reminder"
        text="Anxiety is enthusiasm without the breath."
        author="Fritz Perls"
      />
      <CurriculumTA />
      <Anthony />
      <WhoIsAoB />
      <Testimony />
      <PullQuote
        small="A reminder"
        text="If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present."
        author="Lao Tzu"
      />
      <PricingTA />
      <Footer />
    </main>
  );
}
