import React, { ReactNode } from "react";

interface Props {
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  subtitle: string;
  title: string;
}

const Title = ({ title, subtitle, leftChild, rightChild }: Props) => {
  return (
    <div className="px-[135px] flex items-end gap-[84px] mb-10">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-foundation-red-500 rounded-md w-5 h-10"></div>
          <span className="text-foundation-red-500 font-semibold text-base">
            {subtitle}
          </span>
        </div>

        <span className="text-black font-semibold text-4xl capitalize">
          {title}
        </span>
      </div>

      <div className="ml-[87px]">{leftChild}</div>

      <div className="ml-auto">{rightChild}</div>
    </div>
  );
};

export default Title;
