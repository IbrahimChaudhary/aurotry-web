import React from "react";
import Image from "next/image";

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full  z-[1] pointer-events-none">

      <Image
        src="/svg1.svg"
        alt="Background SVG 1"
        width={600}
        height={600}
        className="absolute rounded-[50]"
      />
      <Image
        src="/svg2.svg"
        alt="Background SVG 2"
        width={600}
        height={600}
        className="absolute  right-[0px] rounded-[50]"
      />

      <Image
        src="/svg3.svg"
        alt="Background SVG 3"
        width={600}
        height={600}
        className="absolute top-[150px] left-[0px] rounded-[50]"
      />
    
      <Image
        src="/svg4.svg"
        alt="Background SVG 4"
        width={800}
        height={800}
        className="absolute top-[320px] right-[0px] rounded-[50]"
      />

      <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#FFFFFE] to-[#F7F8FF] hidden md:block"></div>

    </div>
  );
};
