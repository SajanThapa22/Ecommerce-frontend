// app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { Product } from "../page";
import CardSkeleton from "@/components/CardSkeleton";
import LoadMore from "@/components/LoadMore";

interface AllProductsProps {
  searchParams: { page?: string };
}

const fetchProducts = async (page: number) => {
  const res = await fetch(
    `http://localhost:3000/api/products?page=${page}&limit=9`
  );
  const data = await res.json();
  return data.results;
};

const AllProducts = async ({ searchParams }: AllProductsProps) => {
  const page = Number(searchParams.page) || 1;
  const products: Product[] = await fetchProducts(page);

  return (
    <div className="px-3 py-3 md:px-10 md:py-10 mx-auto bg-gray-100">
      <h2 className="text-[28px] font-[700] text-center mb-8 uppercase text-black">
        All Products
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => <ProductCard product={product} />)
        ) : (
          <CardSkeleton />
        )}
      </div>
      <LoadMore currentPage={page} />
    </div>
  );
};

export default AllProducts;
