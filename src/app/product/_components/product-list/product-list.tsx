import { ProductCard } from "../product-card/product-card";
import { wixClientServer } from "@/lib/wix-client-server";
import { products } from "@wix/stores";

type ProductListProps = {
  categoryId: string;
  limit: number;
};
export const ProductList: React.FC<ProductListProps> = async ({
  categoryId,
  limit,
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto w-full gap-y-14 gap-x-6 overflow-hidden">
        {res.items.map((product: products.Product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};
