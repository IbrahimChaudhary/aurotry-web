import { Button } from "@/components/landing-page/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
  Icon: React.FC<{ className?: string }>;
  SvgComponent: React.FC<{ className?: string }>;
}
  

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, gradient, Icon, SvgComponent }) => {
    return (
      <div className={cn("relative w-full max-w-[650px] min-h-[500px] sm:min-h-[450px] p-4 sm:p-4 rounded-2xl shadow-lg overflow-hidden", gradient)}>
       
        <div className="flex items-center gap-2 sm:gap-3">
          <Icon className="w-10 h-10 sm:w-8 sm:h-8" />
          <h4 className="text-2xl sm:text-xl font-semibold">{title}</h4>
        </div>
  
        <p className="absolute bottom-24 sm:bottom-20 left-6 sm:left-4 w-[300px] sm:w-[250px] text-lg sm:text-base font-medium z-[2]">
          {description}
        </p>
  
        <Button
          variant="outline"
          className="absolute border border-black bottom-6 sm:bottom-4 left-6 sm:left-4 pr-1 flex items-center gap-2 bg-transparent rounded-full  z-[2]"
        >
          Learn More
          <span className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black">
            <ArrowUpRight className="text-white w-5 h-5 sm:w-4 sm:h-4" />
          </span>
        </Button>
  
        <SvgComponent className="absolute bottom-[-10px] sm:bottom-[-10px] right-[-2x] sm:right-[-2px] w-[400px] sm:w-[300px]  hidden sm:block max-w-full max-h-full object-contain" />
      </div>
    );
  };
  
  export default FeatureCard;
