import React from "react";
import Image from "next/image";

interface HeroProps {
  width?: number;
  height?: number;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ width = 1243, height = 684, className = "" }) => {
  return (
    <Image 
      src="/hero.svg" 
      alt="hero" 
      width={width} 
      height={height} 
      className={className}
      priority
    />
  );
};

export default Hero;
