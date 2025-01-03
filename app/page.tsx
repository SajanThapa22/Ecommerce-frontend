"use client";

import React, { useEffect, useState } from "react";
import { FaShippingFast, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Show from "@/components/Reveal";
import { useTimer } from "react-timer-hook";
import ProductCard from "@/components/ProductCard";
import { CiCircleCheck } from "react-icons/ci";
import { Bounce, Flip, ToastContainer, Zoom, toast } from "react-toastify";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "react-toastify/dist/ReactToastify.css";
import CustomToast, {
  showFailToast,
  showSuccessToast,
} from "@/components/CustomToast";
export interface Props {
  addToCart: () => void;
  featuredProducts: Product[];
}
export interface Product {
  _id: string;
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

function Home({ addToCart }: Props) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/products?page=2&limit=3"
        );
        const data = await res.json();
        setFeaturedProducts(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.log("Timer expired"),
  });

  return (
    <>
      <CustomToast />
      <div className="w-full mx-auto py-[2rem] px-[7rem] bg-orange-50">
        <Show x={0}>
          <section className="bg-cover bg-center h-[400px] flex items-center justify-center text-center text-white mb-8 bg-gradient-overlay-image">
            <div className="max-w-[500px]">
              <h1 className="text-[2.5rem] md:text-[3rem] mb-[1rem] font-bold">
                Welcome To Ozmio Store
              </h1>
              <p className="text-[1rem] md:text-[1.2rem] mb-[2rem] font-roboto-mono">
                Your One stop for gaming gears
              </p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-black text-white no-underline rounded transition-transform"
              >
                Shop Now
              </Link>
              <button
                onClick={() =>
                  showFailToast({ message: "Task failed successfully" })
                }
                className="p-4 bg-blue-500 text-white"
              >
                Toast
              </button>
            </div>
          </section>
        </Show>

        <div className="w-full text-center">
          <p className="text-[32px] text-center text-black">{`${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}</p>
        </div>
        <Show x={75} y={0}>
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
        </Show>
        <Show x={-75} y={0}>
          <section className="mb-[32px] w-full text-center text-black">
            <h2 className="text-[32px] font-semibold">Featured Products</h2>
            <div className="grid grid-cols-3">
              {featuredProducts?.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </section>
        </Show>
        <Show x={0} y={-75}>
          <section className="p-8 rounded-[8px] text-center text-black bg-gray-100">
            <h2 className="mb-4 text-[32px] font-semibold">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-roman text-[19px] font-light">
              Get the latest updates on new products and upcoming sales
            </p>
            <form className="flex flex-col md:flex-row justify-center mt-6">
              <input
                className="border border-black text-[14px] font-sans md:w-[300px] p-[.8rem] rounded-[4px] mb-2 rounded-r-none w-full"
                type="email"
                placeholder="Your email address"
                required
              />
              <Button
                text="subscribe"
                className="bg-black text-white w-full md:w-fit h-fit py-[.9rem] px-[1.8rem]"
              />
            </form>
          </section>
        </Show>
      </div>
    </>
  );
}

export default Home;
