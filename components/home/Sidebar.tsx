import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const sidebarLinks = [
  { title: "Electronics", link: "/electronics" },
  { title: "home & lifestyle", link: "/home&lifestyle" },
  { title: "medicine", link: "/medicine" },
  { title: "sports & outdoor", link: "/sports&outdoor" },
  { title: `baby's & toys`, link: "/babys&toys" },
  { title: "groceries & pets", link: "groceries&pets" },
  { title: "health & beauty", link: "/health&beauty" },
];

const Sidebar = () => {
  return (
    <div className="hidden min-[1250px]:block">
      <nav className="border-r flex flex-col pr-4 pt-10 gap-4 border-r-foundation-gray-300 text-foundation-gray-400">
        <span className="flex items-center justify-between gap-2 cursor-pointer hover:text-black">
          <span>{`Woman's fashion`}</span>
          <FaChevronRight />
        </span>
        <span className="flex items-center justify-between gap-2 cursor-pointer hover:text-black">
          <span>{`Men's Fashion`}</span>
          <FaChevronRight />
        </span>
        {sidebarLinks.map((item, index) => (
          <Link key={index} href={item.link} className="capitalize">
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
