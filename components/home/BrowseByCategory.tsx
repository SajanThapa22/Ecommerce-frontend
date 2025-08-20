"use client";

import React, { useRef } from "react";
import Navigators from "../ui/Navigators";
import CategoryCard from "./CategoryCard";

import {
  CategoryCamera,
  CategoryCellphone,
  CategoryComputer,
  CategoryGamepad,
  CategoryHeadphone,
  CategoryPrinter,
  CategorySmartWatch,
  CategoryTv,
} from "@/assets/icons";
import SectionHeader from "../ui/SectionHeader";

const categories = [
  { name: "Phones", icon: CategoryCellphone },
  { name: "Computers", icon: CategoryComputer },
  { name: "SmartWatch", icon: CategorySmartWatch },
  { name: "Camera", icon: CategoryCamera },
  { name: "Headphones", icon: CategoryHeadphone },
  { name: "Gaming", icon: CategoryGamepad },
  { name: "TV", icon: CategoryTv },
  { name: "Printers", icon: CategoryPrinter },
];

const BrowseByCategory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-mt section-margin-x relative">
      <SectionHeader
        heading="Browse by Category"
        subHeading="Categories"
        rightChild={<Navigators scrollRef={scrollRef} />}
      />

      <div
        ref={scrollRef}
        className="w-full p-[2px] overflow-y-scroll grid grid-flow-col auto-cols-[100px] lg:auto-cols-[140] xl:auto-cols-[154px] gap-4 md:gap-7 lg:gap-[30px] pr-8 hide-scrollbar scroll-smooth"
      >
        {categories.map((item, index) => (
          <CategoryCard key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
