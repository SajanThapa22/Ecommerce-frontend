import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";

interface User {
  username: string;
}

const navs = [
  { id: 1, path: "/", text: "home" },
  { id: 1, path: "/products", text: "products" },
  { id: 1, path: "/cart", text: "cart" },
];

function Header({ username }: User) {
  return (
    <header className="bg-black py-3 px-5 sticky top-0">
      <nav>
        <ul className="list-none flex justify-center gap-[60px] items-center text-white">
          {navs.map((link) => (
            <li key={link.id}>
              <Link
                className="font-bold uppercase tracking-[1px] hover:text-[#f0f0f0]"
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            {username ? (
              <UserIcon username={username} />
            ) : (
              <Link
                className="font-bold uppercase tracking-[1px] hover:text-[#f0f0f0]"
                href="/auth"
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
