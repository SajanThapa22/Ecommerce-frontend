import React, { ReactNode } from "react";

interface Props {
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  subHeading: string;
  heading: string;
}

const Title = ({ heading, subHeading, leftChild, rightChild }: Props) => {
  return (
    <div className="flex items-end gap-x-[84px] mb-10">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-foundation-red-500 rounded-md w-5 h-10"></div>
          <span className="text-foundation-red-500 font-semibold text-base">
            {subHeading}
          </span>
        </div>

        <span className="text-black font-semibold text-3xl lg: xl:text-4xl">
          {heading}
        </span>
      </div>

      {leftChild && <div className="ml-[87px]">{leftChild}</div>}

      <div className="ml-auto">{rightChild}</div>
    </div>
  );
};

export default Title;
