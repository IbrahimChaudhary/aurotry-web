import React from "react";
import { ArrowRight } from "lucide-react";
import Hero from "../icons/HeroImage";
import HeroBackground from "../icons/HeroBackground";

const HeroBlock: React.FC = () => {
  return (
    <section className="relative font-semibold w-full h-[1373px] flex justify-center items-center p-4 overflow-hidden">
      {/* SVG Background */}
     
      
      <div className="relative w-[1400px] h-[1333px] rounded-[50px] bg-white p-7 flex flex-col items-center text-center">
      <HeroBackground/>
        {/* Headings */}
        <h1 className="text-[80px] leading-[100%] tracking-[-2%] text-black max-w-[1250px] mt-[120px]">
          Revolutionize Online Shopping with AR Clothing Previews
        </h1>
        <h5 className="text-[27px] leading-[120%] tracking-[0%] text-black opacity-40 max-w-[1250px] mt-6">
          Let your customers see themselves in your clothes—before they buy. Boost confidence, reduce returns, and elevate your e-commerce experience.
        </h5>
        
        {/* Button */}
        <div className="mt-7 flex justify-center">
          <button className="flex items-center pl-5 pr-2 py-2 bg-[#8046FD] text-white rounded-full text-lg">
            Try It Now
            <span className="ml-3 w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
        </div>
        
        
        {/* Hero SVG */}
        <div className="mt-[30px] flex justify-center w-full"> 
          <Hero width={1250} height={600} />
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;

