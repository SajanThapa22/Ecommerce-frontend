"use client";

import React, { useRef } from "react";
import Title from "../ui/Title";
import Navigators from "../ui/Navigators";
import { products } from "@/api/types/Product";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import FlashSalesTimer from "../ui/FlashSalesTimer";

const FlashSales = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-mt">
      <div className="section-padding-x">
        <Title
          heading="Flash Sales"
          subHeading={`Today's`}
          rightChild={<Navigators scrollRef={scrollRef} />}
          leftChild={<FlashSalesTimer />}
        />
      </div>

      <div className="section-padding-l max-w-[100vw]">
        <div
          ref={scrollRef}
          className="w-full overflow-y-scroll grid grid-flow-col auto-cols-[150px] sm:auto-cols-[180px] md:auto-cols-[200px] lg:auto-cols-[220px] xl:auto-cols-[250px] gap-[30px] pr-8 hide-scrollbar scroll-smooth"
        >
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

      <div className="mt-[60px] flex justify-center w-full">
        <Button text="View All Products" />
      </div>
    </section>
  );
};

export default FlashSales;
