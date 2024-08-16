import { Pagination } from "@/app/_components/pagination/pagination";
import { ProductCard } from "../product-card/product-card";
import { wixClientServer } from "@/lib/wix-client-server";
import { products } from "@wix/stores";

type ProductListProps = {
  categoryId: string;
  limit?: number;
  searchParams?: any;
};

const PAGE_SIZE = 20;
export const ProductList: React.FC<ProductListProps> = async ({
  categoryId,
  limit,
  searchParams,
}) => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 9999999)
    .limit(limit || PAGE_SIZE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PAGE_SIZE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType == "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType == "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto w-full gap-y-14 gap-x-6 overflow-hidden">
        {res.items.map((product: products.Product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <div className="flex justify-center w-full items-center">
        <Pagination
          currentPage={res.currentPage || 0}
          hasNext={res.hasNext()}
          hasPrev={res.hasPrev()}
        />
      </div>
    </div>
  );
};
