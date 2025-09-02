"use client";

import { IconEmail, IconPhone } from "@/assets/icons";
import CustomInput from "@/components/common/CustomInput";
import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";

const inputfieldDetails = [
  {
    title: "Your Name",
    name: "yourName",
    type: "text",
    className: "",
    placeholder: "Your Name",
    validation: {
      required: {
        value: true,
        message: "Please enter your name",
      },
    },
  },

  {
    title: "Your Email",
    name: "email",
    type: "email",
    placeholder: "Your Email",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Please enter your your email",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid Your Email",
      },
    },
  },
  {
    title: "Your Phone",
    name: "phone",
    type: "text",
    placeholder: "Your Phone",
    className: "col-span-1 lg:col-span-2 xl:col-span-1",
    validation: {
      required: {
        value: true,
        message: "Please enter your phone",
      },
    },
  },
  {
    title: "Your Message",
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
    className: "col-span-1 lg:col-span-2 xl:col-span-3",
    validation: {
      required: {
        value: true,
        message: "Please enter your message",
      },
    },
  },
];

const contactDetails = [
  {
    icon: IconPhone,
    title: "Call To Us",
    description: "We are available 24/7, 7 days a week.",
    type: "Phone",
    phoneOrEmail: ["8801611112222"],
  },
  {
    icon: IconEmail,
    title: "Write To Us",
    description: "Fill out our form and we will contact you within 24 hours.",
    type: "Email",
    phoneOrEmail: ["customer@exclusive.com", "support@exclusive.com"],
  },
];

const Contact = () => {
  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <section className="section-mt section-margin-x">
      <div className="flex items-center justify-between gap-8">
        <Breadcrumbs />
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-7 xl:gap-8 section-mt">
        <div className="max-w-[350px] flex flex-col text-black divide-y divide-gray-400 p-4 md:p-8">
          {contactDetails.map((item, index) => (
            <div className={cn("pb-8", index !== 0 && "pt-8")} key={index}>
              <div className="flex items-center gap-4">
                <div className="bg-foundation-red-500 rounded-full size-10 flex items-center justify-center">
                  <item.icon className="size-5 text-white" />
                </div>

                <span className="select-none text-base font-medium">
                  {item.title}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-y-4">
                <span>{item.description}</span>
                {item.phoneOrEmail.map((i, index) => (
                  <span key={index}>{`${item.type}: ${i}`}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form action="" className="p-4 md:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 xl:gap-y-8 mb-4">
            {inputfieldDetails.map((item, index) => (
              <div key={index} className={cn(item?.className)}>
                <CustomInput
                  key={index}
                  validation={item.validation}
                  errors={errors}
                  name={item.name}
                  type={item.type}
                  register={register}
                  placeholder={item.placeholder}
                  inputClassName={cn("bg-transparent")}
                  className={cn(
                    item.className,
                    "border-b-0 outline-none p-2 py-2 bg-foundation-gray-200"
                  )}
                  labelClassName="text-gray-400"
                />
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end">
            <Button text="Send Message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
