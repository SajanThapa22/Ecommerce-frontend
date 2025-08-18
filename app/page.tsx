"use client";

import "react-toastify/dist/ReactToastify.css";
import TopBanner from "@/components/common/TopBanner";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";

function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <FlashSales />
      <div className="mb-96"></div>
    </>
  );
}

export default Home;
