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

interface Props {
  navLinks: {
    title: string;
    link: string;
  }[];
}

const NavbarSmall = ({ navLinks }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <>
      <nav className="w-full bg-white backdrop-blur-md px-[30px] py-2 text-foundation-gray-g-200 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-base text-black">Exclusive</span>
        </Link>

        <div className="flex items-center gap-4">
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
      {isOpen && (
        <div
          className={`absolute w-screen h-screen z-40 left-0 top-0 bg-black/50 backdrop-blur-md`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 bg-white z-50 w-full max-[700px]:w-3/4 max-[500px]:w-full overflow-hidden transform transition-transform duration-300 ease-in-out shadow-2xl
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button at the top */}
        <div className="flex justify-between items-center py-2 px-[30px]">
          <span className="font-bold text-base text-black">Exclusive</span>

          <button
            onClick={() => setIsOpen(false)}
            className="z-40 text-gray-500 hover:text-foundation-blue-700 transition-colors duration-300 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <IoMdClose className="text-3xl text-black" />
          </button>
        </div>

        <div className="flex flex-col items-start p-2 divide-y divide-foundation-gray-g-100">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              onClick={() => setIsOpen(false)}
              className={`relative text-xl text-black font-medium py-2 px-[30px] w-full transition-all duration-300 hover:bg-foundation-blue-50 ${
                isActive(item?.link)
                  ? "text-foundation-blue-700 font-semibold"
                  : "text-foundation-gray-g-700"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarSmall;
