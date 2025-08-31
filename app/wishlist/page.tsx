"use client";

import { wishlistItems } from "@/api/types/Product";
import Button from "@/components/ui/Button";
import WishlistItem from "@/components/wishlist/WishlistItem";
import React from "react";

const page = () => {
  return (
    <section className="section-pt section-margin-x">
      <div className="flex items-center justify-between gap-8">
        <span className="text-black text-xl">{`Wishlist (${wishlistItems.length})`}</span>
        <Button text="Move all to Cart" variant="transparent" />
      </div>

      <div className="mt-5 sm:mt-7 md:mt-10 lg:mt-12 xl:mt-16">
        <div className="w-full overflow-y-scroll gap-4 md:gap-6 lg:gap-8 grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlistItems.map((item, index) => (
            <WishlistItem key={index} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
