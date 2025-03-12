import React from "react";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src="/hero.svg"
        alt="hero"
        layout="responsive"
        width={1243}
        height={684}
        priority
        className="z-[2]"
      />
    </div>
  );
};

