"use client";

import { sideImage } from "@/assets/images";
import CustomInput from "@/components/common/CustomInput";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const inputfieldDetails = [
  {
    title: "Email",
    name: "email",
    placeholder: "Email or Phone Number",
    type: "email",
    className: "",
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Opps! Enter your email",
      },
    },
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "input",
    className: "",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your password",
      },
    },
  },
];

const Login = () => {
  const {
    register,
    // handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <section className="mt-8 md:mt-10 lg:mt-14 xl:mt-[70px] grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-10 items-center">
      <div className="relative overflow-hidden w-full h-full">
        <Image
          src={sideImage}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>

      <form action="" className="section-padding-x max-w-[600px] mx-auto">
        <div className="text-black">
          <h1 className="text-xl min-[350px]:text-2xl lg:text-3xl xl:text-4xl mb-6 font-medium">
            Create an account
          </h1>
          <span className="text-base">Enter your details below</span>
        </div>

        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          {inputfieldDetails.map((item, index) => (
            <CustomInput
              key={index}
              validation={item.validation}
              errors={errors}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              register={register}
            />
          ))}
        </div>

        <div className="mt-14">
          <Link href={"/forgotpassword"}>
            <p className="text-sm text-gray-600 w-full text-right underline-offset-4 hover:underline">
              Forgot Password ?
            </p>
          </Link>
          <Button text="Login" className="w-full mt-3" />
        </div>

        <div className="text-base text-center mt-4 md:gap-6 lg:gap-8">
          <span className="text-gray-500">{`Don't have an account?`}</span>
          <Link href={"/login"}>
            <span className="font-medium ml-4 text-gray-600 underline underline-offset-4">
              Sign up
            </span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
