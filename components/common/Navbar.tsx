import { IconCart, IconHeart, IconSearch } from "@/public/assets/icons";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "contact",
    link: "/contact",
  },
  {
    title: "about",
    link: "/about",
  },
  {
    title: "sign up",
    link: "/signup",
  },
];

const Navbar = () => {
  return (
    <section className="px-[135px] pb-4 mt-5 flex justify-between items-center border-b border-b-foundation-gray-300">
      <span className="font-bold text-black text-2xl">Exclusive</span>
      <nav className="flex gap-12 justify-between items-center">
        {navLinks.map((item, index) => (
          <Link
            className="text-base text-black capitalize"
            href={item.link}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center gap-6 items-center">
        <div className="w-fit bg-foundation-gray-200 rounded-md px-5 py-[10px] gap-[34px] flex items-center">
          <input
            placeholder="What are you looking for?"
            className="w-auto border-none outline-none focus:outline-none bg-transparent placeholder-gray-400 text-foundation-gray-400"
            size={22}
          />
          <IconSearch className="text-black text-2xl" />
        </div>

        <div className="gap-4 flex items-center">
          <IconHeart className="text-[32px] text-black cursor-pointer" />
          <IconCart className="text-[32px] text-black cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
