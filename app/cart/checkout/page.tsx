"use client";

import { monitor, gameConsole } from "@/assets/images";
import QuantityChanger from "@/components/cart/QuantityChanger";
import CustomInput from "@/components/common/CustomInput";
import Breadcrumbs from "@/components/ui/BreadCrumb";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const inputfieldDetails = [
  {
    title: "First Name",
    label: "First Name",
    name: "firstName",
    type: "text",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your first name",
      },
    },
  },
  {
    title: "Company Name",
    label: "Company Name",
    name: "companyName",
    type: "text",
    className: "",
    validation: {},
  },
  {
    title: "Street Address",
    label: "Street Address",
    name: "streetAddress",
    type: "text",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your street address",
      },
    },
  },
  {
    title: "Apartment,Floor,etc.",
    label: "Apartment,Floor,etc.",
    name: "apartmentFloor",
    type: "text",
    className: "",
    validation: {},
  },
  {
    title: "Town/City",
    label: "Town/City",
    name: "townCity",
    type: "text",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your town or city",
      },
    },
  },
  {
    title: "Phone Number",
    label: "Phone Number",
    name: "phoneNumber",
    type: "tel",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your phone number",
      },
      pattern: {
        value: /^[0-9]{10,15}$/,
        message: "Opps! Enter a valid phone number",
      },
    },
  },
  {
    title: "Email Address",
    label: "Email Address",
    name: "email",
    type: "email",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your email address",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Opps! Enter a valid email address",
      },
    },
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: "Monitor", price: 999, image: monitor, quantity: 1 },
  { id: 2, name: "Game console", price: 499, image: gameConsole, quantity: 2 },
  //   { id: 3, name: "Amazon Echo", price: 129, image: "/images/echo.jpg" },
];

const page = () => {
  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [items] = useState<CartItem[]>(initialItems);

  return (
    <section className="section-margin-x section-mt section-pt">
      <Breadcrumbs />

      <div className="mt-8 md:mt-10 lg:mt-14 xl:mt-20 mb-12">
        <h1 className="text-4xl font-medium text-black">Billing Details</h1>
      </div>

      <div className="grid grid-cols-2 justify-between gap-8 lg:gap-14 xl:gap-20">
        {/* Billing Details Form */}
        <form action="" className="flex flex-col gap-4 lg:gap-8">
          {inputfieldDetails.map((item, index) => (
            <CustomInput
              key={index}
              validation={item.validation}
              errors={errors}
              name={item.name}
              type={item.type}
              register={register}
              label={item.label}
              className={cn(
                "border-b-0 outline-none p-2 py-3 bg-foundation-gray-200"
              )}
              labelClassName="text-gray-400"
            />
          ))}
          <div className=" flex items-center">
            <input
              id="check"
              type="checkbox"
              className="accent-foundation-red-500 size-5"
            />
            <label htmlFor="check" className="text-black ml-3 text-base">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* Place Order */}
        <div className="flex flex-col gap-4 lg:gap-8">
          {/* Items List */}
          <div className="flex flex-col gap-4 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full items-center grid grid-cols-2 gap-3 min-w-[500px]"
              >
                {/* Product */}
                <div className="flex items-center gap-[22px]">
                  <div className="relative w-[50px]">
                    <Image
                      className="w-full object-contain"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-base text-black">{item.name}</span>
                </div>

                {/* price */}
                <span className="text-base text-black ml-auto">{`$${item.price}`}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col divide-y divide-gray-400">
            <div className="flex justify-between text-base text-black py-3">
              <span>Subtotal</span>
              <span>$1150</span>
            </div>
            <div className="flex justify-between text-base text-black py-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-base text-black py-3">
              <span>Total</span>
              <span>$1150</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
