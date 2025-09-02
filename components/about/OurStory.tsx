import { aboutSectionImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../ui/BreadCrumb";

const OurStory = () => {
  return (
    <section className=" px-4 md:px-8 lg:pr-0 lg:pl-[100px] xl:pl-[135px] ">
      <div className="mt-5 md:mt-7 lg:mt-10 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-x-[50px] xl:gap-x-[75px] gap-y-5 items-center">
        <div className="max-w-[525px]">
          <h1 className="text-2xl md:text-[34px] lg:text-[44px] xl:text-[54px] font-semibold text-black">
            Our Story
          </h1>

          <p className="mt-5 md:mt-7 lg:mt-10 text-sm md:text-base text-black">
            Launced in 2025, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Nepal. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 customers across the
            region.
          </p>

          <p className="text-sm md:text-base text-black mt-4 md:mt-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="relative overflow-hidden lg:order-2 order-[-1]">
          <Image
            className="w-full h-full object-cover"
            src={aboutSectionImage}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
