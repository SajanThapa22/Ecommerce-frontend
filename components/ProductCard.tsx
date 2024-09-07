import React from "react";
import { Product } from "@/app/page";
import Link from "next/link";

function ProductCard({ _id, name, description, price, image }: Product) {
  return (
    <div className="bg-white border border-solid border-[#e0e0e0] p-4 text-center transition-shadow hover:shadow-custom text-black">
      <img
        className="w-full h-[200px] object-contain mb-4"
        src={image}
        alt={name}
      />

      <Link href={`/products/${_id}`} className="no-underline">
        <h3 className="text-[18px] font-[600]">{name}</h3>
      </Link>
      <p className="text-[16px] mb-4">Price: Rs {price.toFixed(2)}</p>
      {/* <button className="bg-black text-white border-none py-[10px] px-4 text-sm cursor-pointer transition-all ease-in duration-300 hover:bg-[#333333[">
        Add to Cart
      </button> */}
    </div>
  );
}

export default ProductCard;
