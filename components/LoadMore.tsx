// components/LoadMore.tsx
"use client";

import React from "react";
import Link from "next/link";

interface LoadMoreProps {
  currentPage: number;
}

const LoadMore: React.FC<LoadMoreProps> = ({ currentPage }) => {
  return (
    <div className="flex justify-center w-full">
      <Link href={`?page=${currentPage + 1}`}>
        <button className="mt-6 px-4 py-2 bg-[#dc2626] text-white rounded hover:bg-red-700">
          Load More
        </button>
      </Link>
    </div>
  );
};

export default LoadMore;
