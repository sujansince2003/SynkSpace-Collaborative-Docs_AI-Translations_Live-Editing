import Header from "@/components/general/Header";
import Faq from "@/components/landingPage/Faq";
import FeatureHighlights from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import HeroSection from "@/components/landingPage/HeroSection";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Testinomials from "@/components/landingPage/Testinomials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <HowItWorks />
      <Testinomials />
      <Faq />
      <Footer />
    </div>
  );
}
