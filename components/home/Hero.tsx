import React from "react";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 min-[1250px]:grid-cols-[1fr_4fr] p-0 min-[1250px]:px-[135px] mb-[100px] bg-white">
      <Sidebar />
      <Carousel />
    </section>
  );
};

export default Hero;
