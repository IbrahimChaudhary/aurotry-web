import React from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./icons/Logo";

const Header: React.FC = () => {
  return (
    <nav className="w-full h-[112px]  flex justify-center items-center">
      <div className="w-[1320px] h-[72px] bg-white shadow-md rounded-[1000px] flex items-center px-6">
        {/* Left Section */}
        <div className="flex items-center">
          <Logo width={40} height={40} />
          <div className="w-[43px]"></div>
          <div className="w-[3px] h-[20px] bg-gray-300"></div>
          <div className="ml-9 flex space-x-9 text-[19px]">
            <button className="text-black font-semibold">Product</button>
            <button className="text-black font-semibold">Pricing</button>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Right Section */}
        <div className="flex items-center space-x-9 text-[19px] font-semibold">
          <button className="text-black">Contact us</button>
          <div className="w-[3px] h-[20px] bg-gray-300"></div>
          <button className="text-black ">Log In</button>
          <button className="flex items-center space-x-2 pl-5 pr-2 py-2 bg-black text-white text-[15px] rounded-full">
            <span>Sign Up</span>
            <span className="relative flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
