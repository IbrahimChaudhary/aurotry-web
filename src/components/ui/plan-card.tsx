import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  bgColor?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, features, buttonText, bgColor = "white" }) => {
    const backgroundStyle = bgColor.startsWith("linear-gradient") || bgColor.startsWith("radial-gradient")
      ? { backgroundImage: bgColor }
      : { backgroundColor: bgColor };
  
    return (
      <div 
        className="w-full max-w-[426px] h-auto p-6 shadow-lg border rounded-xl flex flex-col sm:w-[426px] sm:h-[570px]" 
        style={backgroundStyle}
      >
        <h4 className="text-[28px] sm:text-[36px] font-semibold leading-[120%] text-black text-left">{title}</h4>
        <h6 className="text-[18px] sm:text-[21px] font-semibold leading-[120%] text-[#737477] text-left mt-4 sm:mt-6">{description}</h6>
        <div className="border-t w-full my-4 sm:my-6" />
        <ul className="space-y-2 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3 text-left">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-black text-white flex items-center justify-center rounded-full">
                <Check className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
              <span className="text-[14px] sm:text-[16px] max-w-[300px] font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="self-end mt-3 sm:mt-6 pr-2 border border-solid border-[2px] rounded-full flex items-center gap-2 text-black bg-transparent"
        >
          {buttonText}
          <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black">
            <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </Button>
      </div>
    );
  };

export default PlanCard;

