import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import TrustFeatures from "./componants/TrustFeatures";
import Stats from "./componants/Stats";
import Difference from "./componants/Difference";
import HealthSupport from "./componants/HealthSupport";
import HowItWorks from "./componants/HowItWorks";
import Reviews from "./componants/Reviews";
import ContactCTA from "./componants/ContactCTA";
import Footer from "./componants/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      <main>
        <Hero />
        <TrustFeatures />
        <Stats />
        <Difference />
        <HealthSupport />
        <HowItWorks />
        <Reviews />
        <ContactCTA />
      </main>

      <Footer />

    </div>
  );
}