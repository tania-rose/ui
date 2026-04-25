import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Practices } from "@/components/sections/Practices";
import { Journey } from "@/components/sections/Journey";
import { Testimony } from "@/components/sections/Testimony";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Philosophy />
      <Practices />
      <Journey />
      <Testimony />
      <Contact />
      <Footer />
    </main>
  );
}
