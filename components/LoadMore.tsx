"use client";

import React from "react";

interface Props {
  onLoadMore: () => void;
}

const LoadMore = ({ onLoadMore }: Props) => {
  return (
    <button
      onClick={onLoadMore}
      className="mt-5 px-4 py-2 bg-[#dc2626] rounded-full"
    >
      Load more
    </button>
  );
};

export default LoadMore;
