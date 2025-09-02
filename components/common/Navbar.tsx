"use client";

import React from "react";
import NavbarBig from "./NavbarBig";
import NavbarSmall from "./NavbarSmall";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

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

const smallNavLinks = [
  {
    title: "home",
    link: "/",
    icon: RiHome2Line,
  },
  {
    title: "contact",
    link: "/contact",
    icon: MdOutlineLocalPhone,
  },
  {
    title: "about",
    link: "/about",
    icon: BsExclamationCircle,
  },
  {
    title: "sign up",
    link: "/signup",
    icon: FiUser,
  },
  {
    title: "cart",
    link: "/cart",
    icon: BsCart3,
  },
  {
    title: "wishlist",
    link: "/wishlist",
    icon: IoMdHeartEmpty,
  },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden min-[1250px]:block shadow-sm">
        <NavbarBig navLinks={navLinks} />
      </div>
      <div className="block min-[1250px]:hidden shadow-sm">
        <NavbarSmall navLinks={smallNavLinks} />
      </div>
    </>
  );
};

export default Navbar;
