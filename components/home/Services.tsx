"use client";

import { IconCustomerService, IconDelivery, IconSecure } from "@/assets/icons";
import React from "react";
import ServiceCard from "../common/ServiceCard";

const services = [
  {
    title: "free and fast delivery",
    description: "Free delivery for all orders over $140",
    icon: IconDelivery,
  },
  {
    title: "24/7 customer service",
    description: "Friendly 24/7 customer support",
    icon: IconCustomerService,
  },
  {
    title: "money back guarantee",
    description: "We reurn money within 30 days",
    icon: IconSecure,
  },
];

const Services = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_auto_auto] justify-center items-center gap-7 md:gap-12 lg:gap-16 xl:gap-[88px] section-mt">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </section>
  );
};

export default Services;
