import React from "react";
import Image from "next/image";

interface HeroProps {
  width?: number;
  height?: number;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ width = 1243, height = 684, }) => {
  return (
    <Image 
      src="/hero.svg" 
      alt="hero" 
      width={width} 
      height={height} 
      className="absolute z-[2]"
      priority
    />
  );
};

export default Hero;
