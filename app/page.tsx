import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
// import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { url } from "inspector";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

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

const features = [
  {
    id: 1,
    icon: FaShippingFast,
    feature: "free shipping",
    offer: "On orders over Rs 5000",
  },
  {
    id: 2,
    icon: FaMoneyBillWave,
    feature: "money back",
    offer: "30 days guarantee",
  },
  {
    id: 3,
    icon: FaHeadset,
    feature: "24/7 support",
    offer: "Dedicated support",
  },
];

function Home({ featuredProducts, addToCart }: Props) {
  return (
    <div className="w-full mx-auto py-[2rem] px-[7rem] bg-orange-100">
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
            className="inline-block px-6 py-3 bg-black text-secondary no-underline rounded transition-transform"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-responsive gap-[2rem] mb-[2rem] text-black">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <FeatureCard key={f.id} feature={f.feature} offer={f.offer}>
              <Icon className="text-[2.5rem] mb-[1rem] text-black" />
            </FeatureCard>
          );
        })}
      </section>

      <section className="mb-[32px] w-full text-center text-black">
        <h2 className="text-[32px] font-semibold">Featured Products</h2>
        {/* <div className="grid grid-cols-responsive">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div> */}
      </section>

      <section className="p-8 rounded-[8px] text-center text-black bg-gray-100">
        <h2 className="mb-4 text-[32px] font-semibold">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-roman text-[19px] font-light">
          Get the latest updates on new products and upcoming sales
        </p>
        <form className="flex justify-center mt-6">
          <input
            className="border border-black text-[12px] w-[250px] md:w-[300px] p-[.8rem] rounded-[4px] rounded-r-none"
            type="email"
            placeholder="Your email address"
            required
          />
          <Button text="subscribe" bg="bg-black text-white" />
        </form>
      </section>
    </div>
  );
}

export default Home;
