import Button from "@/components/Button";
import { Product } from "@/app/page";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
    next: { revalidate: 10 }, // Optional: Revalidate every 10 seconds
  });

  if (!res.ok) {
    // Handle errors (e.g., product not found)
    return <div>Error fetching product details</div>;
  }

  const product: Product = await res.json();

  return (
    <>
      <div className="grid grid-cols-2 items-center w-[80%] md:w-[60%] lg:w-[800px] max-w-[900px] aspect-[2/1] bg-white rounded-[14px] mx-auto mt-[100px] p-4 z-[20] gap-6">
        <div>
          <img className="w-full object-cover" src={product?.image} alt="" />
        </div>
        <div id="details" className="flex flex-col gap-3 font-sans">
          <div className="text-[18px] text-black font-[600]">
            {product?.name}
          </div>
          <div className="opacity-80 text-[16px] text-black">
            {product?.description}
          </div>
          <div className="text-[16px]">{product?.price}</div>

          <Button text="Buy now" style="bg-tomato" />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
