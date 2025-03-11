"use client";

import React, { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./icons/logo";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[112px] flex justify-center items-center px-4 relative">
      <div className="w-full max-w-[1320px] h-[72px] bg-white shadow-md rounded-[1000px] flex items-center px-6 justify-between">
        <div className="flex items-center">
          <Logo width={40} height={40} />
         
        </div>

        <Button
          variant="ghost"
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 text-black" />
        </Button>

        <div className="hidden lg:flex flex-1 justify-between items-center">
          
          <div className="flex items-center ml-9 space-x-5">
          <div className="w-[3px] h-[20px] bg-gray-300"></div>
            <Button variant="ghost" className="text-black font-semibold text-[19px]">
              Product
            </Button>
            <Button variant="ghost" className="text-black font-semibold text-[19px]">
              Pricing
            </Button>
          </div>

          <div className="flex items-center space-x-5">
            <Button variant="ghost" className="text-black text-[19px] font-semibold">
              Contact us
            </Button>
            <div className="w-[3px] h-[20px] bg-gray-300"></div>
            <Button variant="ghost" className="text-black text-[19px] font-semibold">
              Log In
            </Button>
            <Button className="flex items-center space-x-2 pl-5 pr-2 py-2 bg-black text-white text-[15px] rounded-full">
              <span>Sign Up</span>
              <span className="relative flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-[112px] left-0 right-0 w-full bg-white shadow-md py-4 z-50">
          <div className="flex flex-col items-center space-y-4 text-[19px]">
            <Button variant="ghost" className="text-black font-semibold">
              Product
            </Button>
            <Button variant="ghost" className="text-black font-semibold">
              Pricing
            </Button>
            <Button variant="ghost" className="text-black font-semibold">
              Contact us
            </Button>
            <Button variant="ghost" className="text-black font-semibold">
              Log In
            </Button>
            <Button className="flex items-center space-x-2 pl-5 pr-2 py-2 bg-black text-white text-[15px] rounded-full">
              <span>Sign Up</span>
              <span className="relative flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
