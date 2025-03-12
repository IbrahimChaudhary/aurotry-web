import React from "react";
import Image from "next/image";

interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

const FeaturesImage2: React.FC<SvgProps> = ({ width = 400, height = 400, className = "" }) => {
  return (
    <Image 
      src="/features-svg2-tr.svg"
      alt="Virtual Try-On" 
      width={width} 
      height={height} 
      className={className}
      style={{ width: `${width}px`, height: `${height}px`,  paddingLeft: '100px' }} // Ensures it takes effect
      priority
    />
    );
  };
  


export default FeaturesImage2;


