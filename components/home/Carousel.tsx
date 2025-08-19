"use client";

import Slider from "react-slick";
import {
  appleLogo,
  chair,
  gameConsole,
  keyboard,
  laptop,
  monitor,
} from "@/assets/images";
import { useState } from "react";
import Slide from "./Slide";

const slideData = [
  {
    companyLogo: appleLogo,
    modelName: "IPS LCD Monitor",
    offerTitle: "Special Discount Available",
    modelImage: monitor,
  },
  {
    companyLogo: appleLogo,
    modelName: "IdeaPad Laptop",
    offerTitle: "Limited Time Offer",
    modelImage: laptop,
  },
  {
    companyLogo: appleLogo,
    modelName: "AK-900 Keyboard",
    offerTitle: "Grab 15% Off",
    modelImage: keyboard,
  },
  {
    companyLogo: appleLogo,
    modelName: "Game Console",
    offerTitle: "Holiday Sale Deal",
    modelImage: gameConsole,
  },
  {
    companyLogo: appleLogo,
    modelName: "Ergonomic Chair",
    offerTitle: "Save Big on Comfort",
    modelImage: chair,
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setActiveIndex(next),

    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "5px",
          left: 0,
          height: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full border-2 border-foundation-gray-300 transition-colors duration-300 ${
          i === activeIndex ? "bg-foundation-red-500" : "bg-foundation-gray-300"
        }`}
      ></div>
    ),

    dotsClass: "slick-dots flex gap-3",
  };

  return (
    <div className="p-0 min-[1250px]:pl-11 min-[1250px]:pt-10 h-full overflow-hidden">
      <Slider {...settings} className="h-full bg-black">
        {slideData.map((item, index) => (
          <Slide slide={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

// const Slide = () => (
//   <div className="relative w-full h-[350px] overflow-hidden">
//     <Image src={sideImage} alt="slide" fill className="object-cover" />
//   </div>
// );

export default Carousel;
