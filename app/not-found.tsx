import Breadcrumbs from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-fit px-[135px] py-20">
      <Breadcrumbs notFound={true} />

      <div className="flex flex-col mx-auto my-auto gap-20 justify-center items-center w-full h-full">
        <div className="flex flex-col gap-5 justify-center items-center">
          <span className="text-[120px] text-black font-medium">
            404 Not Found
          </span>
          <span className="text-base text-black">
            Your visited page not found. You may go home page.
          </span>
        </div>

        <Button text="Back to home page" pathname="/" />
      </div>
    </div>
  );
};

export default NotFound;
