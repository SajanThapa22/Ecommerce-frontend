import Link from "next/link";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof buttonVariants> {
  pathname?: string;
  text: string;
}

const buttonVariants = cva(
  "px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 text-sm md:text-base font-medium text-white rounded-md text-nowrap w-fit",
  {
    variants: {
      variant: {
        primary: "bg-foundation-red-500",
        secondary: "bg-foundation-green-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ pathname, text, variant }: Props) => {
  const className = buttonVariants({ variant });

  return pathname ? (
    <Link href={pathname}>
      <button className={className}>{text}</button>
    </Link>
  ) : (
    <button className={className}>{text}</button>
  );
};

export default Button;
