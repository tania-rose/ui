import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { Inside } from "@/components/sections/Inside";
import { Curriculum } from "@/components/sections/Curriculum";
import { Anthony } from "@/components/sections/Anthony";
import { Testimony } from "@/components/sections/Testimony";
import { Journey } from "@/components/sections/Journey";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
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
      <Curriculum />
      <Anthony />
      <Testimony />
      <Journey />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
