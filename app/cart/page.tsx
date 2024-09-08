"use client";
import React, { useEffect } from "react";
import { Product } from "../page";
import ProductCard from "@/components/ProductCard";

const page = async () => {
  // const userDetail = {

  // }
  // const authResponse = await fetch('http://localhost:3000/api/auth')

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/cart", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  });

  // const data: Product[] = await res.json();

  return (
    <div>
      no items
      {/* {data.length > 0
        ? data?.map((item) => (
            <ProductCard
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        : "no items found"} */}
    </div>
  );
};

export default page;
