import React from "react";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardSkeleton = () => {
  return (
    <>
      {count.map((c) => (
        <div key={c} className="bg-gray-300 animate-pulse aspect-square"></div>
      ))}
    </>
  );
};

export default CardSkeleton;
