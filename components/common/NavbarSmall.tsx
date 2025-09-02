"use client";

// import {
//   IconCart,
//   IconHeart,
//   IconSearch,
//   IconUser,
// } from "@/public/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Account from "./Account";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

interface Props {
  navLinks: {
    title: string;
    link: string;
    icon: IconType;
  }[];
}

const NavbarSmall = ({ navLinks }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <>
      <nav className="w-full bg-white px-[16px] py-2 text-foundation-gray-g-200 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl text-black">A2Z shop</span>
        </Link>

        <div className="flex items-center gap-2">
          <Account />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foundation-gray-g-700 hover:text-foundation-blue-700 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FiMenu className="text-2xl text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* {isOpen && (
        <div
          className={`absolute w-screen h-screen z-40 left-0 top-0 bg-black/50 backdrop-blur-md`}
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 bg-foundation-red-500 z-[99999999] w-1/2 max-[700px]:w-3/4 max-[500px]:w-full overflow-hidden transform transition-transform duration-300 ease-in-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button at the top */}
        <div className="flex justify-between items-center py-2 px-[30px]">
          <span className="font-bold text-xl text-white">A2Z Shop</span>

          <button
            onClick={() => setIsOpen(false)}
            className="z-40 text-gray-500 hover:text-foundation-blue-700 transition-colors duration-300 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <IoMdClose className="text-3xl text-white" />
          </button>
        </div>

        <ul
          className={cn(
            "flex flex-col items-start p-2 divide-y divide-gray-200"
          )}
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <li
                className={cn(
                  "flex items-center gap-5 capitalize text-gray-400 font-medium py-3 px-5 w-full transition-all duration-300 hover:bg-foundation-blue-50",
                  isActive(item?.link)
                    ? "text-foundation-blue-700 font-semibold text-white"
                    : "text-foundation-gray-g-700"
                )}
              >
                <item.icon className="text-2xl" />
                <span className="text-base">{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarSmall;
