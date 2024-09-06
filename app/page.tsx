import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
// import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { url } from "inspector";
import FeatureCard from "@/components/featureCard";

export interface Props {
  addToCart: () => void;
  featuredProducts: Product[];
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

function Home({ featuredProducts, addToCart }: Props) {
  return (
    <div className="max-w-[1200px] mx-auto p-[2rem]">
      <section className="bg-cover bg-center h-[400px] flex items-center justify-center text-center text-secondary mb-8 bg-gradient-overlay-image">
        <div className="max-w-[500px]">
          <h1 className="text-[3rem] mb-[1rem] font-bold">
            Welcome To Ozmio Store
          </h1>
          <p className="text-[1.2rem] mb-[2rem] font-roboto-mono">
            Your One stop for gaming gears
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-black text-secondary no-underline rounded transition-custom"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-responsive gap-[2rem] mb-[2rem] text-black">
        <FeatureCard feature="free shipping" offer="On orders over Rs 5000" />
        <FeatureCard feature="money back" offer="30 days guarantee" />
        <FeatureCard feature="24/7 support" offer="dedicated support" />
      </section>

      <section className="featured-products">
        <h2
          style={{
            fontFamily: "Roboto Mono",
          }}
        >
          Featured Products
        </h2>
        {/* <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div> */}
      </section>

      <section className="newsletter">
        <h2
          style={{
            fontFamily: "Roboto Mono",
          }}
        >
          Subscribe to Our Newsletter
        </h2>
        <p>Get the latest updates on new products and upcoming sales</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
