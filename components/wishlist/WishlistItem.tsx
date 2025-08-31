import { Product } from "@/api/types/Product";
import Image from "next/image";
import React from "react";
import Rating from "../ui/Rating";
import { IconHeart, IconView } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
}

const WishlistItem = ({ product }: Props) => {
  return (
    <div>
      <div className="group relative w-full aspect-square overflow-hidden bg-foundation-gray-200 p-8">
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
            <IconHeart className="text-black text-base" />
          </button>
          <button className="bg-white size-[34px] flex items-center justify-center rounded-full">
            <IconView className="text-black text-base" />
          </button>
        </div>

        <button className="absolute bottom-0 left-0 w-full flex items-center justify-center p-[10px] bg-black text-white text-base translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-in">
          Add To Cart
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-y-2">
        <span className="text-sm md:text-base text-black">{product.name}</span>
        <div className="flex gap-2">
          {product.priceAfterDiscount && (
            <span className="text-sm md:text-base text-foundation-red-500 font-medium">
              {`$${product.priceAfterDiscount}`}
            </span>
          )}
          <span
            className={cn(
              "text-sm md:text-base text-gray-400 font-medium",
              product.priceAfterDiscount
                ? "line-through"
                : "text-foundation-red-500"
            )}
          >
            {`$${product.originalPrice}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Rating rating={product.rating} />
          <span className="text-xs md:text-sm font-semibold text-gray-500">
            {`(${product.reviews})`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
