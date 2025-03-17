import BenefitsSection from "@/components/landing-page/ui/benefits-section";
import FAQSection from "@/components/landing-page/ui/faq-section";
import FeaturesSection from "@/components/landing-page/ui/features-section";
import Footer from "@/components/landing-page/ui/Footer";
import Header from "@/components/landing-page/ui/Header";
import HeroBlock from "@/components/landing-page/ui/hero-block";
import PlansSection from "@/components/landing-page/ui/plans-section";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroBlock/>
    <BenefitsSection/>
    <FeaturesSection/>
    <PlansSection/>
    <FAQSection/>
    <Footer/>

   </>

  );
}
