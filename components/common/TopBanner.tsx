import React from "react";
import LanguageDropdown from "./LanguageDropdown";

const TopBanner = () => {
  return (
    <div className="relative hidden lg:block">
      <div className="p-3 bg-black text-white text-sm flex justify-center gap-2 w-full items-center">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <span className="underline font-semibold">ShopNow</span>
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-0  mr-6 md:mr-10 lg:mr-14 xl:mr-[136px]">
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default TopBanner;
