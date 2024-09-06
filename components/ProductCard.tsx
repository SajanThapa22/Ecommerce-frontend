import React from "react";
import { Product } from "@/app/page";
import Link from "next/link";

interface Props {
  product: Product;
  addToCart: (id: string) => void;
  id: string;
}
function ProductCard({ product, addToCart, id }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <Link
        href={`/products/${id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <h3>{product.name}</h3>
      </Link>
      <p>Price: Rs {product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
