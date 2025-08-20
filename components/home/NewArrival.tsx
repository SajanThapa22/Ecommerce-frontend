import SectionHeader from "../ui/SectionHeader";
import { newArrival } from "@/api/types/Product";

import Image from "next/image";
import { cn } from "@/lib/utils";

const NewArrival = () => {
  return (
    <section className="section-margin-x section-mt ">
      <SectionHeader heading="Featured" subHeading="New Arrival" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2 w-full gap-4 aspect-auto xl:aspect-[2/1]">
        {newArrival.map((product, i) => (
          <div
            key={product.id}
            className={cn(
              "relative w-full overflow-hidden bg-black",
              i === 0
                ? "xl:row-span-2 xl:col-span-2"
                : i === 1 && "xl:col-span-2 bg-[#0d0d0d]",
              (i === 2 || i === 3) && "bg-[#1f1f1f]"
            )}
          >
            <div
              className={cn(
                "h-full relative overflow-hidden flex",
                i === 2 || i === 3 ? "p-8" : "pt-5"
              )}
            >
              <Image
                src={product.image}
                alt={product.title}
                className={cn(
                  "w-full h-full object-contain",
                  i === 1 && "w-1/2 h-full ml-auto",
                  (i === 2 || i === 3) && "self-center"
                )}
              />
            </div>
            <div
              className={cn(
                "absolute bottom-6 left-6 text-white max-w-[80%]",
                (i === 0 || i === 1) && "w-1/2"
              )}
            >
              <h2 className="text-lg md:text-xl xl:text-2xl font-semibold">
                {product.title}
              </h2>
              <p className="text-xs  lg:text-sm opacity-90">
                {product.description}
              </p>
              <button className="mt-2 lg:mt-4 text-white text-base xl:text-[16px] underline underline-offset-4 font-medium">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
