import React from "react";
import NavbarBig from "./NavbarBig";
import NavbarSmall from "./NavbarSmall";

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
    <>
      <div className="hidden min-[1250px]:block z-[99999] shadow-sm">
        <NavbarBig navLinks={navLinks} />
      </div>
      <div className="block min-[1250px]:hidden z-[99999] shadow-sm">
        <NavbarSmall navLinks={navLinks} />
      </div>
    </>
  );
};

export default Navbar;
