import BenefitsSection from "@/components/ui/benefits-section";
import FAQSection from "@/components/ui/faq-section";
import FeaturesSection from "@/components/ui/features-section";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HeroBlock from "@/components/ui/hero-block";
import PlansSection from "@/components/ui/plans-section";

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
