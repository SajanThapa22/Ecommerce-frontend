"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { Product } from "@/app/page";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const res = await fetch(`http://localhost:3000/api/products/${id}`);
          if (res.status === 200) {
            const result = await res.json();
            setProduct(result.data);
          } else {
            setError("something went wrong");
          }
        } catch (err) {
          console.error("an error occurred", err);
        }
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 items-center w-[80%] md:w-[60%] lg:w-[800px] max-w-[900px] aspect-[2/1] bg-white rounded-[14px] mx-auto mt-[100px] p-4 z-[20] gap-6">
        <div>
          <img className="w-full object-cover" src={product?.image} alt="" />
        </div>
        <div id="details" className="flex flex-col gap-4 font-sans">
          <div className="text-[18px] text-black font-[600]">
            {product?.name}
          </div>
          <div className="opacity-80 text-sm">{product?.description}</div>
          <div className="text-[16px]">{product?.price}</div>

          <Button text="Buy now" style="bg-tomato" />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
