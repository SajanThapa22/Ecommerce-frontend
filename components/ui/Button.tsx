import Link from "next/link";
import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface Props extends VariantProps<typeof buttonVariants> {
  pathname?: string;
  text?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const buttonVariants = cva(
  "px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 text-base font-medium text-white rounded-md text-nowrap w-fit",
  {
    variants: {
      variant: {
        primary: "bg-foundation-red-500 hover:bg-foundation-red-600",
        secondary: "bg-foundation-green-500 hover:bg-green-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({
  pathname,
  text,
  variant,
  children,
  onClick,
  className,
}: Props) => {
  const cName = buttonVariants({ variant });

  return pathname ? (
    <Link href={pathname}>
      <button onClick={onClick} className={cn(cName, className)}>
        {text}
        {children}
      </button>
    </Link>
  ) : (
    <button onClick={onClick} className={cn(cName, className)}>
      {text}
      {children}
    </button>
  );
};

export default Button;
