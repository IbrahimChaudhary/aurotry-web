import React from "react";
import { ArrowRight } from "lucide-react";
import { Hero } from "./icons/HeroImage";
import { HeroBackground } from "./icons/HeroBackground";

const HeroBlock: React.FC = () => {
  return (
    <section className="relative font-semibold w-full min-h-screen flex justify-center items-center p-4 overflow-hidden">
      <div className="relative w-full max-w-[1400px] h-auto rounded-[50px] bg-white p-7 flex flex-col items-center text-center">
        <HeroBackground />

        <h1 className="text-[80px] leading-[100%] tracking-[-2%] text-black max-w-[1250px] z-[2] mt-[120px]
          lg:text-[80px] lg:max-w-[1250px] 
          md:text-[60px] md:max-w-[95%] md:mt-[80px] 
          sm:text-[40px] sm:max-w-[90%] sm:mt-[60px] 
          xs:text-[32px] xs:leading-[110%] xs:mt-[50px]">
          Revolutionize Online Shopping with AR Clothing Previews
        </h1>

        <h5 className="text-[27px] leading-[120%] tracking-[0%] text-black opacity-40 max-w-[1250px] mt-6 z-[2] 
          lg:text-[27px] lg:max-w-[1250px] 
          md:text-[22px] md:max-w-[95%] 
          sm:text-[20px] sm:max-w-[90%] 
          xs:text-[18px] xs:leading-[140%]">
          Let your customers see themselves in your clothes—before they buy.
          Boost confidence, reduce returns, and elevate your e-commerce experience.
        </h5>

        <div className="mt-7 flex justify-center">
          <button className="flex items-center pl-5 pr-2 py-2 bg-[#8046FD] text-white rounded-full text-lg z-[2] 
            md:text-base md:pl-4 md:pr-2 md:py-2 
            sm:text-sm sm:pl-3 sm:pr-1 sm:py-1">
            Try It Now
            <span className="ml-3 w-9 h-9 bg-white rounded-full flex items-center justify-center 
              md:w-8 md:h-8 sm:w-7 sm:h-7">
              <ArrowRight className="w-5 h-5 text-black md:w-4 md:h-4 sm:w-3 sm:h-3" />
            </span>
          </button>

        </div>

        <div className="mt-[30px] flex justify-center w-full z-[2]">
          <Hero className="max-w-[90%] sm:max-w-[1250px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;

