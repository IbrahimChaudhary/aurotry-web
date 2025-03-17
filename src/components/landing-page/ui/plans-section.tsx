import React from "react";
import PlanCard from "./plan-card";
import { Button } from "@/components/landing-page/ui/button";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Basic",
    description: "Perfect for new or small e-commerce brands looking to enhance customer experience.",
    features: ["AR try-on for up to 50 products", "Standard resolution AR previews", "Basic analytics dashboard (views & interactions)", "Email support"],
    buttonText: "Start with Basic",
  },
  {
    title: "Premium",
    description: "Perfect for new or small e-commerce brands looking to enhance customer experience.",
    features: ["AR try-on for unlimited products", "High-resolution, realistic fitting with body-tracking AI", "Multi-platform integration (Shopify, WooCommerce, Webflow, Magento, custom APIs)", "Priority email & chat support"],
    buttonText: "Upgrade to Premium",
    bgColor: "linear-gradient(to bottom, rgba(117, 139, 253, 0.2) 0%, rgba(174, 184, 254, 0.2) 100%)",
  },
  {
    title: "Enterprise",
    description: "Perfect for new or small e-commerce brands looking to enhance customer experience.",
    features: ["Unlimited AR try-ons & multi-category support (shirts, pants, accessories)", "AI-driven hyper-personalized fit recommendations", "Full API access for deep integration", "Dedicated account manager & 24/7 priority support"],
    buttonText: "Scale with Enterprise",
  },
];

const PlansSection: React.FC = () => {
    return (
      <section className="w-full mx-auto px-4 sm:px-8 flex flex-col items-center gap-5">
        <div className="w-full max-w-[713px] text-center">
          <h3 className="text-[32px] sm:text-[47px] font-semibold leading-[120%] text-black">
            Ready to Transform Your E-Commerce Experience?
          </h3>
          <h5 className="text-[20px] sm:text-[27px] mt-5 font-semibold leading-[120%] text-[#737477]">
            Choose an Aurotry plan that fits your budget and business goals.
          </h5>
        </div>
        <Button variant="default" className="w-full max-w-[286px] h-[48px] flex items-center gap-2 rounded-full">
          Start Your Free Trial Today
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
            <ArrowRight className="text-black w-5 h-5" />
          </span>
        </Button>
        <div className="w-full flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </section>
    );
  };
  
  export default PlansSection;
