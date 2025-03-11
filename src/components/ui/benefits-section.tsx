import BenefitCard from "./benefit-card";

const BenefitsSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto my-8 px-4 md:px-8 lg:px-[60px] flex flex-col md:flex-row md:justify-center gap-4">
      <BenefitCard
        topText="Redefining the shopping experience."
        bottomText="From real-time AR previews, try on virtually, and buy with confidence."
      />
      <BenefitCard
        topText="Trusted by the Best"
        bottomText="Join 500+ brands revolutionizing their e-commerce with our Aurotry."
      />
    </section>
  );
};

export default BenefitsSection;



// import BenefitCard from "./benefit-card";


// const BenefitsSection = () => {
//   return (
//     <section className="w-[1440px] h-[275px] my-8 mx-auto flex justify-between px-[60px]">
//       <BenefitCard
//         topText=" Redefining the shopping experience."
//         bottomText="From real-time AR previews, try on virtually, and buy with confidence. "
//       />
//       <div className="w-[17.5px]" />
//       <BenefitCard
//         topText="Trusted by the Best"
//         bottomText="Join 500+ brands revolutionizing their e-commerce with our Aurotry"
//       />
//     </section>
//   );
// };

// export default BenefitsSection;
