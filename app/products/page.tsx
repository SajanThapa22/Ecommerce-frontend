import ProductCard from "@/components/ProductCard";
import React, { useState, useEffect } from "react";
import { Product } from "../page";
import CardSkeleton from "@/components/CardSkeleton";

const AllProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const products: Product[] = data.results;
  return (
    <div className="px-3 py-3 md:px-10 md:py-10 mx-auto bg-gray-100">
      <h2 className="text-[28px] font-[700] text-center mb-8 uppercase text-black">
        All Products
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
