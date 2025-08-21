"use client";

import { IconArrowRight } from "@/assets/icons";
import React from "react";

const ScrollToTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollTop}
      className="rounded-full aspect-square p-3 bg-gray-300 fixed bottom-10 right-10"
    >
      <IconArrowRight className="w-7 -rotate-90 text-black" />
    </button>
  );
};

export default ScrollToTop;
