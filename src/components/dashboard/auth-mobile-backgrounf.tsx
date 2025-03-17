import React from "react";
import Image from "next/image";

export const AuthMobileBackground: React.FC = () => {
  return (
    <div className="absolute block lg:hidden inset-0 w-full p-[20px]  -z-40 pointer-events-none">

      <Image
        src="/Ellipse 49.svg"
        alt="Ellipse 49"
        width={400}
        height={247}
        className="absolute left-[10px] rounded-[28px]"
      />
      <Image
        src="/mob-Ellipse 51.png"
        alt="Ellipse 51"
        width={249}
        height={228}
        className="absolute  right-[5px] rounded-[28px]"
      />

      <Image
        src="/mob-Ellipse 53.png"
        alt="Ellipse 52"
        width={400}
        height={247}
        className="absolute bottom-0 lg:bottom-5 left-[10px] rounded-[28px]"
      />
    
      <Image
        src="/mob-Ellipse 50.png"
        alt="Ellipse 50"
        width={565}
        height={405}
        className="absolute bottom-0 lg:bottom-5 right-[5px] rounded-[28px]"
      />


    </div>
  );
};
