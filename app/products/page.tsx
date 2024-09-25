import ProductCard from "@/components/ProductCard";
import React, { useState, useEffect } from "react";
import { Product } from "../page";
import CardSkeleton from "@/components/CardSkeleton";
import LoadMore from "@/components/LoadMore";
import Link from "next/link";

interface AllProductsProps {
  searchParams: { page?: string }; // Accepting page as a query parameter
}

const AllProducts = async ({ searchParams }: AllProductsProps) => {
  const page = Number(searchParams.page) || 1;
  const res = await fetch(
    `http://localhost:3000/api/products?page=${page}&limit=9`
  );

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
      <div className="flex justify-center w-full">
        <Link href={`?page=${page + 1}`}>
          <button className="mt-6 px-4 py-2 bg-[#dc2626] text-white rounded hover:bg-red-700">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
