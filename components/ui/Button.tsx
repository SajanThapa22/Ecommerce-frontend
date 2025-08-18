import Link from "next/link";
import React from "react";

interface Props {
  pathname?: string;
  text: string;
}

const Button = ({ pathname, text }: Props) => {
  return pathname ? (
    <Link href={pathname}>
      <button className="bg-foundation-red-500 px-12 py-4 text-base font-medium text-white rounded-md">
        {text}
      </button>
    </Link>
  ) : (
    <button className="bg-foundation-red-500 px-12 py-4 text-base font-medium text-white rounded-md">
      {text}
    </button>
  );
};

export default Button;
