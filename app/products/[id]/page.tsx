// import { Product } from "@/app/page";
import AddToCart from "@/components/AddToCart";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
    next: { revalidate: 30 }, // Optional: Revalidate every 30 seconds
  });
  const product = await res.json();

  if (res.status !== 200) {
    return <div>Error fetching product details</div>;
  }

  return (
    <div className="w-dvh min-h-[92dvh] flex items-center justify-center">
      <div className="grid grid-cols-2 items-center w-[80%] md:w-[60%] lg:w-[800px] max-w-[900px] aspect-[2/1] bg-white rounded-[14px] mx-auto p-4 z-[20] gap-6">
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
          <div className="text-[16px] text-black">{product?.price}</div>

          {/* Pass only productId */}
          <AddToCart productId={product?._id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
