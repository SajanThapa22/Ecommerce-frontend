"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  const password = watch("password");
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const { confirmPassword, ...rest } = data;
    try {
      if (isValid) {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rest),
        });
        if (res.status === 200) {
          console.log("User regeistered successfully!");
          router.push("/login");
        }
      }
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
          <div className="text-center">
            <p className="text-[26px] text-txtClr">Register</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div>
            <input
              id="name"
              {...register("name", { required: true, minLength: 5 })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-black autofill:bg-transparent focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="full name"
              type="text"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700 ml-2">Please enter your full name</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-red-700 ml-2">
                Full name should be alteast 5 characters long
              </p>
            )}
          </div>

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
              {...register("password", { required: true, minLength: 7 })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-black focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="Password"
              type="password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-700 ml-2">Please enter the password</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-700 ml-2">
                Password must be 7 characters long
              </p>
            )}
          </div>

          <div>
            <input
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                minLength: 7,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="border border-[#cbcaca] px-4 py-2 rounded-[12px] text-black focus:outline-none focus:border-primary w-full bg-bgComp"
              placeholder="confirmPassword"
              type="password"
            />
            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-700 ml-2">
                Please enter the confirm password
              </p>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <p className="text-red-700 ml-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-3">
          <Button text="Signup" type="submit" style="" />

          <p className="text-[14px] font-[300] text-left">
            Have an account already?
            <Link className="text-blue-500 underline ml-2" href="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
