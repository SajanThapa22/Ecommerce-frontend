"use client";
import Button from "@/components/Button";
import { access } from "fs";
import Link from "next/link";
import { useForm } from "react-hook-form";
interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const { accessToken } = await res.json();
      console.log(accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[16px] bg-gray-400 px-5 py-[30px] w-[350px] xl:w-[400px] 2xl:w-[600px] mx-auto my-auto grid gap-10 2xl:gap-14"
      >
        <div className="w-full flex flex-col gap-3 2xl:gap-5 justify-center text-center items-center">
          <div className="">
            <p className="text-[26px] ">Login</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div>
            <input
              id="email"
              {...register("email", { required: true })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-black autofill:bg-transparent focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="Email"
              type="text"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 ml-2">Please enter your email</p>
            )}
          </div>

          <div>
            <input
              id="password"
              {...register("password", { required: true })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-black focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-700 ml-2">Please enter the password</p>
            )}
          </div>
        </div>
        <div className="grid gap-3">
          <Button text="Login" type="submit" style="" />

          <p className="text-[14px] font-[300] text-left">
            Don't have an account yet?
            <Link className="text-blue-500 underline ml-2" href="/register">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
