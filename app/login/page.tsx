import Button from "@/components/Button";
import Logo from "../assets/img/messenger.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState, useEffect, FormEvent } from "react";

interface FormData {
  email: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const Login = () => {
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = async (e: FormData) => {
    if (isValid) {
      try {
        const res = await fetch("http://localhost:3000/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center bg-gray-400 px-10">
      <form className="rounded-[16px] bg-bgComp px-5 py-[30px] w-[350px] xl:w-[400px] 2xl:w-[600px] mx-auto my-auto grid gap-10 2xl:gap-14">
        <div className="w-full flex flex-col gap-3 2xl:gap-5 justify-center text-center items-center">
          <div className="text-center">
            <p className="text-[26px] text-txtClr">Login to get started</p>
          </div>
        </div>

        <div className="grid gap-3 text-center">
          {error && <p className="text-red-700 text-[18px]">{error}</p>}
          <div>
            <input
              id="email"
              {...register("email", { required: true })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-txtClr autofill:bg-transparent focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="Email"
              type="text"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700">Please enter your email</p>
            )}
          </div>

          <div>
            <input
              id="password"
              {...register("password", { required: true, minLength: 7 })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-txtClr focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="Password"
              type="password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-700">Please enter the password</p>
            )}
          </div>
        </div>
        <div className="grid gap-3">
          <Button text="Login" type="submit" style="bg-red-100" />
          {/*           
          <p className="text-[14px] font-[300] text-txtClr">
            Don't have an account yet?
            <Link className="text-blue-500 underline ml-2" ="/register">
              Sign up
            </Link>
          </p> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
