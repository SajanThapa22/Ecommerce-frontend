import React from "react";
import Button from "../ui/Button";
import { speaker } from "@/assets/images";
import Image from "next/image";
import BannerTimer from "../ui/BannerTimer";

const EnhanceYourExperience = () => {
  return (
    <section className="bg-black p-5 md:p-8 lg:p-11 xl:p-14 grid grid-cols-2 gap-4 section-margin-x section-mt">
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-8">
        <span className="text-foundation-green-500 text-base font-semibold">
          Categories
        </span>
        <span className="text-lg min-[380px]:text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold">
          Enhance Your Music Experience
        </span>
        <BannerTimer className="hidden min-[800px]:block" />
        <Button text="Buy Now!" variant="secondary" />
      </div>

      <div className="flex flex-col h-full gap-2 items-center justify-between">
        <BannerTimer sm={true} className="block min-[800px]:hidden" />
        <div className="relative overflow-hidden">
          <Image
            src={speaker}
            alt="speaker"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default EnhanceYourExperience;
