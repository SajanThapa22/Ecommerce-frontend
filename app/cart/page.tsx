"use client";
import React, { useEffect } from "react";
import { Product } from "../page";
import ProductCard from "@/components/ProductCard";

const page = async () => {
  // const userDetail = {

  // }
  // const authResponse = await fetch('http://localhost:3000/api/auth')

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRkNWZmODFkM2E1YjBlOWIzOTFhODAiLCJpYXQiOjE3MjU4MDAyMzcsImV4cCI6MTcyNTgwMjYzN30.WcMnRQKDcsjOpv8IQ3m14n9RnwKAgxBaGbMv3o4Epxs";
  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/cart", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchCart();
  // });

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
