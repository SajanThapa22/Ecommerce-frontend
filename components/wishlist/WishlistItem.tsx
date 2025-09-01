"use client";

import { Product } from "@/api/types/Product";
import Image from "next/image";
import React from "react";
import { IconCart, IconDelete } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
}

const WishlistItem = ({ product }: Props) => {
  return (
    <div>
      <div className="flex flex-col w-full aspect-square">
        <div className="group relative w-full aspect-square overflow-hidden bg-foundation-gray-200 p-5 flex-1">
          <Image
            src={product.image}
            alt="product"
            className="object-contain w-full h-full"
          />

          {product.percentOff && (
            <div className="absolute top-3 left-3 bg-foundation-red-500 text-white text-center text-[12px] py-1 px-3 rounded-md">
              {`-${product.percentOff}%`}
            </div>
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button className="bg-white size-[34px] flex items-center justify-center rounded-full">
              <IconDelete className="text-black size-6" />
            </button>
          </div>
        </div>
        <button className="p-2 w-full flex items-center justify-center gap-2 bg-black text-white">
          <IconCart className={cn("text-white size-6")} />
          <span className="text-xs md:text-sm lg:text-base">Add to Cart</span>
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-y-2">
        <span className="text-xs md:text-sm lg:text-base text-black">
          {product.name}
        </span>
        <div className="flex itemscen gap-2">
          {product.priceAfterDiscount && (
            <span className="text-xs md:text-sm lg:text-base text-foundation-red-500 font-medium">
              {`$${product.priceAfterDiscount}`}
            </span>
          )}
          <span
            className={cn(
              "text-xs md:text-sm lg:text-base text-gray-400 font-medium",
              product.priceAfterDiscount
                ? "line-through"
                : "text-foundation-red-500"
            )}
          >
            {`$${product.originalPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
