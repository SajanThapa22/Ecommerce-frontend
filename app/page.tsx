"use client";

import "react-toastify/dist/ReactToastify.css";
import TopBanner from "@/components/common/TopBanner";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";

function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
    </>
  );
}

export default Home;
