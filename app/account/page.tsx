"use client";

import CustomInput from "@/components/common/CustomInput";
import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";

const inputfieldDetails = [
  {
    title: "Full Name",
    label: "Full Name",
    name: "fullName",
    type: "text",
    className: "col-span-1",
    placeholder: "e.g. John Smith",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your full name",
      },
    },
  },
  {
    title: "Address",
    label: "Address",
    name: "address",
    type: "text",
    placeholder: "e.g. Bharatpur-19, Gunjanagar",
    className: "col-span-1",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your street address",
      },
    },
  },
  {
    title: "Email Address",
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "e.g. johnsmith@example.com",
    className: "col-span-1",
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

const passwordFields = [
  {
    title: "Current Password",
    label: "Current Password",
    name: "password",
    type: "password",
    placeholder: "Current Password",
    className: "col-span-1",
    validation: {
      required: {
        value: true,
        message: "Please enter your current password",
      },
    },
  },
  {
    title: "New Password",
    label: "New Password",
    name: "newPassword",
    type: "password",
    placeholder: "New Password",
    className: "col-span-1",
    validation: {
      required: {
        value: true,
        message: "Please enter your new password",
      },
    },
  },
  {
    title: "Confirm New Password",
    label: "Confirm New Password",
    name: "newPassword",
    type: "password",
    placeholder: "Confirm New Password",
    className: "col-span-1",
    validation: {
      required: {
        value: true,
        message: "Please enter confirm new password",
      },
    },
  },
];

const Account = () => {
  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <section className="section-mt section-margin-x">
      <div className="flex items-center justify-between gap-8">
        <Breadcrumbs />
        <span className="text-black text-sm">
          Welcome!
          <span className="text-foundation-red-500 "> John Smith</span>
        </span>
      </div>

      <div className="section-mt flex justify-between gap-8 md:gap-[45px] lg:gap-[70px] xl:gap-[100px]">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-base font-medium mb-4 text-black">
              Manage my account
            </h1>
            <div className="flex flex-col ml-8 text-base text-gray-400 gap-y-2">
              <span>My profile</span>
              <span>Address Book</span>
              <span>My Payment options</span>
            </div>
          </div>

          <div>
            <h1 className="text-base font-medium mb-4 text-black">My Orders</h1>
            <div className="flex flex-col ml-8 text-base text-gray-400 gap-y-2">
              <span>My Returns</span>
              <span>My Cancellations</span>
            </div>
          </div>
        </div>

        <div className="flex-1 px-8 md:px-12 lg:px-16 xl:px-20 pb-4 md:pb-6 lg:pb-8 xl:pb-10">
          <form action="">
            <h1 className="text-foundation-red-500 text-xl font-semibold mb-5">
              Edit Your Profile
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-4">
              {inputfieldDetails.map((item, index) => (
                <CustomInput
                  key={index}
                  validation={item.validation}
                  errors={errors}
                  name={item.name}
                  type={item.type}
                  register={register}
                  label={item.label}
                  placeholder={item.placeholder}
                  className={cn(
                    "border-b-0 outline-none p-2 py-2 bg-foundation-gray-200"
                  )}
                  labelClassName="text-gray-400"
                />
              ))}
            </div>

            <Button text="Save changes" />
          </form>

          <form action="" className="mt-7">
            <h1 className="text-black text-xl font-semibold mb-5">
              Change Your Password
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-4">
              {passwordFields.map((item, index) => (
                <CustomInput
                  key={index}
                  validation={item.validation}
                  errors={errors}
                  name={item.name}
                  type={item.type}
                  register={register}
                  // label={item.label}
                  placeholder={item.placeholder}
                  className={cn(
                    "border-b-0 outline-none p-2 py-2 bg-foundation-gray-200"
                  )}
                  labelClassName="text-gray-400"
                />
              ))}
            </div>

            <Button text="Save changes" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Account;
