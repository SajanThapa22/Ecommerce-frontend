"use client";

import { useEffect, useState } from "react";
import { Product } from "../page";
import ProductCard from "@/components/ProductCard";

interface Item {
  product: Product;
  quantity: string;
  _id: string;
}

const Page = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const accessToken = localStorage.getItem("accessToken");

  const total = data?.reduce((sum, item) => sum + item.product.price, 0);

  const removeItem = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.status === 200) {
      setData((prev) => prev.filter((item) => item._id !== id));
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (accessToken) {
        const res = await fetch("http://localhost:3000/api/cart", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const result = await res.json();
        console.log(result.items);
        setData(result.items);
      }
      setLoading(false);
    };

    fetchCart();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-5 bg-white text-black">
      <h2 className="text-[28px] font-[700] text-center mb-[30px] uppercase tracking-[2px]">
        Your Cart
      </h2>
      {data?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-none p-0">
            {data?.map((item) => (
              <li
                key={item.product._id}
                className="flex items-center border-b border-solid border-[#e0e0e0] py-5"
              >
                <img
                  className="size-[100px] object-cover mr-5 border border-black"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div className="flex-grow">
                  <h3 className="text-[18px] mb-[10px] font-[700]">
                    {item.product.name}
                  </h3>
                  <p className="text-[16px] mb-[10px]">
                    Rs {item.product.price}
                  </p>
                  <button
                    onClick={() => removeItem(item.product._id)}
                    className="bg-[#dc2626] text-white border-none px-3 py-2 pointer transition-colors duration-300 ease-in hover:bg-[#333333]"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-[18px] font-[700] mb-5">
              Total: Rs {total?.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
