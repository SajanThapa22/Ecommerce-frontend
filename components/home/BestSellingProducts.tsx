"use client";

import React from "react";
import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";
import { bestSellingProducts } from "@/api/types/Product";
import SectionHeader from "../ui/SectionHeader";

const BestSellingProducts = () => {
  return (
    <div className="section-mt section-margin-x">
      <SectionHeader
        heading="Best Selling Products"
        subHeading="This month"
        rightChild={<Button text="View All" />}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-[30px]">
        {bestSellingProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
