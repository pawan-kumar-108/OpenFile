import { Navbar } from "@/components/Navbar";
import { BackgroundGradients } from "@/components/BackgroundGradients";
import { HeroSection } from "@/components/HeroSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundGradients />
      <main className="min-h-screen relative z-10">
        <Navbar />
        <HeroSection />
        <ChallengeSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ImpactSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}