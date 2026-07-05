import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Vehicles from "@/components/Vehicles";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Vehicles />
      <HowItWorks />
      <Stats />
      <DownloadCta />
      <Footer />
    </main>
  );
}
