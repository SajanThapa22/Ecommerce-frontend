"use client";

import { gameConsole, monitor } from "@/assets/images";
import QuantityChanger from "@/components/cart/QuantityChanger";
import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: "Monitor", price: 999, image: monitor, quantity: 1 },
  { id: 2, name: "Game console", price: 499, image: gameConsole, quantity: 2 },
  //   { id: 3, name: "Amazon Echo", price: 129, image: "/images/echo.jpg" },
];

const page = () => {
  const [items] = useState<CartItem[]>(initialItems);
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div className="section-margin-x mt-[30px] md:mt-[45px] lg:mt-14 xl:mt-20">
      <Breadcrumbs />

      <div className="w-full overflow-y-scroll hide-scrollbar">
        <div className="mt-14 flex flex-col gap-10">
          <div className="w-full grid grid-cols-[2fr_2fr_2fr_1fr] min-w-[500px]">
            <span className="text-base text-black">Product</span>
            <span className="text-base text-black">Price</span>
            <span className="text-base text-black">Quantity</span>
            <span className="text-base text-black">Subtotal</span>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="w-full items-center grid grid-cols-[2fr_2fr_2fr_1fr] min-w-[500px]"
            >
              {/* Product */}
              <div className="flex items-center gap-[22px]">
                <div className="relative w-[50px]">
                  <Image
                    className="w-full object-contain"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <span className="text-base text-black">{item.name}</span>
              </div>

              {/* price */}
              <span className="text-base text-black">{`$${item.price}`}</span>

              {/* Quantity */}
              <QuantityChanger
                quantity={item.quantity}
                onPressUp={() => item.quantity--}
                onPressDown={() => item.quantity++}
              />

              {/* Subtotal */}
              <span className="text-base text-black">{`$${item.price}`}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Return to shop and update button */}
      <div className="w-full flex items-center flex-wrap justify-between gap-5 mt-6">
        <Button variant="transparent" text="Return to Shop" />
        <Button variant="transparent" text="Update Cart" />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[70px] lg:gap-[100px] xl:gap-[170px] items-start mt-10 md:mt-12 lg:mt-16 xl:mt-20 text-nowrap">
        {/*Coupon input and apply button */}
        <div className="w-full flex gap-4">
          <div className="rounded-md border p-2 border-gray-400">
            <input
              type="text"
              className="w-full py-2 px-4 text-black placeholder:text-gray-400 focus:outline-none"
              placeholder="Coupon Code"
            />
          </div>

          <Button text="Apply Coupon" />
        </div>

        {/* Cart checkout */}
        <div className="flex-1 px-6 py-8 rounded-lg border-[0.09em] border-black">
          <span className="text-xl font-medium text-black">Cart Total</span>

          <div className="mt-6 flex flex-col divide-y divide-gray-400 mb-4">
            <div className="flex justify-between text-base text-black py-3">
              <span>Subtotal</span>
              <span>$1150</span>
            </div>
            <div className="flex justify-between text-base text-black py-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-base text-black py-3">
              <span>Total</span>
              <span>$1150</span>
            </div>
          </div>

          {/* Proceed to Checkout */}
          <div className="mx-auto w-fit">
            <Button text="Proceed to Checkout" pathname="/cart/checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
