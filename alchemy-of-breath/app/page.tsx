import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { Inside } from "@/components/sections/Inside";
import { Curriculum } from "@/components/sections/Curriculum";
import { PullQuote } from "@/components/sections/PullQuote";
import { Anthony } from "@/components/sections/Anthony";
import { WhoIsAoB } from "@/components/sections/WhoIsAoB";
import { Testimony } from "@/components/sections/Testimony";
import { Journey } from "@/components/sections/Journey";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <WhyNow />
      <Inside />
      <PullQuote
        small="Words to breathe with"
        text="Anxiety is enthusiasm without the breath."
        author="Fritz Perls"
      />
      <Curriculum />
      <Anthony />
      <WhoIsAoB />
      <Testimony />
      <Journey />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
