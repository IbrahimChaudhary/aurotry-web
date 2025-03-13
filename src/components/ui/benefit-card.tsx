import { Card } from "@/components/ui/card";
import Logo from "./icons/logo";

interface BenefitCardProps {
  topText: string;
  bottomText: string;
}

const BenefitCard = ({ topText, bottomText }: BenefitCardProps) => {
  return (
    <Card className="w-full max-w-[650px] min-h-[187px] py-4 px-6 flex flex-col justify-between bg-[#EEF0FF] font-semibold">
     <div className="w-full max-w-[570px] text-[#A0A0A2] text-[21px] sm:text-[18px]">{topText}</div>

      <div className="flex flex-col items-start">
        <div className="w-12 h-12 flex items-center justify-center mb-2">
          <Logo />
        </div>

        <p className="w-full max-w-[570px] text-[21px] sm:text-[18px] font-semibold text-black leading-snug">
          {bottomText}
        </p>
      </div>
    </Card>
  );
};

export default BenefitCard;

