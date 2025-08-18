import "react-toastify/dist/ReactToastify.css";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";

function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <div className="mb-96"></div>
    </>
  );
}

export default Home;
