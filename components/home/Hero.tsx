import React from "react";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-[1fr_4fr] px-[135px] bg-white">
      <Sidebar />
      <Carousel />
    </section>
  );
};

export default Hero;
