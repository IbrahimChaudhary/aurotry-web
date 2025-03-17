import React from "react";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="w-full md:max-w-[1243px] md:h-auto min-w-[360px] h-[198.5px] mx-auto">
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
    </div>
  );
};

// import React from "react";
// import Image from "next/image";

// interface HeroProps {
//   className?: string;
// }

// export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
//   return (
//     <div className={`relative w-full ${className}`}>
//       <div className="w-full md:max-w-[1243px] md:h-auto min-w-[360px] h-[198.5px] mx-auto">
//         <Image
//           src="/hero.svg"
//           alt="hero"
//           layout="responsive"
//           width={1243}
//           height={684}
//           priority
//           className="z-[2]"
//         />
//       </div>
//     </div>
//   );
// };

