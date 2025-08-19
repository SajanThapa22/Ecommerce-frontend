import { IconStar } from "@/assets/icons";
import React from "react";
import { cn } from "@/lib/utils";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const moreThanHalf = rating - Math.floor(rating) >= 0.5;
  // 4.7 - 4 = 0.7

  return (
    <div className="flex">
      {Array.from({ length: Math.floor(rating) }).map((_, index) => (
        <FaStar
          key={index}
          className={cn("text-foundation-orange-500 text-lg md:text-xl")}
        />
      ))}
      {moreThanHalf && (
        <FaStarHalfAlt
          className={cn("text-foundation-orange-500 text-lg md:text-xl")}
        />
      )}

      {Array.from({
        length: moreThanHalf
          ? 5 - Math.floor(rating) - 1
          : 5 - Math.floor(rating),
      }).map((_, index) => (
        <FaStar
          key={index}
          className={cn("text-foundation-gray-300 text-lg md:text-xl")}
        />
      ))}
    </div>
  );
};

export default Rating;
