"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Spinner from "./Spinner";

interface Props {
  productId: string;
}

const AddToCart = ({ productId }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const accessToken = localStorage.getItem("accessToken");

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      if (!accessToken) {
        throw new Error("No access token found. Please log in.");
      }

      const res = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ productId }),
      });

      if (res.status === 200) {
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      }

      if (!res.ok) {
        setIsLoading(false);
        throw new Error(`Error adding to cart: ${res.statusText}`);
      }

      const result = await res.json();
      console.log("Added to cart:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleAddToCart} // Use the function reference here
      className="px-4 py-2 w-full md:w-[200px] rounded-lg bg-blue-700 hover:bg-blue-800 capitalize text-[16px] text-center font-semibold border-none"
    >
      {isLoading ? (
        <div className="flex gap-2 justify-center items-center">
          <Spinner /> <p>Adding to cart...</p>
        </div>
      ) : (
        <p>Add to Cart</p>
      )}
    </button>
  );
};

export default AddToCart;
