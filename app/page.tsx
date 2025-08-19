import "react-toastify/dist/ReactToastify.css";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";
import BrowseByCategory from "@/components/home/BrowseByCategory";

function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <div className="mb-96"></div>
    </>
  );
}

export default Home;
