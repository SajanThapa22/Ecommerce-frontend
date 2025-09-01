"use client";

import { IconCart, IconHeart, IconSearch } from "@/assets/icons";
import Link from "next/link";
import Account from "./Account";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  navLinks: {
    title: string;
    link: string;
  }[];
}

const NavbarBig = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <section className="section-padding-x pb-4 mt-5 flex justify-between items-center border-b border-b-foundation-gray-300">
      <span className="font-bold text-black text-2xl">A2Z Shop</span>
      <nav>
        <ul className="flex gap-12 justify-between items-center">
          {navLinks.map((item, index) => (
            <Link href={item.link} key={index}>
              <li
                className={cn(
                  "capitalize text-black",
                  isActive(item?.link) ? "border-b-[2px] border-b-gray-400" : ""
                )}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
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
            <div className={cn("relative")}>
              <button
                className={cn("z-[999999] text-black rounded-full p-1 group")}
              >
                <IconCart className="w-7" />
              </button>

              {3 > 2 && (
                <div
                  className={cn(
                    "size-4 text-[10px] aspect-square rounded-full bg-foundation-red-500 text-white text-center absolute top-0 right-0"
                  )}
                >
                  {2}
                </div>
              )}
            </div>
          </Link>
          <Account />
        </div>
      </div>
    </section>
  );
};

export default NavbarBig;
