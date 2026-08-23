import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import InfoSection from "@/components/InfoSection";
import Percursos from "@/components/Percursos";
import PremiacaoSection from "@/components/PremiacaoSection";
import KitSection from "@/components/KitSection";
import LocalSection from "@/components/LocalSection";
import InscricaoSection from "@/components/InscricaoSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const stats = { "4km": 0 };
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <InfoSection />
        <Percursos stats={stats} />
        <PremiacaoSection />
        <KitSection />
        <LocalSection />
        <InscricaoSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
