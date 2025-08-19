import Link from "next/link";
import React from "react";

interface Props {
  pathname?: string;
  text: string;
}

const Button = ({ pathname, text }: Props) => {
  return pathname ? (
    <Link href={pathname}>
      <button className="bg-foundation-red-500 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 text-sm md:text-base font-medium text-white rounded-md">
        {text}
      </button>
    </Link>
  ) : (
    <button className="bg-foundation-red-500 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 text-sm md:text-base font-medium text-white rounded-md">
      {text}
    </button>
  );
};

export default Button;
