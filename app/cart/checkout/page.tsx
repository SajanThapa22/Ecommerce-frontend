"use client";

import { monitor, gameConsole, visacard, mastercard } from "@/assets/images";
import CustomInput from "@/components/common/CustomInput";
import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const inputfieldDetails = [
  {
    title: "Full Name",
    label: "Full Name",
    name: "fullName",
    type: "text",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your full name",
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

const Checkout = () => {
  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [items] = useState<CartItem[]>(initialItems);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <section className="section-margin-x section-mt">
      <Breadcrumbs />

      <div className="mt-8 md:mt-10 lg:mt-14 xl:mt-20 mb-12">
        <h1 className="text-4xl font-medium text-black">Billing Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 lg:gap-14 xl:gap-20">
        {/* Billing Details Form */}
        <form action="">
          <div className="flex flex-col gap-4 lg:gap-8">
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
                  "border-b-0 outline-none p-2 py-2 bg-foundation-gray-200"
                )}
                labelClassName="text-gray-400"
              />
            ))}
          </div>

          <div className=" flex items-center mt-4">
            <input
              id="check"
              type="checkbox"
              className="accent-foundation-red-500 size-5"
            />
            <label
              htmlFor="check"
              className="text-black ml-3 text-sm md:text-base select-none"
            >
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* Place Order */}
        <div className="flex flex-col gap-4 lg:gap-8 mt-8">
          {/* Items List */}
          <div className="flex flex-col gap-4 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full items-center justify-between flex gap-3"
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

          <div className="flex items-center justify-between">
            <div className=" flex items-center">
              <input
                id="bank"
                type="radio"
                name="payment-method"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="accent-foundation-red-500 size-5"
              />
              <label
                htmlFor="bank"
                className="text-black ml-3 text-base select-none"
              >
                Bank
              </label>
            </div>

            <div className="flex gap-3 items-center">
              <div className="relative overflow-hidden w-[42px] cursor-pointer">
                <Image
                  alt="visa card"
                  src={visacard}
                  className="w-full object-contain"
                />
              </div>
              <div className="relative overflow-hidden w-[42px] cursor-pointer">
                <Image
                  alt="visa card"
                  src={mastercard}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className=" flex items-center">
            <input
              id="cash-on-delivery"
              type="radio"
              name="payment-method"
              value="cash-on-delivery"
              checked={paymentMethod === "cash-on-delivery"}
              onChange={handlePaymentChange}
              className="accent-foundation-red-500 size-5"
            />
            <label
              htmlFor="cash-on-delivery"
              className="text-black ml-3 text-base select-none"
            >
              Cash on delivery
            </label>
          </div>

          <div className="w-full flex gap-4">
            <div className="rounded-md border p-2 border-gray-400">
              <input
                type="text"
                className="w-full text-sm text-black placeholder:text-gray-400 h-full focus:outline-none"
                placeholder="Coupon Code"
              />
            </div>

            <Button text="Apply coupon" />
          </div>

          <div>
            <Button text="Place Order" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
