"use client";

import {
  IconDollar,
  IconMoneybag,
  IconShop,
  IconShoppingbag,
} from "@/assets/icons";
import React from "react";
import ServiceCard from "../common/ServiceCard";
import { cn } from "@/lib/utils";

const acheivements = [
  {
    icon: IconShop,
    title: "10.5k",
    description: "Sellers active our site",
  },
  {
    icon: IconDollar,
    title: "33k",
    description: "Monthly Product Sale",
  },
  {
    icon: IconShoppingbag,
    title: "45.5k",
    description: "Customer active in our site",
  },
  {
    icon: IconMoneybag,
    title: "25k",
    description: "Annual gross sale in our site",
  },
];

const Achievements = () => {
  return (
    <section className="mt-8 md:mt-[50px] lg:mt-[100px] xl:mt-[140px] section-padding-x">
      <div className="w-full gap-4 lg:gap-[30px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {acheivements.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            hoverEFfect
          />
        ))}
      </div>
    </section>
  );
};
export default Achievements;
