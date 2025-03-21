import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import Logo from "./icons/logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 md:px-[60px] pt-[33.5px]">
      <div className="w-full max-w-[1320px]  mx-auto flex flex-col">
     
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <div className="flex items-center mb-7 md:mb-0">
            <Logo />
            <span className="font-chillax font-medium text-[27px] text-black ml-3">Aurotry</span>
          </div>

          <div className="flex flex-col space-y-4  mr-8 font-medium">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-black" />
              <span className="ml-2 text-[16px] text-black">hello@aurotry.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-black" />
              <span className="ml-2 text-[16px] text-black">+92 321 1234567</span>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 pt-5 sm:mt-10 sm:pt-10 border-t-2 border-[#A0A0A2]  flex flex-col md:flex-row justify-between">

          <div className="flex flex-col max-w-[600px] text-left font-medium">
            <p className="text-[16px] text-black">
              Your customers. Your style. Now in <br /> AR. Let’s get started.
            </p>
            <Button className="flex items-center pl-6 pr-2 py-6 bg-black text-white rounded-full text-[16px] mt-5 w-fit">
              Try It Now
              <span className="ml-2  w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </Button>
          </div>

          <div className="w-full max-w-[464px] flex flex-col md:flex-row justify-between md:space-x-10 mt-10 md:mt-0">
          <div className="flex flex-col text-[18px] sm:text-[21px] font-semibold leading-[120%] text-[#737477] space-y-4 mb-6 sm:mb-6">

              <span>Home</span>
              <span>How It Works</span>
              <span>Features</span>
              <span>Pricing</span>
              <span>FAQs</span>
              <span>Contact Us</span>
            </div>
            <div className="flex flex-col text-[18px] sm:text-[21px] font-semibold leading-[120%] text-[#737477] mt-6 md:mt-0 space-y-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-10 pb-6 text-[#737477] text-[16px] leading-[120%]">
          © 2025 Aurotry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

