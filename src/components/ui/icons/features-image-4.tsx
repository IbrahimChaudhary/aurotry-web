import React from "react";
import Image from "next/image";

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const FeaturesImage4: React.FC<SvgProps> = ({ width = 400, height = 400, className = "" }) => {
  return (
    <Image 
      src="/features-svg4-br.svg" 
      alt="Virtual Try-On" 
      width={width} 
      height={height} 
      className={className}
      priority
    />
  );
};



export default FeaturesImage4;


