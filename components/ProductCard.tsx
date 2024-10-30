import React from "react";
import { Product } from "@/app/page";
import Link from "next/link";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="bg-white border border-solid border-[#e0e0e0] p-4 text-center transition-shadow hover:shadow-custom text-black">
      <img
        className="w-full h-[200px] object-contain mb-4"
        src={product.image}
        alt={product.name}
      />

      <Link href={`/products/${product._id}`} className="no-underline">
        <h3 className="text-[18px] font-[600]">{product.name}</h3>
      </Link>
      <p className="text-[16px] mb-4">Price: Rs {product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
