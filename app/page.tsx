import "react-toastify/dist/ReactToastify.css";
import Hero from "@/components/home/Hero";
import FlashSales from "@/components/home/FlashSales";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import EnhanceYourExperience from "@/components/home/EnhanceYourExperience";
import ExploreOurProducts from "@/components/home/ExploreOurProducts";
import NewArrival from "@/components/home/NewArrival";
import Services from "@/components/home/Services";

function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <EnhanceYourExperience />
      <ExploreOurProducts />
      <NewArrival />
      <Services />
      <div className="mb-32"></div>
    </>
  );
}

export default Home;
