"use client";

import React, { useRef } from "react";
import Title from "../ui/Title";
import Navigators from "../ui/Navigators";
import { products } from "@/api/types/Product";
import ProductCard from "../ui/ProductCard";

const FlashSales = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Title
        title="Flash Sales"
        subtitle={`Today's`}
        rightChild={<Navigators scrollRef={scrollRef} />}
      />

      <div className="pl-[135px] max-w-[100vw]">
        <div
          ref={scrollRef}
          className="w-full overflow-y-scroll flex gap-[30px] pr-8 hide-scrollbar scroll-smooth"
        >
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FlashSales;
