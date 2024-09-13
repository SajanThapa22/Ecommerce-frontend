"use client";

import { useEffect, useState } from "react";
import { Product } from "../page";
import ProductCard from "@/components/ProductCard";

interface Props {
  cart: Product[];
  removeFromCart: (id: string) => void;
}

const Page = ({ cart, removeFromCart }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const fetchCart = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        const res = await fetch("http://localhost:3000/api/cart", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const result = await res.json();
        setData(result.data);
      } else {
        setData([]);
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
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-none p-0">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center border-b border-solid border-[#e0e0e0] py-5"
              >
                <img
                  className="size-[100px] object-cover mr-5 border border-black"
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex-grow">
                  <h3 className="text-[18px] mb-[10px] font-[700]">
                    {item.name}
                  </h3>
                  <p className="text-[16px] mb-[10px]">
                    Rs {item.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-black text-white border-none px-3 py-2 pointer transition-colors duration-300 ease-in hover:bg-[#333333]"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-[18px] font-[700] mb-5">
              Total: Rs {total.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
