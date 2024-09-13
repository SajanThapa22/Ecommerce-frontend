"use client";

import React from "react";

interface Props {
  productId: string;
}

const AddToCart = ({ productId }: Props) => {
  const accessToken = localStorage.getItem("accessToken");

  const handleAddToCart = async () => {
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

      if (!res.ok) {
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
      className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 capitalize text-center border-none"
    >
      add to cart
    </button>
  );
};

export default AddToCart;
