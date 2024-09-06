import React from "react";
import { FaShippingFast } from "react-icons/fa";

interface Props {
  feature: string;
  offer: string;
}

const featureCard = ({ feature, offer }: Props) => {
  return (
    <div className="text-center p-[1.5rem] bg-white rounded-[8px] shadow-custom ease-in duration-200 flex flex-col items-center transition-transform transform  hover:-translate-y-1">
      <FaShippingFast className="text-[2.5rem] mb-[1rem] text-black transition-transform" />
      <h3 className="font-semibold text-[18px]">{feature}</h3>
      <p className="font-sans text-sm">{offer}</p>
    </div>
  );
};

export default featureCard;
