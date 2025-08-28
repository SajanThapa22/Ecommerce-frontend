import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  quantity: number;
  onPressUp: () => void;
  onPressDown: () => void;
}

const QuantityChanger = ({ quantity, onPressUp, onPressDown }: Props) => {
  return (
    <div className="rounded-md border w-fit border-gray-400 p-[6px] px-3 flex gap-8 items-center">
      <button className="text-black text-base bg-transparent border-none outline-none focus:outline-none focus:border-none">
        {quantity}
      </button>
      <div className="flex flex-col justify-between">
        <button onClick={onPressUp}>
          <FaChevronUp className="w-3 text-black" />
        </button>
        <button onClick={onPressDown}>
          <FaChevronDown className="w-3 text-black" />
        </button>
      </div>
    </div>
  );
};

export default QuantityChanger;
