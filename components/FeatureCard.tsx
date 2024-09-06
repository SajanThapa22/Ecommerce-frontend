import React, { ReactNode } from "react";

interface Props {
  feature: string;
  offer: string;
  children: ReactNode;
}

const featureCard = ({ feature, offer, children }: Props) => {
  return (
    <div className="text-center p-[1.5rem] bg-white rounded-[8px] shadow-custom ease-in duration-200 flex flex-col items-center transition-transform transform  hover:-translate-y-1">
      {children}
      <h3 className="font-semibold text-[18px] capitalize mb-2">{feature}</h3>
      <p className="font-sans text-[18px]">{offer}</p>
    </div>
  );
};

export default featureCard;
