"use client";

import { IconCart, IconHeart, IconSearch } from "@/assets/icons";
import Link from "next/link";
import Account from "./Account";
import { cn } from "@/lib/utils";
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
    <section className="section-padding-x pb-4 mt-5 flex justify-between items-center border-b border-b-foundation-gray-300">
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

        <div className="gap-3 flex items-center">
          <Link href={"/wishlist"}>
            <button
              className={cn("z-[999999] text-black rounded-full p-1 group")}
            >
              <IconHeart className="w-7" />
            </button>
          </Link>
          <Link href={"/cart"}>
            <button
              className={cn("z-[999999] text-black rounded-full p-1 group")}
            >
              <IconCart className="w-7" />
            </button>
          </Link>
          <Account />
        </div>
      </div>
    </section>
  );
};

export default NavbarBig;
