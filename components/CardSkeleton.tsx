import React from "react";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardSkeleton = () => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {count.map((c) => (
        <div key={c} className="bg-gray-500 animate-pulse"></div>
      ))}
    </div>
  );
};

export default CardSkeleton;
