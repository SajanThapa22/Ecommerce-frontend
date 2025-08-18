"use client";

import {
  IconCart,
  IconHeart,
  IconSearch,
  IconUser,
} from "@/public/assets/icons";
import Link from "next/link";
// import { usePathname } from "next/navigation";

interface Props {
  navLinks: {
    title: string;
    link: string;
  }[];
}

const NavbarBig = ({ navLinks }: Props) => {
  //   const pathname = usePathname();
  //   const isActive = (href: string) => href === pathname;

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
        <form className="w-fit bg-foundation-gray-200 rounded-md px-5 py-[10px] gap-[34px] flex items-center">
          <input
            placeholder="What are you looking for?"
            className="w-auto border-none outline-none focus:outline-none bg-transparent placeholder-gray-400 text-foundation-gray-400"
            size={22}
          />
          <button type="submit">
            <IconSearch className="text-black text-2xl" />
          </button>
        </form>

        <div className="gap-4 flex items-center">
          <IconHeart className="text-[28px] text-black cursor-pointer" />
          <IconCart className="text-[28px] text-black cursor-pointer" />
          <IconUser className="text-[28px] text-black cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default NavbarBig;
