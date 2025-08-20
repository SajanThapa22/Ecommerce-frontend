"use client";

import React from "react";
import { exploreOurProducts } from "@/api/types/Product";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const ExploreOurProducts = () => {
  return (
    <section className="section-margin-x section-mt">
      <SectionHeader
        heading="Explore Our Products"
        subHeading="Our Products"
        // rightChild={<Navigators/>}
      />

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {exploreOurProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      <div className="w-full mt-10 flex justify-center">
        <Button text="View All Products" />
      </div>
    </section>
  );
};

export default ExploreOurProducts;
