import React from "react";
import FeatureCard from "./features-card";
import { ShoppingCart, ScanEye, Rocket, Link2 } from "lucide-react";
import FeaturesImage1  from "./icons/features-image-1";
import FeaturesImage2  from "./icons/features-image-2";
import FeaturesImage3  from "./icons/features-image-3";
import FeaturesImage4  from "./icons/features-image-4";



const features = [
  {
    title: "Generate Link",
    description: "Integrate our AR solution into your e-commerce platform with a single link.",
    gradient: "bg-gradient-to-b from-[#AEB8FE]/30 to-[#F99F83]/30",
    Icon: Link2,
    SvgComponent: FeaturesImage1,
  },
  {
    title: "Try On Virtually",
    description: "Customers use their camera to see themselves wearing your clothes in real-time.",
    gradient: "bg-gradient-to-b from-[#FBC8B8]/30 to-[#AEB8FE]/30", 
    Icon: ScanEye,
    SvgComponent: FeaturesImage2,
  },
  {
    title: "Buy with Confidence",
    description: "Watch conversions soar as shoppers feel sure about their purchase.",
    gradient: "bg-gradient-to-b from-[#FBC8B8]/40 to-[#AEB8FE]/30",
    Icon: Rocket,
    SvgComponent: FeaturesImage3,
  },
  {
    title: "Reduce Returns",
    description: "Cut return rates by 50% and boost customer loyalty with accurate, real-time previews.",
    gradient: "bg-gradient-to-b from-[#C287E8]/30 to-[#AEB8FE]/30",
    Icon: ShoppingCart,
    SvgComponent: FeaturesImage4,
  },
];

const FeaturesSection: React.FC = () => {
    return (
      <section className="max-w-[1440px] min-h-screen flex flex-col items-center gap-12 mx-auto p-4">

        <div className="max-w-[967px] text-center px-4">
          <h3 className="text-[40px] sm:text-[32px] font-semibold leading-[120%] text-black">
            See It. Love It. Buy It.
          </h3>
          <h5 className="text-[24px] sm:text-[18px] font-medium leading-[140%] text-[#737477]">
            Customers struggle to visualize how clothes will look or fit, leading to hesitation, abandoned carts, and costly returns. It’s time to bridge the gap between online and in-store shopping.
          </h5>
        </div>
  
        <div className="max-w-[1340px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full max-w-[650px]">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
