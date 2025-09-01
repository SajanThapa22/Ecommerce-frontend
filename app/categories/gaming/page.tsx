"use client";

import { IconDelivery, IconHeart, IconReturn } from "@/assets/icons";
import {
  psController,
  psController1,
  psController2,
  psController3,
  psController4,
} from "@/assets/images";
import Rating from "@/components/ui/Rating";
import { cn } from "@/lib/utils";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, MouseEvent } from "react";

interface ProductColor {
  hex: string;
  images: StaticImageData[];
}

interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  images: StaticImageData[];
  colors: ProductColor[];
  sizes?: string[];
  inStock: true;
}

const product: Product = {
  name: "Havic HV G-92 Gamepad",
  price: 192,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  rating: 4,
  reviews: 150,
  images: [],
  colors: [
    {
      hex: "#A0BCE0",
      images: [
        psController,
        psController1,
        psController2,
        psController3,
        psController4,
      ],
    },
    // {
    //   hex: "#000000",
    //   images: ["/images/gamepad/black1.png", "/images/gamepad/black2.png"],
    // },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  inStock: true,
};

const Page = () => {
  const [image, setImage] = useState<StaticImageData>(
    product.images.length !== 0
      ? product.images[0]
      : product.colors[0].images[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const increaseQuantity = () => {
    quantity < 10 && setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <div className="my-10 mx-10 grid grid-cols-[5fr_3fr] items-stretch gap-[70px]">
      {/* Left section - Images */}
      <div className="grid grid-cols-[1fr_5fr] gap-[30px] h-full relative">
        {/* Thumbnails */}
        <div className="h-full w-full max-h-full overflow-y-auto grid grid-rows-5 gap-4">
          {product.colors?.map((item) =>
            item.images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "p-3 overflow-hidden relative w-full bg-gray-100 rounded-lg cursor-pointer ",
                  image === _ && "border border-gray-300"
                )}
                onClick={() => setImage(_)}
              >
                <Image
                  alt="product"
                  className="object-contain w-full h-full"
                  src={_}
                />
              </div>
            ))
          )}
        </div>

        {/* Preview Image */}
        <div className="relative h-full">
          <div
            ref={imageRef}
            className="px-10 h-full overflow-hidden relative rounded-lg bg-gray-100 flex items-center justify-center cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              alt="product"
              className="object-contain w-full h-full"
              src={image}
            />
          </div>

          {/* Zoom Window */}
          {isZooming && (
            <div
              className="absolute top-0 -right-[420px] w-96 h-96 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg z-10"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "200%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          )}
        </div>
      </div>

      {/* Product details */}
      <div className="h-fit">
        <h1 className="font-semibold text-2xl text-black mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4">
          <Rating rating={product.rating} />
          <span className="text-gray-400">{`(${product.reviews} reviews)`}</span>
          <div className="w-[2px] h-[20px] bg-gray-400"></div>
          <span
            className={cn(
              "text-sm",
              product.inStock
                ? "text-foundation-green-500"
                : "text-foundation-red-500"
            )}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <h2 className="text-2xl text-black mt-4 mb-4">
          {`$${product.price.toFixed(2)}`}
        </h2>
        <h2 className="text-sm text-black">{product.description}</h2>

        <div className="h-[1px] bg-gray-400 mb-6 mt-6"></div>

        {product.colors && (
          <div className="flex items-center gap-6 mb-6">
            <span className="text-xl text-black leading-none pb-1">
              Colours:
            </span>

            <div className="flex items-center gap-2">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item.hex }}
                  className={cn(
                    "size-5 rounded-full cursor-pointer border-2 border-gray-300 hover:border-foundation-red-500"
                  )}
                ></div>
              ))}
            </div>
          </div>
        )}

        {product.sizes && (
          <div className="flex items-center gap-6 mb-6">
            <span className="text-xl text-black leading-none pb-1">Size:</span>

            <div className="flex gap-4 items-center">
              {product.sizes.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "size-8 text-black flex items-center justify-center text-sm rounded-md border border-gray-400 hover:border-foundation-red-500 hover:bg-foundation-red-500 hover:text-white cursor-pointer transition-colors"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-6">
          {/* Quantity change */}
          <div className="overflow-hidden flex items-center rounded-sm text-black border border-gray-400">
            <button
              onClick={decreaseQuantity}
              className="p-3 active:bg-foundation-red-500 active:text-white text-xl border-r border-r-gray-400 hover:bg-gray-100 transition-colors"
            >
              <FiMinus />
            </button>
            <div className="px-7">{quantity}</div>
            <button
              onClick={increaseQuantity}
              className="p-3 active:bg-foundation-red-500 active:text-white text-xl border-l border-l-gray-400 hover:bg-gray-100 transition-colors"
            >
              <IoAdd />
            </button>
          </div>

          {/* Buy Now Button */}
          <button className="flex-1 py-3 bg-foundation-red-500 hover:bg-foundation-red-600 rounded-md text-white transition-colors">
            Buy Now
          </button>

          {/* Add to wishlist button */}
          <button className="p-[14px] rounded-md text-black border border-gray-400 hover:bg-gray-100 transition-colors">
            <IconHeart />
          </button>
        </div>

        <div className="rounded-lg border border-gray-400 divide-y divide-gray-400">
          <div className="px-4 pt-6 pb-4 flex gap-4">
            <IconDelivery className="text-black w-10" />
            <div className="flex flex-col gap-2">
              <span className="text-base text-black font-medium">
                Free Delivery
              </span>
              <span className="text-xs font-medium text-black text-wrap">
                Enter your postal code for Delivery Availability Free 30 Days
                Delivery Returns. Details
              </span>
            </div>
          </div>

          <div className="px-4 pt-6 pb-4 flex gap-4">
            <IconReturn className="text-black w-10" />
            <div className="flex flex-col gap-2">
              <span className="text-base text-black font-medium">
                Return Policy
              </span>
              <span className="text-xs font-medium text-black text-wrap">
                Enter your postal code for Delivery Availability Free 30 Days
                Delivery Returns. Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
