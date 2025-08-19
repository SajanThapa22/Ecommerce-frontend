import { IconArrowLeft, IconArrowRight } from "@/assets/icons";
import React, { MutableRefObject } from "react";

interface Props {
  scrollRef?: MutableRefObject<HTMLElement | null>;
}

const Navigators = ({ scrollRef }: Props) => {
  const scrollLeft = () => {
    if (scrollRef?.current) {
      scrollRef?.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef?.current) {
      scrollRef?.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          onClick={scrollLeft}
          className="bg-foundation-gray-200 size-9 lg:size-[46px] rounded-full flex items-center justify-center"
        >
          <IconArrowLeft className="text-black  w-4 lg:w-[24px]" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-foundation-gray-200 size-9 lg:size-[46px] rounded-full flex items-center justify-center"
        >
          <IconArrowRight className="text-black  w-4 lg:w-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default Navigators;
