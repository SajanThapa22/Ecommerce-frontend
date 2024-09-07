"use client";
import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface User {
  username: string;
}

const navs = [
  { id: 1, path: "/", text: "home" },
  { id: 2, path: "/products", text: "products" },
  { id: 3, path: "/cart", text: "cart" },
];

function Header({ username }: User) {
  const pathName = usePathname();
  const isActive = (href: string) => href === pathName;

  return (
    <header className="bg-black h-12 px-5 sticky top-0 z-[100]">
      <nav className="h-full">
        <ul className="list-none flex justify-center items-center text-white h-full">
          {navs.map((link) => (
            <li className="h-full flex items-center" key={link.id}>
              <Link
                href={link.path}
                className={`font-bold uppercase tracking-[1px] h-full flex items-center w-full px-5 ${
                  isActive(link.path) ? "bg-gray-100 text-black" : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li className="h-full flex items-center">
            {username ? (
              <UserIcon username={username} />
            ) : (
              <Link
                href="/auth"
                className="font-bold uppercase tracking-[1px] h-full flex items-center px-5"
              >
                Login/Signup
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
