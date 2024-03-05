import Description from "@/components/Description";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <div className="lg:h-[200vh]" />
      <Description />
      <Footer />
    </main>
  );
}
