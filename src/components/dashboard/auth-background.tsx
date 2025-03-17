import React from "react";
import Image from "next/image";

export const AuthBackground: React.FC = () => {
  return (
    <div className="absolute lg:block hidden inset-0 w-full p-[20px]  -z-40 pointer-events-none">

      <Image
        src="/Ellipse 49.svg"
        alt="Ellipse 49"
        width={600}
        height={372}
        className="absolute left-[40px] rounded-[28px]"
      />
      <Image
        src="/Ellipse 51.svg"
        alt="Ellipse 51"
        width={442}
        height={343}
        className="absolute  right-[40px] rounded-[28px]"
      />

      <Image
        src="/Ellipse 52.svg"
        alt="Ellipse 52"
        width={635}
        height={436}
        className="absolute bottom-5 left-[40px] rounded-[28px]"
      />
    
      <Image
        src="/Ellipse 50.svg"
        alt="Ellipse 50"
        width={849}
        height={608}
        className="absolute bottom-5 right-[40px] rounded-[28px]"
      />


    </div>
  );
};
