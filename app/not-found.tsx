import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-fit px-4 sm:px-10 md:px-20 lg:px-[135px] py-10 sm:py-16 lg:py-20">
      <Breadcrumbs notFound={true} />

      <div className="flex flex-col mx-auto my-auto gap-10 sm:gap-16 lg:gap-20 justify-center items-center w-full h-full mt-6 sm:mt-10 lg:mt-14">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-center items-center text-center">
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] text-black font-medium">
            404 Not Found
          </span>
          <span className="text-sm sm:text-base md:text-lg text-black max-w-md">
            Your visited page not found. You may go home page.
          </span>
        </div>

        <Button text="Back to home page" pathname="/" />
      </div>
    </div>
  );
};

export default NotFound;
