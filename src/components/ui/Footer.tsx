import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "../../../public/icons/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[498px] bg-gray-100 px-[59px] pt-[33.5px] flex flex-col items-center">
      {/* Top Section */}
      <div className="w-[1320px] h-[68px] bg-white flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Logo />
          <span className="text-[27px] text-black ml-3">Aurotry</span>
        </div>
        
        {/* Contact Info */}
        <div className="w-[242px] h-[68px] flex-col">
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-black" />
            <span className="ml-2 text-[16px] text-black">mail@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-black" />
            <span className="ml-2 text-[16px] text-black">+123 456 7890</span>
          </div>
        </div>
      </div>
      
     {/* Bottom Section */}
     <div className="w-[1320px] h-[310px] mt-10 border-t border-black  flex justify-between">
        {/* Left Text and Button */}
        <div className="flex flex-col text-right max-w-[600px]">
          <p className="text-[16px] text-black">
            Your customers. Your style. Now in
            AR. Let’s get started.
          </p>
          <button className="flex items-center px-6 py-3 bg-[#8046FD] text-white rounded-full text-lg mt-5 w-fit">
            Try It Now
            <span className="ml-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className="w-[464px] h-[230px] flex justify-around">
          <div className="flex flex-col text-[21px] font-semibold leading-[120%] text-[#737477]">
            <span>Home</span>
            <span>How It Works</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>FAQs</span>
            <span>Contact Us</span>
          </div>
          <div className="flex flex-col text-[21px] font-semibold leading-[120%] text-[#737477] ml-10">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
