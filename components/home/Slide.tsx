import { IconArrowRight } from "@/assets/icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Slide {
  companyLogo: StaticImageData;
  modelName: string;
  offerTitle: string;
  modelImage: StaticImageData;
}

interface Props {
  slide: Slide;
}

const Slide = ({ slide }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-5 justify-between py-4 px-4 min-[500px]:py-6 min-[800px]:py-8 min-[1200px]:py-12 min-[1200px]:px-12 h-[270px] min-[380px]:h-[300px] md:h-[330px]">
      <div className="flex flex-col gap-3 min-[660px]:gap-5">
        <div className="flex items-center gap-3 min-[660px]:gap-6">
          <Image
            alt="apple logo"
            height={32}
            width={30}
            src={slide.companyLogo}
          />
          <span className="text-[12px] min-[660px]:text-sm text-white">
            {slide.modelName}
          </span>
        </div>

        <span className="text-wrap text-white font-semibold text-lg min-[660px]:text-xl md:text-3xl  min-[1250px]:text-5xl">
          {slide.offerTitle}
        </span>

        <Link href={"/product/:id"} className="flex gap-2 items-center">
          <span className="text-white font-medium text-sm min-[660px]:text-[16px] py-1 border-b border-b-white">
            Shop Now
          </span>
          <IconArrowRight className="w-6" />
        </Link>
      </div>

      <div className="h-full w-full relative overflow-hidden">
        <Image
          alt="iphone 14 pro"
          className="object-contain w-full h-full"
          src={slide.modelImage}
        />
      </div>
    </div>
  );
};

export default Slide;
