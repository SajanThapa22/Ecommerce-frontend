"use client";
import React from "react";

interface Props {
  page: number;
}

const LoadMore = ({ page }: Props) => {
  return (
    <button
      onClick={() => page++}
      className="mt-5 px-4 py-2 bg-[#dc2626] rounded-full"
    >
      Load more
    </button>
  );
};

export default LoadMore;
