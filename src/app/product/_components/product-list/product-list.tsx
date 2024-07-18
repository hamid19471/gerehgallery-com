import { ProductData } from "@/data/product-data";
import { ProductCard } from "../product-card/product-card";
import { Button } from "@/app/_components/button";
import Link from "next/link";

export const ProductList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto w-full gap-y-14 gap-x-6 overflow-hidden">
        {ProductData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
