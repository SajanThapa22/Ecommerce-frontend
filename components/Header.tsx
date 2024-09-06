import React from "react";
import UserIcon from "./UserIcon";
import Link from "next/link";

interface User {
  username: string;
}

function Header({ username }: User) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            {username ? (
              <UserIcon username={username} />
            ) : (
              <Link href="/auth">Login/Signup</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
