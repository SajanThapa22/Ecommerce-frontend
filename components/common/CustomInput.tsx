import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { Obj } from "@/modules/types";
import { cn } from "@/lib/utils";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: Obj;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errors: FieldErrors<FieldValues>;
}

const CustomInput = ({
  className,
  labelClassName,
  inputClassName,
  label,
  type,
  validation,
  name,
  register,
  leftIcon,
  rightIcon,
  errors,
  ...props
}: Props) => {
  return (
    <div className={cn("flex w-full  flex-col gap-y-[6px] h-fit")}>
      {label && (
        <label
          className={cn(
            "font-normal text-base text-gray-600 select-none",
            labelClassName
          )}
        >
          {label}
          {validation?.required?.value && label && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      {type === "textarea" ? (
        <div
          className={cn(
            "rounded-lg border border-gray-50 text-base px-4  py-1 text-gray-800 items-center flex gap-2 bg-white",
            className
          )}
        >
          <textarea
            placeholder={label}
            rows={5}
            className={cn(
              " placeholder:text-base w-full  placeholder:text-gray-400 outline-none",
              inputClassName
            )}
            {...register(name, validation)}
            {...props}
          />
        </div>
      ) : (
        <div
          className={cn(
            " text-base py-1 bg-white text-foundation-gray-400 items-center flex gap-2  ",
            className
          )}
        >
          {leftIcon && leftIcon}
          <input
            className={cn(
              "bg-transparent placeholder:text-base w-full placeholder:text-gray-400 outline-none border-none focus:outline-none",
              inputClassName
            )}
            {...register(name, validation)}
            {...props}
          />
          {rightIcon && rightIcon}
        </div>
      )}
      <div>
        {errors && errors[name] && (
          <p className="ml-2 text-xs text-red-500">
            {errors[name]?.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
