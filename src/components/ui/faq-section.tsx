"use client";

import React, { useState } from "react";
import { MoveDownRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does it work?",
      answer: "Our platform integrates seamlessly with your website, allowing customers to experience products in augmented reality before making a purchase."
    },
    {
      question: "Is it compatible with my website?",
      answer: "Yes! We support multiple platforms including Shopify, WooCommerce, Webflow, and custom implementations via API."
    },
    {
      question: "Do I need technical expertise to set it up?",
      answer: "Not at all! Our step-by-step guides and dedicated support team will help you integrate the feature with ease."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto py-10 px-4 flex flex-col items-center">
      <h2 className="text-[26px] md:text-[61px] md- md:my-5 font-semibold leading-[120%] tracking-[-0.02em] text-black text-center max-w-[1320px]">
        <span className="block md:hidden">Frequently Asked Questions</span>
        <span className="hidden md:block">FAQ</span>
      </h2>
      <div className="mt-10 w-full max-w-[1320px] flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full px-6 py-4 border-b border-gray-300 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h5 className="text-[18px] md:text-[27px] font-semibold leading-[120%] text-black">
                {faq.question}
              </h5>
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 p-1">
                <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
                  <MoveDownRight className="text-white w-4 h-4" />
                </div>
              </div>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-[20px] text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
